%--------------------------------------------------------------------------
% File     : SYN867-1 : TPTP v9.0.0. Released v2.5.0.
% Domain   : Syntactic (Translated)
% Problem  : QBF, SSS - K=4 C=10 V=4 D=6.1
% Version  : Especial.
% English  :

% Refs     : [Sch99] Schmidt (1999), Decidability by Resolution for Proposit
%          : [HS00a] Hustadt & Schmidt (2000), MSPASS: Modal Reasoning by Tr
%          : [HS00b] Hustadt & Schmidt (2000), Issues of Decidability for De
%          : [Sch01] Schmidt (2001), Email to G. Sutcliffe
% Source   : [Sch01]
% Names    : p-qbf-cnfSSS-K4-C10-V4-D6.1 [Sch01]

% Status   : Satisfiable
% Rating   : 0.00 v7.3.0, 0.25 v7.0.0, 0.20 v6.4.0, 0.33 v6.3.0, 0.25 v6.2.0, 0.17 v6.1.0, 0.20 v6.0.0, 0.33 v5.5.0, 0.00 v2.6.0, 0.17 v2.5.0
% Syntax   : Number of clauses     :   58 (   1 unt;   8 nHn;  15 RR)
%            Number of literals    :  943 (   0 equ; 885 neg)
%            Maximal clause size   :   32 (  16 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :   46 (  46 usr;   1 prp; 0-28 aty)
%            Number of functors    :   20 (  20 usr;  20 con; 0-0 aty)
%            Number of variables   :  855 (  57 sgn)
% SPC      : CNF_SAT_EPR_NEQ

% Comments : Optimised functional translation in terms of n-ary predicates
%            for the modal QBF formulae.
%--------------------------------------------------------------------------
cnf(clause1,negated_conjecture,
    ssNder1_0 ).

cnf(clause2,negated_conjecture,
    ( ~ ssNder1_0
    | ssNder1_1r1(U) ) ).

cnf(clause3,negated_conjecture,
    ( ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_2r1r1(U,V) ) ).

cnf(clause4,negated_conjecture,
    ( ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_3r1r1r1(U,V,W) ) ).

cnf(clause5,negated_conjecture,
    ( ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_4r1r1r1r1(U,V,W,X) ) ).

cnf(clause6,negated_conjecture,
    ( ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv24_5r1r1r1r1r1(U,V,W,X,skc38) ) ).

cnf(clause7,negated_conjecture,
    ( ~ ssPv24_5r1r1r1r1r1(U,V,W,X,skc39)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0 ) ).

cnf(clause8,negated_conjecture,
    ( ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_5r1r1r1r1r1(U,V,W,X,Y) ) ).

cnf(clause9,negated_conjecture,
    ( ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv23_6r1r1r1r1r1r1(U,V,W,X,Y,skc36) ) ).

cnf(clause10,negated_conjecture,
    ( ~ ssPv23_6r1r1r1r1r1r1(U,V,W,X,Y,skc37)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0 ) ).

cnf(clause11,negated_conjecture,
    ( ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z) ) ).

cnf(clause12,negated_conjecture,
    ( ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv22_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,skc34) ) ).

cnf(clause13,negated_conjecture,
    ( ~ ssPv22_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,skc35)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0 ) ).

cnf(clause14,negated_conjecture,
    ( ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1) ) ).

cnf(clause15,negated_conjecture,
    ( ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv21_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,skc32) ) ).

cnf(clause16,negated_conjecture,
    ( ~ ssPv21_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,skc33)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0 ) ).

cnf(clause17,negated_conjecture,
    ( ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2) ) ).

cnf(clause18,negated_conjecture,
    ( ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3) ) ).

cnf(clause19,negated_conjecture,
    ( ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4) ) ).

cnf(clause20,negated_conjecture,
    ( ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5) ) ).

cnf(clause21,negated_conjecture,
    ( ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6) ) ).

cnf(clause22,negated_conjecture,
    ( ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv16_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,skc30) ) ).

cnf(clause23,negated_conjecture,
    ( ~ ssPv16_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,skc31)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0 ) ).

cnf(clause24,negated_conjecture,
    ( ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7) ) ).

cnf(clause25,negated_conjecture,
    ( ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv15_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,skc28) ) ).

cnf(clause26,negated_conjecture,
    ( ~ ssPv15_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,skc29)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0 ) ).

cnf(clause27,negated_conjecture,
    ( ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8) ) ).

cnf(clause28,negated_conjecture,
    ( ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv14_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,skc26) ) ).

cnf(clause29,negated_conjecture,
    ( ~ ssPv14_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,skc27)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0 ) ).

cnf(clause30,negated_conjecture,
    ( ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9) ) ).

cnf(clause31,negated_conjecture,
    ( ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv13_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,skc24) ) ).

cnf(clause32,negated_conjecture,
    ( ~ ssPv13_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,skc25)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0 ) ).

cnf(clause33,negated_conjecture,
    ( ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10) ) ).

