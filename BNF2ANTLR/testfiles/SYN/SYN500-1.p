%--------------------------------------------------------------------------
% File     : SYN500-1 : TPTP v9.0.0. Released v2.1.0.
% Domain   : Syntactic (Translated)
% Problem  : ALC, N=4, R=1, L=80, K=3, D=1, P=0, Index=010
% Version  : Especial.
% English  :

% Refs     : [OS95]  Ohlbach & Schmidt (1995), Functional Translation and S
%          : [WGR96] Weidenbach et al. (1996), SPASS and FLOTTER
%          : [HS97]  Hustadt & Schmidt (1997), On Evaluating Decision Proce
%          : [Wei97] Weidenbach (1997), Email to G. Sutcliffe
% Source   : [Wei97]
% Names    : alc-4-1-80-3-1-010.cnf [Wei97]

% Status   : Unsatisfiable
% Rating   : 0.00 v7.0.0, 0.14 v6.4.0, 0.00 v6.2.0, 0.25 v6.1.0, 0.12 v6.0.0, 0.00 v4.0.1, 0.20 v3.7.0, 0.00 v3.3.0, 0.33 v3.2.0, 0.00 v3.1.0, 0.11 v2.7.0, 0.50 v2.6.0, 0.56 v2.5.0, 0.00 v2.4.0, 0.25 v2.3.0, 0.33 v2.2.1, 0.00 v2.2.0, 0.67 v2.1.0
% Syntax   : Number of clauses     :  200 (   0 unt;  79 nHn; 186 RR)
%            Number of literals    :  831 (   0 equ; 446 neg)
%            Maximal clause size   :   10 (   4 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :   35 (  35 usr;  31 prp; 0-1 aty)
%            Number of functors    :   30 (  30 usr;  30 con; 0-0 aty)
%            Number of variables   :  141 (   0 sgn)
% SPC      : CNF_UNS_EPR_NEQ_NHN

% Comments : These ALC problems have been translated from propositional
%            multi-modal K logic formulae generated according to the scheme
%            described in [HS97], using the optimized functional translation
%            described in [OS95]. The finite model property holds, the
%            Herbrand Universe is finite, they are decidable (the complexity
%            is PSPACE-complete), resolution + subsumption + condensing is a
%            decision procedure, and the translated formulae belong to the
%            (CNF-translation of the) Bernays-Schoenfinkel class [Wei97].
%          : Translated from FOF using FLOTTER [WGR96].
%--------------------------------------------------------------------------
cnf(clause1,negated_conjecture,
    ( hskp27
    | hskp9 ) ).

cnf(clause2,negated_conjecture,
    ( ~ hskp29
    | ndr1_0 ) ).

cnf(clause3,negated_conjecture,
    ( ~ hskp28
    | ndr1_0 ) ).

cnf(clause4,negated_conjecture,
    ( ~ hskp27
    | ndr1_0 ) ).

cnf(clause5,negated_conjecture,
    ( ~ hskp26
    | ndr1_0 ) ).

cnf(clause6,negated_conjecture,
    ( ~ hskp25
    | ndr1_0 ) ).

cnf(clause7,negated_conjecture,
    ( ~ hskp24
    | ndr1_0 ) ).

cnf(clause8,negated_conjecture,
    ( ~ hskp23
    | ndr1_0 ) ).

cnf(clause9,negated_conjecture,
    ( ~ hskp22
    | ndr1_0 ) ).

cnf(clause10,negated_conjecture,
    ( ~ hskp21
    | ndr1_0 ) ).

cnf(clause11,negated_conjecture,
    ( ~ hskp20
    | ndr1_0 ) ).

cnf(clause12,negated_conjecture,
    ( ~ hskp19
    | ndr1_0 ) ).

cnf(clause13,negated_conjecture,
    ( ~ hskp18
    | ndr1_0 ) ).

cnf(clause14,negated_conjecture,
    ( ~ hskp17
    | ndr1_0 ) ).

cnf(clause15,negated_conjecture,
    ( ~ hskp16
    | ndr1_0 ) ).

cnf(clause16,negated_conjecture,
    ( ~ hskp15
    | ndr1_0 ) ).

cnf(clause17,negated_conjecture,
    ( ~ hskp14
    | ndr1_0 ) ).

cnf(clause18,negated_conjecture,
    ( ~ hskp13
    | ndr1_0 ) ).

cnf(clause19,negated_conjecture,
    ( ~ hskp12
    | ndr1_0 ) ).

cnf(clause20,negated_conjecture,
    ( ~ hskp11
    | ndr1_0 ) ).

cnf(clause21,negated_conjecture,
    ( ~ hskp10
    | ndr1_0 ) ).

cnf(clause22,negated_conjecture,
    ( ~ hskp9
    | ndr1_0 ) ).

cnf(clause23,negated_conjecture,
    ( ~ hskp8
    | ndr1_0 ) ).

cnf(clause24,negated_conjecture,
    ( ~ hskp7
    | ndr1_0 ) ).

cnf(clause25,negated_conjecture,
    ( ~ hskp6
    | ndr1_0 ) ).

cnf(clause26,negated_conjecture,
    ( ~ hskp5
    | ndr1_0 ) ).

cnf(clause27,negated_conjecture,
    ( ~ hskp4
    | ndr1_0 ) ).

cnf(clause28,negated_conjecture,
    ( ~ hskp3
    | ndr1_0 ) ).

cnf(clause29,negated_conjecture,
    ( ~ hskp2
    | ndr1_0 ) ).

cnf(clause30,negated_conjecture,
    ( ~ hskp1
    | ndr1_0 ) ).

cnf(clause31,negated_conjecture,
    ( ~ hskp0
    | ndr1_0 ) ).

cnf(clause32,negated_conjecture,
    ( hskp14
    | hskp20
    | hskp12 ) ).

cnf(clause33,negated_conjecture,
    ( hskp29
    | hskp24
    | hskp19 ) ).

cnf(clause34,negated_conjecture,
    ( hskp25
    | hskp22
    | hskp9 ) ).

cnf(clause35,negated_conjecture,
    ( hskp1
    | hskp27
    | hskp4 ) ).

cnf(clause36,negated_conjecture,
    ( hskp17
    | hskp22
    | hskp19 ) ).

cnf(clause37,negated_conjecture,
    ( hskp11
    | hskp0
    | hskp22 ) ).

cnf(clause38,negated_conjecture,
    ( hskp11
    | hskp21
    | hskp12 ) ).

cnf(clause39,negated_conjecture,
    ( ~ hskp29
    | c0_1(a77) ) ).

cnf(clause40,negated_conjecture,
    ( ~ hskp29
    | c2_1(a77) ) ).

cnf(clause41,negated_conjecture,
    ( ~ hskp29
    | c3_1(a77) ) ).

cnf(clause42,negated_conjecture,
    ( ~ hskp28
    | c0_1(a23) ) ).

cnf(clause43,negated_conjecture,
    ( ~ hskp28
    | c1_1(a23) ) ).

cnf(clause44,negated_conjecture,
    ( ~ hskp28
    | c2_1(a23) ) ).

cnf(clause45,negated_conjecture,
    ( ~ hskp27
    | c1_1(a13) ) ).

cnf(clause46,negated_conjecture,
    ( ~ hskp27
    | c2_1(a13) ) ).

cnf(clause47,negated_conjecture,
    ( ~ hskp27
    | c3_1(a13) ) ).

cnf(clause48,negated_conjecture,
    ( ~ hskp26
    | c0_1(a4) ) ).

cnf(clause49,negated_conjecture,
    ( ~ hskp26
    | c1_1(a4) ) ).

cnf(clause50,negated_conjecture,
    ( ~ hskp26
    | c3_1(a4) ) ).

cnf(clause51,negated_conjecture,
    ( ~ hskp25
    | c0_1(a73) ) ).

cnf(clause52,negated_conjecture,
    ( ~ hskp25
    | c2_1(a73) ) ).

cnf(clause53,negated_conjecture,
    ( ~ hskp24
    | c1_1(a64) ) ).

cnf(clause54,negated_conjecture,
    ( ~ hskp24
    | c3_1(a64) ) ).

cnf(clause55,negated_conjecture,
    ( ~ hskp23
    | c2_1(a63) ) ).

cnf(clause56,negated_conjecture,
    ( ~ hskp22
    | c1_1(a48) ) ).

cnf(clause57,negated_conjecture,
    ( ~ hskp21
    | c2_1(a47) ) ).

cnf(clause58,negated_conjecture,
    ( ~ hskp21
    | c3_1(a47) ) ).

cnf(clause59,negated_conjecture,
    ( ~ hskp20
    | c0_1(a43) ) ).

cnf(clause60,negated_conjecture,
    ( ~ hskp20
    | c1_1(a43) ) ).

cnf(clause61,negated_conjecture,
    ( ~ hskp19
    | c2_1(a40) ) ).

cnf(clause62,negated_conjecture,
    ( ~ hskp18
    | c0_1(a39) ) ).

cnf(clause63,negated_conjecture,
    ( ~ hskp18
    | c3_1(a39) ) ).

cnf(clause64,negated_conjecture,
    ( ~ hskp17
    | c0_1(a33) ) ).

cnf(clause65,negated_conjecture,
    ( ~ hskp16
    | c0_1(a32) ) ).

cnf(clause66,negated_conjecture,
    ( ~ hskp16
    | c2_1(a32) ) ).

cnf(clause67,negated_conjecture,
    ( ~ hskp15
    | c2_1(a28) ) ).

cnf(clause68,negated_conjecture,
    ( ~ hskp15
    | c3_1(a28) ) ).

cnf(clause69,negated_conjecture,
    ( ~ hskp14
    | c0_1(a25) ) ).

cnf(clause70,negated_conjecture,
    ( ~ hskp14
    | c1_1(a25) ) ).

cnf(clause71,negated_conjecture,
    ( ~ hskp13
    | c3_1(a22) ) ).

cnf(clause72,negated_conjecture,
    ( ~ hskp11
    | c1_1(a19) ) ).

cnf(clause73,negated_conjecture,
    ( ~ hskp11
    | c2_1(a19) ) ).

cnf(clause74,negated_conjecture,
    ( ~ hskp8
    | c3_1(a14) ) ).

cnf(clause75,negated_conjecture,
    ( ~ hskp7
    | c1_1(a11) ) ).

cnf(clause76,negated_conjecture,
    ( ~ hskp6
    | c0_1(a10) ) ).

cnf(clause77,negated_conjecture,
    ( ~ hskp6
    | c3_1(a10) ) ).

cnf(clause78,negated_conjecture,
    ( ~ hskp5
    | c1_1(a8) ) ).

cnf(clause79,negated_conjecture,
    ( ~ hskp3
    | c2_1(a5) ) ).

cnf(clause80,negated_conjecture,
    ( ~ hskp2
    | c3_1(a3) ) ).

cnf(clause81,negated_conjecture,
    ( ~ hskp1
    | c0_1(a2) ) ).

cnf(clause82,negated_conjecture,
    ( ~ hskp0
    | c1_1(a1) ) ).

cnf(clause83,negated_conjecture,
    ( ~ hskp0
    | c3_1(a1) ) ).

cnf(clause84,negated_conjecture,
    ( ~ c3_1(a73)
    | ~ hskp25 ) ).

cnf(clause85,negated_conjecture,
    ( ~ c0_1(a64)
    | ~ hskp24 ) ).

cnf(clause86,negated_conjecture,
    ( ~ c1_1(a63)
    | ~ hskp23 ) ).

cnf(clause87,negated_conjecture,
    ( ~ c3_1(a63)
    | ~ hskp23 ) ).

cnf(clause88,negated_conjecture,
    ( ~ c0_1(a48)
    | ~ hskp22 ) ).

cnf(clause89,negated_conjecture,
    ( ~ c3_1(a48)
    | ~ hskp22 ) ).

cnf(clause90,negated_conjecture,
    ( ~ c0_1(a47)
    | ~ hskp21 ) ).

cnf(clause91,negated_conjecture,
    ( ~ c3_1(a43)
    | ~ hskp20 ) ).

cnf(clause92,negated_conjecture,
    ( ~ c0_1(a40)
    | ~ hskp19 ) ).

cnf(clause93,negated_conjecture,
    ( ~ c3_1(a40)
    | ~ hskp19 ) ).

cnf(clause94,negated_conjecture,
    ( ~ c1_1(a39)
    | ~ hskp18 ) ).

cnf(clause95,negated_conjecture,
    ( ~ c1_1(a33)
    | ~ hskp17 ) ).

cnf(clause96,negated_conjecture,
    ( ~ c3_1(a33)
    | ~ hskp17 ) ).

cnf(clause97,negated_conjecture,
    ( ~ c1_1(a32)
    | ~ hskp16 ) ).

cnf(clause98,negated_conjecture,
    ( ~ c1_1(a28)
    | ~ hskp15 ) ).

cnf(clause99,negated_conjecture,
    ( ~ c2_1(a25)
    | ~ hskp14 ) ).

cnf(clause100,negated_conjecture,
    ( ~ c0_1(a22)
    | ~ hskp13 ) ).

cnf(clause101,negated_conjecture,
    ( ~ c1_1(a22)
    | ~ hskp13 ) ).

cnf(clause102,negated_conjecture,
    ( ~ c0_1(a20)
    | ~ hskp12 ) ).

cnf(clause103,negated_conjecture,
    ( ~ c2_1(a20)
    | ~ hskp12 ) ).

cnf(clause104,negated_conjecture,
    ( ~ c3_1(a20)
    | ~ hskp12 ) ).

cnf(clause105,negated_conjecture,
    ( ~ c0_1(a19)
    | ~ hskp11 ) ).

cnf(clause106,negated_conjecture,
    ( ~ c1_1(a18)
    | ~ hskp10 ) ).

cnf(clause107,negated_conjecture,
    ( ~ c2_1(a18)
    | ~ hskp10 ) ).

cnf(clause108,negated_conjecture,
    ( ~ c3_1(a18)
    | ~ hskp10 ) ).

cnf(clause109,negated_conjecture,
    ( ~ c0_1(a15)
    | ~ hskp9 ) ).

cnf(clause110,negated_conjecture,
    ( ~ c1_1(a15)
    | ~ hskp9 ) ).

cnf(clause111,negated_conjecture,
    ( ~ c2_1(a15)
    | ~ hskp9 ) ).

cnf(clause112,negated_conjecture,
    ( ~ c0_1(a14)
    | ~ hskp8 ) ).

cnf(clause113,negated_conjecture,
    ( ~ c2_1(a14)
    | ~ hskp8 ) ).

cnf(clause114,negated_conjecture,
    ( ~ c0_1(a11)
    | ~ hskp7 ) ).

cnf(clause115,negated_conjecture,
    ( ~ c2_1(a11)
    | ~ hskp7 ) ).

cnf(clause116,negated_conjecture,
    ( ~ c2_1(a10)
    | ~ hskp6 ) ).

cnf(clause117,negated_conjecture,
    ( ~ c2_1(a8)
    | ~ hskp5 ) ).

cnf(clause118,negated_conjecture,
    ( ~ c3_1(a8)
    | ~ hskp5 ) ).

cnf(clause119,negated_conjecture,
    ( ~ c0_1(a7)
    | ~ hskp4 ) ).

cnf(clause120,negated_conjecture,
    ( ~ c1_1(a7)
    | ~ hskp4 ) ).

cnf(clause121,negated_conjecture,
    ( ~ c3_1(a7)
    | ~ hskp4 ) ).

cnf(clause122,negated_conjecture,
    ( ~ c0_1(a5)
    | ~ hskp3 ) ).

cnf(clause123,negated_conjecture,
    ( ~ c1_1(a5)
    | ~ hskp3 ) ).

cnf(clause124,negated_conjecture,
    ( ~ c1_1(a3)
    | ~ hskp2 ) ).

cnf(clause125,negated_conjecture,
    ( ~ c2_1(a3)
    | ~ hskp2 ) ).

cnf(clause126,negated_conjecture,
    ( ~ c1_1(a2)
    | ~ hskp1 ) ).

cnf(clause127,negated_conjecture,
    ( ~ c2_1(a2)
    | ~ hskp1 ) ).

cnf(clause128,negated_conjecture,
    ( ~ c2_1(a1)
    | ~ hskp0 ) ).

cnf(clause129,negated_conjecture,
    ( ~ ndr1_0
    | c0_1(U)
    | c1_1(U)
    | c3_1(U)
    | hskp26
    | hskp3 ) ).

cnf(clause130,negated_conjecture,
    ( ~ ndr1_0
    | c0_1(U)
    | c2_1(U)
    | c3_1(U)
    | hskp1
    | hskp27 ) ).

cnf(clause131,negated_conjecture,
    ( ~ ndr1_0
    | c0_1(U)
    | c2_1(U)
    | c3_1(U)
    | hskp8
    | hskp9 ) ).

cnf(clause132,negated_conjecture,
    ( ~ ndr1_0
    | c1_1(U)
    | c2_1(U)
    | c3_1(U)
    | hskp11
    | hskp12 ) ).

cnf(clause133,negated_conjecture,
    ( ~ c1_1(U)
    | ~ ndr1_0
    | c2_1(U)
    | c3_1(U)
    | hskp19 ) ).

cnf(clause134,negated_conjecture,
    ( ~ c2_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | c1_1(U)
    | hskp0
    | hskp4 ) ).

cnf(clause135,negated_conjecture,
    ( ~ c3_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | c1_1(U)
    | hskp6
    | hskp7 ) ).

cnf(clause136,negated_conjecture,
    ( ~ c1_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | c2_1(U)
    | hskp1
    | hskp10 ) ).

cnf(clause137,negated_conjecture,
    ( ~ c1_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | c2_1(U)
    | hskp11
    | hskp12 ) ).

cnf(clause138,negated_conjecture,
    ( ~ c1_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | c2_1(U)
    | hskp0
    | hskp13 ) ).

cnf(clause139,negated_conjecture,
    ( ~ c2_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | c3_1(U)
    | hskp15
    | hskp13 ) ).

cnf(clause140,negated_conjecture,
    ( ~ c0_1(U)
    | ~ ndr1_0
    | c1_1(U)
    | c3_1(U)
    | hskp1
    | hskp17 ) ).

cnf(clause141,negated_conjecture,
    ( ~ c0_1(U)
    | ~ ndr1_0
    | c1_1(U)
    | c3_1(U)
    | hskp11
    | hskp9 ) ).

cnf(clause142,negated_conjecture,
    ( ~ c0_1(U)
    | ~ ndr1_0
    | c2_1(U)
    | c3_1(U)
    | hskp26
    | hskp23 ) ).

cnf(clause143,negated_conjecture,
    ( ~ c0_1(U)
    | ~ ndr1_0
    | c2_1(U)
    | c3_1(U)
    | hskp24
    | hskp22 ) ).

cnf(clause144,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | hskp26
    | hskp16 ) ).

