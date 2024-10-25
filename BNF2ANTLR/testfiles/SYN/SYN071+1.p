%--------------------------------------------------------------------------
% File     : SYN071+1 : TPTP v9.0.0. Released v2.0.0.
% Domain   : Syntactic
% Problem  : Pelletier Problem 48
% Version  : Especial.
% English  :

% Refs     : [Pel86] Pelletier (1986), Seventy-five Problems for Testing Au
%          : [Rud93] Rudnicki (1993), Email to G. Sutcliffe
%          : [Hah94] Haehnle (1994), Email to G. Sutcliffe
% Source   : [Hah94]
% Names    : Pelletier 48 [Pel86]

% Status   : Theorem
% Rating   : 0.00 v5.3.0, 0.09 v5.2.0, 0.00 v3.3.0, 0.11 v3.2.0, 0.00 v3.1.0, 0.17 v2.7.0, 0.00 v2.4.0, 0.00 v2.1.0
% Syntax   : Number of formulae    :    3 (   0 unt;   0 def)
%            Number of atoms       :    6 (   6 equ)
%            Maximal formula atoms :    2 (   2 avg)
%            Number of connectives :    3 (   0   ~;   3   |;   0   &)
%                                         (   0 <=>;   0  =>;   0  <=;   0 <~>)
%            Maximal formula depth :    2 (   2 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :    1 (   0 usr;   0 prp; 2-2 aty)
%            Number of functors    :    4 (   4 usr;   4 con; 0-0 aty)
%            Number of variables   :    0 (   0   !;   0   ?)
% SPC      : FOF_THM_EPR_PEQ

% Comments : [Pel86] says that Rudnicki has not published this problem
%            anywhere.
%          : [Rud93] says "I have seen it for the first time around 1977,
%            it was shown to me by A. Trybulec but I am sure it is folklore."
%--------------------------------------------------------------------------
fof(pel48_1,axiom,
    ( a = b
    | c = d ) ).

fof(pel48_2,axiom,
    ( a = c
    | b = d ) ).

fof(pel48,conjecture,
    ( a = d
    | b = c ) ).

%--------------------------------------------------------------------------
