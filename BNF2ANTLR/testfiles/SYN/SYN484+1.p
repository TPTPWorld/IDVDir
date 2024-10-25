%--------------------------------------------------------------------------
% File     : SYN484+1 : TPTP v9.0.0. Released v2.1.0.
% Domain   : Syntactic (Translated)
% Problem  : ALC, N=4, R=1, L=76, K=3, D=1, P=0, Index=036
% Version  : Especial.
% English  :

% Refs     : [OS95]  Ohlbach & Schmidt (1995), Functional Translation and S
%          : [HS97]  Hustadt & Schmidt (1997), On Evaluating Decision Proce
%          : [Wei97] Weidenbach (1997), Email to G. Sutcliffe
% Source   : [Wei97]
% Names    : alc-4-1-76-3-1-036.dfg [Wei97]

% Status   : Theorem
% Rating   : 0.00 v5.5.0, 0.22 v5.4.0, 0.33 v5.3.0, 0.27 v5.2.0, 0.00 v5.0.0, 0.25 v4.1.0, 0.39 v4.0.1, 0.42 v4.0.0, 0.45 v3.7.0, 0.67 v3.5.0, 0.38 v3.4.0, 0.25 v3.3.0, 0.22 v3.2.0, 0.33 v3.1.0, 0.67 v2.7.0, 0.33 v2.6.0, 0.00 v2.5.0, 0.33 v2.4.0, 0.33 v2.2.1, 0.50 v2.2.0, 0.00 v2.1.0
% Syntax   : Number of formulae    :    1 (   0 unt;   0 def)
%            Number of atoms       :  742 (   0 equ)
%            Maximal formula atoms :  742 ( 742 avg)
%            Number of connectives : 1006 ( 265   ~; 421   |; 198   &)
%                                         (   0 <=>; 122  =>;   0  <=;   0 <~>)
%            Maximal formula depth :  109 ( 109 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :   36 (  36 usr;  32 prp; 0-1 aty)
%            Number of functors    :   31 (  31 usr;  31 con; 0-0 aty)
%            Number of variables   :  122 ( 122   !;   0   ?)
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
          & ~ c1_1(a1969)
          & ~ c2_1(a1969)
          & ~ c3_1(a1969) ) )
      & ( ~ hskp1
        | ( ndr1_0
          & c0_1(a1971)
          & c2_1(a1971)
          & ~ c1_1(a1971) ) )
      & ( ~ hskp2
        | ( ndr1_0
          & c1_1(a1973)
          & c3_1(a1973)
          & ~ c2_1(a1973) ) )
      & ( ~ hskp3
        | ( ndr1_0
          & c1_1(a1974)
          & c2_1(a1974)
          & ~ c0_1(a1974) ) )
      & ( ~ hskp4
        | ( ndr1_0
          & c0_1(a1975)
          & ~ c1_1(a1975)
          & ~ c2_1(a1975) ) )
      & ( ~ hskp5
        | ( ndr1_0
          & c1_1(a1977)
          & ~ c2_1(a1977)
          & ~ c3_1(a1977) ) )
      & ( ~ hskp6
        | ( ndr1_0
          & c3_1(a1979)
          & ~ c0_1(a1979)
          & ~ c2_1(a1979) ) )
      & ( ~ hskp7
        | ( ndr1_0
          & c0_1(a1981)
          & c1_1(a1981)
          & ~ c3_1(a1981) ) )
      & ( ~ hskp8
        | ( ndr1_0
          & c3_1(a1983)
          & ~ c0_1(a1983)
          & ~ c1_1(a1983) ) )
      & ( ~ hskp9
        | ( ndr1_0
          & c1_1(a1985)
          & ~ c0_1(a1985)
          & ~ c3_1(a1985) ) )
      & ( ~ hskp10
        | ( ndr1_0
          & c2_1(a1987)
          & c3_1(a1987)
          & ~ c1_1(a1987) ) )
      & ( ~ hskp11
        | ( ndr1_0
          & c2_1(a1989)
          & ~ c0_1(a1989)
          & ~ c3_1(a1989) ) )
      & ( ~ hskp12
        | ( ndr1_0
          & c3_1(a1990)
          & ~ c1_1(a1990)
          & ~ c2_1(a1990) ) )
      & ( ~ hskp13
        | ( ndr1_0
          & c0_1(a1991)
          & c2_1(a1991)
          & ~ c3_1(a1991) ) )
      & ( ~ hskp14
        | ( ndr1_0
          & c1_1(a1992)
          & ~ c0_1(a1992)
          & ~ c2_1(a1992) ) )
      & ( ~ hskp15
        | ( ndr1_0
          & c2_1(a1993)
          & ~ c0_1(a1993)
          & ~ c1_1(a1993) ) )
      & ( ~ hskp16
        | ( ndr1_0
          & c0_1(a1996)
          & c3_1(a1996)
          & ~ c2_1(a1996) ) )
      & ( ~ hskp17
        | ( ndr1_0
          & c1_1(a1998)
          & c3_1(a1998)
          & ~ c0_1(a1998) ) )
      & ( ~ hskp18
        | ( ndr1_0
          & ~ c0_1(a2000)
          & ~ c1_1(a2000)
          & ~ c3_1(a2000) ) )
      & ( ~ hskp19
        | ( ndr1_0
          & c2_1(a2001)
          & c3_1(a2001)
          & ~ c0_1(a2001) ) )
      & ( ~ hskp20
        | ( ndr1_0
          & c1_1(a2003)
          & c2_1(a2003)
          & ~ c3_1(a2003) ) )
      & ( ~ hskp21
        | ( ndr1_0
          & c2_1(a2009)
          & ~ c1_1(a2009)
          & ~ c3_1(a2009) ) )
      & ( ~ hskp22
        | ( ndr1_0
          & c0_1(a2012)
          & ~ c2_1(a2012)
          & ~ c3_1(a2012) ) )
      & ( ~ hskp23
        | ( ndr1_0
          & c0_1(a2014)
          & c1_1(a2014)
          & ~ c2_1(a2014) ) )
      & ( ~ hskp24
        | ( ndr1_0
          & ~ c0_1(a2031)
          & ~ c1_1(a2031)
          & ~ c2_1(a2031) ) )
      & ( ~ hskp25
        | ( ndr1_0
          & ~ c0_1(a2041)
          & ~ c2_1(a2041)
          & ~ c3_1(a2041) ) )
      & ( ~ hskp26
        | ( ndr1_0
          & c0_1(a2049)
          & c3_1(a2049)
          & ~ c1_1(a2049) ) )
      & ( ~ hskp27
        | ( ndr1_0
          & c1_1(a1970)
          & c2_1(a1970)
          & c3_1(a1970) ) )
      & ( ~ hskp28
        | ( ndr1_0
          & c0_1(a1972)
          & c1_1(a1972)
          & c3_1(a1972) ) )
      & ( ~ hskp29
        | ( ndr1_0
          & c0_1(a1978)
          & c1_1(a1978)
          & c2_1(a1978) ) )
      & ( ~ hskp30
        | ( ndr1_0
          & c0_1(a2005)
          & c2_1(a2005)
          & c3_1(a2005) ) )
      & ( ! [U] :
            ( ndr1_0
           => ( c0_1(U)
              | c1_1(U)
              | c2_1(U) ) )
        | ! [V] :
            ( ndr1_0
           => ( c1_1(V)
              | c2_1(V)
              | ~ c0_1(V) ) )
        | hskp0 )
      & ( ! [W] :
            ( ndr1_0
           => ( c0_1(W)
              | c1_1(W)
              | c3_1(W) ) )
        | ! [X] :
            ( ndr1_0
           => ( c0_1(X)
              | c2_1(X)
              | c3_1(X) ) )
        | hskp27 )
      & ( ! [Y] :
            ( ndr1_0
           => ( c0_1(Y)
              | c1_1(Y)
              | c3_1(Y) ) )
        | ! [Z] :
            ( ndr1_0
           => ( c0_1(Z)
              | c2_1(Z)
              | ~ c3_1(Z) ) )
        | ! [X1] :
            ( ndr1_0
           => ( ~ c0_1(X1)
              | ~ c1_1(X1)
              | ~ c2_1(X1) ) ) )
      & ( ! [X2] :
            ( ndr1_0
           => ( c0_1(X2)
              | c1_1(X2)
              | c3_1(X2) ) )
        | ! [X3] :
            ( ndr1_0
           => ( c0_1(X3)
              | c3_1(X3)
              | ~ c2_1(X3) ) )
        | ! [X4] :
            ( ndr1_0
           => ( c3_1(X4)
              | ~ c1_1(X4)
              | ~ c2_1(X4) ) ) )
      & ( ! [X5] :
            ( ndr1_0
           => ( c0_1(X5)
              | c1_1(X5)
              | c3_1(X5) ) )
        | ! [X6] :
            ( ndr1_0
           => ( c1_1(X6)
              | c2_1(X6)
              | ~ c3_1(X6) ) )
        | ! [X7] :
            ( ndr1_0
           => ( c1_1(X7)
              | ~ c0_1(X7)
              | ~ c2_1(X7) ) ) )
      & ( ! [X8] :
            ( ndr1_0
           => ( c0_1(X8)
              | c1_1(X8)
              | c3_1(X8) ) )
        | ! [X9] :
            ( ndr1_0
           => ( c2_1(X9)
              | ~ c0_1(X9)
              | ~ c1_1(X9) ) )
        | hskp1 )
      & ( ! [X10] :
            ( ndr1_0
           => ( c0_1(X10)
              | c1_1(X10)
              | c3_1(X10) ) )
        | ! [X11] :
            ( ndr1_0
           => ( ~ c1_1(X11)
              | ~ c2_1(X11)
              | ~ c3_1(X11) ) )
        | hskp28 )
      & ( ! [X12] :
            ( ndr1_0
           => ( c0_1(X12)
              | c1_1(X12)
              | ~ c2_1(X12) ) )
        | ! [X13] :
            ( ndr1_0
           => ( c1_1(X13)
              | c2_1(X13)
              | c3_1(X13) ) )
        | hskp2 )
      & ( ! [X14] :
            ( ndr1_0
           => ( c0_1(X14)
              | c1_1(X14)
              | ~ c2_1(X14) ) )
        | ! [X15] :
            ( ndr1_0
           => ( c2_1(X15)
              | ~ c0_1(X15)
              | ~ c1_1(X15) ) )
        | hskp3 )
      & ( ! [X16] :
            ( ndr1_0
           => ( c0_1(X16)
              | c1_1(X16)
              | ~ c2_1(X16) ) )
        | hskp4
        | hskp27 )
      & ( ! [X17] :
            ( ndr1_0
           => ( c0_1(X17)
              | c1_1(X17)
              | ~ c3_1(X17) ) )
        | ! [X18] :
            ( ndr1_0
           => ( c3_1(X18)
              | ~ c0_1(X18)
              | ~ c2_1(X18) ) )
        | hskp5 )
      & ( ! [X19] :
            ( ndr1_0
           => ( c0_1(X19)
              | c1_1(X19)
              | ~ c3_1(X19) ) )
        | hskp29
        | hskp6 )
      & ( ! [X20] :
            ( ndr1_0
           => ( c0_1(X20)
              | c2_1(X20)
              | c3_1(X20) ) )
        | ! [X21] :
            ( ndr1_0
           => ( c2_1(X21)
              | ~ c0_1(X21)
              | ~ c3_1(X21) ) )
        | hskp1 )
      & ( ! [X22] :
            ( ndr1_0
           => ( c0_1(X22)
              | c2_1(X22)
              | c3_1(X22) ) )
        | ! [X23] :
            ( ndr1_0
           => ( ~ c1_1(X23)
              | ~ c2_1(X23)
              | ~ c3_1(X23) ) ) )
      & ( ! [X24] :
            ( ndr1_0
           => ( c0_1(X24)
              | c2_1(X24)
              | ~ c1_1(X24) ) )
        | ! [X25] :
            ( ndr1_0
           => ( c0_1(X25)
              | ~ c1_1(X25)
              | ~ c2_1(X25) ) )
        | hskp7 )
      & ( ! [X26] :
            ( ndr1_0
           => ( c0_1(X26)
              | c2_1(X26)
              | ~ c1_1(X26) ) )
        | hskp28
        | hskp8 )
      & ( ! [X27] :
            ( ndr1_0
           => ( c0_1(X27)
              | c2_1(X27)
              | ~ c3_1(X27) ) )
        | ! [X28] :
            ( ndr1_0
           => ( c0_1(X28)
              | c3_1(X28)
              | ~ c1_1(X28) ) )
        | ! [X29] :
            ( ndr1_0
           => ( c2_1(X29)
              | ~ c1_1(X29)
              | ~ c3_1(X29) ) ) )
      & ( ! [X30] :
            ( ndr1_0
           => ( c0_1(X30)
              | c2_1(X30)
              | ~ c3_1(X30) ) )
        | ! [X31] :
            ( ndr1_0
           => ( c0_1(X31)
              | ~ c1_1(X31)
              | ~ c3_1(X31) ) )
        | hskp29 )
      & ( ! [X32] :
            ( ndr1_0
           => ( c0_1(X32)
              | c2_1(X32)
              | ~ c3_1(X32) ) )
        | ! [X33] :
            ( ndr1_0
           => ( c0_1(X33)
              | ~ c2_1(X33)
              | ~ c3_1(X33) ) )
        | hskp9 )
      & ( ! [X34] :
            ( ndr1_0
           => ( c0_1(X34)
              | c2_1(X34)
              | ~ c3_1(X34) ) )
        | ! [X35] :
            ( ndr1_0
           => ( c1_1(X35)
              | c2_1(X35)
              | ~ c0_1(X35) ) )
        | ! [X36] :
            ( ndr1_0
           => ( c2_1(X36)
              | ~ c0_1(X36)
              | ~ c1_1(X36) ) ) )
      & ( ! [X37] :
            ( ndr1_0
           => ( c0_1(X37)
              | c2_1(X37)
              | ~ c3_1(X37) ) )
        | ! [X38] :
            ( ndr1_0
           => ( c1_1(X38)
              | c2_1(X38)
              | ~ c3_1(X38) ) )
        | ! [X39] :
            ( ndr1_0
           => ( c2_1(X39)
              | c3_1(X39)
              | ~ c1_1(X39) ) ) )
      & ( ! [X40] :
            ( ndr1_0
           => ( c0_1(X40)
              | c2_1(X40)
              | ~ c3_1(X40) ) )
        | ! [X41] :
            ( ndr1_0
           => ( c1_1(X41)
              | c3_1(X41)
              | ~ c2_1(X41) ) )
        | ! [X42] :
            ( ndr1_0
           => ( c2_1(X42)
              | ~ c0_1(X42)
              | ~ c1_1(X42) ) ) )
      & ( ! [X43] :
            ( ndr1_0
           => ( c0_1(X43)
              | c2_1(X43)
              | ~ c3_1(X43) ) )
        | ! [X44] :
            ( ndr1_0
           => ( c1_1(X44)
              | ~ c0_1(X44)
              | ~ c2_1(X44) ) )
        | hskp8 )
      & ( ! [X45] :
            ( ndr1_0
           => ( c0_1(X45)
              | c2_1(X45)
              | ~ c3_1(X45) ) )
        | ! [X46] :
            ( ndr1_0
           => ( c2_1(X46)
              | ~ c0_1(X46)
              | ~ c1_1(X46) ) )
        | hskp10 )
      & ( ! [X47] :
            ( ndr1_0
           => ( c0_1(X47)
              | c2_1(X47)
              | ~ c3_1(X47) ) )
        | hskp9
        | hskp11 )
      & ( ! [X48] :
            ( ndr1_0
           => ( c0_1(X48)
              | c3_1(X48)
              | ~ c1_1(X48) ) )
        | ! [X49] :
            ( ndr1_0
           => ( c0_1(X49)
              | ~ c1_1(X49)
              | ~ c3_1(X49) ) )
        | hskp12 )
      & ( ! [X50] :
            ( ndr1_0
           => ( c0_1(X50)
              | c3_1(X50)
              | ~ c1_1(X50) ) )
        | ! [X51] :
            ( ndr1_0
           => ( c2_1(X51)
              | ~ c0_1(X51)
              | ~ c1_1(X51) ) )
        | ! [X52] :
            ( ndr1_0
           => ( ~ c0_1(X52)
              | ~ c1_1(X52)
              | ~ c2_1(X52) ) ) )
      & ( ! [X53] :
            ( ndr1_0
           => ( c0_1(X53)
              | c3_1(X53)
              | ~ c2_1(X53) ) )
        | ! [X54] :
            ( ndr1_0
           => ( c0_1(X54)
              | ~ c1_1(X54)
              | ~ c3_1(X54) ) )
        | hskp13 )
      & ( ! [X55] :
            ( ndr1_0
           => ( c0_1(X55)
              | c3_1(X55)
              | ~ c2_1(X55) ) )
        | ! [X56] :
            ( ndr1_0
           => ( c1_1(X56)
              | ~ c0_1(X56)
              | ~ c3_1(X56) ) )
        | hskp14 )
      & ( ! [X57] :
            ( ndr1_0
           => ( c0_1(X57)
              | c3_1(X57)
              | ~ c2_1(X57) ) )
        | ! [X58] :
            ( ndr1_0
           => ( c2_1(X58)
              | c3_1(X58)
              | ~ c1_1(X58) ) )
        | hskp15 )
      & ( ! [X59] :
            ( ndr1_0
           => ( c0_1(X59)
              | ~ c1_1(X59)
              | ~ c2_1(X59) ) )
        | ! [X60] :
            ( ndr1_0
           => ( c0_1(X60)
              | ~ c1_1(X60)
              | ~ c3_1(X60) ) )
        | hskp3 )
      & ( ! [X61] :
            ( ndr1_0
           => ( c0_1(X61)
              | ~ c1_1(X61)
              | ~ c2_1(X61) ) )
        | ! [X62] :
            ( ndr1_0
           => ( c3_1(X62)
              | ~ c0_1(X62)
              | ~ c1_1(X62) ) )
        | hskp10 )
      & ( ! [X63] :
            ( ndr1_0
           => ( c0_1(X63)
              | ~ c1_1(X63)
              | ~ c3_1(X63) ) )
        | ! [X64] :
            ( ndr1_0
           => ( ~ c0_1(X64)
              | ~ c1_1(X64)
              | ~ c3_1(X64) ) )
        | hskp16 )
      & ( ! [X65] :
            ( ndr1_0
           => ( c0_1(X65)
              | ~ c1_1(X65)
              | ~ c3_1(X65) ) )
        | hskp13
        | hskp17 )
      & ( ! [X66] :
            ( ndr1_0
           => ( c0_1(X66)
              | ~ c1_1(X66)
              | ~ c3_1(X66) ) )
        | hskp4
        | hskp18 )
      & ( ! [X67] :
            ( ndr1_0
           => ( c0_1(X67)
              | ~ c2_1(X67)
              | ~ c3_1(X67) ) )
        | ! [X68] :
            ( ndr1_0
           => ( c1_1(X68)
              | ~ c0_1(X68)
              | ~ c3_1(X68) ) )
        | hskp19 )
      & ( ! [X69] :
            ( ndr1_0
           => ( c0_1(X69)
              | ~ c2_1(X69)
              | ~ c3_1(X69) ) )
        | ! [X70] :
            ( ndr1_0
           => ( c2_1(X70)
              | ~ c0_1(X70)
              | ~ c1_1(X70) ) ) )
      & ( ! [X71] :
            ( ndr1_0
           => ( c0_1(X71)
              | ~ c2_1(X71)
              | ~ c3_1(X71) ) )
        | hskp13
        | hskp20 )
      & ( ! [X72] :
            ( ndr1_0
           => ( c1_1(X72)
              | c2_1(X72)
              | c3_1(X72) ) )
        | ! [X73] :
            ( ndr1_0
           => ( c1_1(X73)
              | c3_1(X73)
              | ~ c2_1(X73) ) )
        | ! [X74] :
            ( ndr1_0
           => ( c2_1(X74)
              | ~ c0_1(X74)
              | ~ c1_1(X74) ) ) )
      & ( ! [X75] :
            ( ndr1_0
           => ( c1_1(X75)
              | c2_1(X75)
              | c3_1(X75) ) )
        | ! [X76] :
            ( ndr1_0
           => ( c2_1(X76)
              | ~ c0_1(X76)
              | ~ c1_1(X76) ) )
        | hskp12 )
      & ( ! [X77] :
            ( ndr1_0
           => ( c1_1(X77)
              | c2_1(X77)
              | ~ c0_1(X77) ) )
        | ! [X78] :
            ( ndr1_0
           => ( c1_1(X78)
              | ~ c0_1(X78)
              | ~ c2_1(X78) ) )
        | ! [X79] :
            ( ndr1_0
           => ( c1_1(X79)
              | ~ c2_1(X79)
              | ~ c3_1(X79) ) ) )
      & ( ! [X80] :
            ( ndr1_0
           => ( c1_1(X80)
              | c2_1(X80)
              | ~ c0_1(X80) ) )
        | ! [X81] :
            ( ndr1_0
           => ( c1_1(X81)
              | ~ c2_1(X81)
              | ~ c3_1(X81) ) )
        | ! [X82] :
            ( ndr1_0
           => ( c2_1(X82)
              | ~ c1_1(X82)
              | ~ c3_1(X82) ) ) )
      & ( ! [X83] :
            ( ndr1_0
           => ( c1_1(X83)
              | c2_1(X83)
              | ~ c0_1(X83) ) )
        | hskp30
        | hskp5 )
      & ( ! [X84] :
            ( ndr1_0
           => ( c1_1(X84)
              | c2_1(X84)
              | ~ c0_1(X84) ) )
        | hskp4
        | hskp10 )
      & ( ! [X85] :
            ( ndr1_0
           => ( c1_1(X85)
              | c2_1(X85)
              | ~ c3_1(X85) ) )
        | ! [X86] :
            ( ndr1_0
           => ( c2_1(X86)
              | c3_1(X86)
              | ~ c1_1(X86) ) )
        | hskp21 )
      & ( ! [X87] :
            ( ndr1_0
           => ( c1_1(X87)
              | c2_1(X87)
              | ~ c3_1(X87) ) )
        | hskp1
        | hskp10 )
      & ( ! [X88] :
            ( ndr1_0
           => ( c1_1(X88)
              | c2_1(X88)
              | ~ c3_1(X88) ) )
        | hskp22
        | hskp2 )
      & ( ! [X89] :
            ( ndr1_0
           => ( c1_1(X89)
              | c3_1(X89)
              | ~ c2_1(X89) ) )
        | hskp23
        | hskp6 )
      & ( ! [X90] :
            ( ndr1_0
           => ( c1_1(X90)
              | c3_1(X90)
              | ~ c2_1(X90) ) )
        | hskp3
        | hskp17 )
      & ( ! [X91] :
            ( ndr1_0
           => ( c1_1(X91)
              | ~ c0_1(X91)
              | ~ c2_1(X91) ) )
        | hskp10
        | hskp11 )
      & ( ! [X92] :
            ( ndr1_0
           => ( c1_1(X92)
              | ~ c0_1(X92)
              | ~ c3_1(X92) ) )
        | hskp30
        | hskp15 )
      & ( ! [X93] :
            ( ndr1_0
           => ( c1_1(X93)
              | ~ c0_1(X93)
              | ~ c3_1(X93) ) )
        | hskp6
        | hskp18 )
      & ( ! [X94] :
            ( ndr1_0
           => ( c1_1(X94)
              | ~ c2_1(X94)
              | ~ c3_1(X94) ) )
        | ! [X95] :
            ( ndr1_0
           => ( ~ c1_1(X95)
              | ~ c2_1(X95)
              | ~ c3_1(X95) ) )
        | hskp27 )
      & ( ! [X96] :
            ( ndr1_0
           => ( c1_1(X96)
              | ~ c2_1(X96)
              | ~ c3_1(X96) ) )
        | hskp10 )
      & ( ! [X97] :
            ( ndr1_0
           => ( c2_1(X97)
              | c3_1(X97)
              | ~ c0_1(X97) ) )
        | hskp16
        | hskp15 )
      & ( ! [X98] :
            ( ndr1_0
           => ( c2_1(X98)
              | c3_1(X98)
              | ~ c1_1(X98) ) )
        | ! [X99] :
            ( ndr1_0
           => ( c2_1(X99)
              | ~ c1_1(X99)
              | ~ c3_1(X99) ) )
        | ! [X100] :
            ( ndr1_0
           => ( c3_1(X100)
              | ~ c0_1(X100)
              | ~ c1_1(X100) ) ) )
      & ( ! [X101] :
            ( ndr1_0
           => ( c2_1(X101)
              | ~ c0_1(X101)
              | ~ c1_1(X101) ) )
        | hskp1
        | hskp22 )
      & ( ! [X102] :
            ( ndr1_0
           => ( c2_1(X102)
              | ~ c0_1(X102)
              | ~ c1_1(X102) ) )
        | hskp16
        | hskp24 )
      & ( ! [X103] :
            ( ndr1_0
           => ( c2_1(X103)
              | ~ c1_1(X103)
              | ~ c3_1(X103) ) )
        | ! [X104] :
            ( ndr1_0
           => ( ~ c0_1(X104)
              | ~ c1_1(X104)
              | ~ c3_1(X104) ) )
        | hskp20 )
      & ( ! [X105] :
            ( ndr1_0
           => ( c2_1(X105)
              | ~ c1_1(X105)
              | ~ c3_1(X105) ) )
        | hskp11
        | hskp12 )
      & ( ! [X106] :
            ( ndr1_0
           => ( c3_1(X106)
              | ~ c0_1(X106)
              | ~ c2_1(X106) ) )
        | ! [X107] :
            ( ndr1_0
           => ( ~ c0_1(X107)
              | ~ c1_1(X107)
              | ~ c3_1(X107) ) )
        | hskp10 )
      & ( ! [X108] :
            ( ndr1_0
           => ( c3_1(X108)
              | ~ c0_1(X108)
              | ~ c2_1(X108) ) )
        | hskp4
        | hskp17 )
      & ( ! [X109] :
            ( ndr1_0
           => ( c3_1(X109)
              | ~ c0_1(X109)
              | ~ c2_1(X109) ) )
        | hskp12
        | hskp0 )
      & ( ! [X110] :
            ( ndr1_0
           => ( c3_1(X110)
              | ~ c0_1(X110)
              | ~ c2_1(X110) ) )
        | hskp24
        | hskp25 )
      & ( ! [X111] :
            ( ndr1_0
           => ( c3_1(X111)
              | ~ c1_1(X111)
              | ~ c2_1(X111) ) )
        | hskp14
        | hskp10 )
      & ( ! [X112] :
            ( ndr1_0
           => ( ~ c0_1(X112)
              | ~ c1_1(X112)
              | ~ c2_1(X112) ) )
        | hskp1
        | hskp4 )
      & ( ! [X113] :
            ( ndr1_0
           => ( ~ c0_1(X113)
              | ~ c1_1(X113)
              | ~ c2_1(X113) ) )
        | hskp3
        | hskp8 )
      & ( ! [X114] :
            ( ndr1_0
           => ( ~ c0_1(X114)
              | ~ c1_1(X114)
              | ~ c2_1(X114) ) )
        | hskp17 )
      & ( ! [X115] :
            ( ndr1_0
           => ( ~ c0_1(X115)
              | ~ c1_1(X115)
              | ~ c3_1(X115) ) )
        | hskp26
        | hskp25 )
      & ( ! [X116] :
            ( ndr1_0
           => ( ~ c1_1(X116)
              | ~ c2_1(X116)
              | ~ c3_1(X116) ) )
        | hskp4
        | hskp11 )
      & ( hskp28
        | hskp1
        | hskp21 )
      & ( hskp23
        | hskp5
        | hskp8 )
      & ( hskp30
        | hskp27
        | hskp6 )
      & ( hskp16
        | hskp19
        | hskp15 )
      & ( hskp16
        | hskp21
        | hskp18 ) ) ).

%--------------------------------------------------------------------------