cnf(clause145,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | hskp17
    | hskp5 ) ).

cnf(clause146,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | hskp13
    | hskp10 ) ).

cnf(clause147,negated_conjecture,
    ( ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | hskp3
    | hskp2 ) ).

cnf(clause148,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | c1_1(U)
    | hskp18
    | hskp19 ) ).

cnf(clause149,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | c1_1(U)
    | hskp11
    | hskp21 ) ).

cnf(clause150,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ ndr1_0
    | c2_1(U)
    | hskp20
    | hskp6 ) ).

cnf(clause151,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | c3_1(U)
    | hskp28
    | hskp18 ) ).

cnf(clause152,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | c3_1(U)
    | hskp6
    | hskp2 ) ).

cnf(clause153,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | hskp25 ) ).

cnf(clause154,negated_conjecture,
    ( ~ c1_1(U)
    | ~ ndr1_0
    | c2_1(U)
    | c3_1(U)
    | c0_1(V)
    | c1_1(V)
    | c2_1(V)
    | hskp0 ) ).

cnf(clause155,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | c0_1(U)
    | c0_1(V)
    | c1_1(V)
    | c3_1(V)
    | hskp1 ) ).

cnf(clause156,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | c2_1(U)
    | c0_1(V)
    | c1_1(V)
    | c3_1(V)
    | hskp2 ) ).

