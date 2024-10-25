%--------------------------------------------------------------------------
% File     : SYN060+1 : TPTP v9.0.0. Released v2.0.0.
% Domain   : Syntactic
% Problem  : Pelletier Problem 30
% Version  : Especial.
% English  :

% Refs     : [KM64]  Kalish & Montegue (1964), Logic: Techniques of Formal
%          : [Pel86] Pelletier (1986), Seventy-five Problems for Testing Au
%          : [Hah94] Haehnle (1994), Email to G. Sutcliffe
% Source   : [Hah94]
% Names    : Pelletier 30 [Pel86]

% Status   : Theorem
% Rating   : 0.00 v5.3.0, 0.09 v5.2.0, 0.00 v4.1.0, 0.06 v4.0.1, 0.05 v3.7.0, 0.33 v3.5.0, 0.12 v3.4.0, 0.08 v3.3.0, 0.00 v3.2.0, 0.11 v3.1.0, 0.00 v2.5.0, 0.33 v2.4.0, 0.33 v2.2.1, 0.00 v2.1.0
% Syntax   : Number of formulae    :    3 (   1 unt;   0 def)
%            Number of atoms       :    8 (   0 equ)
%            Maximal formula atoms :    4 (   2 avg)
%            Number of connectives :    7 (   2   ~;   1   |;   1   &)
%                                         (   0 <=>;   3  =>;   0  <=;   0 <~>)
%            Maximal formula depth :    5 (   4 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :    4 (   4 usr;   0 prp; 1-1 aty)
%            Number of functors    :    0 (   0 usr;   0 con; --- aty)
%            Number of variables   :    3 (   3   !;   0   ?)
% SPC      : FOF_THM_EPR_NEQ

% Comments :
%--------------------------------------------------------------------------
fof(pel30_1,axiom,
    ! [X] :
      ( ( big_f(X)
        | big_g(X) )
     => ~ big_h(X) ) ).

fof(pel30_2,axiom,
    ! [X] :
      ( ( big_g(X)
       => ~ big_i(X) )
     => ( big_f(X)
        & big_h(X) ) ) ).

fof(pel30,conjecture,
    ! [X] : big_i(X) ).

%--------------------------------------------------------------------------
