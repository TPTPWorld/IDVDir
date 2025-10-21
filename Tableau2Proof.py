
import re
import os
import argparse
import requests
from collections import defaultdict, deque
from antlr4 import *

from PythonParser.TPTPLexer import TPTPLexer
from PythonParser.TPTPParser import TPTPParser
from PythonParser.TPTPVisitor import TPTPVisitor

class MyCNFVisitor(TPTPVisitor):
    def visitCnf_annotated(self, ctx):
        return ctx
    
    
def parse_cnf(text):
    input_stream = InputStream(text)
    lexer = TPTPLexer(input_stream)
    token_stream = CommonTokenStream(lexer)
    parser = TPTPParser(token_stream)
    parser.removeErrorListeners()

    tree = parser.cnf_annotated()
    visitor = MyCNFVisitor()
    result = visitor.visit(tree)

    return result

STARTING_LINE = """%----Derivation
tcf('0:0',conjecture, 
    $true, 
    introduced(language,[level(0)],[]),
    [] ).
"""

def get_all_formulas(filename="input.s"):
    raw_file = open(filename, 'r').readlines()

    all_formulas = []
    inside_formula = False
    pattern = r'^(tpi|thf|tff|tcf|fof|cnf)\('

    for line in raw_file:
        if re.match(pattern, line):
            inside_formula = True
            all_formulas.append(line.strip())
            continue
        
        if inside_formula:
            all_formulas[-1] += line.strip()
            if line.endswith(").\n"):
                inside_formula = False

    return all_formulas

def get_all_cnfs(filename="input.s"):
    all_formulas = get_all_formulas(filename)
    all_cnfs = { 'cnfs' : [], 'others': [] }

    for formula in all_formulas:
        if formula.startswith("cnf(") and "parent" in formula:
            ctx = parse_cnf(formula)
            
            all_cnfs['cnfs'].append(
                {
                    "raw": formula,
                    "name": ctx.name().getText(),
                    "formula_role": ctx.formula_role().getText(),
                    "formula": ctx.cnf_formula().getText(),
                    # "annotations": inference,
                    "inference_rule": ctx.annotations().source().dag_source().inference_record().inference_rule().getText(),
                    # "useful_info": re.match(pattern, inference).group(2),
                    "path": ctx.annotations().source().dag_source().inference_record().useful_info().getText().split("parent(")[1].split(")")[0],
                    "parents": ctx.annotations().source().dag_source().inference_record().parents().getText(),
                    "below": ctx.annotations().source().dag_source().inference_record().useful_info().getText().split("below(")[1].split(")")[0] if "below" in ctx.annotations().source().dag_source().inference_record().useful_info().getText() else None
                }
            )
        else:
            all_cnfs['others'].append(formula + "\n")

    # for cnf in all_cnfs:
    #     print(f"Raw Formula: {cnf['raw'].replace(' ', '')}")
    #     print(f"Name: {cnf['name']}")
    #     print(f"Formula Role: {cnf['formula_role']}")
    #     print(f"Formula: {cnf['formula']}")
    #     # print(f"Annotations: {cnf['annotations']}")
    #     print(f"Inference Rule: {cnf['inference_rule']}")
    #     # print(f"Useful Info: {cnf['useful_info']}")
    #     print(f"Path: {cnf['path']}")
    #     print(f"Parents: {cnf['parents']}")
    #     print()
        
    # print("Total formulas:", len(all_formulas))
    # print("Converted formulas:", len(all_cnfs))

    return all_cnfs

#~ if inference_rule is lemma -> then make it thf + axiom
#~ if formula is $true OR $false -> then make it tcf + conjecture
#~ everything else if fof + plain

#~ if has formula, split it by "|" to get the literals -> then create new formulas and number them accordingly

#~ ORIGINAL: cnf(t1    , plain, ( q(b) | ~ s(sK1) ), inference(start,[status(thm),path([0:0])],[c1]) ).

#~ TEMPLATE: fof('t1:1', plain, q(b)   , inference(extension,[level(1)],['0:0']), []      ).
#~                name , role , formula, annotations                            , parents

