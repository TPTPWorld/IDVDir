%--------------------------------------------------------------------------
% File     : SYN805-1 : TPTP v9.0.0. Released v2.5.0.
% Domain   : Syntactic (Translated)
% Problem  : PSAT inverse - K=4 C=50 V=8 D=1.6
% Version  : Especial.
% English  :

% Refs     : [Sch99] Schmidt (1999), Decidability by Resolution for Proposit
%          : [HS00a] Hustadt & Schmidt (2000), MSPASS: Modal Reasoning by Tr
%          : [HS00b] Hustadt & Schmidt (2000), Issues of Decidability for De
%          : [Sch01] Schmidt (2001), Email to G. Sutcliffe
% Source   : [Sch01]
% Names    : p-psat-inv-cnf-K4-C50-V8-D1.6 [Sch01]

% Status   : Satisfiable
% Rating   : 0.00 v5.5.0, 0.25 v5.4.0, 0.78 v5.3.0, 0.71 v5.2.0, 0.57 v5.0.0, 0.38 v4.1.0, 0.43 v4.0.0, 0.38 v3.5.0, 0.57 v3.4.0, 0.67 v3.2.0, 0.80 v3.1.0, 0.86 v2.7.0, 0.80 v2.6.0, 0.75 v2.5.0
% Syntax   : Number of clauses     :   52 (   2 unt;  29 nHn;  50 RR)
%            Number of literals    :  312 (   0 equ; 224 neg)
%            Maximal clause size   :    7 (   6 avg)
%            Maximal term depth    :    2 (   1 avg)
%            Number of predicates  :    9 (   9 usr;   0 prp; 1-2 aty)
%            Number of functors    :    2 (   2 usr;   0 con; 1-1 aty)
%            Number of variables   :  162 (   0 sgn)
% SPC      : CNF_SAT_RFO_NEQ

% Comments : The relational translation for the PSAT inverse problem.
%--------------------------------------------------------------------------
cnf(clause1,negated_conjecture,
    ssRr(skf3(U),U) ).

cnf(clause2,negated_conjecture,
    ssRr(U,skf2(U)) ).

cnf(clause3,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ssPv2(V)
    | ssPv7(U)
    | ssPv8(U) ) ).

cnf(clause4,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(V)
    | ~ ssPv7(V)
    | ssPv6(U)
    | ssPv4(V) ) ).

cnf(clause5,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssPv3(V)
    | ssPv2(V)
    | ssPv7(V) ) ).

cnf(clause6,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(V)
    | ~ ssPv6(V)
    | ~ ssPv8(V)
    | ssPv1(U) ) ).

cnf(clause7,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv8(U)
    | ~ ssPv3(V)
    | ~ ssPv7(V)
    | ~ ssPv8(V) ) ).

cnf(clause8,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ssPv8(U)
    | ssPv7(W)
    | ssPv2(V)
    | ssPv7(V) ) ).

cnf(clause9,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv8(U)
    | ~ ssRr(W,V)
    | ssPv1(W)
    | ssPv4(V)
    | ssPv6(V) ) ).

cnf(clause10,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv8(V)
    | ~ ssRr(U,W)
    | ssPv5(W)
    | ssPv3(U)
    | ssPv5(U) ) ).

cnf(clause11,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(V,W)
    | ssPv6(W)
    | ssPv2(V)
    | ssPv7(V) ) ).

cnf(clause12,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv8(U)
    | ~ ssRr(W,V)
    | ssPv2(W)
    | ssPv2(V)
    | ssPv6(V) ) ).

cnf(clause13,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(U,W)
    | ~ ssPv1(U)
    | ~ ssPv6(U)
    | ssPv8(V)
    | ssPv7(W) ) ).

cnf(clause14,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv6(V)
    | ~ ssRr(U,W)
    | ~ ssPv6(U)
    | ssPv4(W)
    | ssPv8(U) ) ).

cnf(clause15,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(V)
    | ~ ssRr(U,W)
    | ~ ssPv2(U)
    | ssPv2(W)
    | ssPv8(U) ) ).

cnf(clause16,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv2(W)
    | ~ ssPv1(V)
    | ssPv4(U)
    | ssPv7(V) ) ).

cnf(clause17,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssPv1(V)
    | ssPv7(W)
    | ssPv7(V) ) ).

cnf(clause18,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssPv8(V)
    | ssPv5(W)
    | ssPv6(V) ) ).

cnf(clause19,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(W,V)
    | ~ ssPv2(V)
    | ssPv7(W)
    | ssPv5(V) ) ).

cnf(clause20,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv5(U)
    | ~ ssRr(V,W)
    | ~ ssPv2(V)
    | ssPv3(W)
    | ssPv5(V) ) ).

cnf(clause21,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv6(V)
    | ~ ssRr(U,W)
    | ~ ssPv5(U)
    | ssPv2(W)
    | ssPv4(U) ) ).

cnf(clause22,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv3(W)
    | ~ ssPv1(V)
    | ssPv2(U)
    | ssPv3(V) ) ).

cnf(clause23,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(V,W)
    | ~ ssPv3(W)
    | ssPv3(V)
    | ssPv6(V) ) ).

