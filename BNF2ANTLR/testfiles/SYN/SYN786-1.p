%--------------------------------------------------------------------------
% File     : SYN786-1 : TPTP v9.0.0. Released v2.5.0.
% Domain   : Syntactic (Translated)
% Problem  : PSAT inverse - K=4 C=40 V=4 D=2.2
% Version  : Especial.
% English  :

% Refs     : [Sch99] Schmidt (1999), Decidability by Resolution for Proposit
%          : [HS00a] Hustadt & Schmidt (2000), MSPASS: Modal Reasoning by Tr
%          : [HS00b] Hustadt & Schmidt (2000), Issues of Decidability for De
%          : [Sch01] Schmidt (2001), Email to G. Sutcliffe
% Source   : [Sch01]
% Names    : p-psat-inv-cnf-K4-C40-V4-D2.2 [Sch01]

% Status   : Satisfiable
% Rating   : 0.00 v5.4.0, 0.44 v5.3.0, 0.43 v5.0.0, 0.25 v4.1.0, 0.14 v4.0.0, 0.25 v3.5.0, 0.29 v3.4.0, 0.33 v3.2.0, 0.60 v3.1.0, 0.57 v2.7.0, 0.60 v2.6.0, 0.25 v2.5.0
% Syntax   : Number of clauses     :   42 (   2 unt;  32 nHn;  40 RR)
%            Number of literals    :  322 (   0 equ; 229 neg)
%            Maximal clause size   :   10 (   7 avg)
%            Maximal term depth    :    2 (   1 avg)
%            Number of predicates  :    5 (   5 usr;   0 prp; 1-2 aty)
%            Number of functors    :    2 (   2 usr;   0 con; 1-1 aty)
%            Number of variables   :  202 (   0 sgn)
% SPC      : CNF_SAT_RFO_NEQ

% Comments : The relational translation for the PSAT inverse problem.
%--------------------------------------------------------------------------
cnf(clause1,negated_conjecture,
    ssRr(skf3(U),U) ).

cnf(clause2,negated_conjecture,
    ssRr(U,skf2(U)) ).

cnf(clause3,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssPv1(W)
    | ssPv1(V)
    | ssPv2(W)
    | ssPv3(W) ) ).

cnf(clause4,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssPv4(W)
    | ssPv3(V)
    | ssPv1(W)
    | ssPv3(W) ) ).

cnf(clause5,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssPv1(W)
    | ~ ssPv4(W)
    | ssPv1(V)
    | ssPv3(W) ) ).

cnf(clause6,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(V)
    | ~ ssRr(W,U)
    | ~ ssPv4(W)
    | ssPv1(W)
    | ssPv2(W) ) ).

cnf(clause7,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,X)
    | ~ ssRr(V,W)
    | ssPv2(U)
    | ssPv2(X)
    | ssPv1(V)
    | ssPv4(V) ) ).

cnf(clause8,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(W,X)
    | ~ ssRr(V,W)
    | ssPv3(X)
    | ssPv3(V)
    | ssPv4(V) ) ).

cnf(clause9,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssPv1(W)
    | ssPv4(V)
    | ssPv1(X)
    | ssPv2(W) ) ).

cnf(clause10,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,X)
    | ~ ssRr(V,W)
    | ~ ssPv3(V)
    | ssPv1(U)
    | ssPv4(X)
    | ssPv1(V) ) ).

cnf(clause11,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssPv2(W)
    | ssPv4(V)
    | ssPv1(X)
    | ssPv3(W) ) ).

cnf(clause12,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,X)
    | ~ ssRr(V,W)
    | ~ ssPv2(V)
    | ~ ssPv3(V)
    | ssPv4(U)
    | ssPv2(X) ) ).

cnf(clause13,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(W,X)
    | ~ ssPv4(W)
    | ssPv1(X)
    | ssPv1(W) ) ).

cnf(clause14,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(W,X)
    | ~ ssRr(V,W)
    | ~ ssPv2(V)
    | ~ ssPv3(V)
    | ssPv3(X) ) ).

cnf(clause15,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssRr(W,Y)
    | ~ ssPv1(W)
    | ssPv2(U)
    | ssPv3(X)
    | ssPv1(Y) ) ).