def convert_cnfs(filename="input.s", output_filename=None, delete=False):
    all_formulas = get_all_cnfs(filename)
    
    all_cnfs = all_formulas['cnfs']
    
    parent = {}
    for cnf in all_cnfs:
        child = cnf['name']
        par = cnf['path'].split(":")[0]
        parent[child] = par

    children = defaultdict(list)
    for child, par in parent.items():
        children[par].append(child)
        
    all_nodes = set(parent.keys()) | set(parent.values())
    non_roots = set(parent.keys())
    root_nodes = all_nodes - non_roots  
    
    depth = {root: 0 for root in root_nodes}
    q = deque(root_nodes)

    # depth = {"0": 0}
    # q = deque(["0"])
    while q:
        node = q.popleft()
        for ch in children.get(node, []):
            depth[ch] = depth[node] + 1
            q.append(ch)
            
    # print(depth)
            
    # if has delete flag
    if delete:
        output = [STARTING_LINE]
    else:
        output = all_formulas['others'] + [STARTING_LINE]
        
    # convert each cnf
    for cnf in all_cnfs:
        if cnf['inference_rule'] != "lemma_extension" and cnf['inference_rule'] != "lemma" and "false" not in cnf['formula']: # for formulas
            if cnf['formula'].startswith("(") and cnf['formula'].endswith(")"):
                cnf['formula'] = cnf['formula'][1:-1]
                
            literals = cnf['formula'].split("|")
            for i, literal in enumerate(literals):
                if depth[cnf['name']] == 2 and i + 2 <= len(literals): # for second level formulas
                    if len(cnf['parents'].strip("[]").split(",")) == 1 and ":" not in cnf['parents'].strip("[]").split(",")[0]:
                        new_formula = f"""
fof('{cnf['name']}:{i + 1}',plain,
    {literal},
    inference({cnf['inference_rule']},[level({depth[cnf['name']]}),hoverParent("{cnf['parents'].strip("[]").split(",")[0]}"),nextTo('{cnf['name']}:{i + 2}')],['{cnf['path']}']), 
    [] ).
                    """
                        output.append(new_formula)
                        continue
                    else:
                        new_formula = f"""
fof('{cnf['name']}:{i + 1}',plain, 
    {literal},
    inference({cnf['inference_rule']},[level({depth[cnf['name']]}),nextTo('{cnf['name']}:{i + 2}')],['{cnf['path']}']), 
    [] ).
                    """
                        output.append(new_formula)
                        continue
                else:
                    if len(cnf['parents'].strip("[]").split(",")) == 1 and ":" not in cnf['parents'].strip("[]").split(",")[0]:
                        new_formula = f"""
fof('{cnf['name']}:{i + 1}',plain, 
    {literal},
    inference({cnf['inference_rule']},[level({depth[cnf['name']]}),hoverParent("{cnf['parents'].strip("[]").split(",")[0]}")],['{cnf['path']}']), 
    [] ).
                    """
                        output.append(new_formula)
                        continue
                    else:
                        new_formula = f"""
fof('{cnf['name']}:{i + 1}',plain, 
    {literal},
    inference({cnf['inference_rule']},[level({depth[cnf['name']]})],['{cnf['path']}']), 
    [] ).
                    """
                        output.append(new_formula)
                        continue
                
        elif ("(" in cnf['formula'] or ")" in cnf['formula']) and cnf['inference_rule'] == "lemma_extension": # for formulas lemma_extension
            literals = cnf['formula'].split("|")
            for i, literal in enumerate(literals):
                new_formula = f"""
fof('{cnf['name']}:{i + 1}',plain,
    {literal},
    inference({cnf['inference_rule']},[level({depth[cnf['name']]}),hoverNode('{cnf['parents'].strip("[]")}')],['{cnf['path']}']), 
    [] ).
                """
                output.append(new_formula)
                continue
        
        elif "true" in cnf['formula'] or "false" in cnf['formula']: # for $true and $false
            # connection
            if cnf['inference_rule'] == "connection":
                new_formula = f"""
tcf({cnf['name']},conjecture,
    {cnf['formula']},
    inference({cnf['inference_rule']},[level({depth[cnf['name']]})],['{cnf['path']}']),
    [] ).
                """
                output.append(new_formula)
                continue
            
            # lemma_extension
            elif cnf['inference_rule'] == "lemma_extension":
                new_formula = f"""
tcf({cnf['name']},conjecture,
    {cnf['formula']},
    inference({cnf['inference_rule']},[level({depth[cnf['name']]}),hoverNode('{cnf['parents'].strip("[]").split(",")[0]}')],['{cnf['path']}']),
    [] ).
                """
                output.append(new_formula)
                continue
            
            # reduction
            else:
                new_parents = cnf['parents'].strip("[]").split(",")
                new_parents.remove(cnf['path'])

                new_formula = f"""
tcf({cnf['name']},conjecture, 
    {cnf['formula']}, 
    inference({cnf['inference_rule']},[level({depth[cnf['name']]}),hoverNode('{new_parents[0]}')],['{cnf['path']}']), 
    [] ).
                """
                output.append(new_formula)
                continue

        elif cnf['inference_rule'] == "lemma": # for lemmas
            below_level = depth[cnf['below'].split(':')[0]] if cnf['below'].split(':')[0] in depth else 0
            # print(f"Below level for {cnf['name']} ({cnf['below'].split(':')[0]}): {below_level}")
            # print(depth)
            new_formula = f"""
thf('{cnf['name']}:{1}',axiom, 
    {cnf['formula']}, 
    inference({cnf['inference_rule']},[level({below_level}),nextTo('{cnf['path']}'),below({cnf['below']})],['{cnf['path']}']), 
    [] ).
            """
            output.append(new_formula)
            continue
    
    # writing file only if new name not specified
    if output_filename is not None:
        with open(output_filename, "w") as f:
            f.writelines(output)
            # print("\nFile written successfully.\n")
            # print(f"Input file: {filename}")
            # print(f"Output file: {output_filename}")

    for line in output:
        print(line.strip() + "\n")

    return output
    