cnf(clause157,negated_conjecture,
    ( ~ c1_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | c0_1(U)
    | c3_1(U)
    | c0_1(V)
    | c2_1(V)
    | hskp4 ) ).

cnf(clause158,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | c1_1(U)
    | c1_1(V)
    | c2_1(V)
    | c3_1(V)
    | hskp20 ) ).

cnf(clause159,negated_conjecture,
    ( ~ c1_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | c2_1(U)
    | c3_1(U)
    | c1_1(V)
    | c3_1(V)
    | hskp1 ) ).

cnf(clause160,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | ~ c3_1(V)
    | c0_1(U)
    | c0_1(V)
    | c1_1(V)
    | hskp5 ) ).

cnf(clause161,negated_conjecture,
    ( ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c3_1(V)
    | c1_1(U)
    | c0_1(V)
    | c1_1(V)
    | hskp2 ) ).

cnf(clause162,negated_conjecture,
    ( ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c3_1(V)
    | c0_1(U)
    | c0_1(V)
    | c2_1(V)
    | hskp28 ) ).

cnf(clause163,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ ndr1_0
    | ~ c3_1(V)
    | c2_1(U)
    | c0_1(V)
    | c2_1(V)
    | hskp3 ) ).

cnf(clause164,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | c3_1(U)
    | c0_1(V)
    | c3_1(V)
    | hskp14 ) ).