cnf(clause34,negated_conjecture,
    ( ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11) ) ).

cnf(clause35,negated_conjecture,
    ( ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12) ) ).

cnf(clause36,negated_conjecture,
    ( ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13) ) ).

cnf(clause37,negated_conjecture,
    ( ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssPv14_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssPv16_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv11_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ssPv26_3r1r1r1(U,V,W) ) ).

cnf(clause38,negated_conjecture,
    ( ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14) ) ).

cnf(clause39,negated_conjecture,
    ( ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv8_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,skc22) ) ).

cnf(clause40,negated_conjecture,
    ( ~ ssPv8_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,skc23)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0 ) ).

cnf(clause41,negated_conjecture,
    ( ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssPv10_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssPv15_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv19_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ssPv22_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1) ) ).

cnf(clause42,negated_conjecture,
    ( ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssPv12_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssPv13_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv10_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ssPv23_6r1r1r1r1r1r1(U,V,W,X,Y,Z) ) ).

cnf(clause43,negated_conjecture,
    ( ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15) ) ).

cnf(clause44,negated_conjecture,
    ( ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16) ) ).

cnf(clause45,negated_conjecture,
    ( ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17) ) ).

cnf(clause46,negated_conjecture,
    ( ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv5_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,skc20) ) ).

cnf(clause47,negated_conjecture,
    ( ~ ssPv5_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,skc21)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0 ) ).

cnf(clause48,negated_conjecture,
    ( ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18) ) ).

cnf(clause49,negated_conjecture,
    ( ~ ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19) ) ).

cnf(clause50,negated_conjecture,
    ( ~ ssNder1_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19)
    | ~ ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_26r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20) ) ).

cnf(clause51,negated_conjecture,
    ( ~ ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssPv4_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19)
    | ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssPv21_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssPv24_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv11_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12) ) ).

cnf(clause52,negated_conjecture,
    ( ~ ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssPv4_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19)
    | ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssPv23_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv12_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ssPv15_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8) ) ).

cnf(clause53,negated_conjecture,
    ( ~ ssNder1_26r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20)
    | ~ ssNder1_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19)
    | ~ ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssNder1_27r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20,X21) ) ).

cnf(clause54,negated_conjecture,
    ( ~ ssPv5_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssPv15_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv4_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19)
    | ssPv11_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12) ) ).

cnf(clause55,negated_conjecture,
    ( ~ ssNder1_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19)
    | ~ ssPv5_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv3_26r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20)
    | ssPv19_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ssPv24_5r1r1r1r1r1(U,V,W,X,Y) ) ).

cnf(clause56,negated_conjecture,
    ( ~ ssNder1_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19)
    | ~ ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssPv15_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv4_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19)
    | ssPv3_26r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20)
    | ssPv23_6r1r1r1r1r1r1(U,V,W,X,Y,Z) ) ).

cnf(clause57,negated_conjecture,
    ( ~ ssNder1_27r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20,X21)
    | ~ ssPv1_28r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20,X21,X22)
    | ~ ssNder1_26r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20)
    | ~ ssNder1_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19)
    | ~ ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssPv8_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssPv23_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv12_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11) ) ).

cnf(clause58,negated_conjecture,
    ( ~ ssNder1_27r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20,X21)
    | ~ ssNder1_26r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20)
    | ~ ssNder1_25r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19)
    | ~ ssPv5_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_24r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18)
    | ~ ssNder1_23r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17)
    | ~ ssNder1_22r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16)
    | ~ ssNder1_21r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15)
    | ~ ssNder1_20r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14)
    | ~ ssNder1_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13)
    | ~ ssNder1_18r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12)
    | ~ ssNder1_17r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11)
    | ~ ssNder1_16r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10)
    | ~ ssNder1_15r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9)
    | ~ ssNder1_14r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8)
    | ~ ssNder1_13r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7)
    | ~ ssNder1_12r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6)
    | ~ ssNder1_11r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5)
    | ~ ssNder1_10r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4)
    | ~ ssNder1_9r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3)
    | ~ ssNder1_8r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2)
    | ~ ssNder1_7r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1)
    | ~ ssPv23_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_6r1r1r1r1r1r1(U,V,W,X,Y,Z)
    | ~ ssNder1_5r1r1r1r1r1(U,V,W,X,Y)
    | ~ ssNder1_4r1r1r1r1(U,V,W,X)
    | ~ ssNder1_3r1r1r1(U,V,W)
    | ~ ssNder1_2r1r1(U,V)
    | ~ ssNder1_1r1(U)
    | ~ ssNder1_0
    | ssPv1_28r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13,X14,X15,X16,X17,X18,X19,X20,X21,X22)
    | ssPv10_19r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1(U,V,W,X,Y,Z,X1,X2,X3,X4,X5,X6,X7,X8,X9,X10,X11,X12,X13) ) ).

%--------------------------------------------------------------------------