def has_errors(input_file):
    if not os.path.isfile(input_file):
        print(f"Error: The file '{input_file}' does not exist.")
        return (True, f"Error: The file '{input_file}' does not exist.")
        
    f = open(input_file, 'r')
    inp = f.read()
    f.close()

    files = {
        'TPTPProblem': (None, ''),
        'ProblemSource': (None, 'FORMULAE'),
        'FORMULAEProblem': (None, inp),
        'UPLOADProblem': ('new_input.s', '', 'application/octet-stream'),
        'FormulaURL': (None, ''),
        'InputFormat': (None, 'TPTP'),
        'QuietFlag': (None, '-q01'),
        'SubmitButton': (None, 'ProcessProblem'),
        'TimeLimit___AddTypes---1.2.4': (None, '60'),
        'Transform___AddTypes---1.2.4': (None, 'none'),
        'Format___AddTypes---1.2.4': (None, 'tptp:raw'),
        'Command___AddTypes---1.2.4': (None, 'run_addtypes %s'),
        'TimeLimit___ASk---0.2.3': (None, '60'),
        'Transform___ASk---0.2.3': (None, 'none'),
        'Format___ASk---0.2.3': (None, 'tptp:raw'),
        'Command___ASk---0.2.3': (None, 'run_ASk %s'),
        'TimeLimit___BNFParser---0.0': (None, '60'),
        'Transform___BNFParser---0.0': (None, 'none'),
        'Format___BNFParser---0.0': (None, 'tptp:raw'),
        'Command___BNFParser---0.0': (None, 'BNFParser %s'),
        'TimeLimit___BNFParserTree---0.0': (None, '60'),
        'Transform___BNFParserTree---0.0': (None, 'none'),
        'Format___BNFParserTree---0.0': (None, 'tptp:raw'),
        'Command___BNFParserTree---0.0': (None, 'BNFParserTree %s'),
        'TimeLimit___CheckTyping---0.0': (None, '60'),
        'Transform___CheckTyping---0.0': (None, 'none'),
        'Format___CheckTyping---0.0': (None, 'tptp:raw'),
        'Command___CheckTyping---0.0': (None, 'CheckTyping -all %s'),
        'TimeLimit___ECNF---3.2.5': (None, '60'),
        'Transform___ECNF---3.2.5': (None, 'none'),
        'Format___ECNF---3.2.5': (None, 'tptp:raw'),
        'Command___ECNF---3.2.5': (None, 'run_ECNF %d %s'),
        'TimeLimit___EGround---3.2.5': (None, '60'),
        'Transform___EGround---3.2.5': (None, 'add_equality'),
        'Format___EGround---3.2.5': (None, 'tptp:raw'),
        'Command___EGround---3.2.5': (None, 'eground --tstp-in --tstp-out --silent --resources-info --split-tries=100 --memory-limit=200 --soft-cpu-limit=%d --add-one-instance --constraints %s'),
        'TimeLimit___ESelect---3.2.5': (None, '60'),
        'Transform___ESelect---3.2.5': (None, 'none'),
        'Format___ESelect---3.2.5': (None, 'tptp:raw'),
        'Command___ESelect---3.2.5': (None, 'eprover --sine=Auto --prune %s'),
        'TimeLimit___GetSymbols---0.0': (None, '60'),
        'Transform___GetSymbols---0.0': (None, 'none'),
        'Format___GetSymbols---0.0': (None, 'tptp:raw'),
        'Command___GetSymbols---0.0': (None, 'GetSymbols -all %s'),
        'TimeLimit___Horn2UEQ---0.4.1': (None, '60'),
        'Transform___Horn2UEQ---0.4.1': (None, 'none'),
        'Format___Horn2UEQ---0.4.1': (None, 'tptp:raw'),
        'Command___Horn2UEQ---0.4.1': (None, 'jukebox_horn2ueq %s'),
        'TimeLimit___Isabelle---2FOF': (None, '60'),
        'Transform___Isabelle---2FOF': (None, 'none'),
        'Format___Isabelle---2FOF': (None, 'tptp'),
        'Command___Isabelle---2FOF': (None, 'run_isabelle_2X FOF %s'),
        'TimeLimit___Isabelle---2TF0': (None, '60'),
        'Transform___Isabelle---2TF0': (None, 'none'),
        'Format___Isabelle---2TF0': (None, 'tptp'),
        'Command___Isabelle---2TF0': (None, 'run_isabelle_2X TF0 %s'),
        'TimeLimit___Isabelle---2TH0': (None, '60'),
        'Transform___Isabelle---2TH0': (None, 'none'),
        'Format___Isabelle---2TH0': (None, 'tptp'),
        'Command___Isabelle---2TH0': (None, 'run_isabelle_2X TH0 %s'),
        'TimeLimit___Leo-III-STC---1.7.18': (None, '60'),
        'Transform___Leo-III-STC---1.7.18': (None, 'none'),
        'Format___Leo-III-STC---1.7.18': (None, 'tptp:raw'),
        'Command___Leo-III-STC---1.7.18': (None, 'run_Leo-III %s %d STC'),
        'TimeLimit___Monotonox---0.4.1': (None, '60'),
        'Transform___Monotonox---0.4.1': (None, 'none'),
        'Format___Monotonox---0.4.1': (None, 'tptp:raw'),
        'Command___Monotonox---0.4.1': (None, 'jukebox monotonox %s'),
        'TimeLimit___Monotonox-2CNF---0.4.1': (None, '60'),
        'Transform___Monotonox-2CNF---0.4.1': (None, 'none'),
        'Format___Monotonox-2CNF---0.4.1': (None, 'tptp:raw'),
        'Command___Monotonox-2CNF---0.4.1': (None, 'jukebox_cnf %s'),
        'TimeLimit___Monotonox-2FOF---0.4.1': (None, '60'),
        'Transform___Monotonox-2FOF---0.4.1': (None, 'none'),
        'Format___Monotonox-2FOF---0.4.1': (None, 'tptp:raw'),
        'Command___Monotonox-2FOF---0.4.1': (None, 'jukebox_fof %s'),
        'TimeLimit___NTFLET---1.8.5': (None, '60'),
        'Transform___NTFLET---1.8.5': (None, 'none'),
        'Format___NTFLET---1.8.5': (None, 'tptp:raw'),
        'Command___NTFLET---1.8.5': (None, 'run_embed %s'),
        'TimeLimit___ProblemStats---1.0': (None, '60'),
        'Transform___ProblemStats---1.0': (None, 'none'),
        'Format___ProblemStats---1.0': (None, 'tptp:raw'),
        'Command___ProblemStats---1.0': (None, 'run_MakeListStats %s'),
        'TimeLimit___Prophet---0.0': (None, '60'),
        'Transform___Prophet---0.0': (None, 'none'),
        'Format___Prophet---0.0': (None, 'tptp'),
        'Command___Prophet---0.0': (None, 'prophet %s'),
        'TimeLimit___Saffron---4.5': (None, '60'),
        'Transform___Saffron---4.5': (None, 'none'),
        'Format___Saffron---4.5': (None, 'tptp:raw'),
        'Command___Saffron---4.5': (None, 'run_saffron %s %d'),
        'TimeLimit___SPCForProblem---1.0': (None, '60'),
        'Transform___SPCForProblem---1.0': (None, 'none'),
        'Format___SPCForProblem---1.0': (None, 'tptp:raw'),
        'Command___SPCForProblem---1.0': (None, 'run_SPCForProblem %s'),
        'TimeLimit___TPII---0.0': (None, '60'),
        'Transform___TPII---0.0': (None, 'none'),
        'Format___TPII---0.0': (None, 'tptp:raw'),
        'Command___TPII---0.0': (None, 'TPII %s'),
        'TimeLimit___TPTP2JSON---0.1': (None, '60'),
        'Transform___TPTP2JSON---0.1': (None, 'none'),
        'Format___TPTP2JSON---0.1': (None, 'tptp:raw'),
        'Command___TPTP2JSON---0.1': (None, 'run_tptp2json %s'),
        'TimeLimit___TPTP2X---0.0': (None, '60'),
        'Transform___TPTP2X---0.0': (None, 'none'),
        'Format___TPTP2X---0.0': (None, 'tptp:raw'),
        'Command___TPTP2X---0.0': (None, 'tptp2X -q2 -d- %s'),
        'TimeLimit___TPTP4X---0.0': (None, '60'),
        'Transform___TPTP4X---0.0': (None, 'none'),
        'Format___TPTP4X---0.0': (None, 'tptp:raw'),
        'Command___TPTP4X---0.0': (None, 'tptp4X %s'),
        'TimeLimit___VCNF---4.8': (None, '60'),
        'Transform___VCNF---4.8': (None, 'none'),
        'Format___VCNF---4.8': (None, 'tptp:raw'),
        'Command___VCNF---4.8': (None, 'run_vclausify_rel %s %d'),
        'TimeLimit___VSelect---4.4': (None, '60'),
        'Transform___VSelect---4.4': (None, 'none'),
        'Format___VSelect---4.4': (None, 'tptp:raw'),
        'Command___VSelect---4.4': (None, 'run_sine_select %s'),
        'TimeLimit___Why3-FOF---0.85': (None, '60'),
        'Transform___Why3-FOF---0.85': (None, 'none'),
        'Format___Why3-FOF---0.85': (None, 'tptp:raw'),
        'Command___Why3-FOF---0.85': (None, 'bin/why3 prove -F tptp -C /home/tptp/Systems/Why3---0.85/why3.conf -D /home/tptp/Systems/Why3---0.85/Source/drivers/tptp.gen %s'),
        'TimeLimit___Why3-TF0---0.85': (None, '60'),
        'Transform___Why3-TF0---0.85': (None, 'none'),
        'Format___Why3-TF0---0.85': (None, 'tptp:raw'),
        'Command___Why3-TF0---0.85': (None, 'bin/why3 prove -F tptp -C /home/tptp/Systems/Why3---0.85/why3.conf -D /home/tptp/Systems/Why3---0.85/Source/drivers/tptp-tff0.drv %s'),
    }

    response = requests.post('https://tptp.org/cgi-bin/SystemOnTPTPFormReply', files=files)
    match = re.search(r'<body[^>]*>(.*?)</body>', response.text, re.DOTALL | re.IGNORECASE)

    if match:
        body_text = match.group(1)
        if "% No errors" in response.text:
            return (False, body_text)
        else:
            return (True, body_text)
    else:
        print("Error")
        exit()

parser = argparse.ArgumentParser(description="Process one input file and one output file.")
parser.add_argument("input_file", help="Path to the input file")
parser.add_argument("output_file", nargs='?', help="Path to the output file (optional)")
parser.add_argument("-d", "--delete", action="store_true",
                    help="Ignore all annotated formulae before the first 'start' inference")

args = parser.parse_args()

has_error, error_text = has_errors(args.input_file)
# has_error = False
# error_text = ""

if not has_error:
    print(f"% SZS status Success\n% SZS output start ListOfFormulae for {args.input_file}")
    if args.output_file:
        if args.delete:
            convert_cnfs(args.input_file, args.output_file, delete=True)
        else:
            convert_cnfs(args.input_file, args.output_file, delete=False)
    else:
        if args.delete:
            convert_cnfs(args.input_file, delete=True)
        else:
            convert_cnfs(args.input_file, delete=False)
    print(f"% SZS output end ListOfFormulae for {args.input_file}")
else:
    print(f"% SZS status Error")
    print(f"% {error_text}")

