goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__56211__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56212__i = 0, G__56212__a = new Array(arguments.length -  0);
while (G__56212__i < G__56212__a.length) {G__56212__a[G__56212__i] = arguments[G__56212__i + 0]; ++G__56212__i;}
  args = new cljs.core.IndexedSeq(G__56212__a,0,null);
} 
return G__56211__delegate.call(this,args);};
G__56211.cljs$lang$maxFixedArity = 0;
G__56211.cljs$lang$applyTo = (function (arglist__56213){
var args = cljs.core.seq(arglist__56213);
return G__56211__delegate(args);
});
G__56211.cljs$core$IFn$_invoke$arity$variadic = G__56211__delegate;
return G__56211;
})()
);

(o.error = (function() { 
var G__56214__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56215__i = 0, G__56215__a = new Array(arguments.length -  0);
while (G__56215__i < G__56215__a.length) {G__56215__a[G__56215__i] = arguments[G__56215__i + 0]; ++G__56215__i;}
  args = new cljs.core.IndexedSeq(G__56215__a,0,null);
} 
return G__56214__delegate.call(this,args);};
G__56214.cljs$lang$maxFixedArity = 0;
G__56214.cljs$lang$applyTo = (function (arglist__56216){
var args = cljs.core.seq(arglist__56216);
return G__56214__delegate(args);
});
G__56214.cljs$core$IFn$_invoke$arity$variadic = G__56214__delegate;
return G__56214;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