cnf(clause165,negated_conjecture,
    ( ~ c0_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | ~ c2_1(V)
    | c1_1(U)
    | c3_1(U)
    | c0_1(V)
    | hskp3 ) ).

cnf(clause166,negated_conjecture,
    ( ~ c0_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | ~ c3_1(V)
    | c2_1(U)
    | c3_1(U)
    | c0_1(V)
    | hskp15 ) ).

cnf(clause167,negated_conjecture,
    ( ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | c1_1(U)
    | c1_1(V)
    | c2_1(V)
    | hskp8 ) ).

cnf(clause168,negated_conjecture,
    ( ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | c1_1(U)
    | c1_1(V)
    | c3_1(V)
    | hskp22 ) ).

cnf(clause169,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | c3_1(U)
    | c2_1(V)
    | c3_1(V)
    | hskp20 ) ).

cnf(clause170,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | c0_1(V)
    | c3_1(V)
    | hskp13 ) ).

cnf(clause171,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | c0_1(V)
    | c3_1(V)
    | hskp28 ) ).

cnf(clause172,negated_conjecture,
    ( ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | ~ c3_1(V)
    | c0_1(U)
    | c0_1(V)
    | hskp12 ) ).

cnf(clause173,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | ~ c3_1(V)
    | c3_1(U)
    | c0_1(V)
    | hskp18 ) ).

