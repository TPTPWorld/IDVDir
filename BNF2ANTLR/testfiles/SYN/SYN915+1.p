%--------------------------------------------------------------------------
% File     : SYN915+1 : TPTP v9.0.0. Released v3.1.0.
% Domain   : Syntactic
% Problem  : TRUE
% Version  : Biased.
% English  :

% Refs     :
% Source   : [TPTP]
% Names    :

% Status   : Theorem
% Rating   : 0.00 v4.1.0, 0.11 v4.0.1, 0.16 v4.0.0, 0.20 v3.7.0, 0.33 v3.5.0, 0.25 v3.4.0, 0.33 v3.3.0, 0.22 v3.2.0, 0.11 v3.1.0
% Syntax   : Number of formulae    :    1 (   1 unt;   0 def)
%            Number of atoms       :    1 (   0 equ)
%            Maximal formula atoms :    1 (   1 avg)
%            Number of connectives :    0 (   0   ~;   0   |;   0   &)
%                                         (   0 <=>;   0  =>;   0  <=;   0 <~>)
%            Maximal formula depth :    1 (   1 avg)
%            Maximal term depth    :    0 (   0 avg)
%            Number of predicates  :    1 (   0 usr;   1 prp; 0-0 aty)
%            Number of functors    :    0 (   0 usr;   0 con; --- aty)
%            Number of variables   :    0 (   0   !;   0   ?)
% SPC      : FOF_THM_PRP

% Comments : Biased because it has $true which some systems don't understand
%            yet.
%--------------------------------------------------------------------------
fof(truth,conjecture,
    $true ).

%--------------------------------------------------------------------------
