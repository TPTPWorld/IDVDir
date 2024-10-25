%--------------------------------------------------------------------------
% File     : SYN543+1 : TPTP v9.0.0. Released v2.1.0.
% Domain   : Syntactic (Translated)
% Problem  : ALC, N=6, R=1, L=60, K=3, D=1, P=0, Index=088
% Version  : Especial.
% English  :

% Refs     : [OS95]  Ohlbach & Schmidt (1995), Functional Translation and S
%          : [HS97]  Hustadt & Schmidt (1997), On Evaluating Decision Proce
%          : [Wei97] Weidenbach (1997), Email to G. Sutcliffe
% Source   : [Wei97]
% Names    : alc-6-1-60-3-1-088.dfg [Wei97]

% Status   : CounterSatisfiable
% Rating   : 0.00 v5.5.0, 0.40 v5.3.0, 0.50 v5.0.0, 0.33 v4.1.0, 0.67 v4.0.1, 0.33 v3.7.0, 0.00 v3.5.0, 0.25 v3.4.0, 0.33 v3.2.0, 0.50 v3.1.0, 0.67 v2.6.0, 0.75 v2.5.0, 0.67 v2.4.0, 0.33 v2.2.1, 0.00 v2.1.0
% Syntax   : Number of formulae    :    1 (   0 unt;   0 def)
%            Number of atoms       :  804 (   0 equ)
%            Maximal formula atoms :  804 ( 804 avg)
%            Number of connectives : 1104 ( 301   ~; 384   |; 319   &)
%                                         (   0 <=>; 100  =>;   0  <=;   0 <~>)
%            Maximal formula depth :  128 ( 128 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :   72 (  72 usr;  66 prp; 0-1 aty)
%            Number of functors    :   65 (  65 usr;  65 con; 0-0 aty)
%            Number of variables   :  100 ( 100   !;   0   ?)
% SPC      : FOF_CSA_EPR_NEQ

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
          & c4_1(a80)
          & c5_1(a80)
          & ~ c1_1(a80) ) )
      & ( ~ hskp1
        | ( ndr1_0
          & ~ c1_1(a81)
          & ~ c4_1(a81)
          & ~ c5_1(a81) ) )
      & ( ~ hskp2
        | ( ndr1_0
          & c2_1(a82)
          & ~ c0_1(a82)
          & ~ c1_1(a82) ) )
      & ( ~ hskp3
        | ( ndr1_0
          & c5_1(a84)
          & ~ c3_1(a84)
          & ~ c4_1(a84) ) )
      & ( ~ hskp4
        | ( ndr1_0
          & c0_1(a85)
          & c4_1(a85)
          & ~ c2_1(a85) ) )
      & ( ~ hskp5
        | ( ndr1_0
          & c2_1(a86)
          & c4_1(a86)
          & ~ c3_1(a86) ) )
      & ( ~ hskp6
        | ( ndr1_0
          & c2_1(a87)
          & c3_1(a87)
          & ~ c0_1(a87) ) )
      & ( ~ hskp7
        | ( ndr1_0
          & c1_1(a89)
          & c3_1(a89)
          & ~ c0_1(a89) ) )
      & ( ~ hskp8
        | ( ndr1_0
          & c1_1(a90)
          & ~ c2_1(a90)
          & ~ c4_1(a90) ) )
      & ( ~ hskp9
        | ( ndr1_0
          & ~ c1_1(a91)
          & ~ c2_1(a91)
          & ~ c3_1(a91) ) )
      & ( ~ hskp10
        | ( ndr1_0
          & c3_1(a92)
          & ~ c0_1(a92)
          & ~ c4_1(a92) ) )
      & ( ~ hskp11
        | ( ndr1_0
          & c0_1(a93)
          & ~ c3_1(a93)
          & ~ c5_1(a93) ) )
      & ( ~ hskp12
        | ( ndr1_0
          & c3_1(a94)
          & ~ c1_1(a94)
          & ~ c4_1(a94) ) )
      & ( ~ hskp13
        | ( ndr1_0
          & c0_1(a95)
          & c2_1(a95)
          & ~ c5_1(a95) ) )
      & ( ~ hskp14
        | ( ndr1_0
          & c5_1(a96)
          & ~ c1_1(a96)
          & ~ c2_1(a96) ) )
      & ( ~ hskp15
        | ( ndr1_0
          & c2_1(a97)
          & c5_1(a97)
          & ~ c3_1(a97) ) )
      & ( ~ hskp16
        | ( ndr1_0
          & c0_1(a98)
          & c3_1(a98)
          & ~ c4_1(a98) ) )
      & ( ~ hskp17
        | ( ndr1_0
          & c3_1(a99)
          & c4_1(a99)
          & ~ c5_1(a99) ) )
      & ( ~ hskp18
        | ( ndr1_0
          & c3_1(a100)
          & ~ c0_1(a100)
          & ~ c5_1(a100) ) )
      & ( ~ hskp19
        | ( ndr1_0
          & c3_1(a103)
          & ~ c1_1(a103)
          & ~ c5_1(a103) ) )
      & ( ~ hskp20
        | ( ndr1_0
          & c0_1(a105)
          & c1_1(a105)
          & ~ c5_1(a105) ) )
      & ( ~ hskp21
        | ( ndr1_0
          & c2_1(a106)
          & c3_1(a106)
          & ~ c4_1(a106) ) )
      & ( ~ hskp22
        | ( ndr1_0
          & ~ c0_1(a108)
          & ~ c3_1(a108)
          & ~ c5_1(a108) ) )
      & ( ~ hskp23
        | ( ndr1_0
          & c1_1(a109)
          & ~ c3_1(a109)
          & ~ c4_1(a109) ) )
      & ( ~ hskp24
        | ( ndr1_0
          & c2_1(a111)
          & ~ c0_1(a111)
          & ~ c5_1(a111) ) )
      & ( ~ hskp25
        | ( ndr1_0
          & c1_1(a113)
          & c2_1(a113)
          & ~ c0_1(a113) ) )
      & ( ~ hskp26
        | ( ndr1_0
          & ~ c1_1(a114)
          & ~ c2_1(a114)
          & ~ c4_1(a114) ) )
      & ( ~ hskp27
        | ( ndr1_0
          & c5_1(a115)
          & ~ c0_1(a115)
          & ~ c2_1(a115) ) )
      & ( ~ hskp28
        | ( ndr1_0
          & ~ c3_1(a116)
          & ~ c4_1(a116)
          & ~ c5_1(a116) ) )
      & ( ~ hskp29
        | ( ndr1_0
          & c2_1(a117)
          & ~ c3_1(a117)
          & ~ c5_1(a117) ) )
      & ( ~ hskp30
        | ( ndr1_0
          & c5_1(a118)
          & ~ c0_1(a118)
          & ~ c1_1(a118) ) )
      & ( ~ hskp31
        | ( ndr1_0
          & c0_1(a120)
          & c2_1(a120)
          & ~ c4_1(a120) ) )
      & ( ~ hskp32
        | ( ndr1_0
          & c3_1(a121)
          & c4_1(a121)
          & ~ c0_1(a121) ) )
      & ( ~ hskp33
        | ( ndr1_0
          & c4_1(a123)
          & c5_1(a123)
          & ~ c0_1(a123) ) )
      & ( ~ hskp34
        | ( ndr1_0
          & c0_1(a124)
          & c3_1(a124)
          & ~ c5_1(a124) ) )
      & ( ~ hskp35
        | ( ndr1_0
          & c4_1(a125)
          & ~ c0_1(a125)
          & ~ c3_1(a125) ) )
      & ( ~ hskp36
        | ( ndr1_0
          & c0_1(a126)
          & c3_1(a126)
          & ~ c2_1(a126) ) )
      & ( ~ hskp37
        | ( ndr1_0
          & c2_1(a127)
          & ~ c1_1(a127)
          & ~ c4_1(a127) ) )
      & ( ~ hskp38
        | ( ndr1_0
          & c0_1(a128)
          & c4_1(a128)
          & ~ c1_1(a128) ) )
      & ( ~ hskp39
        | ( ndr1_0
          & c1_1(a129)
          & c2_1(a129)
          & ~ c4_1(a129) ) )
      & ( ~ hskp40
        | ( ndr1_0
          & c1_1(a131)
          & c2_1(a131)
          & ~ c3_1(a131) ) )
      & ( ~ hskp41
        | ( ndr1_0
          & c1_1(a133)
          & ~ c3_1(a133)
          & ~ c5_1(a133) ) )
      & ( ~ hskp42
        | ( ndr1_0
          & ~ c0_1(a135)
          & ~ c2_1(a135)
          & ~ c3_1(a135) ) )
      & ( ~ hskp43
        | ( ndr1_0
          & c3_1(a137)
          & ~ c2_1(a137)
          & ~ c5_1(a137) ) )
      & ( ~ hskp44
        | ( ndr1_0
          & c4_1(a138)
          & ~ c1_1(a138)
          & ~ c3_1(a138) ) )
      & ( ~ hskp45
        | ( ndr1_0
          & c4_1(a140)
          & ~ c3_1(a140)
          & ~ c5_1(a140) ) )
      & ( ~ hskp46
        | ( ndr1_0
          & ~ c0_1(a141)
          & ~ c1_1(a141)
          & ~ c2_1(a141) ) )
      & ( ~ hskp47
        | ( ndr1_0
          & c0_1(a142)
          & c5_1(a142)
          & ~ c2_1(a142) ) )
      & ( ~ hskp48
        | ( ndr1_0
          & c0_1(a143)
          & ~ c2_1(a143)
          & ~ c3_1(a143) ) )
      & ( ~ hskp49
        | ( ndr1_0
          & c1_1(a145)
          & c3_1(a145)
          & ~ c5_1(a145) ) )
      & ( ~ hskp50
        | ( ndr1_0
          & c2_1(a146)
          & c5_1(a146)
          & ~ c1_1(a146) ) )
      & ( ~ hskp51
        | ( ndr1_0
          & c4_1(a147)
          & c5_1(a147)
          & ~ c3_1(a147) ) )
      & ( ~ hskp52
        | ( ndr1_0
          & c1_1(a148)
          & c4_1(a148)
          & ~ c5_1(a148) ) )
      & ( ~ hskp53
        | ( ndr1_0
          & c2_1(a149)
          & ~ c3_1(a149)
          & ~ c4_1(a149) ) )
      & ( ~ hskp54
        | ( ndr1_0
          & c4_1(a150)
          & ~ c0_1(a150)
          & ~ c1_1(a150) ) )
      & ( ~ hskp55
        | ( ndr1_0
          & c2_1(a152)
          & ~ c4_1(a152)
          & ~ c5_1(a152) ) )
      & ( ~ hskp56
        | ( ndr1_0
          & c3_1(a154)
          & ~ c0_1(a154)
          & ~ c2_1(a154) ) )
      & ( ~ hskp57
        | ( ndr1_0
          & c5_1(a156)
          & ~ c0_1(a156)
          & ~ c3_1(a156) ) )
      & ( ~ hskp58
        | ( ndr1_0
          & c1_1(a78)
          & c2_1(a78)
          & c3_1(a78) ) )
      & ( ~ hskp59
        | ( ndr1_0
          & c0_1(a79)
          & c3_1(a79)
          & c4_1(a79) ) )
      & ( ~ hskp60
        | ( ndr1_0
          & c1_1(a101)
          & c3_1(a101)
          & c5_1(a101) ) )
      & ( ~ hskp61
        | ( ndr1_0
          & c0_1(a102)
          & c2_1(a102)
          & c3_1(a102) ) )
      & ( ~ hskp62
        | ( ndr1_0
          & c0_1(a119)
          & c1_1(a119)
          & c2_1(a119) ) )
      & ( ~ hskp63
        | ( ndr1_0
          & c0_1(a136)
          & c1_1(a136)
          & c4_1(a136) ) )
      & ( ~ hskp64
        | ( ndr1_0
          & c3_1(a153)
          & c4_1(a153)
          & c5_1(a153) ) )
      & ( ! [U] :
            ( ndr1_0
           => ( c0_1(U)
              | c1_1(U)
              | c4_1(U) ) )
        | ! [V] :
            ( ndr1_0
           => ( c1_1(V)
              | ~ c0_1(V)
              | ~ c4_1(V) ) )
        | hskp58 )
      & ( ! [W] :
            ( ndr1_0
           => ( c0_1(W)
              | c1_1(W)
              | c4_1(W) ) )
        | ! [X] :
            ( ndr1_0
           => ( c2_1(X)
              | c3_1(X)
              | ~ c4_1(X) ) )
        | hskp59 )
      & ( ! [Y] :
            ( ndr1_0
           => ( c0_1(Y)
              | c1_1(Y)
              | c4_1(Y) ) )
        | hskp0
        | hskp1 )
      & ( ! [Z] :
            ( ndr1_0
           => ( c0_1(Z)
              | c1_1(Z)
              | ~ c3_1(Z) ) )
        | ! [X1] :
            ( ndr1_0
           => ( c0_1(X1)
              | c5_1(X1)
              | ~ c1_1(X1) ) )
        | ! [X2] :
            ( ndr1_0
           => ( c0_1(X2)
              | ~ c1_1(X2)
              | ~ c2_1(X2) ) ) )
      & ( ! [X3] :
            ( ndr1_0
           => ( c0_1(X3)
              | c1_1(X3)
              | ~ c3_1(X3) ) )
        | ! [X4] :
            ( ndr1_0
           => ( c1_1(X4)
              | c5_1(X4)
              | ~ c4_1(X4) ) )
        | hskp2 )
      & ( ! [X5] :
            ( ndr1_0
           => ( c0_1(X5)
              | c1_1(X5)
              | ~ c3_1(X5) ) )
        | ! [X6] :
            ( ndr1_0
           => ( c5_1(X6)
              | ~ c2_1(X6)
              | ~ c4_1(X6) ) )
        | hskp59 )
      & ( ! [X7] :
            ( ndr1_0
           => ( c0_1(X7)
              | c2_1(X7)
              | ~ c3_1(X7) ) )
        | ! [X8] :
            ( ndr1_0
           => ( c0_1(X8)
              | c4_1(X8)
              | ~ c1_1(X8) ) )
        | hskp3 )
      & ( ! [X9] :
            ( ndr1_0
           => ( c0_1(X9)
              | c2_1(X9)
              | ~ c4_1(X9) ) )
        | ! [X10] :
            ( ndr1_0
           => ( c1_1(X10)
              | c4_1(X10)
              | c5_1(X10) ) )
        | ! [X11] :
            ( ndr1_0
           => ( c4_1(X11)
              | c5_1(X11)
              | ~ c1_1(X11) ) ) )
      & ( ! [X12] :
            ( ndr1_0
           => ( c0_1(X12)
              | c3_1(X12)
              | c4_1(X12) ) )
        | ! [X13] :
            ( ndr1_0
           => ( c3_1(X13)
              | c5_1(X13)
              | ~ c0_1(X13) ) )
        | ! [X14] :
            ( ndr1_0
           => ( c4_1(X14)
              | c5_1(X14)
              | ~ c3_1(X14) ) ) )
      & ( ! [X15] :
            ( ndr1_0
           => ( c0_1(X15)
              | c3_1(X15)
              | ~ c2_1(X15) ) )
        | ! [X16] :
            ( ndr1_0
           => ( c2_1(X16)
              | ~ c3_1(X16)
              | ~ c5_1(X16) ) )
        | hskp4 )
      & ( ! [X17] :
            ( ndr1_0
           => ( c0_1(X17)
              | c3_1(X17)
              | ~ c4_1(X17) ) )
        | ! [X18] :
            ( ndr1_0
           => ( c2_1(X18)
              | c5_1(X18)
              | ~ c1_1(X18) ) )
        | hskp5 )
      & ( ! [X19] :
            ( ndr1_0
           => ( c0_1(X19)
              | c3_1(X19)
              | ~ c4_1(X19) ) )
        | ! [X20] :
            ( ndr1_0
           => ( c3_1(X20)
              | ~ c0_1(X20)
              | ~ c5_1(X20) ) )
        | hskp6 )
      & ( ! [X21] :
            ( ndr1_0
           => ( c0_1(X21)
              | c3_1(X21)
              | ~ c5_1(X21) ) )
        | ! [X22] :
            ( ndr1_0
           => ( c2_1(X22)
              | c3_1(X22)
              | ~ c0_1(X22) ) )
        | ! [X23] :
            ( ndr1_0
           => ( c3_1(X23)
              | c5_1(X23)
              | ~ c1_1(X23) ) ) )
      & ( ! [X24] :
            ( ndr1_0
           => ( c0_1(X24)
              | c4_1(X24)
              | ~ c1_1(X24) ) )
        | ! [X25] :
            ( ndr1_0
           => ( c2_1(X25)
              | c5_1(X25)
              | ~ c4_1(X25) ) )
        | hskp1 )
      & ( ! [X26] :
            ( ndr1_0
           => ( c0_1(X26)
              | c4_1(X26)
              | ~ c3_1(X26) ) )
        | ! [X27] :
            ( ndr1_0
           => ( c0_1(X27)
              | ~ c3_1(X27)
              | ~ c4_1(X27) ) )
        | ! [X28] :
            ( ndr1_0
           => ( c2_1(X28)
              | c4_1(X28)
              | ~ c1_1(X28) ) ) )
      & ( ! [X29] :
            ( ndr1_0
           => ( c0_1(X29)
              | c4_1(X29)
              | ~ c3_1(X29) ) )
        | ! [X30] :
            ( ndr1_0
           => ( c1_1(X30)
              | c3_1(X30)
              | ~ c0_1(X30) ) )
        | hskp7 )
      & ( ! [X31] :
            ( ndr1_0
           => ( c0_1(X31)
              | ~ c1_1(X31)
              | ~ c2_1(X31) ) )
        | ! [X32] :
            ( ndr1_0
           => ( c0_1(X32)
              | ~ c2_1(X32)
              | ~ c3_1(X32) ) )
        | ! [X33] :
            ( ndr1_0
           => ( c1_1(X33)
              | c2_1(X33)
              | ~ c5_1(X33) ) ) )
      & ( ! [X34] :
            ( ndr1_0
           => ( c0_1(X34)
              | ~ c2_1(X34)
              | ~ c3_1(X34) ) )
        | ! [X35] :
            ( ndr1_0
           => ( c2_1(X35)
              | c3_1(X35)
              | c5_1(X35) ) )
        | ! [X36] :
            ( ndr1_0
           => ( c3_1(X36)
              | ~ c1_1(X36)
              | ~ c4_1(X36) ) ) )
      & ( ! [X37] :
            ( ndr1_0
           => ( c0_1(X37)
              | ~ c2_1(X37)
              | ~ c4_1(X37) ) )
        | hskp8
        | hskp9 )
      & ( ! [X38] :
            ( ndr1_0
           => ( c0_1(X38)
              | ~ c3_1(X38)
              | ~ c5_1(X38) ) )
        | ! [X39] :
            ( ndr1_0
           => ( c1_1(X39)
              | c2_1(X39)
              | ~ c3_1(X39) ) )
        | hskp10 )
      & ( ! [X40] :
            ( ndr1_0
           => ( c0_1(X40)
              | ~ c3_1(X40)
              | ~ c5_1(X40) ) )
        | ! [X41] :
            ( ndr1_0
           => ( c3_1(X41)
              | c4_1(X41)
              | c5_1(X41) ) )
        | hskp11 )
      & ( ! [X42] :
            ( ndr1_0
           => ( c1_1(X42)
              | c2_1(X42)
              | c4_1(X42) ) )
        | ! [X43] :
            ( ndr1_0
           => ( c1_1(X43)
              | c3_1(X43)
              | ~ c4_1(X43) ) )
        | hskp12 )
      & ( ! [X44] :
            ( ndr1_0
           => ( c1_1(X44)
              | c2_1(X44)
              | ~ c4_1(X44) ) )
        | hskp13
        | hskp14 )
      & ( ! [X45] :
            ( ndr1_0
           => ( c1_1(X45)
              | c3_1(X45)
              | c5_1(X45) ) )
        | ! [X46] :
            ( ndr1_0
           => ( ~ c1_1(X46)
              | ~ c3_1(X46)
              | ~ c4_1(X46) ) )
        | hskp15 )
      & ( ! [X47] :
            ( ndr1_0
           => ( c1_1(X47)
              | c3_1(X47)
              | ~ c0_1(X47) ) )
        | ! [X48] :
            ( ndr1_0
           => ( c2_1(X48)
              | ~ c0_1(X48)
              | ~ c4_1(X48) ) )
        | hskp16 )
      & ( ! [X49] :
            ( ndr1_0
           => ( c1_1(X49)
              | c3_1(X49)
              | ~ c4_1(X49) ) )
        | hskp17
        | hskp18 )
      & ( ! [X50] :
            ( ndr1_0
           => ( c1_1(X50)
              | c3_1(X50)
              | ~ c5_1(X50) ) )
        | ! [X51] :
            ( ndr1_0
           => ( c5_1(X51)
              | ~ c1_1(X51)
              | ~ c2_1(X51) ) )
        | hskp60 )
      & ( ! [X52] :
            ( ndr1_0
           => ( c1_1(X52)
              | c4_1(X52)
              | c5_1(X52) ) )
        | ! [X53] :
            ( ndr1_0
           => ( ~ c1_1(X53)
              | ~ c2_1(X53)
              | ~ c5_1(X53) ) )
        | hskp61 )
      & ( ! [X54] :
            ( ndr1_0
           => ( c1_1(X54)
              | c4_1(X54)
              | ~ c2_1(X54) ) )
        | ! [X55] :
            ( ndr1_0
           => ( c3_1(X55)
              | ~ c0_1(X55)
              | ~ c1_1(X55) ) )
        | ! [X56] :
            ( ndr1_0
           => ( c5_1(X56)
              | ~ c2_1(X56)
              | ~ c3_1(X56) ) ) )
      & ( ! [X57] :
            ( ndr1_0
           => ( c1_1(X57)
              | ~ c0_1(X57)
              | ~ c2_1(X57) ) )
        | ! [X58] :
            ( ndr1_0
           => ( c2_1(X58)
              | c4_1(X58)
              | c5_1(X58) ) )
        | ! [X59] :
            ( ndr1_0
           => ( c3_1(X59)
              | c5_1(X59)
              | ~ c2_1(X59) ) ) )
      & ( ! [X60] :
            ( ndr1_0
           => ( c1_1(X60)
              | ~ c2_1(X60)
              | ~ c4_1(X60) ) )
        | ! [X61] :
            ( ndr1_0
           => ( c4_1(X61)
              | c5_1(X61)
              | ~ c2_1(X61) ) )
        | hskp19 )
      & ( ! [X62] :
            ( ndr1_0
           => ( c1_1(X62)
              | ~ c3_1(X62)
              | ~ c5_1(X62) ) )
        | ! [X63] :
            ( ndr1_0
           => ( c2_1(X63)
              | c5_1(X63)
              | ~ c1_1(X63) ) )
        | ! [X64] :
            ( ndr1_0
           => ( c5_1(X64)
              | ~ c1_1(X64)
              | ~ c4_1(X64) ) ) )
      & ( ! [X65] :
            ( ndr1_0
           => ( c2_1(X65)
              | c3_1(X65)
              | ~ c4_1(X65) ) )
        | ! [X66] :
            ( ndr1_0
           => ( c3_1(X66)
              | ~ c4_1(X66)
              | ~ c5_1(X66) ) )
        | ! [X67] :
            ( ndr1_0
           => ( c5_1(X67)
              | ~ c1_1(X67)
              | ~ c3_1(X67) ) ) )
      & ( ! [X68] :
            ( ndr1_0
           => ( c2_1(X68)
              | c4_1(X68)
              | ~ c0_1(X68) ) )
        | ! [X69] :
            ( ndr1_0
           => ( c2_1(X69)
              | c5_1(X69)
              | ~ c0_1(X69) ) )
        | hskp0 )
      & ( ! [X70] :
            ( ndr1_0
           => ( c2_1(X70)
              | c4_1(X70)
              | ~ c0_1(X70) ) )
        | ! [X71] :
            ( ndr1_0
           => ( c5_1(X71)
              | ~ c2_1(X71)
              | ~ c4_1(X71) ) )
        | hskp20 )
      & ( ! [X72] :
            ( ndr1_0
           => ( c2_1(X72)
              | c4_1(X72)
              | ~ c1_1(X72) ) )
        | ! [X73] :
            ( ndr1_0
           => ( c3_1(X73)
              | ~ c1_1(X73)
              | ~ c4_1(X73) ) )
        | ! [X74] :
            ( ndr1_0
           => ( ~ c2_1(X74)
              | ~ c3_1(X74)
              | ~ c4_1(X74) ) ) )
      & ( ! [X75] :
            ( ndr1_0
           => ( c2_1(X75)
              | c4_1(X75)
              | ~ c5_1(X75) ) )
        | ! [X76] :
            ( ndr1_0
           => ( c5_1(X76)
              | ~ c1_1(X76)
              | ~ c3_1(X76) ) )
        | hskp21 )
      & ( ! [X77] :
            ( ndr1_0
           => ( c2_1(X77)
              | c4_1(X77)
              | ~ c5_1(X77) ) )
        | hskp10
        | hskp22 )
      & ( ! [X78] :
            ( ndr1_0
           => ( c2_1(X78)
              | c5_1(X78)
              | ~ c3_1(X78) ) )
        | ! [X79] :
            ( ndr1_0
           => ( c2_1(X79)
              | ~ c3_1(X79)
              | ~ c4_1(X79) ) )
        | hskp23 )
      & ( ! [X80] :
            ( ndr1_0
           => ( c2_1(X80)
              | ~ c0_1(X80)
              | ~ c1_1(X80) ) )
        | ! [X81] :
            ( ndr1_0
           => ( c5_1(X81)
              | ~ c3_1(X81)
              | ~ c4_1(X81) ) )
        | hskp4 )
      & ( ! [X82] :
            ( ndr1_0
           => ( c2_1(X82)
              | ~ c1_1(X82)
              | ~ c4_1(X82) ) )
        | hskp24
        | hskp1 )
      & ( ! [X83] :
            ( ndr1_0
           => ( c2_1(X83)
              | ~ c1_1(X83)
              | ~ c5_1(X83) ) )
        | hskp25
        | hskp26 )
      & ( ! [X84] :
            ( ndr1_0
           => ( c3_1(X84)
              | c5_1(X84)
              | ~ c4_1(X84) ) )
        | hskp27
        | hskp28 )
      & ( ! [X85] :
            ( ndr1_0
           => ( c4_1(X85)
              | c5_1(X85)
              | ~ c0_1(X85) ) )
        | hskp29
        | hskp30 )
      & ( ! [X86] :
            ( ndr1_0
           => ( c4_1(X86)
              | c5_1(X86)
              | ~ c2_1(X86) ) )
        | hskp62 )
      & ( ! [X87] :
            ( ndr1_0
           => ( c4_1(X87)
              | ~ c0_1(X87)
              | ~ c1_1(X87) ) )
        | hskp31
        | hskp32 )
      & ( ! [X88] :
            ( ndr1_0
           => ( c5_1(X88)
              | ~ c1_1(X88)
              | ~ c2_1(X88) ) )
        | hskp13
        | hskp33 )
      & ( ! [X89] :
            ( ndr1_0
           => ( c5_1(X89)
              | ~ c1_1(X89)
              | ~ c2_1(X89) ) )
        | hskp34
        | hskp35 )
      & ( ! [X90] :
            ( ndr1_0
           => ( c5_1(X90)
              | ~ c2_1(X90)
              | ~ c3_1(X90) ) )
        | hskp36
        | hskp37 )
      & ( ! [X91] :
            ( ndr1_0
           => ( c5_1(X91)
              | ~ c3_1(X91)
              | ~ c4_1(X91) ) )
        | hskp38
        | hskp39 )
      & ( ! [X92] :
            ( ndr1_0
           => ( ~ c1_1(X92)
              | ~ c3_1(X92)
              | ~ c4_1(X92) ) )
        | hskp25
        | hskp40 )
      & ( ! [X93] :
            ( ndr1_0
           => ( ~ c1_1(X93)
              | ~ c4_1(X93)
              | ~ c5_1(X93) ) )
        | hskp20
        | hskp41 )
      & ( ! [X94] :
            ( ndr1_0
           => ( ~ c3_1(X94)
              | ~ c4_1(X94)
              | ~ c5_1(X94) ) )
        | hskp12
        | hskp42 )
      & ( hskp63
        | hskp43
        | hskp44 )
      & ( hskp38
        | hskp45
        | hskp46 )
      & ( hskp47
        | hskp48
        | hskp21 )
      & ( hskp49
        | hskp50
        | hskp51 )
      & ( hskp52
        | hskp53
        | hskp54 )
      & ( hskp41
        | hskp55
        | hskp64 )
      & ( hskp56
        | hskp33
        | hskp57 ) ) ).

%--------------------------------------------------------------------------
