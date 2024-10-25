%--------------------------------------------------------------------------
% File     : SYN498+1 : TPTP v9.0.0. Released v2.1.0.
% Domain   : Syntactic (Translated)
% Problem  : ALC, N=4, R=1, L=80, K=3, D=1, P=0, Index=000
% Version  : Especial.
% English  :

% Refs     : [OS95]  Ohlbach & Schmidt (1995), Functional Translation and S
%          : [HS97]  Hustadt & Schmidt (1997), On Evaluating Decision Proce
%          : [Wei97] Weidenbach (1997), Email to G. Sutcliffe
% Source   : [Wei97]
% Names    : alc-4-1-80-3-1-000.dfg [Wei97]

% Status   : Theorem
% Rating   : 0.00 v6.1.0, 0.17 v6.0.0, 0.00 v5.5.0, 0.33 v5.3.0, 0.27 v5.2.0, 0.00 v5.0.0, 0.25 v4.1.0, 0.44 v4.0.1, 0.42 v4.0.0, 0.45 v3.7.0, 0.67 v3.5.0, 0.38 v3.4.0, 0.33 v3.2.0, 0.44 v3.1.0, 0.67 v2.7.0, 0.33 v2.6.0, 0.00 v2.5.0, 0.33 v2.4.0, 0.33 v2.2.1, 0.50 v2.2.0, 0.00 v2.1.0
% Syntax   : Number of formulae    :    1 (   0 unt;   0 def)
%            Number of atoms       :  752 (   0 equ)
%            Maximal formula atoms :  752 ( 752 avg)
%            Number of connectives : 1017 ( 266   ~; 429   |; 203   &)
%                                         (   0 <=>; 119  =>;   0  <=;   0 <~>)
%            Maximal formula depth :  114 ( 114 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :   36 (  36 usr;  32 prp; 0-1 aty)
%            Number of functors    :   31 (  31 usr;  31 con; 0-0 aty)
%            Number of variables   :  119 ( 119   !;   0   ?)
% SPC      : FOF_THM_EPR_NEQ

% Comments : These ALC problems have been translated from propositional
%            multi-modal K logic formulae generated according to the scheme
%            described in [HS97], using the optimized functional translation
%            described in [OS95]. The finite model property holds, the
%            Herbrand Universe is finite, they are decidable (the complexity
%            is PSPACE-complete), resolution + subsumption + condensing is a
%            decision procedure, and the translated formulae belong to the
%            (CNF-translation of the) Bernays-Schoenfinkel class [Wei97].
%--------------------------------------------------------------------------
fof(co1,conjecture,
    ~ ( ( ~ hskp0
        | ( ndr1_0
          & c1_1(a1)
          & c2_1(a1)
          & ~ c3_1(a1) ) )
      & ( ~ hskp1
        | ( ndr1_0
          & ~ c0_1(a2)
          & ~ c2_1(a2)
          & ~ c3_1(a2) ) )
      & ( ~ hskp2
        | ( ndr1_0
          & c1_1(a3)
          & c3_1(a3)
          & ~ c2_1(a3) ) )
      & ( ~ hskp3
        | ( ndr1_0
          & c0_1(a7)
          & c3_1(a7)
          & ~ c2_1(a7) ) )
      & ( ~ hskp4
        | ( ndr1_0
          & c0_1(a9)
          & ~ c2_1(a9)
          & ~ c3_1(a9) ) )
      & ( ~ hskp5
        | ( ndr1_0
          & c0_1(a11)
          & ~ c1_1(a11)
          & ~ c2_1(a11) ) )
      & ( ~ hskp6
        | ( ndr1_0
          & ~ c0_1(a13)
          & ~ c1_1(a13)
          & ~ c3_1(a13) ) )
      & ( ~ hskp7
        | ( ndr1_0
          & c1_1(a14)
          & ~ c0_1(a14)
          & ~ c2_1(a14) ) )
      & ( ~ hskp8
        | ( ndr1_0
          & ~ c1_1(a15)
          & ~ c2_1(a15)
          & ~ c3_1(a15) ) )
      & ( ~ hskp9
        | ( ndr1_0
          & c0_1(a16)
          & c1_1(a16)
          & ~ c3_1(a16) ) )
      & ( ~ hskp10
        | ( ndr1_0
          & c3_1(a18)
          & ~ c0_1(a18)
          & ~ c1_1(a18) ) )
      & ( ~ hskp11
        | ( ndr1_0
          & c2_1(a19)
          & ~ c0_1(a19)
          & ~ c3_1(a19) ) )
      & ( ~ hskp12
        | ( ndr1_0
          & c2_1(a20)
          & ~ c1_1(a20)
          & ~ c3_1(a20) ) )
      & ( ~ hskp13
        | ( ndr1_0
          & c0_1(a21)
          & c2_1(a21)
          & ~ c3_1(a21) ) )
      & ( ~ hskp14
        | ( ndr1_0
          & c2_1(a22)
          & c3_1(a22)
          & ~ c0_1(a22) ) )
      & ( ~ hskp15
        | ( ndr1_0
          & ~ c0_1(a24)
          & ~ c1_1(a24)
          & ~ c2_1(a24) ) )
      & ( ~ hskp16
        | ( ndr1_0
          & c0_1(a27)
          & c3_1(a27)
          & ~ c1_1(a27) ) )
      & ( ~ hskp17
        | ( ndr1_0
          & c3_1(a28)
          & ~ c0_1(a28)
          & ~ c2_1(a28) ) )
      & ( ~ hskp18
        | ( ndr1_0
          & c1_1(a31)
          & ~ c0_1(a31)
          & ~ c3_1(a31) ) )
      & ( ~ hskp19
        | ( ndr1_0
          & c2_1(a36)
          & c3_1(a36)
          & ~ c1_1(a36) ) )
      & ( ~ hskp20
        | ( ndr1_0
          & c1_1(a37)
          & c3_1(a37)
          & ~ c0_1(a37) ) )
      & ( ~ hskp21
        | ( ndr1_0
          & c0_1(a38)
          & c1_1(a38)
          & ~ c2_1(a38) ) )
      & ( ~ hskp22
        | ( ndr1_0
          & c0_1(a42)
          & c2_1(a42)
          & ~ c1_1(a42) ) )
      & ( ~ hskp23
        | ( ndr1_0
          & c3_1(a45)
          & ~ c1_1(a45)
          & ~ c2_1(a45) ) )
      & ( ~ hskp24
        | ( ndr1_0
          & c2_1(a58)
          & ~ c0_1(a58)
          & ~ c1_1(a58) ) )
      & ( ~ hskp25
        | ( ndr1_0
          & c0_1(a70)
          & ~ c1_1(a70)
          & ~ c3_1(a70) ) )
      & ( ~ hskp26
        | ( ndr1_0
          & c1_1(a99)
          & c2_1(a99)
          & ~ c0_1(a99) ) )
      & ( ~ hskp27
        | ( ndr1_0
          & c0_1(a12)
          & c1_1(a12)
          & c3_1(a12) ) )
      & ( ~ hskp28
        | ( ndr1_0
          & c1_1(a25)
          & c2_1(a25)
          & c3_1(a25) ) )
      & ( ~ hskp29
        | ( ndr1_0
          & c0_1(a35)
          & c1_1(a35)
          & c2_1(a35) ) )
      & ( ~ hskp30
        | ( ndr1_0
          & c0_1(a54)
          & c2_1(a54)
          & c3_1(a54) ) )
      & ( ! [U] :
            ( ndr1_0
           => ( c0_1(U)
              | c1_1(U)
              | c2_1(U) ) )
        | ! [V] :
            ( ndr1_0
           => ( c1_1(V)
              | c3_1(V)
              | ~ c2_1(V) ) )
        | ! [W] :
            ( ndr1_0
           => ( c2_1(W)
              | c3_1(W)
              | ~ c1_1(W) ) ) )
      & ( ! [X] :
            ( ndr1_0
           => ( c0_1(X)
              | c1_1(X)
              | c3_1(X) ) )
        | ! [Y] :
            ( ndr1_0
           => ( c2_1(Y)
              | ~ c0_1(Y)
              | ~ c1_1(Y) ) )
        | ! [Z] :
            ( ndr1_0
           => ( c2_1(Z)
              | ~ c1_1(Z)
              | ~ c3_1(Z) ) ) )
      & ( ! [X1] :
            ( ndr1_0
           => ( c0_1(X1)
              | c1_1(X1)
              | c3_1(X1) ) )
        | hskp0
        | hskp1 )
      & ( ! [X2] :
            ( ndr1_0
           => ( c0_1(X2)
              | c1_1(X2)
              | c3_1(X2) ) )
        | hskp2
        | hskp1 )
      & ( ! [X3] :
            ( ndr1_0
           => ( c0_1(X3)
              | c1_1(X3)
              | ~ c2_1(X3) ) )
        | ! [X4] :
            ( ndr1_0
           => ( c1_1(X4)
              | c2_1(X4)
              | ~ c3_1(X4) ) )
        | hskp2 )
      & ( ! [X5] :
            ( ndr1_0
           => ( c0_1(X5)
              | c1_1(X5)
              | ~ c2_1(X5) ) )
        | ! [X6] :
            ( ndr1_0
           => ( c2_1(X6)
              | ~ c1_1(X6)
              | ~ c3_1(X6) ) )
        | hskp1 )
      & ( ! [X7] :
            ( ndr1_0
           => ( c0_1(X7)
              | c1_1(X7)
              | ~ c2_1(X7) ) )
        | hskp3
        | hskp0 )
      & ( ! [X8] :
            ( ndr1_0
           => ( c0_1(X8)
              | c1_1(X8)
              | ~ c3_1(X8) ) )
        | ! [X9] :
            ( ndr1_0
           => ( c0_1(X9)
              | c2_1(X9)
              | ~ c3_1(X9) ) )
        | ! [X10] :
            ( ndr1_0
           => ( c1_1(X10)
              | c2_1(X10)
              | ~ c0_1(X10) ) ) )
      & ( ! [X11] :
            ( ndr1_0
           => ( c0_1(X11)
              | c1_1(X11)
              | ~ c3_1(X11) ) )
        | ! [X12] :
            ( ndr1_0
           => ( ~ c0_1(X12)
              | ~ c1_1(X12)
              | ~ c3_1(X12) ) )
        | hskp4 )
      & ( ! [X13] :
            ( ndr1_0
           => ( c0_1(X13)
              | c2_1(X13)
              | c3_1(X13) ) )
        | ! [X14] :
            ( ndr1_0
           => ( c0_1(X14)
              | ~ c2_1(X14)
              | ~ c3_1(X14) ) )
        | hskp0 )
      & ( ! [X15] :
            ( ndr1_0
           => ( c0_1(X15)
              | c2_1(X15)
              | c3_1(X15) ) )
        | ! [X16] :
            ( ndr1_0
           => ( c1_1(X16)
              | c2_1(X16)
              | c3_1(X16) ) )
        | ! [X17] :
            ( ndr1_0
           => ( c1_1(X17)
              | ~ c2_1(X17)
              | ~ c3_1(X17) ) ) )
      & ( ! [X18] :
            ( ndr1_0
           => ( c0_1(X18)
              | c2_1(X18)
              | c3_1(X18) ) )
        | ! [X19] :
            ( ndr1_0
           => ( c1_1(X19)
              | c3_1(X19)
              | ~ c2_1(X19) ) )
        | hskp5 )
      & ( ! [X20] :
            ( ndr1_0
           => ( c0_1(X20)
              | c2_1(X20)
              | c3_1(X20) ) )
        | ! [X21] :
            ( ndr1_0
           => ( c1_1(X21)
              | ~ c0_1(X21)
              | ~ c2_1(X21) ) )
        | ! [X22] :
            ( ndr1_0
           => ( c3_1(X22)
              | ~ c1_1(X22)
              | ~ c2_1(X22) ) ) )
      & ( ! [X23] :
            ( ndr1_0
           => ( c0_1(X23)
              | c2_1(X23)
              | c3_1(X23) ) )
        | ! [X24] :
            ( ndr1_0
           => ( c2_1(X24)
              | ~ c0_1(X24)
              | ~ c1_1(X24) ) )
        | hskp27 )
      & ( ! [X25] :
            ( ndr1_0
           => ( c0_1(X25)
              | c2_1(X25)
              | c3_1(X25) ) )
        | ! [X26] :
            ( ndr1_0
           => ( c2_1(X26)
              | ~ c1_1(X26)
              | ~ c3_1(X26) ) )
        | hskp6 )
      & ( ! [X27] :
            ( ndr1_0
           => ( c0_1(X27)
              | c2_1(X27)
              | c3_1(X27) ) )
        | hskp7
        | hskp8 )
      & ( ! [X28] :
            ( ndr1_0
           => ( c0_1(X28)
              | c2_1(X28)
              | ~ c1_1(X28) ) )
        | ! [X29] :
            ( ndr1_0
           => ( c1_1(X29)
              | ~ c2_1(X29)
              | ~ c3_1(X29) ) )
        | ! [X30] :
            ( ndr1_0
           => ( c2_1(X30)
              | c3_1(X30)
              | ~ c0_1(X30) ) ) )
      & ( ! [X31] :
            ( ndr1_0
           => ( c0_1(X31)
              | c2_1(X31)
              | ~ c1_1(X31) ) )
        | ! [X32] :
            ( ndr1_0
           => ( ~ c0_1(X32)
              | ~ c1_1(X32)
              | ~ c2_1(X32) ) )
        | hskp9 )
      & ( ! [X33] :
            ( ndr1_0
           => ( c0_1(X33)
              | c2_1(X33)
              | ~ c1_1(X33) ) )
        | ! [X34] :
            ( ndr1_0
           => ( ~ c0_1(X34)
              | ~ c1_1(X34)
              | ~ c2_1(X34) ) )
        | hskp6 )
      & ( ! [X35] :
            ( ndr1_0
           => ( c0_1(X35)
              | c2_1(X35)
              | ~ c3_1(X35) ) )
        | ! [X36] :
            ( ndr1_0
           => ( c1_1(X36)
              | ~ c2_1(X36)
              | ~ c3_1(X36) ) )
        | hskp10 )
      & ( ! [X37] :
            ( ndr1_0
           => ( c0_1(X37)
              | c2_1(X37)
              | ~ c3_1(X37) ) )
        | ! [X38] :
            ( ndr1_0
           => ( c2_1(X38)
              | c3_1(X38)
              | ~ c1_1(X38) ) )
        | ! [X39] :
            ( ndr1_0
           => ( c3_1(X39)
              | ~ c1_1(X39)
              | ~ c2_1(X39) ) ) )
      & ( ! [X40] :
            ( ndr1_0
           => ( c0_1(X40)
              | c2_1(X40)
              | ~ c3_1(X40) ) )
        | ! [X41] :
            ( ndr1_0
           => ( c2_1(X41)
              | ~ c0_1(X41)
              | ~ c3_1(X41) ) )
        | hskp11 )
      & ( ! [X42] :
            ( ndr1_0
           => ( c0_1(X42)
              | c2_1(X42)
              | ~ c3_1(X42) ) )
        | ! [X43] :
            ( ndr1_0
           => ( c3_1(X43)
              | ~ c0_1(X43)
              | ~ c1_1(X43) ) )
        | hskp12 )
      & ( ! [X44] :
            ( ndr1_0
           => ( c0_1(X44)
              | c2_1(X44)
              | ~ c3_1(X44) ) )
        | hskp13
        | hskp14 )
      & ( ! [X45] :
            ( ndr1_0
           => ( c0_1(X45)
              | c2_1(X45)
              | ~ c3_1(X45) ) )
        | hskp5
        | hskp15 )
      & ( ! [X46] :
            ( ndr1_0
           => ( c0_1(X46)
              | c2_1(X46)
              | ~ c3_1(X46) ) )
        | hskp28
        | hskp7 )
      & ( ! [X47] :
            ( ndr1_0
           => ( c0_1(X47)
              | c3_1(X47)
              | ~ c1_1(X47) ) )
        | hskp16
        | hskp17 )
      & ( ! [X48] :
            ( ndr1_0
           => ( c0_1(X48)
              | c3_1(X48)
              | ~ c2_1(X48) ) )
        | ! [X49] :
            ( ndr1_0
           => ( c1_1(X49)
              | c2_1(X49)
              | c3_1(X49) ) )
        | ! [X50] :
            ( ndr1_0
           => ( c1_1(X50)
              | c3_1(X50)
              | ~ c0_1(X50) ) ) )
      & ( ! [X51] :
            ( ndr1_0
           => ( c0_1(X51)
              | c3_1(X51)
              | ~ c2_1(X51) ) )
        | ! [X52] :
            ( ndr1_0
           => ( c3_1(X52)
              | ~ c1_1(X52)
              | ~ c2_1(X52) ) )
        | hskp6 )
      & ( ! [X53] :
            ( ndr1_0
           => ( c0_1(X53)
              | c3_1(X53)
              | ~ c2_1(X53) ) )
        | hskp3
        | hskp18 )
      & ( ! [X54] :
            ( ndr1_0
           => ( c0_1(X54)
              | c3_1(X54)
              | ~ c2_1(X54) ) )
        | hskp11
        | hskp15 )
      & ( ! [X55] :
            ( ndr1_0
           => ( c0_1(X55)
              | ~ c1_1(X55)
              | ~ c2_1(X55) ) )
        | ! [X56] :
            ( ndr1_0
           => ( c1_1(X56)
              | c2_1(X56)
              | c3_1(X56) ) )
        | hskp9 )
      & ( ! [X57] :
            ( ndr1_0
           => ( c0_1(X57)
              | ~ c1_1(X57)
              | ~ c3_1(X57) ) )
        | hskp29
        | hskp19 )
      & ( ! [X58] :
            ( ndr1_0
           => ( c0_1(X58)
              | ~ c2_1(X58)
              | ~ c3_1(X58) ) )
        | ! [X59] :
            ( ndr1_0
           => ( c3_1(X59)
              | ~ c1_1(X59)
              | ~ c2_1(X59) ) )
        | hskp20 )
      & ( ! [X60] :
            ( ndr1_0
           => ( c0_1(X60)
              | ~ c2_1(X60)
              | ~ c3_1(X60) ) )
        | ! [X61] :
            ( ndr1_0
           => ( ~ c0_1(X61)
              | ~ c2_1(X61)
              | ~ c3_1(X61) ) )
        | ! [X62] :
            ( ndr1_0
           => ( ~ c1_1(X62)
              | ~ c2_1(X62)
              | ~ c3_1(X62) ) ) )
      & ( ! [X63] :
            ( ndr1_0
           => ( c0_1(X63)
              | ~ c2_1(X63)
              | ~ c3_1(X63) ) )
        | hskp21
        | hskp17 )
      & ( ! [X64] :
            ( ndr1_0
           => ( c1_1(X64)
              | c2_1(X64)
              | c3_1(X64) ) )
        | hskp21
        | hskp20 )
      & ( ! [X65] :
            ( ndr1_0
           => ( c1_1(X65)
              | c2_1(X65)
              | ~ c3_1(X65) ) )
        | ! [X66] :
            ( ndr1_0
           => ( c2_1(X66)
              | ~ c0_1(X66)
              | ~ c3_1(X66) ) )
        | ! [X67] :
            ( ndr1_0
           => ( c3_1(X67)
              | ~ c1_1(X67)
              | ~ c2_1(X67) ) ) )
      & ( ! [X68] :
            ( ndr1_0
           => ( c1_1(X68)
              | c2_1(X68)
              | ~ c3_1(X68) ) )
        | ! [X69] :
            ( ndr1_0
           => ( c2_1(X69)
              | ~ c1_1(X69)
              | ~ c3_1(X69) ) )
        | ! [X70] :
            ( ndr1_0
           => ( ~ c0_1(X70)
              | ~ c1_1(X70)
              | ~ c3_1(X70) ) ) )
      & ( ! [X71] :
            ( ndr1_0
           => ( c1_1(X71)
              | c2_1(X71)
              | ~ c3_1(X71) ) )
        | hskp22
        | hskp20 )
      & ( ! [X72] :
            ( ndr1_0
           => ( c1_1(X72)
              | c2_1(X72)
              | ~ c3_1(X72) ) )
        | hskp22
        | hskp23 )
      & ( ! [X73] :
            ( ndr1_0
           => ( c1_1(X73)
              | c2_1(X73)
              | ~ c3_1(X73) ) )
        | hskp13
        | hskp18 )
      & ( ! [X74] :
            ( ndr1_0
           => ( c1_1(X74)
              | c3_1(X74)
              | ~ c0_1(X74) ) )
        | ! [X75] :
            ( ndr1_0
           => ( c1_1(X75)
              | ~ c0_1(X75)
              | ~ c2_1(X75) ) )
        | hskp18 )
      & ( ! [X76] :
            ( ndr1_0
           => ( c1_1(X76)
              | c3_1(X76)
              | ~ c2_1(X76) ) )
        | hskp10
        | hskp1 )
      & ( ! [X77] :
            ( ndr1_0
           => ( c1_1(X77)
              | ~ c0_1(X77)
              | ~ c2_1(X77) ) )
        | ! [X78] :
            ( ndr1_0
           => ( ~ c0_1(X78)
              | ~ c1_1(X78)
              | ~ c3_1(X78) ) )
        | hskp12 )
      & ( ! [X79] :
            ( ndr1_0
           => ( c1_1(X79)
              | ~ c0_1(X79)
              | ~ c2_1(X79) ) )
        | hskp9
        | hskp15 )
      & ( ! [X80] :
            ( ndr1_0
           => ( c1_1(X80)
              | ~ c0_1(X80)
              | ~ c2_1(X80) ) )
        | hskp30
        | hskp12 )
      & ( ! [X81] :
            ( ndr1_0
           => ( c1_1(X81)
              | ~ c0_1(X81)
              | ~ c3_1(X81) ) )
        | ! [X82] :
            ( ndr1_0
           => ( c3_1(X82)
              | ~ c0_1(X82)
              | ~ c2_1(X82) ) )
        | hskp20 )
      & ( ! [X83] :
            ( ndr1_0
           => ( c1_1(X83)
              | ~ c0_1(X83)
              | ~ c3_1(X83) ) )
        | hskp13
        | hskp24 )
      & ( ! [X84] :
            ( ndr1_0
           => ( c1_1(X84)
              | ~ c0_1(X84)
              | ~ c3_1(X84) ) )
        | hskp4
        | hskp15 )
      & ( ! [X85] :
            ( ndr1_0
           => ( c1_1(X85)
              | ~ c0_1(X85)
              | ~ c3_1(X85) ) )
        | hskp18
        | hskp23 )
      & ( ! [X86] :
            ( ndr1_0
           => ( c2_1(X86)
              | c3_1(X86)
              | ~ c0_1(X86) ) )
        | hskp21
        | hskp4 )
      & ( ! [X87] :
            ( ndr1_0
           => ( c2_1(X87)
              | c3_1(X87)
              | ~ c0_1(X87) ) )
        | hskp22
        | hskp12 )
      & ( ! [X88] :
            ( ndr1_0
           => ( c2_1(X88)
              | ~ c0_1(X88)
              | ~ c1_1(X88) ) )
        | ! [X89] :
            ( ndr1_0
           => ( c2_1(X89)
              | ~ c0_1(X89)
              | ~ c3_1(X89) ) )
        | ! [X90] :
            ( ndr1_0
           => ( c3_1(X90)
              | ~ c0_1(X90)
              | ~ c1_1(X90) ) ) )
      & ( ! [X91] :
            ( ndr1_0
           => ( c2_1(X91)
              | ~ c0_1(X91)
              | ~ c1_1(X91) ) )
        | hskp16
        | hskp14 )
      & ( ! [X92] :
            ( ndr1_0
           => ( c2_1(X92)
              | ~ c0_1(X92)
              | ~ c1_1(X92) ) )
        | hskp5
        | hskp25 )
      & ( ! [X93] :
            ( ndr1_0
           => ( c2_1(X93)
              | ~ c0_1(X93)
              | ~ c1_1(X93) ) )
        | hskp14
        | hskp17 )
      & ( ! [X94] :
            ( ndr1_0
           => ( c2_1(X94)
              | ~ c0_1(X94)
              | ~ c1_1(X94) ) )
        | hskp24
        | hskp6 )
      & ( ! [X95] :
            ( ndr1_0
           => ( c2_1(X95)
              | ~ c0_1(X95)
              | ~ c3_1(X95) ) )
        | hskp29
        | hskp9 )
      & ( ! [X96] :
            ( ndr1_0
           => ( c2_1(X96)
              | ~ c1_1(X96)
              | ~ c3_1(X96) ) )
        | ! [X97] :
            ( ndr1_0
           => ( c3_1(X97)
              | ~ c1_1(X97)
              | ~ c2_1(X97) ) )
        | hskp9 )
      & ( ! [X98] :
            ( ndr1_0
           => ( c2_1(X98)
              | ~ c1_1(X98)
              | ~ c3_1(X98) ) )
        | hskp28
        | hskp0 )
      & ( ! [X99] :
            ( ndr1_0
           => ( c3_1(X99)
              | ~ c0_1(X99)
              | ~ c1_1(X99) ) )
        | ! [X100] :
            ( ndr1_0
           => ( ~ c0_1(X100)
              | ~ c1_1(X100)
              | ~ c3_1(X100) ) )
        | hskp8 )
      & ( ! [X101] :
            ( ndr1_0
           => ( c3_1(X101)
              | ~ c0_1(X101)
              | ~ c1_1(X101) ) )
        | hskp21
        | hskp10 )
      & ( ! [X102] :
            ( ndr1_0
           => ( c3_1(X102)
              | ~ c0_1(X102)
              | ~ c2_1(X102) ) )
        | ! [X103] :
            ( ndr1_0
           => ( c3_1(X103)
              | ~ c1_1(X103)
              | ~ c2_1(X103) ) )
        | hskp6 )
      & ( ! [X104] :
            ( ndr1_0
           => ( ~ c0_1(X104)
              | ~ c1_1(X104)
              | ~ c2_1(X104) ) )
        | ! [X105] :
            ( ndr1_0
           => ( ~ c0_1(X105)
              | ~ c1_1(X105)
              | ~ c3_1(X105) ) )
        | hskp7 )
      & ( ! [X106] :
            ( ndr1_0
           => ( ~ c0_1(X106)
              | ~ c1_1(X106)
              | ~ c2_1(X106) ) )
        | hskp19
        | hskp11 )
      & ( ! [X107] :
            ( ndr1_0
           => ( ~ c0_1(X107)
              | ~ c1_1(X107)
              | ~ c3_1(X107) ) )
        | ! [X108] :
            ( ndr1_0
           => ( ~ c1_1(X108)
              | ~ c2_1(X108)
              | ~ c3_1(X108) ) )
        | hskp25 )
      & ( ! [X109] :
            ( ndr1_0
           => ( ~ c0_1(X109)
              | ~ c1_1(X109)
              | ~ c3_1(X109) ) )
        | hskp27
        | hskp16 )
      & ( ! [X110] :
            ( ndr1_0
           => ( ~ c0_1(X110)
              | ~ c1_1(X110)
              | ~ c3_1(X110) ) )
        | hskp30
        | hskp3 )
      & ( ! [X111] :
            ( ndr1_0
           => ( ~ c0_1(X111)
              | ~ c1_1(X111)
              | ~ c3_1(X111) ) )
        | hskp22
        | hskp0 )
      & ( ! [X112] :
            ( ndr1_0
           => ( ~ c0_1(X112)
              | ~ c1_1(X112)
              | ~ c3_1(X112) ) )
        | hskp5
        | hskp25 )
      & ( ! [X113] :
            ( ndr1_0
           => ( ~ c1_1(X113)
              | ~ c2_1(X113)
              | ~ c3_1(X113) ) )
        | hskp3
        | hskp24 )
      & ( hskp29
        | hskp26
        | hskp14 )
      & ( hskp27
        | hskp13
        | hskp8 )
      & ( hskp21
        | hskp13
        | hskp24 )
      & ( hskp9
        | hskp2
        | hskp17 )
      & ( hskp16
        | hskp4
        | hskp2 )
      & ( hskp5
        | hskp25
        | hskp28 )
      & ( hskp4
        | hskp28
        | hskp19 )
      & ( hskp28
        | hskp20
        | hskp1 ) ) ).

%--------------------------------------------------------------------------
