%--------------------------------------------------------------------------
% File     : SYN389+1 : TPTP v9.0.0. Released v2.0.0.
% Domain   : Syntactic
% Problem  : Pierce's Law
% Version  : Especial.
%            Theorem formulation : 1 proposition.
% English  : Pierce's Law. Unprovable by Logic Theorist, and tricky
%            for 'natural' systems.

% Refs     : [NS72]  Newell & Simon (1972), Human Problem Solving
%          : [Pel86] Pelletier (1986), Seventy-five Problems for Testing Au
%          : [Hah94] Haehnle (1994), Email to G. Sutcliffe
% Source   : [Hah94]
% Names    : Pelletier 8 [Pel86]

% Status   : Theorem
% Rating   : 0.00 v4.1.0, 0.06 v4.0.1, 0.05 v3.7.0, 0.33 v3.5.0, 0.12 v3.4.0, 0.08 v3.3.0, 0.00 v3.2.0, 0.11 v3.1.0, 0.00 v2.5.0, 0.33 v2.4.0, 0.33 v2.2.1, 0.00 v2.1.0
% Syntax   : Number of formulae    :    1 (   0 unt;   0 def)
%            Number of atoms       :    4 (   0 equ)
%            Maximal formula atoms :    4 (   4 avg)
%            Number of connectives :    3 (   0   ~;   0   |;   0   &)
%                                         (   0 <=>;   3  =>;   0  <=;   0 <~>)
%            Maximal formula depth :    4 (   4 avg)
%            Maximal term depth    :    0 (   0 avg)
%            Number of predicates  :    2 (   2 usr;   2 prp; 0-0 aty)
%            Number of functors    :    0 (   0 usr;   0 con; --- aty)
%            Number of variables   :    0 (   0   !;   0   ?)
% SPC      : FOF_THM_PRP

% Comments : The clausal form of this problem is the same as SYN001+1.p.
%--------------------------------------------------------------------------
fof(pel8,conjecture,
    ( ( ( p
       => q )
     => p )
   => p ) ).

%--------------------------------------------------------------------------
