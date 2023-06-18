goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54497){
var map__54498 = p__54497;
var map__54498__$1 = cljs.core.__destructure_map(map__54498);
var m = map__54498__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54498__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54498__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54504_54872 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54505_54873 = null;
var count__54506_54874 = (0);
var i__54507_54875 = (0);
while(true){
if((i__54507_54875 < count__54506_54874)){
var f_54876 = chunk__54505_54873.cljs$core$IIndexed$_nth$arity$2(null,i__54507_54875);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54876], 0));


var G__54877 = seq__54504_54872;
var G__54878 = chunk__54505_54873;
var G__54879 = count__54506_54874;
var G__54880 = (i__54507_54875 + (1));
seq__54504_54872 = G__54877;
chunk__54505_54873 = G__54878;
count__54506_54874 = G__54879;
i__54507_54875 = G__54880;
continue;
} else {
var temp__5804__auto___54881 = cljs.core.seq(seq__54504_54872);
if(temp__5804__auto___54881){
var seq__54504_54882__$1 = temp__5804__auto___54881;
if(cljs.core.chunked_seq_QMARK_(seq__54504_54882__$1)){
var c__5568__auto___54883 = cljs.core.chunk_first(seq__54504_54882__$1);
var G__54884 = cljs.core.chunk_rest(seq__54504_54882__$1);
var G__54885 = c__5568__auto___54883;
var G__54886 = cljs.core.count(c__5568__auto___54883);
var G__54887 = (0);
seq__54504_54872 = G__54884;
chunk__54505_54873 = G__54885;
count__54506_54874 = G__54886;
i__54507_54875 = G__54887;
continue;
} else {
var f_54889 = cljs.core.first(seq__54504_54882__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54889], 0));


var G__54890 = cljs.core.next(seq__54504_54882__$1);
var G__54891 = null;
var G__54892 = (0);
var G__54893 = (0);
seq__54504_54872 = G__54890;
chunk__54505_54873 = G__54891;
count__54506_54874 = G__54892;
i__54507_54875 = G__54893;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54895 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54895], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54895)))?cljs.core.second(arglists_54895):arglists_54895)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54526_54904 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54527_54905 = null;
var count__54528_54906 = (0);
var i__54529_54907 = (0);
while(true){
if((i__54529_54907 < count__54528_54906)){
var vec__54554_54911 = chunk__54527_54905.cljs$core$IIndexed$_nth$arity$2(null,i__54529_54907);
var name_54912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54554_54911,(0),null);
var map__54558_54913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54554_54911,(1),null);
var map__54558_54914__$1 = cljs.core.__destructure_map(map__54558_54913);
var doc_54915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558_54914__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558_54914__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54912], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54916], 0));

if(cljs.core.truth_(doc_54915)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54915], 0));
} else {
}


var G__54917 = seq__54526_54904;
var G__54918 = chunk__54527_54905;
var G__54919 = count__54528_54906;
var G__54920 = (i__54529_54907 + (1));
seq__54526_54904 = G__54917;
chunk__54527_54905 = G__54918;
count__54528_54906 = G__54919;
i__54529_54907 = G__54920;
continue;
} else {
var temp__5804__auto___54921 = cljs.core.seq(seq__54526_54904);
if(temp__5804__auto___54921){
var seq__54526_54922__$1 = temp__5804__auto___54921;
if(cljs.core.chunked_seq_QMARK_(seq__54526_54922__$1)){
var c__5568__auto___54923 = cljs.core.chunk_first(seq__54526_54922__$1);
var G__54924 = cljs.core.chunk_rest(seq__54526_54922__$1);
var G__54925 = c__5568__auto___54923;
var G__54926 = cljs.core.count(c__5568__auto___54923);
var G__54927 = (0);
seq__54526_54904 = G__54924;
chunk__54527_54905 = G__54925;
count__54528_54906 = G__54926;
i__54529_54907 = G__54927;
continue;
} else {
var vec__54567_54928 = cljs.core.first(seq__54526_54922__$1);
var name_54929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54567_54928,(0),null);
var map__54570_54930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54567_54928,(1),null);
var map__54570_54931__$1 = cljs.core.__destructure_map(map__54570_54930);
var doc_54932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54570_54931__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54570_54931__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54929], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54933], 0));

if(cljs.core.truth_(doc_54932)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54932], 0));
} else {
}


var G__54937 = cljs.core.next(seq__54526_54922__$1);
var G__54938 = null;
var G__54939 = (0);
var G__54940 = (0);
seq__54526_54904 = G__54937;
chunk__54527_54905 = G__54938;
count__54528_54906 = G__54939;
i__54529_54907 = G__54940;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__54574 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54575 = null;
var count__54576 = (0);
var i__54577 = (0);
while(true){
if((i__54577 < count__54576)){
var role = chunk__54575.cljs$core$IIndexed$_nth$arity$2(null,i__54577);
var temp__5804__auto___54942__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___54942__$1)){
var spec_54943 = temp__5804__auto___54942__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54943)], 0));
} else {
}


