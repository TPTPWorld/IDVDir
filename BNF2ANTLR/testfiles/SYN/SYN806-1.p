%--------------------------------------------------------------------------
% File     : SYN806-1 : TPTP v9.0.0. Released v2.5.0.
% Domain   : Syntactic (Translated)
% Problem  : PSAT inverse - K=4 C=50 V=8 D=2.1
% Version  : Especial.
% English  :

% Refs     : [Sch99] Schmidt (1999), Decidability by Resolution for Proposit
%          : [HS00a] Hustadt & Schmidt (2000), MSPASS: Modal Reasoning by Tr
%          : [HS00b] Hustadt & Schmidt (2000), Issues of Decidability for De
%          : [Sch01] Schmidt (2001), Email to G. Sutcliffe
% Source   : [Sch01]
% Names    : p-psat-inv-cnf-K4-C50-V8-D2.1 [Sch01]

% Status   : Satisfiable
% Rating   : 0.00 v5.5.0, 0.25 v5.4.0, 0.67 v5.3.0, 0.57 v5.2.0, 0.71 v5.0.0, 0.50 v4.1.0, 0.43 v4.0.0, 0.50 v3.5.0, 0.57 v3.4.0, 0.50 v3.3.0, 0.67 v3.2.0, 0.80 v3.1.0, 0.86 v2.7.0, 0.80 v2.6.0, 0.75 v2.5.0
% Syntax   : Number of clauses     :   52 (   2 unt;  35 nHn;  50 RR)
%            Number of literals    :  398 (   0 equ; 293 neg)
%            Maximal clause size   :   10 (   7 avg)
%            Maximal term depth    :    2 (   1 avg)
%            Number of predicates  :    9 (   9 usr;   0 prp; 1-2 aty)
%            Number of functors    :    2 (   2 usr;   0 con; 1-1 aty)
%            Number of variables   :  248 (   0 sgn)
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
    | ~ ssPv2(W)
    | ssPv4(V)
    | ssPv1(W)
    | ssPv8(W) ) ).

cnf(clause4,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv1(W)
    | ~ ssPv3(W)
    | ssPv1(U)
    | ssPv7(W) ) ).

cnf(clause5,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv3(W)
    | ~ ssPv7(W)
    | ssPv8(U)
    | ssPv4(W) ) ).

cnf(clause6,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssPv1(W)
    | ~ ssPv7(W)
    | ssPv1(V)
    | ssPv2(W) ) ).

cnf(clause7,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv3(W)
    | ~ ssPv7(W)
    | ~ ssPv8(W)
    | ssPv1(U) ) ).

cnf(clause8,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ssPv6(U)
    | ssPv4(X)
    | ssPv1(W)
    | ssPv7(W) ) ).

cnf(clause9,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(W,X)
    | ssPv2(U)
    | ssPv3(X)
    | ssPv1(W)
    | ssPv3(W) ) ).

cnf(clause10,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(W,X)
    | ~ ssPv4(W)
    | ssPv7(U)
    | ssPv3(X)
    | ssPv3(W) ) ).

cnf(clause11,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssPv8(X)
    | ssPv8(V)
    | ssPv7(W)
    | ssPv8(W) ) ).

cnf(clause12,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(W,X)
    | ~ ssPv8(W)
    | ssPv2(U)
    | ssPv2(X)
    | ssPv6(W) ) ).

cnf(clause13,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv1(W)
    | ssPv1(X)
    | ssPv8(W) ) ).

cnf(clause14,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv6(V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssPv8(W)
    | ssPv2(X)
    | ssPv4(W) ) ).

cnf(clause15,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(W,X)
    | ~ ssPv3(W)
    | ssPv7(X)
    | ssPv4(W) ) ).

cnf(clause16,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssPv1(X)
    | ssPv1(W)
    | ssPv2(W) ) ).

cnf(clause17,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,X)
    | ~ ssPv3(X)
    | ~ ssRr(V,W)
    | ~ ssPv2(V)
    | ~ ssPv8(V)
    | ssPv1(U) ) ).

cnf(clause18,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ssPv3(U)
    | ssPv8(Y)
    | ssPv2(W)
    | ssPv3(W) ) ).

cnf(clause19,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssPv3(X)
    | ~ ssPv1(W)
    | ~ ssPv6(W) ) ).

cnf(clause20,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ssPv2(Y)
    | ssPv3(W)
    | ssPv5(W) ) ).

cnf(clause21,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(W,X)
    | ~ ssPv3(X)
    | ~ ssRr(W,Y)
    | ssPv3(U)
    | ssPv6(Y)
    | ssPv2(W) ) ).

cnf(clause22,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssRr(W,Y)
    | ~ ssPv8(Y)
    | ssPv7(U)
    | ssPv1(X)
    | ssPv8(W) ) ).

cnf(clause23,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv3(W)
    | ssPv8(U)
    | ssPv2(Y)
    | ssPv1(W) ) ).

cnf(clause24,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssRr(W,Y)
    | ~ ssPv7(W)
    | ssPv6(U)
    | ssPv6(X)
    | ssPv8(Y) ) ).

cnf(clause25,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssPv7(W)
    | ssPv6(U)
    | ssPv5(X)
    | ssPv3(W) ) ).

cnf(clause26,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv5(W)
    | ssPv2(U)
    | ssPv6(Y)
    | ssPv6(W) ) ).

