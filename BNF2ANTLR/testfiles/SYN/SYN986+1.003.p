%------------------------------------------------------------------------------
% File     : SYN986+1.003 : TPTP v9.0.0. Released v4.0.0.
% Domain   : Syntactic
% Problem  : Orevkov formula - size 3
% Version  : [TS00] axioms : Especial.
% English  : hyp(2,k,1) is defined. Each Ck has a non-normal natural deduction
%            of size linear in k, and each normal deduction of Ck has at least
%            hyp(2,k,1)=2_k nodes.

% Refs     : [TS00]  Troelstra & Schwichtenberg (2000), Basic Proof Theory
%          : [Rat08] Raths (2008), Email to G. Sutcliffe
% Source   : [Rat08]
% Names    :

% Status   : Theorem
% Rating   : 0.13 v9.0.0, 0.00 v7.5.0, 0.14 v7.4.0, 0.06 v7.3.0, 0.00 v7.0.0, 0.14 v6.4.0, 0.07 v6.3.0, 0.08 v6.2.0, 0.18 v6.1.0, 0.16 v6.0.0, 0.00 v5.5.0, 0.12 v5.4.0, 0.09 v5.3.0, 0.17 v5.2.0, 0.14 v5.1.0, 0.21 v5.0.0, 0.20 v4.1.0, 0.22 v4.0.1, 0.47 v4.0.0
% Syntax   : Number of formulae    :    3 (   1 unt;   0 def)
%            Number of atoms       :    8 (   0 equ)
%            Maximal formula atoms :    4 (   2 avg)
%            Number of connectives :    5 (   0   ~;   0   |;   3   &)
%                                         (   0 <=>;   2  =>;   0  <=;   0 <~>)
%            Maximal formula depth :    8 (   6 avg)
%            Maximal term depth    :    2 (   1 avg)
%            Number of predicates  :    1 (   1 usr;   0 prp; 3-3 aty)
%            Number of functors    :    2 (   2 usr;   1 con; 0-1 aty)
%            Number of variables   :    9 (   5   !;   4   ?)
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
    ? [Z3,Z2,Z1,Z0] :
      ( r(zero,zero,Z3)
      & r(zero,Z3,Z2)
      & r(zero,Z2,Z1)
      & r(zero,Z1,Z0) ) ).

%------------------------------------------------------------------------------