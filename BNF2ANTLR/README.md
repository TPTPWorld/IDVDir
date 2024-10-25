## Step 1.
run bnf2antlr.py, 
this will have a preset file name on line 9, so change this to "bNF/NAMEOFYOURNEWBNFFILE" if you want to change your bnf input file.

bnf2antlr.py will output a new ANTLR (.g4) file in the g4 directory.


## Step 2.

make a new directory for your JavaScript parser.

```
mkdir JSParser
antlr4 -Dlanguage=JavaScript g4/TPTPv9.g4 -o JSParser/
npm i antlr4
```

all JavaScript files will now be in JSParser directory


