%--------------------------------------------------------------------------
% File     : SYN490-1 : TPTP v9.0.0. Released v2.1.0.
% Domain   : Syntactic (Translated)
% Problem  : ALC, N=4, R=1, L=8, K=3, D=1, P=0, Index=003
% Version  : Especial.
% English  :

% Refs     : [OS95]  Ohlbach & Schmidt (1995), Functional Translation and S
%          : [WGR96] Weidenbach et al. (1996), SPASS and FLOTTER
%          : [HS97]  Hustadt & Schmidt (1997), On Evaluating Decision Proce
%          : [Wei97] Weidenbach (1997), Email to G. Sutcliffe
% Source   : [Wei97]
% Names    : alc-4-1-8-3-1-003.cnf [Wei97]

% Status   : Satisfiable
% Rating   : 0.00 v2.2.0, 0.50 v2.1.0
% Syntax   : Number of clauses     :   64 (   0 unt;   8 nHn;  62 RR)
%            Number of literals    :  160 (   0 equ;  93 neg)
%            Maximal clause size   :    8 (   2 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :   19 (  19 usr;  15 prp; 0-1 aty)
%            Number of functors    :   14 (  14 usr;  14 con; 0-0 aty)
%            Number of variables   :    9 (   0 sgn)
% SPC      : CNF_SAT_EPR_NEQ

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
    ( ~ hskp13
    | ndr1_0 ) ).

cnf(clause2,negated_conjecture,
    ( ~ hskp12
    | ndr1_0 ) ).

cnf(clause3,negated_conjecture,
    ( ~ hskp11
    | ndr1_0 ) ).

cnf(clause4,negated_conjecture,
    ( ~ hskp10
    | ndr1_0 ) ).

cnf(clause5,negated_conjecture,
    ( ~ hskp9
    | ndr1_0 ) ).

cnf(clause6,negated_conjecture,
    ( ~ hskp8
    | ndr1_0 ) ).

cnf(clause7,negated_conjecture,
    ( ~ hskp7
    | ndr1_0 ) ).

cnf(clause8,negated_conjecture,
    ( ~ hskp6
    | ndr1_0 ) ).

cnf(clause9,negated_conjecture,
    ( ~ hskp5
    | ndr1_0 ) ).

cnf(clause10,negated_conjecture,
    ( ~ hskp4
    | ndr1_0 ) ).

cnf(clause11,negated_conjecture,
    ( ~ hskp3
    | ndr1_0 ) ).

cnf(clause12,negated_conjecture,
    ( ~ hskp2
    | ndr1_0 ) ).

cnf(clause13,negated_conjecture,
    ( ~ hskp1
    | ndr1_0 ) ).

cnf(clause14,negated_conjecture,
    ( ~ hskp0
    | ndr1_0 ) ).

cnf(clause15,negated_conjecture,
    ( hskp7
    | hskp0
    | hskp8 ) ).

cnf(clause16,negated_conjecture,
    ( hskp10
    | hskp3
    | hskp11 ) ).

cnf(clause17,negated_conjecture,
    ( ~ hskp13
    | c3_1(a15) ) ).

cnf(clause18,negated_conjecture,
    ( ~ hskp13
    | c1_1(a15) ) ).

cnf(clause19,negated_conjecture,
    ( ~ hskp13
    | c2_1(a15) ) ).

cnf(clause20,negated_conjecture,
    ( ~ hskp12
    | c3_1(a10) ) ).

cnf(clause21,negated_conjecture,
    ( ~ hskp11
    | c1_1(a9) ) ).

cnf(clause22,negated_conjecture,
    ( ~ hskp11
    | c2_1(a9) ) ).

cnf(clause23,negated_conjecture,
    ( ~ hskp11
    | c3_1(a9) ) ).

cnf(clause24,negated_conjecture,
    ( ~ hskp10
    | c3_1(a7) ) ).

cnf(clause25,negated_conjecture,
    ( ~ hskp9
    | c1_1(a6) ) ).

cnf(clause26,negated_conjecture,
    ( ~ hskp9
    | c3_1(a6) ) ).

cnf(clause27,negated_conjecture,
    ( ~ hskp9
    | c2_1(a6) ) ).

cnf(clause28,negated_conjecture,
    ( ~ hskp8
    | c2_1(a3) ) ).

cnf(clause29,negated_conjecture,
    ( ~ hskp7
    | c3_1(a1) ) ).

cnf(clause30,negated_conjecture,
    ( ~ hskp7
    | c0_1(a1) ) ).

cnf(clause31,negated_conjecture,
    ( ~ hskp7
    | c1_1(a1) ) ).

