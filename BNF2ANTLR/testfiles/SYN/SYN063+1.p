%--------------------------------------------------------------------------
% File     : SYN063+1 : TPTP v9.0.0. Released v2.0.0.
% Domain   : Syntactic
% Problem  : Pelletier Problem 33
% Version  : Especial.
% English  :

% Refs     : [KM64]  Kalish & Montegue (1964), Logic: Techniques of Formal
%          : [Pel86] Pelletier (1986), Seventy-five Problems for Testing Au
%          : [Hah94] Haehnle (1994), Email to G. Sutcliffe
% Source   : [Hah94]
% Names    : Pelletier 33 [Pel86]

% Status   : Theorem
% Rating   : 0.00 v5.5.0, 0.11 v5.4.0, 0.00 v4.1.0, 0.06 v4.0.1, 0.05 v3.7.0, 0.33 v3.5.0, 0.12 v3.4.0, 0.08 v3.3.0, 0.00 v3.2.0, 0.11 v3.1.0, 0.00 v2.5.0, 0.33 v2.4.0, 0.33 v2.2.1, 0.00 v2.1.0
% Syntax   : Number of formulae    :    1 (   0 unt;   0 def)
%            Number of atoms       :   10 (   0 equ)
%            Maximal formula atoms :   10 (  10 avg)
%            Number of connectives :   12 (   3   ~;   4   |;   2   &)
%                                         (   1 <=>;   2  =>;   0  <=;   0 <~>)
%            Maximal formula depth :    7 (   7 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :    1 (   1 usr;   0 prp; 1-1 aty)
%            Number of functors    :    3 (   3 usr;   3 con; 0-0 aty)
%            Number of variables   :    2 (   2   !;   0   ?)
% SPC      : FOF_THM_EPR_NEQ

% Comments : This is a monadic predicate formulation of Pelletier 17.
%--------------------------------------------------------------------------
fof(pel33,conjecture,
    ( ! [X] :
        ( ( big_p(a)
          & ( big_p(X)
           => big_p(b) ) )
       => big_p(c) )
  <=> ! [X1] :
        ( ( ~ big_p(a)
          | big_p(X1)
          | big_p(c) )
        & ( ~ big_p(a)
          | ~ big_p(b)
          | big_p(c) ) ) ) ).

%--------------------------------------------------------------------------
