%------------------------------------------------------------------------------
% File     : SYN986+1.005 : TPTP v9.0.0. Released v4.0.0.
% Domain   : Syntactic
% Problem  : Orevkov formula - size 5
% Version  : [TS00] axioms : Especial.
% English  : hyp(2,k,1) is defined. Each Ck has a non-normal natural deduction
%            of size linear in k, and each normal deduction of Ck has at least
%            hyp(2,k,1)=2_k nodes.

% Refs     : [TS00]  Troelstra & Schwichtenberg (2000), Basic Proof Theory
%          : [Rat08] Raths (2008), Email to G. Sutcliffe
% Source   : [Rat08]
% Names    :

% Status   : Theorem
% Rating   : 1.00 v4.0.0
% Syntax   : Number of formulae    :    3 (   1 unt;   0 def)
%            Number of atoms       :   10 (   0 equ)
%            Maximal formula atoms :    6 (   3 avg)
%            Number of connectives :    7 (   0   ~;   0   |;   5   &)
%                                         (   0 <=>;   2  =>;   0  <=;   0 <~>)
%            Maximal formula depth :   12 (   7 avg)
%            Maximal term depth    :    2 (   1 avg)
%            Number of predicates  :    1 (   1 usr;   0 prp; 3-3 aty)
%            Number of functors    :    2 (   2 usr;   1 con; 0-1 aty)
%            Number of variables   :   11 (   5   !;   6   ?)
% SPC      : FOF_THM_RFO_NEQ

% Comments : Inspiration by Wolfgang Bibel, Helmut Schwichtenberg.
%          : The complexity of proof seach is hyper-exponential with the size
%            of the formulae: 2^0=1, 2^1=2, 2^2=4, 2^4=16, 2^16=65536,
%            2^65536 = mmmh... ?
%------------------------------------------------------------------------------
%----Include Orevkov formula
include('Axioms/SYN002+0.ax').
%------------------------------------------------------------------------------
fof(ck,conjecture,
    ? [Z5,Z4,Z3,Z2,Z1,Z0] :
      ( r(zero,zero,Z5)
      & r(zero,Z5,Z4)
      & r(zero,Z4,Z3)
      & r(zero,Z3,Z2)
      & r(zero,Z2,Z1)
      & r(zero,Z1,Z0) ) ).

%------------------------------------------------------------------------------
