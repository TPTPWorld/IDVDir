%--------------------------------------------------------------------------
% File     : SYN798-1 : TPTP v9.0.0. Released v2.5.0.
% Domain   : Syntactic (Translated)
% Problem  : PSAT inverse - K=4 C=50 V=4 D=2.1
% Version  : Especial.
% English  :

% Refs     : [Sch99] Schmidt (1999), Decidability by Resolution for Proposit
%          : [HS00a] Hustadt & Schmidt (2000), MSPASS: Modal Reasoning by Tr
%          : [HS00b] Hustadt & Schmidt (2000), Issues of Decidability for De
%          : [Sch01] Schmidt (2001), Email to G. Sutcliffe
% Source   : [Sch01]
% Names    : p-psat-inv-cnf-K4-C50-V4-D2.1 [Sch01]

% Status   : Satisfiable
% Rating   : 0.00 v5.4.0, 0.11 v5.3.0, 0.14 v5.0.0, 0.12 v4.1.0, 0.00 v4.0.1, 0.14 v4.0.0, 0.12 v3.5.0, 0.29 v3.4.0, 0.17 v3.2.0, 0.20 v3.1.0, 0.29 v2.7.0, 0.20 v2.6.0, 0.50 v2.5.0
% Syntax   : Number of clauses     :   52 (   2 unt;  37 nHn;  50 RR)
%            Number of literals    :  414 (   0 equ; 315 neg)
%            Maximal clause size   :   10 (   7 avg)
%            Maximal term depth    :    2 (   1 avg)
%            Number of predicates  :    5 (   5 usr;   0 prp; 1-2 aty)
%            Number of functors    :    2 (   2 usr;   0 con; 1-1 aty)
%            Number of variables   :  264 (   0 sgn)
% SPC      : CNF_SAT_RFO_NEQ

% Comments : The relational translation for the PSAT inverse problem.
%--------------------------------------------------------------------------
cnf(clause1,negated_conjecture,
    ssRr(skf3(U),U) ).

cnf(clause2,negated_conjecture,
    ssRr(U,skf2(U)) ).

cnf(clause3,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv1(W)
    | ~ ssPv3(W)
    | ~ ssPv4(W)
    | ssPv3(U) ) ).

cnf(clause4,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssPv3(W)
    | ~ ssPv4(W)
    | ssPv2(W) ) ).

cnf(clause5,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssPv4(W)
    | ssPv1(V)
    | ssPv1(X)
    | ssPv3(W) ) ).

cnf(clause6,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(W,X)
    | ~ ssRr(V,W)
    | ssPv4(X)
    | ssPv3(V)
    | ssPv4(V) ) ).

cnf(clause7,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(W,X)
    | ~ ssRr(V,W)
    | ssPv3(X)
    | ssPv1(V)
    | ssPv4(V) ) ).

cnf(clause8,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssPv3(X)
    | ~ ssPv4(W)
    | ssPv3(V)
    | ssPv3(W) ) ).

cnf(clause9,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv3(W)
    | ~ ssPv4(W)
    | ssPv2(U)
    | ssPv3(X) ) ).

cnf(clause10,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv2(X)
    | ~ ssPv1(W)
    | ssPv2(U)
    | ssPv3(W) ) ).

cnf(clause11,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssPv3(W)
    | ssPv1(X)
    | ssPv4(W) ) ).

cnf(clause12,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,X)
    | ~ ssPv1(X)
    | ~ ssRr(V,W)
    | ~ ssPv4(V)
    | ssPv1(U)
    | ssPv1(V) ) ).

cnf(clause13,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv1(X)
    | ~ ssPv2(W)
    | ssPv4(U)
    | ssPv4(W) ) ).

cnf(clause14,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv4(X)
    | ~ ssPv1(W)
    | ssPv2(W) ) ).

cnf(clause15,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssRr(W,X)
    | ~ ssPv1(X)
    | ~ ssPv2(W)
    | ssPv4(W) ) ).

cnf(clause16,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv4(X)
    | ~ ssPv1(W)
    | ssPv4(W) ) ).

cnf(clause17,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv3(X)
    | ~ ssPv2(W)
    | ~ ssPv4(W) ) ).

cnf(clause18,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,X)
    | ~ ssPv3(X)
    | ~ ssRr(V,W)
    | ~ ssRr(V,Y)
    | ssPv3(U)
    | ssPv3(Y)
    | ssPv3(V) ) ).

cnf(clause19,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Y)
    | ssPv4(X)
    | ssPv1(Y)
    | ssPv3(W) ) ).

cnf(clause20,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(W,V)
    | ~ ssRr(X,Y)
    | ~ ssRr(V,X)
    | ssPv3(W)
    | ssPv2(Y)
    | ssPv3(V) ) ).

