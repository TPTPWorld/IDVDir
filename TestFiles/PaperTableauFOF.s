%----Problem formulae in FOF
fof(a1,axiom,
    ~ ( ~ q(b)
      & ? [X] : s(X) ),
    file('PaperFOF.p',a1) ).

fof(a2,axiom,
    ( ( r
      & q(b) )
   => ! [X] : ~ p(X) ),
    file('PaperFOF.p',a2) ).

fof(a3,axiom,
    ( p(c)
    | ! [Y] :
        ( ~ q(c)
        & q(Y) ) ),
    file('PaperFOF.p',a3) ).

fof(a4,axiom,
    ( q(c)
    | ~ q(b) ),
    file('PaperFOF.p',a4) ).

fof(a5,axiom,
    ( ~ p(c)
    | r ),
    file('PaperFOF.p',a5) ).

fof(prove,conjecture,
    ! [X] :
      ( ~ s(X)
      & ~ q(b)
      & p(c) ),
    file('PaperFOF.p',prove) ).

%----Clausification
fof(nc1,negated_conjecture,
    ~ ! [X] :
        ( ~ s(X)
        & ~ q(b)
        & p(c) ),
    inference(negate,[status(cth)],[prove]) ).

fof(nc2,negated_conjecture,
    ? [X] :
      ~ ( ~ s(X)
        & ~ q(b)
        & p(c) ),
    inference(negate,[status(thm)],[nc1]) ).

fof(nc3,negated_conjecture,
    ~ ( ~ s(sK1)
      & ~ q(b)
      & p(c) ),
    inference(skolemize,[status(esa),new_symbols(skolem,[sK1]),skolemized(X)],[nc2]) ).

cnf(c1,plain,
    ( q(b)
    | ~ s(X) ),
    inference(clausify,[status(thm)],[a1]) ).

cnf(c2,plain,
    ( ~ q(b)
    | ~ p(X)
    | ~ r ),
    inference(clausify,[status(thm)],[a2]) ).

cnf(c3,plain,
    ( p(c)
    | ~ q(c) ),
    inference(clausify,[status(thm)],[a3]) ).

cnf(c4,plain,
    ( p(c)
    | q(Y) ),
    inference(clausify,[status(thm)],[a3]) ).

cnf(c5,plain,
    ( q(c)
    | ~ q(b) ),
    inference(clausify,[status(thm)],[a4]) ).

cnf(c6,plain,
    ( r
    | ~ p(c) ),
    inference(clausify,[status(thm)],[a5]) ).

cnf(c7,negated_conjecture,
    ( s(sK1)
    | q(b)
    | ~ p(c) ),
    inference(clausify,[status(thm)],[nc3]) ).

%----Derivation
cnf(t1,plain,
    ( q(b)
    | ~ s(sK1) ),
    inference(start,[status(thm),path([0:0])],[c1]) ).

cnf(t2,plain,
    ( ~ q(b)
    | ~ p(c)
    | ~ r ),
    inference(extension,[status(thm),path([t1:1,0:0])],[c2]) ).

cnf(t3,plain,
    $false,
    inference(connection,[status(thm),path([t2:1,t1:1,0:0])],[t2:1,t1:1]) ).

cnf(t4,plain,
    ( p(c)
    | ~ q(c) ),
    inference(extension,[status(thm),path([t2:2,t1:1,0:0])],[c3]) ).

cnf(t5,plain,
    $false,
    inference(connection,[status(thm),path([t4:1,t2:2,t1:1,0:0])],[t4:1,t2:2]) ).

cnf(t6,plain,
    ( q(c)
    | ~ q(b) ),
    inference(extension,[status(thm),path([t4:2,t2:2,t1:1,0:0])],[c5]) ).

cnf(t7,plain,
    $false,
    inference(connection,[status(thm),path([t6:1,t4:2,t2:2,t1:1,0:0])],[t6:1,t4:2]) ).

cnf(t8,plain,
    $false,
    inference(reduction,[status(thm),path([t6:2,t4:2,t2:2,t1:1,0:0])],[t6:2,t1:1]) ).

cnf(l1,lemma,
    p(c),
    inference(lemma,[status(cth),path([t2:2,t1:1,0:0]),below(t1:1)],[t2:2]) ).

cnf(t9,plain,
    ( r
    | ~ p(c) ),
    inference(extension,[status(thm),path([t2:3,t1:1,0:0])],[c6]) ).

cnf(t10,plain,
    $false,
    inference(connection,[status(thm),path([t9:1,t2:3,t1:1,0:0])],[t9:1,t2:3]) ).

cnf(t11,plain,
    p(c),
    inference(lemma_extension,[status(thm),path([t9:2,t2:3,t1:1,0:0])],[l1:1]) ).

cnf(t12,plain,
    $false,
    inference(connection,[status(thm),path([t11:1,t9:2,t2:3,t1:1,0:0])],[t9:2,t11:1]) ).

cnf(l2,lemma,
    ~ q(b),
    inference(lemma,[status(cth),path([t1:1,0:0]),below(0:0)],[t1:1]) ).

cnf(t13,plain,
    ( s(sK1)
    | q(b)
    | ~ p(c) ),
    inference(extension,[status(thm),path([t1:2,0:0])],[c7]) ).

cnf(t14,plain,
    $false,
    inference(connection,[status(thm),path([t13:1,t1:2,0:0])],[t13:1,t1:2]) ).

cnf(t15,plain,
    ~ q(b),
    inference(lemma_extension,[status(thm),path([t13:2,t1:2,0:0])],[l2:1]) ).

cnf(t16,plain,
    $false,
    inference(connection,[status(thm),path([t15:1,t13:2,t1:2,0:0])],[t15:1,t13:2]) ).

cnf(t17,plain,
    ( p(c)
    | q(b) ),
    inference(extension,[status(thm),path([t13:3,t1:2,0:0])],[c4]) ).

cnf(t18,plain,
    $false,
    inference(connection,[status(thm),path([t17:1,t13:3,t1:2,0:0])],[t17:1,t13:3]) ).

cnf(t19,plain,
    ~ q(b),
    inference(lemma_extension,[status(thm),path([t17:2,t13:3,t1:2,0:0])],[l2:1]) ).

cnf(t20,plain,
    $false,
    inference(connection,[status(thm),path([t19:1,t17:2,t13:3,t1:2,0:0])],[l2:1]) ).