cnf(clause27,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssPv1(W)
    | ssPv1(Y)
    | ssPv6(W) ) ).

cnf(clause28,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,X)
    | ~ ssPv6(X)
    | ~ ssRr(V,W)
    | ~ ssRr(V,Y)
    | ~ ssPv7(Y)
    | ssPv6(U)
    | ssPv5(V) ) ).

cnf(clause29,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssRr(W,Y)
    | ~ ssPv1(Y)
    | ssPv3(X)
    | ssPv4(W) ) ).

cnf(clause30,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv6(V)
    | ~ ssRr(W,U)
    | ~ ssRr(W,X)
    | ~ ssPv7(X)
    | ~ ssRr(W,Y)
    | ssPv7(Y)
    | ssPv4(W) ) ).

cnf(clause31,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv6(U)
    | ~ ssRr(W,X)
    | ~ ssRr(V,W)
    | ~ ssRr(V,Y)
    | ~ ssPv2(V)
    | ssPv7(X)
    | ssPv8(Y) ) ).

cnf(clause32,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(W,X)
    | ~ ssPv8(X)
    | ~ ssRr(W,Y)
    | ~ ssPv5(Y)
    | ~ ssPv3(W)
    | ssPv7(U) ) ).

cnf(clause33,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv4(X)
    | ~ ssRr(Y,W)
    | ~ ssPv1(W)
    | ssPv6(W) ) ).

cnf(clause34,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv8(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv8(Y)
    | ~ ssRr(W,X)
    | ~ ssPv1(W)
    | ssPv3(W) ) ).

cnf(clause35,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,X)
    | ~ ssPv4(X)
    | ~ ssRr(V,W)
    | ~ ssRr(V,Y)
    | ~ ssPv6(Y)
    | ~ ssPv1(V)
    | ssPv3(U) ) ).

cnf(clause36,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv4(X)
    | ~ ssRr(Y,W)
    | ~ ssPv5(W)
    | ssPv8(W) ) ).

cnf(clause37,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(V)
    | ~ ssRr(W,U)
    | ~ ssRr(X,Y)
    | ~ ssPv5(Y)
    | ~ ssRr(W,X)
    | ~ ssPv7(W)
    | ~ ssPv8(W) ) ).

cnf(clause38,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ssPv7(U)
    | ssPv1(X)
    | ssPv5(Z)
    | ssPv1(W) ) ).

cnf(clause39,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv8(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv6(X)
    | ~ ssRr(Y,W)
    | ~ ssPv2(W)
    | ~ ssPv6(W) ) ).

cnf(clause40,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ~ ssPv5(W)
    | ssPv5(U)
    | ssPv2(X)
    | ssPv5(Z) ) ).

cnf(clause41,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv7(X)
    | ~ ssRr(Y,Z)
    | ~ ssRr(W,Y)
    | ssPv1(U)
    | ssPv7(Z)
    | ssPv6(W) ) ).

cnf(clause42,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ~ ssPv7(Z)
    | ssPv1(U)
    | ssPv5(Y)
    | ssPv7(W) ) ).

cnf(clause43,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv7(Y)
    | ~ ssRr(W,X)
    | ~ ssRr(W,Z)
    | ssPv7(U)
    | ssPv3(Z)
    | ssPv1(W) ) ).

cnf(clause44,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(X,W)
    | ~ ssPv6(X)
    | ~ ssRr(Y,Z)
    | ~ ssPv7(Z)
    | ~ ssRr(W,Y)
    | ssPv7(U)
    | ssPv5(W) ) ).

cnf(clause45,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv6(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,W)
    | ~ ssPv2(Z)
    | ssPv8(X)
    | ssPv7(W) ) ).

cnf(clause46,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv8(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ~ ssPv1(W)
    | ssPv3(X)
    | ssPv2(Z) ) ).

cnf(clause47,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(W,X)
    | ~ ssPv7(X)
    | ~ ssRr(V,W)
    | ~ ssRr(Y,Z)
    | ~ ssRr(V,Y)
    | ~ ssPv8(V)
    | ssPv4(Z) ) ).

cnf(clause48,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv6(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv1(X)
    | ~ ssRr(Y,W)
    | ~ ssRr(W,Z)
    | ~ ssPv1(Z)
    | ssPv3(W) ) ).

cnf(clause49,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv6(U)
    | ~ ssRr(W,X)
    | ~ ssPv6(X)
    | ~ ssRr(V,W)
    | ~ ssRr(Y,Z)
    | ~ ssPv2(Z)
    | ~ ssRr(V,Y)
    | ~ ssPv3(V) ) ).

cnf(clause50,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ~ ssPv6(W)
    | ssPv2(X)
    | ssPv7(X1) ) ).

cnf(clause51,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv1(X)
    | ~ ssRr(Y,W)
    | ~ ssRr(Z,X1)
    | ~ ssRr(W,Z)
    | ~ ssPv7(W)
    | ssPv3(X1) ) ).

cnf(clause52,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv8(U)
    | ~ ssRr(V,W)
    | ~ ssRr(X,Y)
    | ~ ssPv4(Y)
    | ~ ssRr(W,X)
    | ~ ssRr(Z,X1)
    | ~ ssPv2(X1)
    | ~ ssRr(W,Z)
    | ~ ssPv3(W) ) ).

%--------------------------------------------------------------------------