cnf(clause24,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv8(V)
    | ~ ssRr(U,W)
    | ~ ssPv6(U)
    | ssPv5(W)
    | ssPv1(U) ) ).

cnf(clause25,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssPv4(V)
    | ~ ssPv7(V)
    | ssPv4(W) ) ).

cnf(clause26,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(V)
    | ~ ssRr(U,W)
    | ~ ssPv3(U)
    | ~ ssPv6(U)
    | ssPv8(W) ) ).

cnf(clause27,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv6(W)
    | ~ ssPv2(V)
    | ~ ssPv6(V)
    | ssPv6(U) ) ).

cnf(clause28,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv5(U)
    | ~ ssRr(V,W)
    | ~ ssPv2(V)
    | ~ ssPv5(V)
    | ssPv5(W) ) ).

cnf(clause29,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(V,W)
    | ~ ssPv6(W)
    | ~ ssPv5(V)
    | ssPv6(V) ) ).

cnf(clause30,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv8(U)
    | ~ ssRr(W,V)
    | ~ ssPv2(W)
    | ~ ssPv5(V)
    | ssPv3(V) ) ).

cnf(clause31,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv5(U)
    | ~ ssRr(W,V)
    | ~ ssPv2(W)
    | ~ ssPv5(V)
    | ssPv3(V) ) ).

cnf(clause32,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(V)
    | ~ ssRr(U,W)
    | ~ ssPv2(W)
    | ~ ssPv4(U)
    | ssPv3(U) ) ).

cnf(clause33,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(W,V)
    | ~ ssPv5(W)
    | ~ ssPv6(V)
    | ssPv2(V) ) ).

cnf(clause34,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(W,V)
    | ~ ssPv5(W)
    | ~ ssPv6(V)
    | ssPv1(V) ) ).

cnf(clause35,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv5(U)
    | ~ ssRr(V,W)
    | ~ ssPv4(W)
    | ~ ssPv2(V)
    | ~ ssPv8(V) ) ).

cnf(clause36,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(V,W)
    | ~ ssPv6(W)
    | ~ ssPv1(V)
    | ~ ssPv8(V) ) ).

cnf(clause37,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(V,W)
    | ~ ssPv4(W)
    | ~ ssPv1(V)
    | ~ ssPv3(V) ) ).

cnf(clause38,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssRr(V,X)
    | ssPv3(U)
    | ssPv8(W)
    | ssPv4(X)
    | ssPv3(V) ) ).

cnf(clause39,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,V)
    | ~ ssRr(V,X)
    | ssPv7(U)
    | ssPv1(W)
    | ssPv4(X)
    | ssPv1(V) ) ).

cnf(clause40,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv7(W)
    | ~ ssRr(V,X)
    | ssPv6(U)
    | ssPv6(X)
    | ssPv1(V) ) ).

cnf(clause41,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,V)
    | ~ ssRr(V,X)
    | ~ ssPv7(X)
    | ~ ssPv6(V)
    | ssPv3(U)
    | ssPv2(W) ) ).

cnf(clause42,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(W,V)
    | ~ ssRr(X,V)
    | ~ ssPv4(V)
    | ssPv7(W)
    | ssPv5(X) ) ).

cnf(clause43,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv6(U)
    | ~ ssRr(V,W)
    | ~ ssPv4(W)
    | ~ ssRr(V,X)
    | ssPv1(X)
    | ssPv7(V) ) ).

cnf(clause44,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(W,V)
    | ~ ssRr(X,V)
    | ~ ssPv2(V)
    | ssPv5(W)
    | ssPv4(X) ) ).

cnf(clause45,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv8(W)
    | ~ ssRr(V,X)
    | ~ ssPv2(V)
    | ssPv2(U)
    | ssPv6(X) ) ).

cnf(clause46,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(W,V)
    | ~ ssRr(V,X)
    | ~ ssPv7(V)
    | ssPv1(W)
    | ssPv1(X) ) ).

cnf(clause47,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv7(U)
    | ~ ssRr(W,V)
    | ~ ssPv4(W)
    | ~ ssRr(V,X)
    | ~ ssPv8(X)
    | ssPv8(V) ) ).

cnf(clause48,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssPv1(W)
    | ~ ssRr(V,X)
    | ~ ssPv7(V)
    | ssPv4(X) ) ).

cnf(clause49,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(W,V)
    | ~ ssRr(V,X)
    | ~ ssPv8(X)
    | ~ ssPv3(V)
    | ssPv3(W) ) ).

cnf(clause50,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssPv5(W)
    | ~ ssRr(V,X)
    | ~ ssPv3(V)
    | ssPv8(X) ) ).

cnf(clause51,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv5(W)
    | ~ ssRr(V,X)
    | ~ ssPv3(X)
    | ~ ssPv6(V)
    | ssPv5(U) ) ).

cnf(clause52,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv6(U)
    | ~ ssRr(W,V)
    | ~ ssPv1(W)
    | ~ ssRr(V,X)
    | ~ ssPv1(X)
    | ~ ssPv8(V) ) ).

%--------------------------------------------------------------------------