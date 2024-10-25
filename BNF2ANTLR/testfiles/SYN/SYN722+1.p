%--------------------------------------------------------------------------
% File     : SYN722+1 : TPTP v9.0.0. Released v2.5.0.
% Domain   : Syntactic
% Problem  : Peter Andrews Problem THM119
% Version  : Especial.
% English  :

% Refs     : [And97] Andrews (1994), Email to G. Sutcliffe
% Source   : [And97]
% Names    : THM119 [And97]

% Status   : Theorem
% Rating   : 0.00 v5.5.0, 0.11 v5.4.0, 0.00 v5.3.0, 0.09 v5.2.0, 0.00 v4.1.0, 0.06 v4.0.1, 0.05 v3.7.0, 0.33 v3.5.0, 0.12 v3.4.0, 0.08 v3.3.0, 0.00 v3.2.0, 0.22 v3.1.0, 0.00 v2.5.0
% Syntax   : Number of formulae    :    1 (   0 unt;   0 def)
%            Number of atoms       :   10 (   0 equ)
%            Maximal formula atoms :   10 (  10 avg)
%            Number of connectives :   16 (   7   ~;   6   |;   3   &)
%                                         (   0 <=>;   0  =>;   0  <=;   0 <~>)
%            Maximal formula depth :   11 (  11 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :    3 (   3 usr;   0 prp; 1-1 aty)
%            Number of functors    :    4 (   4 usr;   4 con; 0-0 aty)
%            Number of variables   :    3 (   2   !;   1   ?)
% SPC      : FOF_THM_EPR_NEQ

% Comments :
%--------------------------------------------------------------------------
fof(thm119,conjecture,
    ~ ( ! [Z] :
          ( ( p(Z)
            | r(Z) )
          & q(Z) )
      & ! [X] :
        ? [Y] :
          ( p(X)
          | ~ q(X)
          | ~ q(Y)
          | ~ q(c)
          | ~ q(d) )
      & ( ~ p(a)
        | ~ p(b) ) ) ).

%--------------------------------------------------------------------------
