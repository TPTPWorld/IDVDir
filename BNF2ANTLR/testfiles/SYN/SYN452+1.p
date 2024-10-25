%--------------------------------------------------------------------------
% File     : SYN452+1 : TPTP v9.0.0. Released v2.1.0.
% Domain   : Syntactic (Translated)
% Problem  : ALC, N=4, R=1, L=60, K=3, D=1, P=0, Index=034
% Version  : Especial.
% English  :

% Refs     : [OS95]  Ohlbach & Schmidt (1995), Functional Translation and S
%          : [HS97]  Hustadt & Schmidt (1997), On Evaluating Decision Proce
%          : [Wei97] Weidenbach (1997), Email to G. Sutcliffe
% Source   : [Wei97]
% Names    : alc-4-1-60-3-1-034.dfg [Wei97]

% Status   : Theorem
% Rating   : 0.00 v6.1.0, 0.17 v6.0.0, 0.00 v5.5.0, 0.33 v5.3.0, 0.27 v5.2.0, 0.00 v4.1.0, 0.44 v4.0.1, 0.42 v4.0.0, 0.45 v3.7.0, 0.67 v3.5.0, 0.38 v3.4.0, 0.25 v3.3.0, 0.22 v3.2.0, 0.33 v3.1.0, 0.67 v2.7.0, 0.33 v2.6.0, 0.00 v2.5.0, 0.33 v2.4.0, 0.33 v2.2.1, 0.50 v2.2.0, 0.00 v2.1.0
% Syntax   : Number of formulae    :    1 (   0 unt;   0 def)
%            Number of atoms       :  603 (   0 equ)
%            Maximal formula atoms :  603 ( 603 avg)
%            Number of connectives :  805 ( 203   ~; 331   |; 179   &)
%                                         (   0 <=>;  92  =>;   0  <=;   0 <~>)
%            Maximal formula depth :   93 (  93 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :   35 (  35 usr;  31 prp; 0-1 aty)
%            Number of functors    :   30 (  30 usr;  30 con; 0-0 aty)
%            Number of variables   :   92 (  92   !;   0   ?)
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
          & c0_1(a815)
          & c1_1(a815)
          & ~ c3_1(a815) ) )
      & ( ~ hskp1
        | ( ndr1_0
          & c0_1(a816)
          & c3_1(a816)
          & ~ c2_1(a816) ) )
      & ( ~ hskp2
        | ( ndr1_0
          & c2_1(a817)
          & ~ c0_1(a817)
          & ~ c3_1(a817) ) )
      & ( ~ hskp3
        | ( ndr1_0
          & c0_1(a820)
          & ~ c1_1(a820)
          & ~ c3_1(a820) ) )
      & ( ~ hskp4
        | ( ndr1_0
          & c2_1(a821)
          & ~ c0_1(a821)
          & ~ c1_1(a821) ) )
      & ( ~ hskp5
        | ( ndr1_0
          & c1_1(a825)
          & c3_1(a825)
          & ~ c0_1(a825) ) )
      & ( ~ hskp6
        | ( ndr1_0
          & c1_1(a827)
          & c2_1(a827)
          & ~ c0_1(a827) ) )
      & ( ~ hskp7
        | ( ndr1_0
          & c0_1(a828)
          & ~ c1_1(a828)
          & ~ c2_1(a828) ) )
      & ( ~ hskp8
        | ( ndr1_0
          & ~ c0_1(a830)
          & ~ c2_1(a830)
          & ~ c3_1(a830) ) )
      & ( ~ hskp9
        | ( ndr1_0
          & c3_1(a831)
          & ~ c0_1(a831)
          & ~ c1_1(a831) ) )
      & ( ~ hskp10
        | ( ndr1_0
          & c0_1(a834)
          & c2_1(a834)
          & ~ c1_1(a834) ) )
      & ( ~ hskp11
        | ( ndr1_0
          & c2_1(a835)
          & c3_1(a835)
          & ~ c0_1(a835) ) )
      & ( ~ hskp12
        | ( ndr1_0
          & c0_1(a838)
          & c2_1(a838)
          & ~ c3_1(a838) ) )
      & ( ~ hskp13
        | ( ndr1_0
          & c1_1(a839)
          & c3_1(a839)
          & ~ c2_1(a839) ) )
      & ( ~ hskp14
        | ( ndr1_0
          & c0_1(a842)
          & c1_1(a842)
          & ~ c2_1(a842) ) )
      & ( ~ hskp15
        | ( ndr1_0
          & c2_1(a844)
          & ~ c1_1(a844)
          & ~ c3_1(a844) ) )
      & ( ~ hskp16
        | ( ndr1_0
          & c2_1(a848)
          & c3_1(a848)
          & ~ c1_1(a848) ) )
      & ( ~ hskp17
        | ( ndr1_0
          & c1_1(a852)
          & ~ c2_1(a852)
          & ~ c3_1(a852) ) )
      & ( ~ hskp18
        | ( ndr1_0
          & c1_1(a854)
          & ~ c0_1(a854)
          & ~ c2_1(a854) ) )
      & ( ~ hskp19
        | ( ndr1_0
          & ~ c0_1(a855)
          & ~ c1_1(a855)
          & ~ c3_1(a855) ) )
      & ( ~ hskp20
        | ( ndr1_0
          & c3_1(a856)
          & ~ c1_1(a856)
          & ~ c2_1(a856) ) )
      & ( ~ hskp21
        | ( ndr1_0
          & c0_1(a857)
          & ~ c2_1(a857)
          & ~ c3_1(a857) ) )
      & ( ~ hskp22
        | ( ndr1_0
          & ~ c0_1(a860)
          & ~ c1_1(a860)
          & ~ c2_1(a860) ) )
      & ( ~ hskp23
        | ( ndr1_0
          & c0_1(a862)
          & c3_1(a862)
          & ~ c1_1(a862) ) )
      & ( ~ hskp24
        | ( ndr1_0
          & c1_1(a878)
          & ~ c0_1(a878)
          & ~ c3_1(a878) ) )
      & ( ~ hskp25
        | ( ndr1_0
          & c1_1(a892)
          & c2_1(a892)
          & ~ c3_1(a892) ) )
      & ( ~ hskp26
        | ( ndr1_0
          & c0_1(a818)
          & c1_1(a818)
          & c2_1(a818) ) )
      & ( ~ hskp27
        | ( ndr1_0
          & c0_1(a826)
          & c2_1(a826)
          & c3_1(a826) ) )
      & ( ~ hskp28
        | ( ndr1_0
          & c0_1(a833)
          & c1_1(a833)
          & c3_1(a833) ) )
      & ( ~ hskp29
        | ( ndr1_0
          & c1_1(a865)
          & c2_1(a865)
          & c3_1(a865) ) )
      & ( ! [U] :
            ( ndr1_0
           => ( c0_1(U)
              | c1_1(U)
              | c2_1(U) ) )
        | ! [V] :
            ( ndr1_0
           => ( c1_1(V)
              | c2_1(V)
              | c3_1(V) ) )
        | hskp0 )
      & ( ! [W] :
            ( ndr1_0
           => ( c0_1(W)
              | c1_1(W)
              | c2_1(W) ) )
        | ! [X] :
            ( ndr1_0
           => ( c1_1(X)
              | c2_1(X)
              | ~ c0_1(X) ) )
        | hskp1 )
      & ( ! [Y] :
            ( ndr1_0
           => ( c0_1(Y)
              | c1_1(Y)
              | c2_1(Y) ) )
        | ! [Z] :
            ( ndr1_0
           => ( c3_1(Z)
              | ~ c0_1(Z)
              | ~ c2_1(Z) ) )
        | hskp2 )
      & ( ! [X1] :
            ( ndr1_0
           => ( c0_1(X1)
              | c1_1(X1)
              | c3_1(X1) ) )
        | ! [X2] :
            ( ndr1_0
           => ( c0_1(X2)
              | c1_1(X2)
              | ~ c3_1(X2) ) ) )
      & ( ! [X3] :
            ( ndr1_0
           => ( c0_1(X3)
              | c1_1(X3)
              | c3_1(X3) ) )
        | hskp26
        | hskp0 )
      & ( ! [X4] :
            ( ndr1_0
           => ( c0_1(X4)
              | c1_1(X4)
              | ~ c2_1(X4) ) )
        | ! [X5] :
            ( ndr1_0
           => ( c0_1(X5)
              | ~ c1_1(X5)
              | ~ c3_1(X5) ) )
        | ! [X6] :
            ( ndr1_0
           => ( c3_1(X6)
              | ~ c0_1(X6)
              | ~ c1_1(X6) ) ) )
      & ( ! [X7] :
            ( ndr1_0
           => ( c0_1(X7)
              | c1_1(X7)
              | ~ c2_1(X7) ) )
        | hskp3
        | hskp4 )
      & ( ! [X8] :
            ( ndr1_0
           => ( c0_1(X8)
              | c1_1(X8)
              | ~ c3_1(X8) ) )
        | ! [X9] :
            ( ndr1_0
           => ( c0_1(X9)
              | ~ c1_1(X9)
              | ~ c2_1(X9) ) )
        | hskp3 )
      & ( ! [X10] :
            ( ndr1_0
           => ( c0_1(X10)
              | c1_1(X10)
              | ~ c3_1(X10) ) )
        | ! [X11] :
            ( ndr1_0
           => ( c1_1(X11)
              | c2_1(X11)
              | ~ c3_1(X11) ) )
        | hskp2 )
      & ( ! [X12] :
            ( ndr1_0
           => ( c0_1(X12)
              | c2_1(X12)
              | c3_1(X12) ) )
        | ! [X13] :
            ( ndr1_0
           => ( c0_1(X13)
              | c2_1(X13)
              | ~ c3_1(X13) ) )
        | hskp4 )
      & ( ! [X14] :
            ( ndr1_0
           => ( c0_1(X14)
              | c2_1(X14)
              | c3_1(X14) ) )
        | ! [X15] :
            ( ndr1_0
           => ( c2_1(X15)
              | c3_1(X15)
              | ~ c0_1(X15) ) )
        | hskp5 )
      & ( ! [X16] :
            ( ndr1_0
           => ( c0_1(X16)
              | c2_1(X16)
              | c3_1(X16) ) )
        | hskp27
        | hskp6 )
      & ( ! [X17] :
            ( ndr1_0
           => ( c0_1(X17)
              | c2_1(X17)
              | c3_1(X17) ) )
        | hskp7
        | hskp4 )
      & ( ! [X18] :
            ( ndr1_0
           => ( c0_1(X18)
              | c2_1(X18)
              | ~ c1_1(X18) ) )
        | ! [X19] :
            ( ndr1_0
           => ( c2_1(X19)
              | c3_1(X19)
              | ~ c0_1(X19) ) )
        | hskp8 )
      & ( ! [X20] :
            ( ndr1_0
           => ( c0_1(X20)
              | c2_1(X20)
              | ~ c1_1(X20) ) )
        | ! [X21] :
            ( ndr1_0
           => ( c2_1(X21)
              | ~ c0_1(X21)
              | ~ c3_1(X21) ) )
        | ! [X22] :
            ( ndr1_0
           => ( c2_1(X22)
              | ~ c1_1(X22)
              | ~ c3_1(X22) ) ) )
      & ( ! [X23] :
            ( ndr1_0
           => ( c0_1(X23)
              | c2_1(X23)
              | ~ c1_1(X23) ) )
        | ! [X24] :
            ( ndr1_0
           => ( c2_1(X24)
              | ~ c0_1(X24)
              | ~ c3_1(X24) ) )
        | hskp9 )
      & ( ! [X25] :
            ( ndr1_0
           => ( c0_1(X25)
              | c2_1(X25)
              | ~ c3_1(X25) ) )
        | ! [X26] :
            ( ndr1_0
           => ( c1_1(X26)
              | ~ c0_1(X26)
              | ~ c3_1(X26) ) )
        | ! [X27] :
            ( ndr1_0
           => ( c2_1(X27)
              | ~ c1_1(X27)
              | ~ c3_1(X27) ) ) )
      & ( ! [X28] :
            ( ndr1_0
           => ( c0_1(X28)
              | c2_1(X28)
              | ~ c3_1(X28) ) )
        | hskp26
        | hskp28 )
      & ( ! [X29] :
            ( ndr1_0
           => ( c0_1(X29)
              | c2_1(X29)
              | ~ c3_1(X29) ) )
        | hskp10
        | hskp11 )
      & ( ! [X30] :
            ( ndr1_0
           => ( c0_1(X30)
              | c3_1(X30)
              | ~ c1_1(X30) ) )
        | ! [X31] :
            ( ndr1_0
           => ( c2_1(X31)
              | ~ c0_1(X31)
              | ~ c1_1(X31) ) )
        | hskp26 )
      & ( ! [X32] :
            ( ndr1_0
           => ( c0_1(X32)
              | c3_1(X32)
              | ~ c1_1(X32) ) )
        | ! [X33] :
            ( ndr1_0
           => ( c3_1(X33)
              | ~ c0_1(X33)
              | ~ c2_1(X33) ) )
        | hskp6 )
      & ( ! [X34] :
            ( ndr1_0
           => ( c0_1(X34)
              | c3_1(X34)
              | ~ c1_1(X34) ) )
        | hskp12
        | hskp13 )
      & ( ! [X35] :
            ( ndr1_0
           => ( c0_1(X35)
              | c3_1(X35)
              | ~ c2_1(X35) ) )
        | ! [X36] :
            ( ndr1_0
           => ( c1_1(X36)
              | c2_1(X36)
              | c3_1(X36) ) )
        | ! [X37] :
            ( ndr1_0
           => ( c3_1(X37)
              | ~ c1_1(X37)
              | ~ c2_1(X37) ) ) )
      & ( ! [X38] :
            ( ndr1_0
           => ( c0_1(X38)
              | c3_1(X38)
              | ~ c2_1(X38) ) )
        | ! [X39] :
            ( ndr1_0
           => ( c1_1(X39)
              | c3_1(X39)
              | ~ c2_1(X39) ) )
        | hskp2 )
      & ( ! [X40] :
            ( ndr1_0
           => ( c0_1(X40)
              | ~ c1_1(X40)
              | ~ c2_1(X40) ) )
        | ! [X41] :
            ( ndr1_0
           => ( c1_1(X41)
              | c2_1(X41)
              | ~ c3_1(X41) ) )
        | ! [X42] :
            ( ndr1_0
           => ( c2_1(X42)
              | ~ c0_1(X42)
              | ~ c1_1(X42) ) ) )
      & ( ! [X43] :
            ( ndr1_0
           => ( c0_1(X43)
              | ~ c1_1(X43)
              | ~ c3_1(X43) ) )
        | ! [X44] :
            ( ndr1_0
           => ( c3_1(X44)
              | ~ c0_1(X44)
              | ~ c1_1(X44) ) )
        | hskp9 )
      & ( ! [X45] :
            ( ndr1_0
           => ( c0_1(X45)
              | ~ c1_1(X45)
              | ~ c3_1(X45) ) )
        | hskp14
        | hskp13 )
      & ( ! [X46] :
            ( ndr1_0
           => ( c0_1(X46)
              | ~ c1_1(X46)
              | ~ c3_1(X46) ) )
        | hskp15
        | hskp8 )
      & ( ! [X47] :
            ( ndr1_0
           => ( c0_1(X47)
              | ~ c2_1(X47)
              | ~ c3_1(X47) ) )
        | ! [X48] :
            ( ndr1_0
           => ( c1_1(X48)
              | ~ c0_1(X48)
              | ~ c2_1(X48) ) )
        | ! [X49] :
            ( ndr1_0
           => ( c2_1(X49)
              | c3_1(X49)
              | ~ c1_1(X49) ) ) )
      & ( ! [X50] :
            ( ndr1_0
           => ( c1_1(X50)
              | c2_1(X50)
              | c3_1(X50) ) )
        | ! [X51] :
            ( ndr1_0
           => ( c1_1(X51)
              | c2_1(X51)
              | ~ c0_1(X51) ) )
        | ! [X52] :
            ( ndr1_0
           => ( ~ c1_1(X52)
              | ~ c2_1(X52)
              | ~ c3_1(X52) ) ) )
      & ( ! [X53] :
            ( ndr1_0
           => ( c1_1(X53)
              | c2_1(X53)
              | c3_1(X53) ) )
        | ! [X54] :
            ( ndr1_0
           => ( c1_1(X54)
              | ~ c2_1(X54)
              | ~ c3_1(X54) ) )
        | hskp6 )
      & ( ! [X55] :
            ( ndr1_0
           => ( c1_1(X55)
              | c2_1(X55)
              | c3_1(X55) ) )
        | hskp27 )
      & ( ! [X56] :
            ( ndr1_0
           => ( c1_1(X56)
              | c2_1(X56)
              | ~ c0_1(X56) ) )
        | ! [X57] :
            ( ndr1_0
           => ( c1_1(X57)
              | c2_1(X57)
              | ~ c3_1(X57) ) )
        | ! [X58] :
            ( ndr1_0
           => ( ~ c0_1(X58)
              | ~ c1_1(X58)
              | ~ c3_1(X58) ) ) )
      & ( ! [X59] :
            ( ndr1_0
           => ( c1_1(X59)
              | c2_1(X59)
              | ~ c0_1(X59) ) )
        | ! [X60] :
            ( ndr1_0
           => ( c1_1(X60)
              | ~ c2_1(X60)
              | ~ c3_1(X60) ) )
        | hskp16 )
      & ( ! [X61] :
            ( ndr1_0
           => ( c1_1(X61)
              | c2_1(X61)
              | ~ c0_1(X61) ) )
        | ! [X62] :
            ( ndr1_0
           => ( c2_1(X62)
              | ~ c0_1(X62)
              | ~ c3_1(X62) ) )
        | hskp9 )
      & ( ! [X63] :
            ( ndr1_0
           => ( c1_1(X63)
              | c2_1(X63)
              | ~ c3_1(X63) ) )
        | ! [X64] :
            ( ndr1_0
           => ( ~ c0_1(X64)
              | ~ c1_1(X64)
              | ~ c3_1(X64) ) )
        | hskp3 )
      & ( ! [X65] :
            ( ndr1_0
           => ( c1_1(X65)
              | c3_1(X65)
              | ~ c0_1(X65) ) )
        | hskp12
        | hskp17 )
      & ( ! [X66] :
            ( ndr1_0
           => ( c1_1(X66)
              | c3_1(X66)
              | ~ c0_1(X66) ) )
        | hskp3
        | hskp18 )
      & ( ! [X67] :
            ( ndr1_0
           => ( c1_1(X67)
              | ~ c0_1(X67)
              | ~ c2_1(X67) ) )
        | ! [X68] :
            ( ndr1_0
           => ( c2_1(X68)
              | ~ c0_1(X68)
              | ~ c1_1(X68) ) )
        | hskp19 )
      & ( ! [X69] :
            ( ndr1_0
           => ( c1_1(X69)
              | ~ c0_1(X69)
              | ~ c3_1(X69) ) )
        | ! [X70] :
            ( ndr1_0
           => ( c1_1(X70)
              | ~ c2_1(X70)
              | ~ c3_1(X70) ) )
        | hskp20 )
      & ( ! [X71] :
            ( ndr1_0
           => ( c1_1(X71)
              | ~ c0_1(X71)
              | ~ c3_1(X71) ) )
        | hskp21
        | hskp13 )
      & ( ! [X72] :
            ( ndr1_0
           => ( c1_1(X72)
              | ~ c2_1(X72)
              | ~ c3_1(X72) ) )
        | hskp14
        | hskp22 )
      & ( ! [X73] :
            ( ndr1_0
           => ( c2_1(X73)
              | c3_1(X73)
              | ~ c0_1(X73) ) )
        | ! [X74] :
            ( ndr1_0
           => ( ~ c0_1(X74)
              | ~ c1_1(X74)
              | ~ c3_1(X74) ) )
        | hskp15 )
      & ( ! [X75] :
            ( ndr1_0
           => ( c2_1(X75)
              | c3_1(X75)
              | ~ c1_1(X75) ) )
        | ! [X76] :
            ( ndr1_0
           => ( c2_1(X76)
              | ~ c0_1(X76)
              | ~ c3_1(X76) ) )
        | hskp23 )
      & ( ! [X77] :
            ( ndr1_0
           => ( c2_1(X77)
              | c3_1(X77)
              | ~ c1_1(X77) ) )
        | hskp1
        | hskp22 )
      & ( ! [X78] :
            ( ndr1_0
           => ( c2_1(X78)
              | ~ c0_1(X78)
              | ~ c1_1(X78) ) )
        | hskp29
        | hskp19 )
      & ( ! [X79] :
            ( ndr1_0
           => ( c2_1(X79)
              | ~ c0_1(X79)
              | ~ c3_1(X79) ) )
        | ! [X80] :
            ( ndr1_0
           => ( ~ c0_1(X80)
              | ~ c1_1(X80)
              | ~ c3_1(X80) ) )
        | hskp29 )
      & ( ! [X81] :
            ( ndr1_0
           => ( c3_1(X81)
              | ~ c1_1(X81)
              | ~ c2_1(X81) ) )
        | hskp14
        | hskp7 )
      & ( ! [X82] :
            ( ndr1_0
           => ( c3_1(X82)
              | ~ c1_1(X82)
              | ~ c2_1(X82) ) )
        | hskp14
        | hskp15 )
      & ( ! [X83] :
            ( ndr1_0
           => ( c3_1(X83)
              | ~ c1_1(X83)
              | ~ c2_1(X83) ) )
        | hskp1
        | hskp2 )
      & ( ! [X84] :
            ( ndr1_0
           => ( ~ c0_1(X84)
              | ~ c1_1(X84)
              | ~ c3_1(X84) ) )
        | ! [X85] :
            ( ndr1_0
           => ( ~ c1_1(X85)
              | ~ c2_1(X85)
              | ~ c3_1(X85) ) )
        | hskp8 )
      & ( ! [X86] :
            ( ndr1_0
           => ( ~ c0_1(X86)
              | ~ c2_1(X86)
              | ~ c3_1(X86) ) )
        | hskp23
        | hskp3 )
      & ( hskp28
        | hskp24
        | hskp20 )
      & ( hskp14
        | hskp12
        | hskp11 )
      & ( hskp14
        | hskp24 )
      & ( hskp27
        | hskp18
        | hskp9 )
      & ( hskp27
        | hskp17
        | hskp15 )
      & ( hskp23
        | hskp25
        | hskp5 )
      & ( hskp7
        | hskp5
        | hskp13 )
      & ( hskp13
        | hskp16
        | hskp19 ) ) ).

%--------------------------------------------------------------------------
