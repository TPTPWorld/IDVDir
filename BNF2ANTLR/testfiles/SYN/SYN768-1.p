%--------------------------------------------------------------------------
% File     : SYN768-1 : TPTP v9.0.0. Released v2.5.0.
% Domain   : Syntactic (Translated)
% Problem  : PSAT inverse problem - K=4 C=20 V=4 D=1.6
% Version  : Especial.
% English  :

% Refs     : [Sch99] Schmidt (1999), Decidability by Resolution for Proposit
%          : [HS00a] Hustadt & Schmidt (2000), MSPASS: Modal Reasoning by Tr
%          : [HS00b] Hustadt & Schmidt (2000), Issues of Decidability for De
%          : [Sch01] Schmidt (2001), Email to G. Sutcliffe
% Source   : [Sch01]
% Names    : p-psat-inv-cnf-K4-C20-V4-D1.6 [Sch01]

% Status   : Satisfiable
% Rating   : 0.00 v5.5.0, 0.25 v5.4.0, 0.33 v5.3.0, 0.29 v5.0.0, 0.25 v4.1.0, 0.14 v4.0.0, 0.25 v3.5.0, 0.43 v3.4.0, 0.33 v3.2.0, 0.40 v3.1.0, 0.43 v2.7.0, 0.40 v2.6.0, 0.50 v2.5.0
% Syntax   : Number of clauses     :   22 (   2 unt;  15 nHn;  20 RR)
%            Number of literals    :  124 (   0 equ;  84 neg)
%            Maximal clause size   :    7 (   5 avg)
%            Maximal term depth    :    2 (   1 avg)
%            Number of predicates  :    5 (   5 usr;   0 prp; 1-2 aty)
%            Number of functors    :    2 (   2 usr;   0 con; 1-1 aty)
%            Number of variables   :   64 (   0 sgn)
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
    | ~ ssPv3(U)
    | ssPv2(V)
    | ssPv4(U) ) ).

cnf(clause4,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssPv4(U)
    | ssPv1(V)
    | ssPv3(U) ) ).

cnf(clause5,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssPv1(V)
    | ssPv2(V)
    | ssPv3(V) ) ).

cnf(clause6,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(V)
    | ~ ssPv3(U)
    | ~ ssPv4(U)
    | ssPv1(U) ) ).

cnf(clause7,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ssPv2(U)
    | ssPv4(W)
    | ssPv1(V)
    | ssPv3(V) ) ).

cnf(clause8,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(W,V)
    | ~ ssPv4(V)
    | ssPv3(U)
    | ssPv1(W)
    | ssPv3(V) ) ).

cnf(clause9,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv4(W)
    | ssPv2(U)
    | ssPv2(V)
    | ssPv4(V) ) ).

cnf(clause10,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ssPv3(W)
    | ssPv2(V)
    | ssPv4(V) ) ).

cnf(clause11,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(U,W)
    | ~ ssPv1(U)
    | ~ ssPv3(U)
    | ssPv3(V)
    | ssPv2(W) ) ).

cnf(clause12,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(U)
    | ~ ssRr(V,W)
    | ~ ssPv1(V)
    | ssPv3(W)
    | ssPv4(V) ) ).

cnf(clause13,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(W,V)
    | ~ ssPv4(V)
    | ssPv3(W)
    | ssPv3(V) ) ).

cnf(clause14,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(V,W)
    | ~ ssPv3(V)
    | ssPv1(W)
    | ssPv2(V) ) ).

cnf(clause15,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssPv2(W)
    | ~ ssPv3(V)
    | ssPv2(V) ) ).

cnf(clause16,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv2(U)
    | ~ ssRr(W,V)
    | ~ ssPv1(W)
    | ~ ssPv2(V)
    | ~ ssPv4(V) ) ).

cnf(clause17,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv1(V)
    | ~ ssRr(U,W)
    | ~ ssRr(U,X)
    | ssPv4(W)
    | ssPv1(X)
    | ssPv4(U) ) ).

cnf(clause18,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssRr(V,W)
    | ~ ssPv4(W)
    | ~ ssRr(V,X)
    | ~ ssPv1(X)
    | ssPv2(U)
    | ssPv4(V) ) ).

cnf(clause19,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(W,V)
    | ~ ssRr(V,X)
    | ~ ssPv2(V)
    | ssPv2(W)
    | ssPv1(X) ) ).

cnf(clause20,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv3(U)
    | ~ ssRr(V,W)
    | ~ ssPv1(W)
    | ~ ssRr(V,X)
    | ssPv4(X)
    | ssPv2(V) ) ).

cnf(clause21,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(V,W)
    | ~ ssPv3(W)
    | ~ ssRr(V,X)
    | ~ ssPv1(X)
    | ~ ssPv1(V) ) ).

cnf(clause22,negated_conjecture,
    ( ~ ssRr(U,V)
    | ~ ssPv4(U)
    | ~ ssRr(W,V)
    | ~ ssPv1(W)
    | ~ ssRr(V,X)
    | ~ ssPv4(X)
    | ~ ssPv4(V) ) ).

%--------------------------------------------------------------------------