%--------------------------------------------------------------------------
% File     : SYN546+1 : TPTP v9.0.0. Released v2.1.0.
% Domain   : Syntactic (Translated)
% Problem  : ALC, N=8, R=1, L=120, K=3, D=2, P=0, Index=075
% Version  : Especial.
% English  :

% Refs     : [OS95]  Ohlbach & Schmidt (1995), Functional Translation and S
%          : [HS97]  Hustadt & Schmidt (1997), On Evaluating Decision Proce
%          : [Wei97] Weidenbach (1997), Email to G. Sutcliffe
% Source   : [Wei97]
% Names    : alc-8-1-120-3-2-075.dfg [Wei97]

% Status   : CounterSatisfiable
% Rating   : 0.00 v5.5.0, 0.20 v5.4.0, 0.40 v5.3.0, 0.25 v5.0.0, 0.33 v4.1.0, 0.50 v4.0.1, 0.33 v3.7.0, 0.00 v3.5.0, 0.25 v3.4.0, 0.17 v3.2.0, 0.50 v3.1.0, 0.83 v2.7.0, 1.00 v2.6.0, 0.50 v2.5.0, 0.33 v2.4.0, 0.67 v2.2.1, 0.00 v2.1.0
% Syntax   : Number of formulae    :    1 (   0 unt;   0 def)
%            Number of atoms       : 1181 (   0 equ)
%            Maximal formula atoms : 1181 (1181 avg)
%            Number of connectives : 1612 ( 432   ~; 469   |; 549   &)
%                                         (   0 <=>; 162  =>;   0  <=;   0 <~>)
%            Maximal formula depth :  113 ( 113 avg)
%            Maximal term depth    :    1 (   1 avg)
%            Number of predicates  :   26 (  26 usr;   9 prp; 0-2 aty)
%            Number of functors    :  158 ( 158 usr; 158 con; 0-0 aty)
%            Number of variables   :  162 ( 162   !;   0   ?)
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
    ~ ( ( ~ c2_0
        | ~ c3_0
        | ( ndr1_0
          & c8_1(a298)
          & ~ c1_1(a298)
          & ~ c3_1(a298) ) )
      & ( c7_0
        | c3_0 )
      & ( c3_0
        | ( ndr1_0
          & ~ c3_1(a299)
          & ! [U] :
              ( ndr1_1(a299)
             => ( ~ c4_2(a299,U)
                | ~ c1_2(a299,U)
                | ~ c3_2(a299,U) ) )
          & ~ c7_1(a299) )
        | c8_0 )
      & ( ( ndr1_0
          & ! [V] :
              ( ndr1_1(a300)
             => ( c1_2(a300,V)
                | c6_2(a300,V)
                | ~ c2_2(a300,V) ) )
          & ndr1_1(a300)
          & c5_2(a300,a301)
          & ~ c1_2(a300,a301)
          & ~ c2_2(a300,a301)
          & c2_1(a300) )
        | ( ndr1_0
          & ndr1_1(a302)
          & c6_2(a302,a303)
          & ~ c1_2(a302,a303)
          & ~ c5_2(a302,a303)
          & c2_1(a302) ) )
      & ( ! [W] :
            ( ndr1_0
           => ( ! [X] :
                  ( ndr1_1(W)
                 => ( ~ c8_2(W,X)
                    | c3_2(W,X)
                    | c2_2(W,X) ) )
              | ~ c5_1(W)
              | ! [Y] :
                  ( ndr1_1(W)
                 => ( c5_2(W,Y)
                    | ~ c8_2(W,Y) ) ) ) )
        | c6_0
        | ( ndr1_0
          & c1_1(a304)
          & c3_1(a304)
          & ~ c5_1(a304) ) )
      & ( ~ c5_0
        | ~ c3_0
        | ~ c1_0 )
      & ( ~ c3_0
        | ( ndr1_0
          & ! [Z] :
              ( ndr1_1(a305)
             => ( ~ c6_2(a305,Z)
                | c4_2(a305,Z)
                | ~ c8_2(a305,Z) ) )
          & ~ c5_1(a305)
          & ndr1_1(a305)
          & ~ c3_2(a305,a306)
          & c2_2(a305,a306)
          & c8_2(a305,a306) )
        | c1_0 )
      & ( c4_0
        | ( ndr1_0
          & c1_1(a307)
          & ndr1_1(a307)
          & ~ c6_2(a307,a308)
          & c3_2(a307,a308)
          & ! [X1] :
              ( ndr1_1(a307)
             => ( c5_2(a307,X1)
                | c7_2(a307,X1)
                | c1_2(a307,X1) ) ) )
        | c8_0 )
      & ( c6_0
        | c7_0 )
      & ( ( ndr1_0
          & ~ c7_1(a309)
          & ! [X2] :
              ( ndr1_1(a309)
             => ( c3_2(a309,X2)
                | ~ c2_2(a309,X2)
                | c6_2(a309,X2) ) )
          & c3_1(a309) )
        | c5_0 )
      & ( ! [X3] :
            ( ndr1_0
           => ( ~ c1_1(X3)
              | c4_1(X3)
              | c8_1(X3) ) )
        | ! [X4] :
            ( ndr1_0
           => ( ~ c1_1(X4)
              | ~ c2_1(X4)
              | ~ c8_1(X4) ) )
        | c8_0 )
      & ( ! [X5] :
            ( ndr1_0
           => ( c4_1(X5)
              | ! [X6] :
                  ( ndr1_1(X5)
                 => ( ~ c1_2(X5,X6)
                    | c7_2(X5,X6)
                    | ~ c5_2(X5,X6) ) )
              | ( ndr1_1(X5)
                & c7_2(X5,a310)
                & c6_2(X5,a310)
                & ~ c3_2(X5,a310) ) ) )
        | ~ c6_0
        | c7_0 )
      & ( ~ c5_0
        | ~ c7_0
        | ~ c6_0 )
      & ( c7_0
        | ~ c5_0 )
      & ( ( ndr1_0
          & ! [X7] :
              ( ndr1_1(a311)
             => ( ~ c7_2(a311,X7)
                | ~ c8_2(a311,X7) ) )
          & ndr1_1(a311)
          & c1_2(a311,a312)
          & ~ c4_2(a311,a312)
          & ~ c5_2(a311,a312)
          & ndr1_1(a311)
          & ~ c7_2(a311,a313)
          & ~ c4_2(a311,a313)
          & ~ c5_2(a311,a313) )
        | c5_0
        | ~ c2_0 )
      & ( ~ c4_0
        | ( ndr1_0
          & c6_1(a314)
          & ~ c1_1(a314)
          & ~ c8_1(a314) )
        | c8_0 )
      & ( c3_0
        | ! [X8] :
            ( ndr1_0
           => ( c2_1(X8)
              | c7_1(X8)
              | ! [X9] :
                  ( ndr1_1(X8)
                 => ( ~ c6_2(X8,X9)
                    | ~ c2_2(X8,X9)
                    | c1_2(X8,X9) ) ) ) )
        | ~ c2_0 )
      & ( ( ndr1_0
          & ~ c4_1(a315)
          & ! [X10] :
              ( ndr1_1(a315)
             => ( ~ c2_2(a315,X10)
                | ~ c5_2(a315,X10)
                | ~ c1_2(a315,X10) ) )
          & ~ c2_1(a315) )
        | ~ c6_0
        | ( ndr1_0
          & c4_1(a316) ) )
      & ( ~ c8_0
        | ( ndr1_0
          & ! [X11] :
              ( ndr1_1(a317)
             => ( c3_2(a317,X11)
                | c6_2(a317,X11)
                | c7_2(a317,X11) ) )
          & c8_1(a317)
          & ! [X12] :
              ( ndr1_1(a317)
             => ( c4_2(a317,X12)
                | c8_2(a317,X12)
                | c5_2(a317,X12) ) ) )
        | ! [X13] :
            ( ndr1_0
           => ( ! [X14] :
                  ( ndr1_1(X13)
                 => ( c3_2(X13,X14)
                    | ~ c1_2(X13,X14)
                    | ~ c8_2(X13,X14) ) )
              | ( ndr1_1(X13)
                & c7_2(X13,a318)
                & ~ c2_2(X13,a318)
                & ~ c1_2(X13,a318) ) ) ) )
      & ( c2_0
        | ~ c4_0
        | c3_0 )
      & ( ~ c4_0
        | ~ c6_0
        | ! [X15] :
            ( ndr1_0
           => ( ! [X16] :
                  ( ndr1_1(X15)
                 => ( c8_2(X15,X16)
                    | c6_2(X15,X16) ) )
              | ( ndr1_1(X15)
                & c5_2(X15,a319)
                & ~ c7_2(X15,a319)
                & c4_2(X15,a319) )
              | ! [X17] :
                  ( ndr1_1(X15)
                 => ( c1_2(X15,X17)
                    | ~ c2_2(X15,X17)
                    | c5_2(X15,X17) ) ) ) ) )
      & ( ! [X18] :
            ( ndr1_0
           => ( ( ndr1_1(X18)
                & c1_2(X18,a320)
                & c3_2(X18,a320)
                & c4_2(X18,a320) )
              | ~ c6_1(X18)
              | ! [X19] :
                  ( ndr1_1(X18)
                 => ( c4_2(X18,X19)
                    | ~ c7_2(X18,X19) ) ) ) )
        | ! [X20] :
            ( ndr1_0
           => ( ~ c6_1(X20)
              | c4_1(X20)
              | c1_1(X20) ) )
        | ( ndr1_0
          & ! [X21] :
              ( ndr1_1(a321)
             => ( ~ c2_2(a321,X21)
                | ~ c4_2(a321,X21)
                | c6_2(a321,X21) ) )
          & ndr1_1(a321)
          & ~ c8_2(a321,a322)
          & ~ c6_2(a321,a322)
          & c5_2(a321,a322) ) )
      & ( ( ndr1_0
          & c1_1(a323)
          & ndr1_1(a323)
          & c4_2(a323,a324)
          & ~ c6_2(a323,a324)
          & ~ c5_2(a323,a324) )
        | ( ndr1_0
          & c4_1(a325)
          & ! [X22] :
              ( ndr1_1(a325)
             => ( ~ c7_2(a325,X22)
                | ~ c5_2(a325,X22)
                | ~ c1_2(a325,X22) ) )
          & c6_1(a325) )
        | c2_0 )
      & ( ! [X23] :
            ( ndr1_0
           => ( ! [X24] :
                  ( ndr1_1(X23)
                 => ( ~ c1_2(X23,X24)
                    | ~ c6_2(X23,X24) ) )
              | ! [X25] :
                  ( ndr1_1(X23)
                 => ( c5_2(X23,X25)
                    | c7_2(X23,X25)
                    | ~ c8_2(X23,X25) ) )
              | ~ c5_1(X23) ) )
        | ( ndr1_0
          & c8_1(a326)
          & ndr1_1(a326)
          & ~ c1_2(a326,a327)
          & c8_2(a326,a327)
          & ~ c2_2(a326,a327)
          & ! [X26] :
              ( ndr1_1(a326)
             => ( ~ c8_2(a326,X26)
                | c7_2(a326,X26) ) ) ) )
      & ( ( ndr1_0
          & ndr1_1(a328)
          & c5_2(a328,a329)
          & c2_2(a328,a329)
          & ~ c4_2(a328,a329)
          & c6_1(a328)
          & ~ c4_1(a328) )
        | ~ c2_0
        | ( ndr1_0
          & ndr1_1(a330)
          & ~ c5_2(a330,a331)
          & c6_2(a330,a331)
          & ~ c1_2(a330,a331)
          & ndr1_1(a330)
          & ~ c8_2(a330,a332)
          & ~ c2_2(a330,a332)
          & ~ c5_2(a330,a332)
          & ~ c6_1(a330) ) )
      & ( ~ c3_0
        | ! [X27] :
            ( ndr1_0
           => ( c4_1(X27)
              | ( ndr1_1(X27)
                & ~ c7_2(X27,a333)
                & c2_2(X27,a333)
                & c6_2(X27,a333) )
              | ! [X28] :
                  ( ndr1_1(X27)
                 => ( ~ c1_2(X27,X28)
                    | ~ c5_2(X27,X28)
                    | c8_2(X27,X28) ) ) ) )
        | ( ndr1_0
          & ~ c6_1(a334)
          & ~ c1_1(a334)
          & ndr1_1(a334)
          & ~ c3_2(a334,a335)
          & ~ c4_2(a334,a335)
          & c5_2(a334,a335) ) )
      & ( ~ c5_0
        | c6_0
        | c7_0 )
      & ( ( ndr1_0
          & c5_1(a336)
          & c3_1(a336) )
        | ~ c1_0
        | ~ c8_0 )
      & ( ~ c8_0
        | ~ c6_0
        | c3_0 )
      & ( ~ c2_0
        | ~ c5_0
        | c7_0 )
      & ( ! [X29] :
            ( ndr1_0
           => ( c3_1(X29)
              | ~ c2_1(X29)
              | ( ndr1_1(X29)
                & c8_2(X29,a337)
                & c5_2(X29,a337)
                & ~ c7_2(X29,a337) ) ) )
        | ( ndr1_0
          & c1_1(a338) )
        | c4_0 )
      & ( ! [X30] :
            ( ndr1_0
           => ( ! [X31] :
                  ( ndr1_1(X30)
                 => ( c1_2(X30,X31)
                    | c8_2(X30,X31)
                    | ~ c4_2(X30,X31) ) )
              | ~ c2_1(X30) ) )
        | ~ c6_0
        | ~ c5_0 )
      & ( ( ndr1_0
          & ~ c2_1(a339)
          & ! [X32] :
              ( ndr1_1(a339)
             => ( c8_2(a339,X32)
                | c2_2(a339,X32) ) )
          & ! [X33] :
              ( ndr1_1(a339)
             => ( c8_2(a339,X33)
                | ~ c7_2(a339,X33) ) ) )
        | c3_0
        | ~ c2_0 )
      & ( ! [X34] :
            ( ndr1_0
           => ( ( ndr1_1(X34)
                & ~ c8_2(X34,a340)
                & c6_2(X34,a340)
                & ~ c3_2(X34,a340) )
              | ( ndr1_1(X34)
                & c1_2(X34,a341)
                & c7_2(X34,a341) )
              | ~ c2_1(X34) ) )
        | c2_0 )
      & ( c5_0
        | ! [X35] :
            ( ndr1_0
           => ( ! [X36] :
                  ( ndr1_1(X35)
                 => ( c7_2(X35,X36)
                    | ~ c5_2(X35,X36) ) )
              | c5_1(X35)
              | c8_1(X35) ) )
        | ! [X37] :
            ( ndr1_0
           => ( ! [X38] :
                  ( ndr1_1(X37)
                 => ( c8_2(X37,X38)
                    | c3_2(X37,X38) ) )
              | ~ c2_1(X37)
              | ! [X39] :
                  ( ndr1_1(X37)
                 => ( ~ c6_2(X37,X39)
                    | c8_2(X37,X39)
                    | c7_2(X37,X39) ) ) ) ) )
      & ( ! [X40] :
            ( ndr1_0
           => ( c3_1(X40)
              | c1_1(X40)
              | ~ c2_1(X40) ) )
        | ( ndr1_0
          & ! [X41] :
              ( ndr1_1(a342)
             => ( c4_2(a342,X41)
                | c5_2(a342,X41) ) )
          & ! [X42] :
              ( ndr1_1(a342)
             => ( c5_2(a342,X42)
                | ~ c8_2(a342,X42)
                | ~ c4_2(a342,X42) ) )
          & ndr1_1(a342)
          & c7_2(a342,a343)
          & c8_2(a342,a343)
          & ~ c4_2(a342,a343) )
        | ! [X43] :
            ( ndr1_0
           => ( ( ndr1_1(X43)
                & c4_2(X43,a344)
                & c7_2(X43,a344)
                & ~ c6_2(X43,a344) )
              | ! [X44] :
                  ( ndr1_1(X43)
                 => ( ~ c6_2(X43,X44)
                    | c4_2(X43,X44) ) )
              | c6_1(X43) ) ) )
      & ( c6_0
        | ~ c4_0
        | ~ c3_0 )
      & ( ~ c6_0
        | ( ndr1_0
          & ndr1_1(a345)
          & c5_2(a345,a346)
          & ~ c1_2(a345,a346)
          & c2_2(a345,a346)
          & c2_1(a345)
          & c6_1(a345) )
        | ( ndr1_0
          & c4_1(a347)
          & ndr1_1(a347)
          & c2_2(a347,a348)
          & ~ c4_2(a347,a348)
          & c3_2(a347,a348)
          & c8_1(a347) ) )
      & ( ( ndr1_0
          & ~ c3_1(a349)
          & ~ c5_1(a349)
          & ~ c8_1(a349) )
        | c1_0
        | ~ c5_0 )
      & ( ( ndr1_0
          & ! [X45] :
              ( ndr1_1(a350)
             => ( c1_2(a350,X45)
                | c8_2(a350,X45)
                | c4_2(a350,X45) ) )
          & ! [X46] :
              ( ndr1_1(a350)
             => ( ~ c3_2(a350,X46)
                | c4_2(a350,X46)
                | ~ c5_2(a350,X46) ) )
          & ! [X47] :
              ( ndr1_1(a350)
             => ( c2_2(a350,X47)
                | ~ c6_2(a350,X47)
                | c4_2(a350,X47) ) ) )
        | ( ndr1_0
          & ! [X48] :
              ( ndr1_1(a351)
             => ( c1_2(a351,X48)
                | ~ c6_2(a351,X48)
                | ~ c7_2(a351,X48) ) )
          & ! [X49] :
              ( ndr1_1(a351)
             => ( c2_2(a351,X49)
                | c4_2(a351,X49)
                | c5_2(a351,X49) ) ) )
        | ( ndr1_0
          & ndr1_1(a352)
          & c6_2(a352,a353)
          & c4_2(a352,a353)
          & ~ c8_2(a352,a353)
          & ! [X50] :
              ( ndr1_1(a352)
             => ( ~ c5_2(a352,X50)
                | ~ c8_2(a352,X50)
                | c1_2(a352,X50) ) )
          & c2_1(a352) ) )
      & ( ( ndr1_0
          & c5_1(a354)
          & ! [X51] :
              ( ndr1_1(a354)
             => ( ~ c2_2(a354,X51)
                | c8_2(a354,X51) ) )
          & ~ c2_1(a354) )
        | ( ndr1_0
          & c6_1(a355)
          & ndr1_1(a355)
          & c1_2(a355,a356)
          & ~ c6_2(a355,a356)
          & c8_2(a355,a356)
          & ~ c2_1(a355) )
        | ~ c7_0 )
      & ( c1_0
        | c4_0
        | c8_0 )
      & ( ~ c1_0
        | c8_0 )
      & ( c3_0
        | ~ c5_0
        | ! [X52] :
            ( ndr1_0
           => ( ! [X53] :
                  ( ndr1_1(X52)
                 => ( ~ c6_2(X52,X53)
                    | c2_2(X52,X53)
                    | c1_2(X52,X53) ) )
              | ~ c4_1(X52)
              | ~ c6_1(X52) ) ) )
      & ( ( ndr1_0
          & ndr1_1(a357)
          & ~ c3_2(a357,a358)
          & c7_2(a357,a358)
          & ~ c6_2(a357,a358)
          & ! [X54] :
              ( ndr1_1(a357)
             => ( c1_2(a357,X54)
                | ~ c4_2(a357,X54)
                | ~ c5_2(a357,X54) ) )
          & ! [X55] :
              ( ndr1_1(a357)
             => ( c5_2(a357,X55)
                | ~ c7_2(a357,X55)
                | ~ c8_2(a357,X55) ) ) )
        | ! [X56] :
            ( ndr1_0
           => ( ( ndr1_1(X56)
                & ~ c6_2(X56,a359)
                & c8_2(X56,a359)
                & ~ c4_2(X56,a359) )
              | ! [X57] :
                  ( ndr1_1(X56)
                 => ( c7_2(X56,X57)
                    | c4_2(X56,X57)
                    | ~ c1_2(X56,X57) ) )
              | ( ndr1_1(X56)
                & ~ c5_2(X56,a360)
                & ~ c4_2(X56,a360)
                & ~ c8_2(X56,a360) ) ) )
        | ! [X58] :
            ( ndr1_0
           => ( ( ndr1_1(X58)
                & c7_2(X58,a361)
                & ~ c5_2(X58,a361)
                & ~ c4_2(X58,a361) )
              | ~ c6_1(X58) ) ) )
      & ( ! [X59] :
            ( ndr1_0
           => ( ~ c7_1(X59)
              | ! [X60] :
                  ( ndr1_1(X59)
                 => ( c4_2(X59,X60)
                    | ~ c7_2(X59,X60)
                    | c2_2(X59,X60) ) )
              | ! [X61] :
                  ( ndr1_1(X59)
                 => ( c7_2(X59,X61)
                    | ~ c3_2(X59,X61)
                    | c5_2(X59,X61) ) ) ) )
        | ( ndr1_0
          & c5_1(a362)
          & ndr1_1(a362)
          & ~ c6_2(a362,a363)
          & c2_2(a362,a363)
          & ~ c1_2(a362,a363)
          & ! [X62] :
              ( ndr1_1(a362)
             => ( c6_2(a362,X62)
                | ~ c2_2(a362,X62)
                | c5_2(a362,X62) ) ) )
        | ! [X63] :
            ( ndr1_0
           => ( ! [X64] :
                  ( ndr1_1(X63)
                 => ( ~ c3_2(X63,X64)
                    | ~ c8_2(X63,X64) ) )
              | c8_1(X63)
              | ! [X65] :
                  ( ndr1_1(X63)
                 => ( ~ c7_2(X63,X65)
                    | ~ c2_2(X63,X65)
                    | ~ c8_2(X63,X65) ) ) ) ) )
      & ( ! [X66] :
            ( ndr1_0
           => ( c4_1(X66)
              | ~ c1_1(X66)
              | ~ c2_1(X66) ) )
        | ! [X67] :
            ( ndr1_0
           => ( ! [X68] :
                  ( ndr1_1(X67)
                 => ( c5_2(X67,X68)
                    | ~ c8_2(X67,X68)
                    | ~ c6_2(X67,X68) ) )
              | ( ndr1_1(X67)
                & c2_2(X67,a364)
                & ~ c4_2(X67,a364)
                & c8_2(X67,a364) )
              | c8_1(X67) ) )
        | ! [X69] :
            ( ndr1_0
           => ( c1_1(X69)
              | ! [X70] :
                  ( ndr1_1(X69)
                 => ( c5_2(X69,X70)
                    | c8_2(X69,X70)
                    | ~ c7_2(X69,X70) ) )
              | c7_1(X69) ) ) )
      & ( ( ndr1_0
          & ! [X71] :
              ( ndr1_1(a365)
             => ( c4_2(a365,X71)
                | c5_2(a365,X71) ) )
          & ~ c7_1(a365)
          & c1_1(a365) )
        | ( ndr1_0
          & ! [X72] :
              ( ndr1_1(a366)
             => ( c1_2(a366,X72)
                | c2_2(a366,X72)
                | ~ c4_2(a366,X72) ) )
          & ! [X73] :
              ( ndr1_1(a366)
             => ( c7_2(a366,X73)
                | c1_2(a366,X73) ) )
          & ! [X74] :
              ( ndr1_1(a366)
             => ( c8_2(a366,X74)
                | c4_2(a366,X74) ) ) )
        | ! [X75] :
            ( ndr1_0
           => ( c3_1(X75)
              | ( ndr1_1(X75)
                & ~ c8_2(X75,a367)
                & c4_2(X75,a367)
                & c5_2(X75,a367) )
              | ! [X76] :
                  ( ndr1_1(X75)
                 => ( ~ c1_2(X75,X76)
                    | ~ c6_2(X75,X76)
                    | c5_2(X75,X76) ) ) ) ) )
      & ( ~ c2_0
        | ! [X77] :
            ( ndr1_0
           => ( c6_1(X77)
              | ( ndr1_1(X77)
                & ~ c8_2(X77,a368)
                & c4_2(X77,a368) ) ) )
        | ( ndr1_0
          & c2_1(a369)
          & ndr1_1(a369)
          & ~ c4_2(a369,a370)
          & ~ c5_2(a369,a370)
          & ~ c8_2(a369,a370)
          & ! [X78] :
              ( ndr1_1(a369)
             => ( c3_2(a369,X78)
                | c1_2(a369,X78)
                | c4_2(a369,X78) ) ) ) )
      & ( ( ndr1_0
          & c3_1(a371)
          & ! [X79] :
              ( ndr1_1(a371)
             => ( c4_2(a371,X79)
                | ~ c6_2(a371,X79)
                | ~ c5_2(a371,X79) ) ) )
        | ~ c6_0 )
      & ( c2_0
        | ! [X80] :
            ( ndr1_0
           => ( ~ c1_1(X80)
              | ! [X81] :
                  ( ndr1_1(X80)
                 => ( c8_2(X80,X81)
                    | c3_2(X80,X81)
                    | ~ c1_2(X80,X81) ) )
              | ( ndr1_1(X80)
                & c4_2(X80,a372)
                & ~ c8_2(X80,a372)
                & ~ c5_2(X80,a372) ) ) )
        | ( ndr1_0
          & c8_1(a373)
          & c3_1(a373)
          & c5_1(a373) ) )
      & ( ( ndr1_0
          & ! [X82] :
              ( ndr1_1(a374)
             => ( ~ c5_2(a374,X82)
                | c8_2(a374,X82)
                | ~ c1_2(a374,X82) ) )
          & ! [X83] :
              ( ndr1_1(a374)
             => ( ~ c5_2(a374,X83)
                | c2_2(a374,X83)
                | c4_2(a374,X83) ) )
          & ndr1_1(a374)
          & ~ c7_2(a374,a375)
          & ~ c6_2(a374,a375)
          & c5_2(a374,a375) )
        | ~ c5_0
        | ~ c3_0 )
      & ( ~ c3_0
        | ~ c4_0
        | ( ndr1_0
          & ! [X84] :
              ( ndr1_1(a376)
             => ( ~ c8_2(a376,X84)
                | ~ c5_2(a376,X84)
                | c1_2(a376,X84) ) )
          & ndr1_1(a376)
          & ~ c5_2(a376,a377)
          & c3_2(a376,a377)
          & ~ c6_2(a376,a377)
          & ! [X85] :
              ( ndr1_1(a376)
             => ( ~ c1_2(a376,X85)
                | c4_2(a376,X85)
                | c3_2(a376,X85) ) ) ) )
      & ( ! [X86] :
            ( ndr1_0
           => ( ~ c2_1(X86)
              | ( ndr1_1(X86)
                & c6_2(X86,a378)
                & ~ c2_2(X86,a378)
                & ~ c5_2(X86,a378) )
              | c3_1(X86) ) )
        | ( ndr1_0
          & ! [X87] :
              ( ndr1_1(a379)
             => ( c3_2(a379,X87)
                | c5_2(a379,X87)
                | c4_2(a379,X87) ) )
          & c3_1(a379)
          & ~ c1_1(a379) )
        | c5_0 )
      & ( ~ c6_0
        | ( ndr1_0
          & ndr1_1(a380)
          & c2_2(a380,a381)
          & ~ c8_2(a380,a381)
          & ~ c1_2(a380,a381)
          & ndr1_1(a380)
          & ~ c6_2(a380,a382)
          & ~ c1_2(a380,a382)
          & c3_2(a380,a382)
          & ndr1_1(a380)
          & c6_2(a380,a383)
          & ~ c8_2(a380,a383)
          & c1_2(a380,a383) ) )
      & ( c3_0
        | ( ndr1_0
          & c6_1(a384)
          & ~ c8_1(a384)
          & ! [X88] :
              ( ndr1_1(a384)
             => ( ~ c3_2(a384,X88)
                | ~ c2_2(a384,X88)
                | ~ c7_2(a384,X88) ) ) ) )
      & ( ~ c3_0
        | c5_0
        | ( ndr1_0
          & c5_1(a385)
          & c2_1(a385)
          & ndr1_1(a385)
          & ~ c8_2(a385,a386)
          & ~ c3_2(a385,a386)
          & ~ c6_2(a385,a386) ) )
      & ( c7_0
        | ~ c5_0
        | c1_0 )
      & ( ( ndr1_0
          & ndr1_1(a387)
          & c7_2(a387,a388)
          & c3_2(a387,a388)
          & ~ c8_2(a387,a388)
          & c6_1(a387)
          & c1_1(a387) )
        | ! [X89] :
            ( ndr1_0
           => ( ( ndr1_1(X89)
                & c2_2(X89,a389)
                & c7_2(X89,a389)
                & ~ c6_2(X89,a389) )
              | ( ndr1_1(X89)
                & ~ c7_2(X89,a390)
                & c3_2(X89,a390)
                & ~ c8_2(X89,a390) )
              | ~ c2_1(X89) ) ) )
      & ( c7_0
        | c3_0
        | ! [X90] :
            ( ndr1_0
           => ( ! [X91] :
                  ( ndr1_1(X90)
                 => ( c2_2(X90,X91)
                    | c4_2(X90,X91)
                    | ~ c7_2(X90,X91) ) )
              | ~ c4_1(X90)
              | ~ c8_1(X90) ) ) )
      & ( ! [X92] :
            ( ndr1_0
           => ( ~ c5_1(X92)
              | ~ c6_1(X92)
              | ( ndr1_1(X92)
                & c7_2(X92,a391)
                & c8_2(X92,a391)
                & ~ c4_2(X92,a391) ) ) )
        | c1_0
        | ! [X93] :
            ( ndr1_0
           => ( ! [X94] :
                  ( ndr1_1(X93)
                 => ( ~ c4_2(X93,X94)
                    | c8_2(X93,X94) ) )
              | ~ c3_1(X93)
              | ( ndr1_1(X93)
                & c2_2(X93,a392)
                & ~ c4_2(X93,a392) ) ) ) )
      & ( ! [X95] :
            ( ndr1_0
           => ( c2_1(X95)
              | ! [X96] :
                  ( ndr1_1(X95)
                 => ( ~ c4_2(X95,X96)
                    | ~ c5_2(X95,X96)
                    | ~ c7_2(X95,X96) ) )
              | ~ c1_1(X95) ) )
        | c6_0
        | ( ndr1_0
          & ! [X97] :
              ( ndr1_1(a393)
             => ( ~ c8_2(a393,X97)
                | ~ c3_2(a393,X97)
                | c6_2(a393,X97) ) )
          & ndr1_1(a393)
          & c1_2(a393,a394)
          & ~ c4_2(a393,a394)
          & ~ c8_2(a393,a394) ) )
      & ( c3_0
        | c2_0
        | c6_0 )
      & ( ! [X98] :
            ( ndr1_0
           => ( ! [X99] :
                  ( ndr1_1(X98)
                 => ( c4_2(X98,X99)
                    | ~ c7_2(X98,X99) ) )
              | ! [X100] :
                  ( ndr1_1(X98)
                 => ( c3_2(X98,X100)
                    | ~ c7_2(X98,X100) ) )
              | ! [X101] :
                  ( ndr1_1(X98)
                 => ( c3_2(X98,X101)
                    | ~ c5_2(X98,X101)
                    | c8_2(X98,X101) ) ) ) )
        | c5_0 )
      & ( ( ndr1_0
          & ! [X102] :
              ( ndr1_1(a395)
             => ( ~ c7_2(a395,X102)
                | c4_2(a395,X102)
                | ~ c2_2(a395,X102) ) )
          & ndr1_1(a395)
          & ~ c3_2(a395,a396)
          & ~ c2_2(a395,a396)
          & c4_2(a395,a396)
          & ~ c3_1(a395) )
        | c8_0
        | ~ c7_0 )
      & ( c8_0
        | ~ c1_0 )
      & ( ( ndr1_0
          & ndr1_1(a397)
          & c5_2(a397,a398)
          & ~ c8_2(a397,a398)
          & ~ c7_2(a397,a398)
          & ndr1_1(a397)
          & ~ c7_2(a397,a399)
          & c2_2(a397,a399)
          & c1_2(a397,a399)
          & ~ c3_1(a397) )
        | ( ndr1_0
          & c7_1(a400)
          & ! [X103] :
              ( ndr1_1(a400)
             => ( c5_2(a400,X103)
                | ~ c1_2(a400,X103) ) )
          & c5_1(a400) )
        | c5_0 )
      & ( ~ c3_0
        | ~ c7_0
        | ! [X104] :
            ( ndr1_0
           => ( ( ndr1_1(X104)
                & ~ c2_2(X104,a401)
                & ~ c7_2(X104,a401)
                & ~ c6_2(X104,a401) )
              | ~ c1_1(X104)
              | ! [X105] :
                  ( ndr1_1(X104)
                 => ( ~ c2_2(X104,X105)
                    | ~ c6_2(X104,X105) ) ) ) ) )
      & ( c4_0
        | ! [X106] :
            ( ndr1_0
           => ( ! [X107] :
                  ( ndr1_1(X106)
                 => ( ~ c2_2(X106,X107)
                    | ~ c6_2(X106,X107)
                    | c7_2(X106,X107) ) )
              | c6_1(X106)
              | c8_1(X106) ) )
        | c3_0 )
      & ( c7_0
        | ( ndr1_0
          & ndr1_1(a402)
          & ~ c4_2(a402,a403)
          & c6_2(a402,a403)
          & c3_2(a402,a403)
          & ! [X108] :
              ( ndr1_1(a402)
             => ( c8_2(a402,X108)
                | ~ c6_2(a402,X108)
                | c2_2(a402,X108) ) )
          & ~ c7_1(a402) ) )
      & ( ! [X109] :
            ( ndr1_0
           => ( c2_1(X109)
              | c8_1(X109)
              | ( ndr1_1(X109)
                & c1_2(X109,a404)
                & ~ c3_2(X109,a404)
                & ~ c6_2(X109,a404) ) ) )
        | ~ c8_0 )
      & ( ~ c2_0
        | ! [X110] :
            ( ndr1_0
           => ( c8_1(X110)
              | ! [X111] :
                  ( ndr1_1(X110)
                 => ( c6_2(X110,X111)
                    | c2_2(X110,X111)
                    | c3_2(X110,X111) ) )
              | c4_1(X110) ) )
        | ( ndr1_0
          & ndr1_1(a405)
          & ~ c8_2(a405,a406)
          & c7_2(a405,a406)
          & c2_2(a405,a406)
          & c6_1(a405)
          & ndr1_1(a405)
          & ~ c5_2(a405,a407)
          & ~ c6_2(a405,a407) ) )
      & ( c2_0
        | ( ndr1_0
          & ndr1_1(a408)
          & ~ c7_2(a408,a409)
          & c4_2(a408,a409)
          & c1_2(a408,a409)
          & ! [X112] :
              ( ndr1_1(a408)
             => ( c7_2(a408,X112)
                | ~ c3_2(a408,X112) ) )
          & c8_1(a408) )
        | ~ c5_0 )
      & ( c4_0
        | ( ndr1_0
          & c1_1(a410)
          & ~ c6_1(a410)
          & ! [X113] :
              ( ndr1_1(a410)
             => ( ~ c1_2(a410,X113)
                | ~ c2_2(a410,X113) ) ) )
        | ! [X114] :
            ( ndr1_0
           => ( ~ c6_1(X114)
              | c8_1(X114)
              | c5_1(X114) ) ) )
      & ( ! [X115] :
            ( ndr1_0
           => ( ! [X116] :
                  ( ndr1_1(X115)
                 => ( c7_2(X115,X116)
                    | c3_2(X115,X116)
                    | c6_2(X115,X116) ) )
              | ( ndr1_1(X115)
                & ~ c8_2(X115,a411)
                & ~ c2_2(X115,a411)
                & c3_2(X115,a411) )
              | ( ndr1_1(X115)
                & c2_2(X115,a412)
                & c6_2(X115,a412)
                & c8_2(X115,a412) ) ) )
        | ( ndr1_0
          & ~ c8_1(a413)
          & ~ c3_1(a413)
          & c4_1(a413) )
        | ~ c3_0 )
      & ( c8_0
        | ~ c7_0
        | ~ c3_0 )
      & ( ~ c3_0
        | ~ c5_0
        | ( ndr1_0
          & ndr1_1(a414)
          & ~ c7_2(a414,a415)
          & ~ c1_2(a414,a415)
          & c2_2(a414,a415)
          & c5_1(a414)
          & ~ c6_1(a414) ) )
      & ( c4_0
        | c5_0
        | ! [X117] :
            ( ndr1_0
           => ( ( ndr1_1(X117)
                & ~ c8_2(X117,a416)
                & ~ c7_2(X117,a416)
                & ~ c4_2(X117,a416) )
              | ~ c6_1(X117) ) ) )
      & ( ~ c7_0
        | ~ c8_0
        | ( ndr1_0
          & c4_1(a417)
          & ndr1_1(a417)
          & ~ c3_2(a417,a418)
          & ~ c6_2(a417,a418)
          & c5_1(a417) ) )
      & ( ! [X118] :
            ( ndr1_0
           => ( ~ c7_1(X118)
              | ! [X119] :
                  ( ndr1_1(X118)
                 => ( c4_2(X118,X119)
                    | c5_2(X118,X119)
                    | ~ c8_2(X118,X119) ) )
              | ! [X120] :
                  ( ndr1_1(X118)
                 => ( ~ c6_2(X118,X120)
                    | ~ c5_2(X118,X120)
                    | ~ c7_2(X118,X120) ) ) ) )
        | ( ndr1_0
          & ndr1_1(a419)
          & c1_2(a419,a420)
          & c7_2(a419,a420)
          & ~ c2_2(a419,a420)
          & ~ c1_1(a419)
          & ndr1_1(a419)
          & ~ c3_2(a419,a421)
          & c2_2(a419,a421)
          & ~ c4_2(a419,a421) ) )
      & ( ( ndr1_0
          & c6_1(a422)
          & ~ c1_1(a422)
          & c4_1(a422) )
        | ~ c1_0 )
      & ( c6_0
        | ~ c4_0
        | c1_0 )
      & ( ( ndr1_0
          & ndr1_1(a423)
          & c8_2(a423,a424)
          & c1_2(a423,a424)
          & c5_2(a423,a424)
          & c4_1(a423)
          & ~ c8_1(a423) )
        | ~ c7_0
        | ( ndr1_0
          & ~ c4_1(a425)
          & ndr1_1(a425)
          & ~ c1_2(a425,a426)
          & c3_2(a425,a426)
          & c4_2(a425,a426)
          & c3_1(a425) ) )
      & ( ~ c2_0
        | ! [X121] :
            ( ndr1_0
           => ( ( ndr1_1(X121)
                & c8_2(X121,a427)
                & ~ c1_2(X121,a427) )
              | ! [X122] :
                  ( ndr1_1(X121)
                 => ( ~ c1_2(X121,X122)
                    | c4_2(X121,X122)
                    | c5_2(X121,X122) ) )
              | ! [X123] :
                  ( ndr1_1(X121)
                 => ( c1_2(X121,X123)
                    | c3_2(X121,X123)
                    | c5_2(X121,X123) ) ) ) )
        | c6_0 )
      & ( ( ndr1_0
          & ! [X124] :
              ( ndr1_1(a428)
             => ( c7_2(a428,X124)
                | ~ c8_2(a428,X124)
                | ~ c5_2(a428,X124) ) )
          & c3_1(a428) )
        | ~ c8_0
        | c2_0 )
      & ( c2_0
        | ~ c1_0
        | ! [X125] :
            ( ndr1_0
           => ( ! [X126] :
                  ( ndr1_1(X125)
                 => ( c7_2(X125,X126)
                    | c5_2(X125,X126) ) )
              | ( ndr1_1(X125)
                & c5_2(X125,a429)
                & ~ c6_2(X125,a429)
                & c8_2(X125,a429) )
              | ~ c2_1(X125) ) ) )
      & ( ~ c1_0
        | c5_0
        | ~ c3_0 )
      & ( ! [X127] :
            ( ndr1_0
           => ( ( ndr1_1(X127)
                & ~ c3_2(X127,a430)
                & c6_2(X127,a430)
                & c2_2(X127,a430) )
              | ~ c5_1(X127)
              | c3_1(X127) ) )
        | ! [X128] :
            ( ndr1_0
           => ( c5_1(X128)
              | c7_1(X128) ) )
        | ~ c6_0 )
      & ( ! [X129] :
            ( ndr1_0
           => ( c4_1(X129)
              | c7_1(X129)
              | ! [X130] :
                  ( ndr1_1(X129)
                 => ( ~ c5_2(X129,X130)
                    | c3_2(X129,X130)
                    | c4_2(X129,X130) ) ) ) )
        | c6_0
        | ( ndr1_0
          & ~ c1_1(a431)
          & ! [X131] :
              ( ndr1_1(a431)
             => ( c1_2(a431,X131)
                | c3_2(a431,X131) ) )
          & ~ c2_1(a431) ) )
      & ( ! [X132] :
            ( ndr1_0
           => ( ! [X133] :
                  ( ndr1_1(X132)
                 => ( c4_2(X132,X133)
                    | ~ c1_2(X132,X133)
                    | ~ c7_2(X132,X133) ) )
              | ( ndr1_1(X132)
                & c6_2(X132,a432)
                & c1_2(X132,a432)
                & ~ c7_2(X132,a432) )
              | ( ndr1_1(X132)
                & c5_2(X132,a433)
                & c2_2(X132,a433)
                & c1_2(X132,a433) ) ) )
        | ! [X134] :
            ( ndr1_0
           => ( ~ c3_1(X134)
              | ~ c5_1(X134)
              | c2_1(X134) ) )
        | c6_0 )
      & ( ! [X135] :
            ( ndr1_0
           => ( c7_1(X135)
              | ~ c5_1(X135)
              | ( ndr1_1(X135)
                & ~ c3_2(X135,a434)
                & ~ c6_2(X135,a434)
                & ~ c1_2(X135,a434) ) ) )
        | ! [X136] :
            ( ndr1_0
           => ( c4_1(X136)
              | ( ndr1_1(X136)
                & ~ c5_2(X136,a435)
                & ~ c3_2(X136,a435) ) ) )
        | ~ c7_0 )
      & ( c6_0
        | ( ndr1_0
          & ! [X137] :
              ( ndr1_1(a436)
             => ( ~ c4_2(a436,X137)
                | ~ c3_2(a436,X137)
                | ~ c5_2(a436,X137) ) )
          & c7_1(a436)
          & ! [X138] :
              ( ndr1_1(a436)
             => ( ~ c5_2(a436,X138)
                | c2_2(a436,X138) ) ) )
        | ~ c1_0 )
      & ( c6_0
        | ! [X139] :
            ( ndr1_0
           => ( ( ndr1_1(X139)
                & ~ c7_2(X139,a437)
                & ~ c1_2(X139,a437) )
              | ! [X140] :
                  ( ndr1_1(X139)
                 => ( c1_2(X139,X140)
                    | ~ c8_2(X139,X140)
                    | ~ c5_2(X139,X140) ) )
              | c6_1(X139) ) )
        | c4_0 )
      & ( ( ndr1_0
          & ndr1_1(a438)
          & ~ c6_2(a438,a439)
          & c1_2(a438,a439)
          & ndr1_1(a438)
          & c4_2(a438,a440)
          & ~ c5_2(a438,a440)
          & ~ c6_2(a438,a440) )
        | ( ndr1_0
          & ! [X141] :
              ( ndr1_1(a441)
             => ( c4_2(a441,X141)
                | c1_2(a441,X141) ) )
          & c5_1(a441)
          & ~ c8_1(a441) )
        | ( ndr1_0
          & ! [X142] :
              ( ndr1_1(a442)
             => ( c8_2(a442,X142)
                | ~ c7_2(a442,X142)
                | c6_2(a442,X142) ) )
          & ~ c8_1(a442)
          & ~ c2_1(a442) ) )
      & ( ! [X143] :
            ( ndr1_0
           => ( ! [X144] :
                  ( ndr1_1(X143)
                 => ( ~ c7_2(X143,X144)
                    | ~ c3_2(X143,X144)
                    | ~ c2_2(X143,X144) ) )
              | ! [X145] :
                  ( ndr1_1(X143)
                 => ( c1_2(X143,X145)
                    | c8_2(X143,X145)
                    | ~ c2_2(X143,X145) ) )
              | c8_1(X143) ) )
        | ~ c5_0
        | ! [X146] :
            ( ndr1_0
           => ( ~ c4_1(X146)
              | ( ndr1_1(X146)
                & ~ c5_2(X146,a443)
                & ~ c2_2(X146,a443)
                & ~ c7_2(X146,a443) )
              | ! [X147] :
                  ( ndr1_1(X146)
                 => ( ~ c7_2(X146,X147)
                    | ~ c2_2(X146,X147)
                    | ~ c3_2(X146,X147) ) ) ) ) )
      & ( ~ c6_0
        | ! [X148] :
            ( ndr1_0
           => ( ~ c8_1(X148)
              | ~ c4_1(X148)
              | ( ndr1_1(X148)
                & c7_2(X148,a444)
                & c2_2(X148,a444)
                & c4_2(X148,a444) ) ) )
        | ( ndr1_0
          & ~ c2_1(a445)
          & ndr1_1(a445)
          & ~ c5_2(a445,a446)
          & c3_2(a445,a446)
          & ~ c8_2(a445,a446)
          & ndr1_1(a445)
          & ~ c5_2(a445,a447)
          & ~ c2_2(a445,a447)
          & c4_2(a445,a447) ) )
      & ( ( ndr1_0
          & ~ c8_1(a448)
          & ! [X149] :
              ( ndr1_1(a448)
             => ( c3_2(a448,X149)
                | ~ c1_2(a448,X149) ) )
          & ! [X150] :
              ( ndr1_1(a448)
             => ( ~ c7_2(a448,X150)
                | ~ c3_2(a448,X150)
                | ~ c4_2(a448,X150) ) ) )
        | ! [X151] :
            ( ndr1_0
           => ( ! [X152] :
                  ( ndr1_1(X151)
                 => ( ~ c5_2(X151,X152)
                    | c1_2(X151,X152) ) )
              | ! [X153] :
                  ( ndr1_1(X151)
                 => ( c5_2(X151,X153)
                    | c7_2(X151,X153)
                    | ~ c2_2(X151,X153) ) )
              | ! [X154] :
                  ( ndr1_1(X151)
                 => ( c3_2(X151,X154)
                    | ~ c5_2(X151,X154)
                    | c8_2(X151,X154) ) ) ) )
        | c3_0 )
      & ( ( ndr1_0
          & ndr1_1(a449)
          & ~ c7_2(a449,a450)
          & c6_2(a449,a450)
          & ~ c8_2(a449,a450)
          & ndr1_1(a449)
          & c8_2(a449,a451)
          & ~ c2_2(a449,a451)
          & ~ c4_2(a449,a451)
          & ndr1_1(a449)
          & c7_2(a449,a452)
          & ~ c4_2(a449,a452) )
        | c2_0
        | ~ c1_0 )
      & ( c1_0
        | c4_0
        | ( ndr1_0
          & ! [X155] :
              ( ndr1_1(a453)
             => ( ~ c3_2(a453,X155)
                | ~ c2_2(a453,X155)
                | c7_2(a453,X155) ) )
          & ! [X156] :
              ( ndr1_1(a453)
             => ( c3_2(a453,X156)
                | ~ c8_2(a453,X156)
                | ~ c4_2(a453,X156) ) )
          & c3_1(a453) ) )
      & ( ~ c4_0
        | ( ndr1_0
          & ~ c2_1(a454)
          & ndr1_1(a454)
          & ~ c2_2(a454,a455)
          & c8_2(a454,a455)
          & c4_2(a454,a455)
          & ~ c1_1(a454) )
        | c7_0 ) ) ).

%--------------------------------------------------------------------------