cnf(clause16,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(W,V)
    | ~ ssRr(X,Y)
    | ~ ssRr(V,X)
    | ssPv3(W)
    | ssPv2(Y)
    | ssPv1(V) ) ).

cnf(clause17,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv3(W)
    | ssPv4(V)
    | ssPv1(Y)
    | ssPv1(W) ) ).

cnf(clause18,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv3(X)
    | ~ ssRr(W,Y)
    | ssPv4(U)
    | ssPv4(Y)
    | ssPv1(W) ) ).

cnf(clause19,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ssPv4(X)
    | ssPv1(W)
    | ssPv2(W) ) ).

cnf(clause20,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,V)
    | ~ ssRr(X,Y)
    | ~ ssPv3(Y)
    | ~ ssRr(V,X)
    | ~ ssPv4(V)
    | ssPv2(U)
    | ssPv1(W) ) ).

cnf(clause21,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv4(X)
    | ~ ssRr(Y,W)
    | ~ ssPv3(Y)
    | ssPv4(U)
    | ssPv1(W) ) ).

cnf(clause22,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssPv1(W)
    | ssPv2(X)
    | ssPv4(W) ) ).

cnf(clause23,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(W,X)
    | ~ ssPv2(X)
    | ~ ssRr(W,Y)
    | ~ ssPv1(Y)
    | ssPv1(U)
    | ssPv1(W) ) ).

cnf(clause24,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv1(W)
    | ssPv2(Y)
    | ssPv2(W) ) ).

cnf(clause25,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv3(Y)
    | ~ ssRr(W,X)
    | ~ ssPv4(W)
    | ssPv1(W) ) ).

cnf(clause26,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv4(X)
    | ~ ssRr(W,Y)
    | ~ ssPv3(Y)
    | ~ ssPv1(W)
    | ssPv3(U) ) ).

cnf(clause27,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv1(X)
    | ~ ssRr(Y,W)
    | ~ ssPv4(W)
    | ssPv2(W) ) ).

cnf(clause28,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv1(Y)
    | ~ ssRr(W,X)
    | ~ ssPv3(W)
    | ssPv2(W) ) ).

cnf(clause29,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv3(Y)
    | ~ ssRr(W,X)
    | ~ ssPv1(W)
    | ssPv2(W) ) ).

cnf(clause30,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv1(W)
    | ~ ssPv4(W)
    | ssPv4(Y) ) ).

cnf(clause31,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ssPv1(X)
    | ssPv2(Z)
    | ssPv1(W) ) ).

cnf(clause32,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ssPv2(Y)
    | ssPv2(Z)
    | ssPv1(W) ) ).

cnf(clause33,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ~ ssPv2(W)
    | ssPv2(V)
    | ssPv1(Y)
    | ssPv4(Z) ) ).

cnf(clause34,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ssPv2(Y)
    | ssPv3(Z)
    | ssPv1(W) ) ).

cnf(clause35,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,W)
    | ~ ssPv3(W)
    | ssPv3(X)
    | ssPv1(Z) ) ).

cnf(clause36,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(W,X)
    | ~ ssPv3(X)
    | ~ ssRr(V,W)
    | ~ ssRr(Y,Z)
    | ~ ssRr(V,Y)
    | ssPv4(Z)
    | ssPv4(V) ) ).

cnf(clause37,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ~ ssPv2(Z)
    | ssPv4(X)
    | ssPv4(W) ) ).

cnf(clause38,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ~ ssPv4(Z)
    | ~ ssPv3(W)
    | ssPv2(Y) ) ).

cnf(clause39,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ssPv4(Y)
    | ssPv1(X1)
    | ssPv1(W) ) ).

cnf(clause40,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ~ ssPv1(W)
    | ssPv2(U)
    | ssPv1(X)
    | ssPv1(X1) ) ).

cnf(clause41,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv3(Y)
    | ~ ssRr(W,X)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ~ ssPv4(W)
    | ssPv4(U)
    | ssPv4(X1) ) ).

cnf(clause42,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ~ ssPv1(W)
    | ssPv4(Y)
    | ssPv2(X1) ) ).

%--------------------------------------------------------------------------