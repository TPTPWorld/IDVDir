%--------------------------------------------------------------------------
% File     : SYN770-1 : TPTP v9.0.0. Released v2.5.0.
% Domain   : Syntactic (Translated)
% Problem  : PSAT inverse problem - K=4 C=20 V=4 D=2.5
% Version  : Especial.
% English  :

% Refs     : [Sch99] Schmidt (1999), Decidability by Resolution for Proposit
%          : [HS00a] Hustadt & Schmidt (2000), MSPASS: Modal Reasoning by Tr
%          : [HS00b] Hustadt & Schmidt (2000), Issues of Decidability for De
%          : [Sch01] Schmidt (2001), Email to G. Sutcliffe
% Source   : [Sch01]
% Names    : p-psat-inv-cnf-K4-C20-V4-D2.5 [Sch01]

% Status   : Satisfiable
% Rating   : 0.00 v5.5.0, 0.25 v5.4.0, 0.44 v5.3.0, 0.57 v5.0.0, 0.50 v4.1.0, 0.29 v4.0.0, 0.38 v3.5.0, 0.43 v3.4.0, 0.50 v3.3.0, 0.67 v3.2.0, 0.80 v3.1.0, 0.71 v2.7.0, 0.80 v2.6.0, 0.75 v2.5.0
% Syntax   : Number of clauses     :   22 (   2 unt;  14 nHn;  20 RR)
%            Number of literals    :  169 (   0 equ; 126 neg)
%            Maximal clause size   :   10 (   7 avg)
%            Maximal term depth    :    2 (   1 avg)
%            Number of predicates  :    5 (   5 usr;   0 prp; 1-2 aty)
%            Number of functors    :    2 (   2 usr;   0 con; 1-1 aty)
%            Number of variables   :  109 (   0 sgn)
% SPC      : CNF_SAT_RFO_NEQ

% Comments : The relational translation for the PSAT inverse problem.
%--------------------------------------------------------------------------
cnf(clause1,negated_conjecture,
    ssRr(skf3(U),U) ).

cnf(clause2,negated_conjecture,
    ssRr(U,skf2(U)) ).

cnf(clause3,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(W,X)
    | ssPv1(X)
    | ssPv1(W)
    | ssPv2(W) ) ).

cnf(clause4,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv4(X)
    | ~ ssPv2(W)
    | ssPv3(W) ) ).

cnf(clause5,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ssPv4(U)
    | ssPv3(X)
    | ssPv1(W)
    | ssPv4(W) ) ).

cnf(clause6,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv4(W)
    | ssPv4(U)
    | ssPv3(Y)
    | ssPv2(W) ) ).

cnf(clause7,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv2(Y)
    | ~ ssRr(W,X)
    | ssPv2(U)
    | ssPv1(W)
    | ssPv2(W) ) ).

cnf(clause8,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv3(W)
    | ssPv4(U)
    | ssPv2(Y)
    | ssPv1(W) ) ).

cnf(clause9,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv3(W)
    | ssPv1(Y)
    | ssPv2(W) ) ).

cnf(clause10,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(W,X)
    | ~ ssPv3(X)
    | ~ ssRr(V,W)
    | ~ ssRr(V,Y)
    | ssPv2(Y)
    | ssPv1(V) ) ).

cnf(clause11,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv4(Y)
    | ~ ssRr(W,X)
    | ~ ssPv2(W)
    | ssPv2(U)
    | ssPv4(W) ) ).

cnf(clause12,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv3(Y)
    | ~ ssRr(W,X)
    | ~ ssPv2(W)
    | ssPv3(U)
    | ssPv4(W) ) ).

cnf(clause13,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssPv1(W)
    | ~ ssPv2(W)
    | ssPv3(U)
    | ssPv2(X) ) ).

cnf(clause14,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv3(W)
    | ssPv4(Y)
    | ssPv4(W) ) ).

cnf(clause15,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(W,X)
    | ~ ssRr(V,W)
    | ~ ssRr(V,Y)
    | ~ ssPv2(Y)
    | ~ ssPv4(V)
    | ssPv4(X) ) ).

cnf(clause16,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv2(W)
    | ~ ssPv3(W)
    | ssPv2(Y) ) ).

cnf(clause17,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssRr(Y,Z)
    | ~ ssPv2(Z)
    | ~ ssRr(W,Y)
    | ssPv3(U)
    | ssPv3(X)
    | ssPv1(W) ) ).

cnf(clause18,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ~ ssPv1(Z)
    | ssPv4(V)
    | ssPv2(Y)
    | ssPv2(W) ) ).

cnf(clause19,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv3(Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ~ ssPv3(Z)
    | ~ ssPv4(W) ) ).

cnf(clause20,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,X1)
    | ~ ssPv3(X1)
    | ~ ssRr(W,Z)
    | ~ ssPv4(W)
    | ssPv4(U)
    | ssPv2(X) ) ).

cnf(clause21,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv2(X)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,X1)
    | ~ ssPv1(X1)
    | ~ ssRr(W,Z)
    | ssPv1(W) ) ).

cnf(clause22,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv2(X)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ~ ssPv2(W)
    | ssPv4(X1) ) ).

%--------------------------------------------------------------------------