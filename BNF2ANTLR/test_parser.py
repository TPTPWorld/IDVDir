
from colorama import Fore as F
import subprocess
import os

# testfile = "testfiles/PUZ001+1.p"

# print("\nChoose which parser you want to test:\n1: geoff's TPTP\n2: our TPTPv9\n")
# inp = input("(1 or 2): ")

# if inp == "1":
#     output = subprocess.check_output(f"java -jar antlr-4.13.2-complete.jar -o OriginalParser g4/TPTP.g4; cd OriginalParser/g4; javac *.java;  java org.antlr.v4.gui.TestRig TPTP tptp_file ../../{testfile}; cd ../../", 
#                                  shell=True,
#                                  text=True,
#                                  stderr=subprocess.STDOUT)
# elif inp == "2":
#     output = subprocess.check_output(f"java -jar antlr-4.13.2-complete.jar -o JavaParser g4/TPTPv9.g4; cd JavaParser/g4; javac *.java;  java org.antlr.v4.gui.TestRig TPTPv9 tptp_file ../../{testfile}; cd ../../", 
#                                     shell=True,
#                                     text=True,
#                                     stderr=subprocess.STDOUT)
    
# print(output)
    
print("\nChoose which parser you want to test:\n1: original TPTP\n2: our TPTPv9\n")
inp = input("(1 or 2): ")
    
for file in os.listdir("testfiles/SYN/"):
    if file.startswith("SYN") and os.path.getsize(f"testfiles/SYN/{file}") < 300000:
        print("testing", file, "of size", os.path.getsize(f"testfiles/SYN/{file}"))
        testfile = f"testfiles/SYN/{file}"
        # print("testing", file)
        
        if inp == "1":
            output = subprocess.check_output(f"cd OriginalParser/g4; java org.antlr.v4.gui.TestRig TPTP tptp_file ../../{testfile}; cd ../../", 
                                            shell=True,
                                            text=True,
                                            stderr=subprocess.STDOUT)
        elif inp == "2":
            output = subprocess.check_output(f"cd JavaParser/g4; java org.antlr.v4.gui.TestRig TPTPv9 tptp_file ../../{testfile}; cd ../../", 
                                            shell=True,
                                            text=True,
                                            stderr=subprocess.STDOUT)

        hasError = False
        for line in output.split("\n"):
            if line.startswith("line"):
                hasError = True
                print(F.RED + "PROBLEM IN " + file + F.RESET)
                break
                        
        if not hasError:
            print(F.GREEN + "SUCCESS IN " + file + F.RESET)
        