cnf(clause174,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | ~ c3_1(V)
    | c1_1(V)
    | c2_1(V)
    | hskp21 ) ).

cnf(clause175,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | ~ c2_1(V)
    | c3_1(U)
    | c1_1(V)
    | hskp12 ) ).

cnf(clause176,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | ~ c3_1(V)
    | c3_1(U)
    | c1_1(V)
    | hskp8 ) ).

cnf(clause177,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | c2_1(V)
    | c3_1(V)
    | hskp13 ) ).

cnf(clause178,negated_conjecture,
    ( ~ c1_1(U)
    | ~ ndr1_0
    | c2_1(U)
    | c3_1(U)
    | c1_1(V)
    | c2_1(V)
    | c3_1(V)
    | c0_1(W)
    | c1_1(W)
    | c2_1(W) ) ).

cnf(clause179,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | ~ c3_1(V)
    | c0_1(V)
    | hskp19 ) ).

cnf(clause180,negated_conjecture,
    ( ~ c0_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | c2_1(U)
    | c3_1(U)
    | c0_1(V)
    | c1_1(V)
    | c0_1(W)
    | c1_1(W)
    | c3_1(W) ) ).

cnf(clause181,negated_conjecture,
    ( ~ c0_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | ~ c3_1(W)
    | c2_1(U)
    | c3_1(U)
    | c1_1(V)
    | c3_1(V)
    | c0_1(W)
    | c1_1(W) ) ).