cnf(clause21,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv1(W)
    | ~ ssPv3(W)
    | ssPv3(V)
    | ssPv1(Y) ) ).

cnf(clause22,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv1(W)
    | ssPv4(Y)
    | ssPv2(W) ) ).

cnf(clause23,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv4(Y)
    | ~ ssRr(W,X)
    | ssPv2(W)
    | ssPv4(W) ) ).

cnf(clause24,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssPv1(Y)
    | ~ ssRr(W,X)
    | ssPv2(W)
    | ssPv3(W) ) ).

cnf(clause25,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv2(W)
    | ~ ssPv4(W)
    | ssPv1(U)
    | ssPv4(Y) ) ).

cnf(clause26,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv4(W)
    | ssPv2(Y)
    | ssPv1(W) ) ).

cnf(clause27,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssPv2(W)
    | ssPv2(X)
    | ssPv1(W) ) ).

cnf(clause28,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(W,V)
    | ~ ssRr(X,Y)
    | ~ ssPv4(Y)
    | ~ ssRr(V,X)
    | ssPv1(W)
    | ssPv2(V) ) ).

cnf(clause29,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv2(Y)
    | ~ ssRr(W,X)
    | ~ ssPv1(W)
    | ssPv3(W) ) ).

cnf(clause30,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(W,X)
    | ~ ssPv2(X)
    | ~ ssRr(V,W)
    | ~ ssRr(V,Y)
    | ~ ssPv3(Y)
    | ssPv1(V) ) ).

cnf(clause31,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ~ ssPv2(Z)
    | ssPv4(U)
    | ssPv1(X)
    | ssPv2(W) ) ).

cnf(clause32,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,W)
    | ssPv1(X)
    | ssPv4(Z)
    | ssPv2(W) ) ).

cnf(clause33,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssRr(Y,Z)
    | ~ ssRr(W,Y)
    | ~ ssPv1(W)
    | ssPv1(X)
    | ssPv1(Z) ) ).

cnf(clause34,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,W)
    | ~ ssPv4(Z)
    | ~ ssPv4(W)
    | ssPv3(U)
    | ssPv2(X) ) ).

cnf(clause35,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ~ ssPv4(Z)
    | ssPv1(X)
    | ssPv1(W) ) ).

cnf(clause36,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ~ ssPv3(Z)
    | ssPv4(X)
    | ssPv1(W) ) ).

cnf(clause37,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ~ ssPv3(Z)
    | ssPv4(Y)
    | ssPv4(W) ) ).

cnf(clause38,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ~ ssPv4(Z)
    | ssPv2(Y)
    | ssPv2(W) ) ).

cnf(clause39,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,W)
    | ~ ssPv4(Z)
    | ssPv2(X)
    | ssPv3(W) ) ).

cnf(clause40,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv3(X)
    | ~ ssRr(Y,Z)
    | ~ ssRr(W,Y)
    | ~ ssPv2(W)
    | ssPv1(U)
    | ssPv3(Z) ) ).

cnf(clause41,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv1(X)
    | ~ ssRr(Y,Z)
    | ~ ssRr(W,Y)
    | ssPv1(Z)
    | ssPv3(W) ) ).

cnf(clause42,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ~ ssPv2(Z)
    | ~ ssPv2(W)
    | ssPv1(X) ) ).

cnf(clause43,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv2(Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ~ ssPv2(W)
    | ssPv1(Z) ) ).

cnf(clause44,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ~ ssPv2(Z)
    | ~ ssPv3(W)
    | ssPv4(X) ) ).

cnf(clause45,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv1(X)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,W)
    | ~ ssPv4(Z)
    | ~ ssPv4(W) ) ).

cnf(clause46,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,X1)
    | ~ ssRr(X1,W)
    | ssPv3(X)
    | ssPv2(Z)
    | ssPv1(W) ) ).

cnf(clause47,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ssPv2(X)
    | ssPv3(X1)
    | ssPv3(W) ) ).

cnf(clause48,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ssPv1(X)
    | ssPv2(X1)
    | ssPv4(W) ) ).

cnf(clause49,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ssPv3(Y)
    | ssPv2(X1)
    | ssPv4(W) ) ).

cnf(clause50,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ~ ssPv3(W)
    | ssPv3(Y)
    | ssPv2(X1) ) ).

cnf(clause51,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,X1)
    | ~ ssPv3(X1)
    | ~ ssRr(W,Z)
    | ssPv1(X)
    | ssPv2(W) ) ).

cnf(clause52,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv3(Y)
    | ~ ssRr(W,X)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ~ ssPv4(W)
    | ssPv2(X1) ) ).

%--------------------------------------------------------------------------