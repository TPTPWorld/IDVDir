
import requests

f = open("/Users/daniel/Desktop/simple.s", 'r')
proof = f.read()
f.close()

# args = {
#         "ProblemSource": "FORMULAE",
#         "FORMULAEProblem": proof,
#         "SolutionFormat": "TPTP",
        
#         "QuietFlag": "-q01",
#         "SubmitButton": "ProcessSolution",
        
#         "System___AGInTRater---0.0": "AGInTRater---0.0",
#         "TimeLimit___AGInTRater---0.0": "60",
#         "Transform___AGInTRater---0.0": "none",
#         "Format___AGInTRater---0.0": "tptp:raw",
#         "Command___AGInTRater---0.0": "AGInTRater -c %s"
# }
# response = requests.post("https://tptp.org/cgi-bin/SystemOnTPTPFormReply", args)

# print(response.text)







json_data = {
    'ProblemSource': 'FORMULAE',
    'FORMULAEProblem': proof,
    'SolutionFormat': 'TPTP',
    'QuietFlag': '-q01',
    'SubmitButton': 'ProcessSolution',
    'System___AGInTRater---0.0': 'AGInTRater---0.0',
    'TimeLimit___AGInTRater---0.0': '60',
    'Transform___AGInTRater---0.0': 'none',
    'Format___AGInTRater---0.0': 'tptp:raw',
    'Command___AGInTRater---0.0': 'AGInTRater -c %s',
}

response = requests.post('https://tptp.org/cgi-bin/SystemOnTPTPFormReply', data=json_data)

text = response.text
begin = text.index("<PRE>") + 5
end = text.index("</PRE>")
text = text[begin:end]
    
print(text)    
