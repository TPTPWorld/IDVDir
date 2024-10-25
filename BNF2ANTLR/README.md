# Run this

```
java -jar antlr-4.13.2-complete.jar -o JavaParser g4/TPTPv9.g4; cd JavaParser/g4; javac *.java;  java org.antlr.v4.gui.TestRig TPTPv9 tptp_file -tree ../../testfiles/TEST.p; cd ../../
```

## link for antlr grammar debugging in vscode

https://matveevlife.wordpress.com/2024/06/09/antlr4-with-typescript/

# NOTES

## General Notes

- **SYN000_6.p** and **SYN000^6.p** work with new TPTPv9 but not original TPTP, which is good

### The problems that are throwing errors are in the following files:

    - SYN000-3.p (FIXED)

    - mismatched input '|' expecting {')', '|'}
        - ( f(Y) = g(X,f(Y),Z) )  |  ( f(f(f(b))) != a )  |  ( X = f(Y) )
        - tried moving paranthesis and it worked but im not sure if thats the problem
        -  f(Y) = g(X,f(Y),Z)   |   f(f(f(b))) != a  |   X = f(Y)
        -

    - SYN000+1.p (FIXED)

    -  no viable alternative at input
        - p('A\\'quoted \\ escape\'')
            - backslash chars throwing errors
            -     | p('A \\'quoted \\ escape\'') ) ).
            -     | p('A \'quoted \\ escape\'') ) ).
            - i think there is an extra backslash behind the \' because the grammar is taking in \\\' which is \' and not \\'

    - SYN000_4.p (FIXED)

    - line 60 : '~' tilda character breaking it
        -  q2(( (~ p2(me)) != q2($true) )) ).

    - SYN000^1.p (FIXED)
    - SYN000-1.p (FIXED)
    - SYN000_1.p (FIXED)

## Issues

### (FIXED) Missing parentheses for a couple SYN problems

- SYN000_2.p
  - line 36
- SYN000^2.p
  - line 41
- SYN000_5.p
  - line 127
  - line 130
  - line 133
- SYN000^6.p
- SYN000_6.p

ORIGINAL TPTP:

```
tff_infix_unary         : tff_unitary_term Infix_inequality tff_unitary_term;
```

GENERATED TPTP:

```
tff_infix_unary : '(' tff_unitary_term infix_inequality tff_unitary_term ')';
```

SYN000_2.p:

```
tff(
    distinct_object,
    axiom,
    "An Apple" != "A \"Microsoft \\ escape\"" 
).
```

**Having issues parsing tff_logic_formula**
