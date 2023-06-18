goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__57727){
var map__57728 = p__57727;
var map__57728__$1 = cljs.core.__destructure_map(map__57728);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57728__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57728__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57728__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57728__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__57731_57760 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__57732_57761 = null;
var count__57733_57762 = (0);
var i__57734_57763 = (0);
while(true){
if((i__57734_57763 < count__57733_57762)){
var vec__57746_57764 = chunk__57732_57761.cljs$core$IIndexed$_nth$arity$2(null,i__57734_57763);
var k_57765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57746_57764,(0),null);
var cb_57766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57746_57764,(1),null);
try{var G__57750_57767 = cljs.core.deref(re_frame.trace.traces);
(cb_57766.cljs$core$IFn$_invoke$arity$1 ? cb_57766.cljs$core$IFn$_invoke$arity$1(G__57750_57767) : cb_57766.call(null,G__57750_57767));
}catch (e57749){var e_57768 = e57749;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_57765,"while storing",cljs.core.deref(re_frame.trace.traces),e_57768], 0));
}

var G__57769 = seq__57731_57760;
var G__57770 = chunk__57732_57761;
var G__57771 = count__57733_57762;
var G__57772 = (i__57734_57763 + (1));
seq__57731_57760 = G__57769;
chunk__57732_57761 = G__57770;
count__57733_57762 = G__57771;
i__57734_57763 = G__57772;
continue;
} else {
var temp__5804__auto___57777 = cljs.core.seq(seq__57731_57760);
if(temp__5804__auto___57777){
var seq__57731_57778__$1 = temp__5804__auto___57777;
if(cljs.core.chunked_seq_QMARK_(seq__57731_57778__$1)){
var c__5568__auto___57779 = cljs.core.chunk_first(seq__57731_57778__$1);
var G__57780 = cljs.core.chunk_rest(seq__57731_57778__$1);
var G__57781 = c__5568__auto___57779;
var G__57782 = cljs.core.count(c__5568__auto___57779);
var G__57783 = (0);
seq__57731_57760 = G__57780;
chunk__57732_57761 = G__57781;
count__57733_57762 = G__57782;
i__57734_57763 = G__57783;
continue;
} else {
var vec__57752_57787 = cljs.core.first(seq__57731_57778__$1);
var k_57788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57752_57787,(0),null);
var cb_57789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57752_57787,(1),null);
try{var G__57756_57790 = cljs.core.deref(re_frame.trace.traces);
(cb_57789.cljs$core$IFn$_invoke$arity$1 ? cb_57789.cljs$core$IFn$_invoke$arity$1(G__57756_57790) : cb_57789.call(null,G__57756_57790));
}catch (e57755){var e_57791 = e57755;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_57788,"while storing",cljs.core.deref(re_frame.trace.traces),e_57791], 0));
}

var G__57792 = cljs.core.next(seq__57731_57778__$1);
var G__57793 = null;
var G__57794 = (0);
var G__57795 = (0);
seq__57731_57760 = G__57792;
chunk__57732_57761 = G__57793;
count__57733_57762 = G__57794;
i__57734_57763 = G__57795;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
