## Step 1.

bnf2antlr.py will output a new ANTLR (.g4) file in the g4 directory.

make sure your current working directory is 'BNF2ANTLR'
```bash
python3 bnf2antlr.py 
```
if this fails run this:
  ```bash
  python bnf2antlr.py
  ```

## Step 2.
This will output a JavaScript parser for your new antlr grammar.

go into your directory for your antlr grammar

```bash
cd g4; antlr4 -Dlanguage=JavaScript TPTPv9.g4 -o ../../IDVApp/; cd ../
```
if this fails, try pip installing antlr4-tools
  ```bash
  pip install antlr4-tools
  ```
- Output JS antlr parsers will be in IDVApp/ for the electron app to use


