%--------------------------------------------------------------------------
% File     : SYN376+1 : TPTP v9.0.0. Bugfixed v2.1.0.
% Domain   : Syntactic
% Problem  : Peter Andrews Problem X2127
% Version  : Especial.
% English  :

% Refs     : [And86] Andrews (1986), An Introduction to Mathematical Logic
%          : [And94] Andrews (1994), Email to G. Sutcliffe
% Source   : [And94]
% Names    : X2127 [And86]

% Status   : Theorem
% Rating   : 0.00 v5.4.0, 0.11 v5.3.0, 0.18 v5.2.0, 0.00 v4.1.0, 0.06 v4.0.1, 0.05 v3.7.0, 0.33 v3.5.0, 0.12 v3.4.0, 0.08 v3.3.0, 0.00 v3.2.0, 0.11 v3.1.0, 0.00 v2.5.0, 0.33 v2.4.0, 0.33 v2.2.1, 0.00 v2.1.0
% Syntax   : Number of formulae    :    1 (   0 unt;   0 def)
%            Number of atoms       :    4 (   0 equ)
%            Maximal formula atoms :    4 (   4 avg)
%            Number of connectives :    4 (   1   ~;   1   |;   0   &)
%                                         (   1 <=>;   1  =>;   0  <=;   0 <~>)
%            Maximal formula depth :    5 (   5 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :    1 (   1 usr;   0 prp; 1-1 aty)
%            Number of functors    :    0 (   0 usr;   0 con; --- aty)
%            Number of variables   :    4 (   3   !;   1   ?)
% SPC      : FOF_THM_EPR_NEQ

% Comments :
% Bugfixes : v2.1.0 - Formula x2127 fixed.
%--------------------------------------------------------------------------
fof(x2127,conjecture,
    ( ? [X] :
      ! [Y] :
        ( big_p(Y)
      <=> big_p(X) )
   => ( ! [X] : big_p(X)
      | ! [X] : ~ big_p(X) ) ) ).

%--------------------------------------------------------------------------