cnf(clause182,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | c3_1(U)
    | c1_1(V)
    | c3_1(V)
    | c0_1(W)
    | c2_1(W)
    | c3_1(W) ) ).

cnf(clause183,negated_conjecture,
    ( ~ c1_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | ~ c1_1(W)
    | c2_1(U)
    | c3_1(U)
    | c1_1(V)
    | c3_1(V)
    | c0_1(W)
    | c3_1(W) ) ).

cnf(clause184,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | ~ c3_1(V)
    | c1_1(U)
    | c0_1(V)
    | c0_1(W)
    | c1_1(W)
    | c2_1(W) ) ).

cnf(clause185,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | ~ c3_1(V)
    | c2_1(U)
    | c1_1(V)
    | c0_1(W)
    | c1_1(W)
    | c2_1(W) ) ).

cnf(clause186,negated_conjecture,
    ( ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | ~ c3_1(W)
    | c1_1(U)
    | c0_1(V)
    | c2_1(V)
    | c0_1(W)
    | c1_1(W) ) ).

cnf(clause187,negated_conjecture,
    ( ~ c2_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | ~ c3_1(V)
    | ~ c3_1(W)
    | c1_1(U)
    | c3_1(U)
    | c0_1(V)
    | c0_1(W)
    | c1_1(W) ) ).