cnf(clause32,negated_conjecture,
    ( ~ hskp6
    | c1_1(a14) ) ).

cnf(clause33,negated_conjecture,
    ( ~ hskp4
    | c1_1(a11) ) ).

cnf(clause34,negated_conjecture,
    ( ~ hskp4
    | c2_1(a11) ) ).

cnf(clause35,negated_conjecture,
    ( ~ hskp3
    | c1_1(a8) ) ).

cnf(clause36,negated_conjecture,
    ( ~ hskp3
    | c3_1(a8) ) ).

cnf(clause37,negated_conjecture,
    ( ~ hskp2
    | c1_1(a5) ) ).

cnf(clause38,negated_conjecture,
    ( ~ hskp2
    | c0_1(a5) ) ).

cnf(clause39,negated_conjecture,
    ( ~ hskp1
    | c1_1(a4) ) ).

cnf(clause40,negated_conjecture,
    ( ~ hskp0
    | c0_1(a2) ) ).

cnf(clause41,negated_conjecture,
    ( ~ c1_1(a10)
    | ~ hskp12 ) ).

cnf(clause42,negated_conjecture,
    ( ~ c2_1(a10)
    | ~ hskp12 ) ).

cnf(clause43,negated_conjecture,
    ( ~ c2_1(a7)
    | ~ hskp10 ) ).

cnf(clause44,negated_conjecture,
    ( ~ c1_1(a7)
    | ~ hskp10 ) ).

cnf(clause45,negated_conjecture,
    ( ~ c3_1(a3)
    | ~ hskp8 ) ).

cnf(clause46,negated_conjecture,
    ( ~ c1_1(a3)
    | ~ hskp8 ) ).

cnf(clause47,negated_conjecture,
    ( ~ c0_1(a14)
    | ~ hskp6 ) ).

cnf(clause48,negated_conjecture,
    ( ~ c2_1(a14)
    | ~ hskp6 ) ).

cnf(clause49,negated_conjecture,
    ( ~ c1_1(a12)
    | ~ hskp5 ) ).

cnf(clause50,negated_conjecture,
    ( ~ c0_1(a12)
    | ~ hskp5 ) ).

cnf(clause51,negated_conjecture,
    ( ~ c2_1(a12)
    | ~ hskp5 ) ).

cnf(clause52,negated_conjecture,
    ( ~ c0_1(a11)
    | ~ hskp4 ) ).

cnf(clause53,negated_conjecture,
    ( ~ c0_1(a8)
    | ~ hskp3 ) ).

cnf(clause54,negated_conjecture,
    ( ~ c2_1(a5)
    | ~ hskp2 ) ).

cnf(clause55,negated_conjecture,
    ( ~ c3_1(a4)
    | ~ hskp1 ) ).

cnf(clause56,negated_conjecture,
    ( ~ c2_1(a4)
    | ~ hskp1 ) ).

cnf(clause57,negated_conjecture,
    ( ~ c3_1(a2)
    | ~ hskp0 ) ).

cnf(clause58,negated_conjecture,
    ( ~ c1_1(a2)
    | ~ hskp0 ) ).

cnf(clause59,negated_conjecture,
    ( ~ ndr1_0
    | c2_1(U)
    | c0_1(U)
    | c1_1(U)
    | hskp5
    | hskp3 ) ).

cnf(clause60,negated_conjecture,
    ( ~ ndr1_0
    | c0_1(U)
    | c2_1(U)
    | c3_1(U)
    | hskp6
    | hskp13 ) ).

cnf(clause61,negated_conjecture,
    ( ~ c3_1(U)
    | ~ c2_1(U)
    | ~ ndr1_0
    | c1_1(U)
    | hskp2
    | hskp9 ) ).

cnf(clause62,negated_conjecture,
    ( ~ c2_1(U)
    | ~ ndr1_0
    | ~ c1_1(V)
    | ~ c2_1(V)
    | c1_1(U)
    | c3_1(U)
    | c0_1(V)
    | hskp1 ) ).

cnf(clause63,negated_conjecture,
    ( ~ c3_1(U)
    | ~ ndr1_0
    | ~ c3_1(V)
    | ~ c1_1(V)
    | ~ c2_1(V)
    | c2_1(U)
    | c0_1(U)
    | hskp12 ) ).

cnf(clause64,negated_conjecture,
    ( ~ c0_1(U)
    | ~ c3_1(U)
    | ~ ndr1_0
    | ~ c0_1(V)
    | ~ c1_1(V)
    | c1_1(U)
    | c2_1(V)
    | hskp4 ) ).

%--------------------------------------------------------------------------