var G__54947 = seq__54574;
var G__54948 = chunk__54575;
var G__54949 = count__54576;
var G__54950 = (i__54577 + (1));
seq__54574 = G__54947;
chunk__54575 = G__54948;
count__54576 = G__54949;
i__54577 = G__54950;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__54574);
if(temp__5804__auto____$1){
var seq__54574__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54574__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54574__$1);
var G__54951 = cljs.core.chunk_rest(seq__54574__$1);
var G__54952 = c__5568__auto__;
var G__54953 = cljs.core.count(c__5568__auto__);
var G__54954 = (0);
seq__54574 = G__54951;
chunk__54575 = G__54952;
count__54576 = G__54953;
i__54577 = G__54954;
continue;
} else {
var role = cljs.core.first(seq__54574__$1);
var temp__5804__auto___54955__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___54955__$2)){
var spec_54956 = temp__5804__auto___54955__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54956)], 0));
} else {
}


var G__54957 = cljs.core.next(seq__54574__$1);
var G__54958 = null;
var G__54959 = (0);
var G__54960 = (0);
seq__54574 = G__54957;
chunk__54575 = G__54958;
count__54576 = G__54959;
i__54577 = G__54960;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54964 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54965 = cljs.core.ex_cause(t);
via = G__54964;
t = G__54965;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__54722 = datafied_throwable;
var map__54722__$1 = cljs.core.__destructure_map(map__54722);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54722__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54722__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54722__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54726 = cljs.core.last(via);
var map__54726__$1 = cljs.core.__destructure_map(map__54726);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54726__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54726__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54726__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54727 = data;
var map__54727__$1 = cljs.core.__destructure_map(map__54727);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54727__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54727__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54727__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54728 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54728__$1 = cljs.core.__destructure_map(map__54728);
var top_data = map__54728__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54728__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54739 = phase;
var G__54739__$1 = (((G__54739 instanceof cljs.core.Keyword))?G__54739.fqn:null);
switch (G__54739__$1) {
case "read-source":
var map__54744 = data;
var map__54744__$1 = cljs.core.__destructure_map(map__54744);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54744__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54744__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54745 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54745__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54745,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54745);
var G__54745__$2 = (cljs.core.truth_((function (){var fexpr__54747 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54747.cljs$core$IFn$_invoke$arity$1 ? fexpr__54747.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54747.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54745__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54745__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54745__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54745__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54750 = top_data;
var G__54750__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54750,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54750);
var G__54750__$2 = (cljs.core.truth_((function (){var fexpr__54753 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54753.cljs$core$IFn$_invoke$arity$1 ? fexpr__54753.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54753.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54750__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54750__$1);
var G__54750__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54750__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54750__$2);
var G__54750__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54750__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54750__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54750__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54750__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54758 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54758,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54758,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54758,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54758,(3),null);
var G__54762 = top_data;
var G__54762__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54762,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54762);
var G__54762__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54762__$1);
var G__54762__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54762__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54762__$2);
var G__54762__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54762__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54762__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54762__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54762__$4;
}

break;
case "execution":
var vec__54768 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54768,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54768,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54768,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54768,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54602_SHARP_){
var or__5045__auto__ = (p1__54602_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__54772 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54772.cljs$core$IFn$_invoke$arity$1 ? fexpr__54772.cljs$core$IFn$_invoke$arity$1(p1__54602_SHARP_) : fexpr__54772.call(null,p1__54602_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__54775 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54775__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54775,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54775);
var G__54775__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54775__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54775__$1);
var G__54775__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54775__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54775__$2);
var G__54775__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54775__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54775__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54775__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54775__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54739__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54797){
var map__54798 = p__54797;
var map__54798__$1 = cljs.core.__destructure_map(map__54798);
var triage_data = map__54798__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54798__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54798__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54798__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54798__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54798__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54798__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54798__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54798__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__54808 = phase;
var G__54808__$1 = (((G__54808 instanceof cljs.core.Keyword))?G__54808.fqn:null);
switch (G__54808__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54810 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54811 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54812 = loc;
var G__54813 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54814_55018 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54815_55019 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54816_55020 = true;
var _STAR_print_fn_STAR__temp_val__54817_55021 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54816_55020);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54817_55021);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54789_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54789_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54815_55019);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54814_55018);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54810,G__54811,G__54812,G__54813) : format.call(null,G__54810,G__54811,G__54812,G__54813));

break;
case "macroexpansion":
var G__54821 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54822 = cause_type;
var G__54823 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54824 = loc;
var G__54825 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54821,G__54822,G__54823,G__54824,G__54825) : format.call(null,G__54821,G__54822,G__54823,G__54824,G__54825));

break;
case "compile-syntax-check":
var G__54826 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54827 = cause_type;
var G__54828 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54829 = loc;
var G__54830 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54826,G__54827,G__54828,G__54829,G__54830) : format.call(null,G__54826,G__54827,G__54828,G__54829,G__54830));

break;
case "compilation":
var G__54833 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54834 = cause_type;
var G__54835 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54836 = loc;
var G__54837 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54833,G__54834,G__54835,G__54836,G__54837) : format.call(null,G__54833,G__54834,G__54835,G__54836,G__54837));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54839 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54840 = symbol;
var G__54841 = loc;
var G__54842 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54847_55037 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54848_55038 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54849_55039 = true;
var _STAR_print_fn_STAR__temp_val__54850_55040 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54849_55039);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54850_55040);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54795_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54795_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54848_55038);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54847_55037);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54839,G__54840,G__54841,G__54842) : format.call(null,G__54839,G__54840,G__54841,G__54842));
} else {
var G__54855 = "Execution error%s at %s(%s).\n%s\n";
var G__54856 = cause_type;
var G__54857 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54858 = loc;
var G__54859 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54855,G__54856,G__54857,G__54858,G__54859) : format.call(null,G__54855,G__54856,G__54857,G__54858,G__54859));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54808__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