cnf(clause188,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | ~ c3_1(V)
    | c1_1(V)
    | c0_1(W)
    | c1_1(W)
    | c2_1(W) ) ).

cnf(clause189,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | ~ c3_1(V)
    | ~ c2_1(W)
    | c2_1(U)
    | c0_1(V)
    | c0_1(W)
    | c1_1(W) ) ).

cnf(clause190,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | ~ c3_1(V)
    | ~ c3_1(W)
    | c2_1(U)
    | c0_1(V)
    | c0_1(W)
    | c1_1(W) ) ).

cnf(clause191,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | ~ c2_1(W)
    | c2_1(V)
    | c3_1(V)
    | c0_1(W)
    | c3_1(W) ) ).

cnf(clause192,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | ~ c2_1(V)
    | ~ c0_1(W)
    | c2_1(U)
    | c1_1(V)
    | c1_1(W)
    | c2_1(W) ) ).

cnf(clause193,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | ~ c3_1(V)
    | ~ c3_1(W)
    | c3_1(U)
    | c1_1(V)
    | c1_1(W)
    | c2_1(W) ) ).

cnf(clause194,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | ~ c3_1(V)
    | ~ c2_1(W)
    | c2_1(U)
    | c1_1(V)
    | c1_1(W)
    | c3_1(W) ) ).

cnf(clause195,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | ~ c2_1(W)
    | c2_1(V)
    | c3_1(V)
    | c1_1(W)
    | c3_1(W) ) ).

cnf(clause196,negated_conjecture,
    ( ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | ~ c3_1(V)
    | ~ c1_1(W)
    | ~ c3_1(W)
    | c3_1(U)
    | c1_1(V)
    | c0_1(W) ) ).

cnf(clause197,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c2_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | ~ c2_1(V)
    | ~ c0_1(W)
    | c1_1(V)
    | c1_1(W)
    | c2_1(W) ) ).

cnf(clause198,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | ~ c3_1(V)
    | ~ c2_1(W)
    | c2_1(V)
    | c1_1(W)
    | c3_1(W) ) ).

cnf(clause199,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | ~ c3_1(V)
    | ~ c0_1(W)
    | ~ c2_1(W)
    | c2_1(U)
    | c1_1(V)
    | c1_1(W) ) ).

cnf(clause200,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c1_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | ~ c2_1(V)
    | ~ c3_1(V)
    | ~ c0_1(W)
    | ~ c2_1(W)
    | c1_1(V)
    | c1_1(W) ) ).

%--------------------------------------------------------------------------