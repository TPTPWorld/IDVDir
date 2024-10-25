%--------------------------------------------------------------------------
% File     : SYN079-1 : TPTP v9.0.0. Released v1.0.0.
% Domain   : Syntactic
% Problem  : Pelletier Problem 57
% Version  : Especial.
% English  :

% Refs     : [Pel86] Pelletier (1986), Seventy-five Problems for Testing Au
% Source   : [Pel86]
% Names    : Pelletier 57 [Pel86]

% Status   : Unsatisfiable
% Rating   : 0.00 v5.3.0, 0.05 v5.2.0, 0.00 v2.0.0
% Syntax   : Number of clauses     :    4 (   3 unt;   0 nHn;   4 RR)
%            Number of literals    :    6 (   0 equ;   3 neg)
%            Maximal clause size   :    3 (   1 avg)
%            Maximal term depth    :    2 (   1 avg)
%            Number of predicates  :    1 (   1 usr;   0 prp; 2-2 aty)
%            Number of functors    :    4 (   4 usr;   3 con; 0-2 aty)
%            Number of variables   :    3 (   0 sgn)
% SPC      : CNF_UNS_RFO_NEQ_HRN

% Comments :
%--------------------------------------------------------------------------
cnf(clause_1,axiom,
    big_f(f(a,b),f(b,c)) ).

cnf(clause_2,axiom,
    big_f(f(b,c),f(a,c)) ).

cnf(clause_3,axiom,
    ( ~ big_f(X,Y)
    | ~ big_f(Y,Z)
    | big_f(X,Z) ) ).

cnf(prove_this,negated_conjecture,
    ~ big_f(f(a,b),f(a,c)) ).

%--------------------------------------------------------------------------
