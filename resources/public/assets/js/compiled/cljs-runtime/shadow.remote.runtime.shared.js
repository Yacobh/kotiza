goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__51755,res){
var map__51756 = p__51755;
var map__51756__$1 = cljs.core.__destructure_map(map__51756);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51756__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51756__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__51757 = res;
var G__51757__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51757,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__51757);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51757__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__51757__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__51762 = arguments.length;
switch (G__51762) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__51781,msg,handlers,timeout_after_ms){
var map__51782 = p__51781;
var map__51782__$1 = cljs.core.__destructure_map(map__51782);
var runtime = map__51782__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51782__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51989 = arguments.length;
var i__5770__auto___51990 = (0);
while(true){
if((i__5770__auto___51990 < len__5769__auto___51989)){
args__5775__auto__.push((arguments[i__5770__auto___51990]));

var G__51991 = (i__5770__auto___51990 + (1));
i__5770__auto___51990 = G__51991;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__51794,ev,args){
var map__51795 = p__51794;
var map__51795__$1 = cljs.core.__destructure_map(map__51795);
var runtime = map__51795__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51795__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__51797 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__51800 = null;
var count__51801 = (0);
var i__51802 = (0);
while(true){
if((i__51802 < count__51801)){
var ext = chunk__51800.cljs$core$IIndexed$_nth$arity$2(null,i__51802);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__51995 = seq__51797;
var G__51996 = chunk__51800;
var G__51997 = count__51801;
var G__51998 = (i__51802 + (1));
seq__51797 = G__51995;
chunk__51800 = G__51996;
count__51801 = G__51997;
i__51802 = G__51998;
continue;
} else {
var G__52000 = seq__51797;
var G__52001 = chunk__51800;
var G__52002 = count__51801;
var G__52003 = (i__51802 + (1));
seq__51797 = G__52000;
chunk__51800 = G__52001;
count__51801 = G__52002;
i__51802 = G__52003;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51797);
if(temp__5804__auto__){
var seq__51797__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51797__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51797__$1);
var G__52005 = cljs.core.chunk_rest(seq__51797__$1);
var G__52006 = c__5568__auto__;
var G__52007 = cljs.core.count(c__5568__auto__);
var G__52008 = (0);
seq__51797 = G__52005;
chunk__51800 = G__52006;
count__51801 = G__52007;
i__51802 = G__52008;
continue;
} else {
var ext = cljs.core.first(seq__51797__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52010 = cljs.core.next(seq__51797__$1);
var G__52011 = null;
var G__52012 = (0);
var G__52013 = (0);
seq__51797 = G__52010;
chunk__51800 = G__52011;
count__51801 = G__52012;
i__51802 = G__52013;
continue;
} else {
var G__52015 = cljs.core.next(seq__51797__$1);
var G__52016 = null;
var G__52017 = (0);
var G__52018 = (0);
seq__51797 = G__52015;
chunk__51800 = G__52016;
count__51801 = G__52017;
i__51802 = G__52018;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq51789){
var G__51790 = cljs.core.first(seq51789);
var seq51789__$1 = cljs.core.next(seq51789);
var G__51791 = cljs.core.first(seq51789__$1);
var seq51789__$2 = cljs.core.next(seq51789__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51790,G__51791,seq51789__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__51825,p__51826){
var map__51831 = p__51825;
var map__51831__$1 = cljs.core.__destructure_map(map__51831);
var runtime = map__51831__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51831__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__51832 = p__51826;
var map__51832__$1 = cljs.core.__destructure_map(map__51832);
var msg = map__51832__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51832__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__51834 = cljs.core.deref(state_ref);
var map__51834__$1 = cljs.core.__destructure_map(map__51834);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__51844){
var map__51846 = p__51844;
var map__51846__$1 = cljs.core.__destructure_map(map__51846);
var runtime = map__51846__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51846__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__51860,msg){
var map__51861 = p__51860;
var map__51861__$1 = cljs.core.__destructure_map(map__51861);
var runtime = map__51861__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51861__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__51895,key,p__51896){
var map__51899 = p__51895;
var map__51899__$1 = cljs.core.__destructure_map(map__51899);
var state = map__51899__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51899__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__51902 = p__51896;
var map__51902__$1 = cljs.core.__destructure_map(map__51902);
var spec = map__51902__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51902__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__51911,key,spec){
var map__51912 = p__51911;
var map__51912__$1 = cljs.core.__destructure_map(map__51912);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51912__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__51914_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__51914_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__51915_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__51915_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__51916_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__51916_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__51917_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__51917_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__51918_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__51918_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__51929,key){
var map__51930 = p__51929;
var map__51930__$1 = cljs.core.__destructure_map(map__51930);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51930__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__51940,msg){
var map__51942 = p__51940;
var map__51942__$1 = cljs.core.__destructure_map(map__51942);
var runtime = map__51942__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51942__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__51946,p__51947){
var map__51949 = p__51946;
var map__51949__$1 = cljs.core.__destructure_map(map__51949);
var runtime = map__51949__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51949__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__51950 = p__51947;
var map__51950__$1 = cljs.core.__destructure_map(map__51950);
var msg = map__51950__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51950__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51950__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__51958 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__51960 = null;
var count__51961 = (0);
var i__51962 = (0);
while(true){
if((i__51962 < count__51961)){
var map__51973 = chunk__51960.cljs$core$IIndexed$_nth$arity$2(null,i__51962);
var map__51973__$1 = cljs.core.__destructure_map(map__51973);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51973__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52066 = seq__51958;
var G__52067 = chunk__51960;
var G__52068 = count__51961;
var G__52069 = (i__51962 + (1));
seq__51958 = G__52066;
chunk__51960 = G__52067;
count__51961 = G__52068;
i__51962 = G__52069;
continue;
} else {
var G__52070 = seq__51958;
var G__52071 = chunk__51960;
var G__52072 = count__51961;
var G__52073 = (i__51962 + (1));
seq__51958 = G__52070;
chunk__51960 = G__52071;
count__51961 = G__52072;
i__51962 = G__52073;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51958);
if(temp__5804__auto__){
var seq__51958__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51958__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51958__$1);
var G__52074 = cljs.core.chunk_rest(seq__51958__$1);
var G__52075 = c__5568__auto__;
var G__52076 = cljs.core.count(c__5568__auto__);
var G__52077 = (0);
seq__51958 = G__52074;
chunk__51960 = G__52075;
count__51961 = G__52076;
i__51962 = G__52077;
continue;
} else {
var map__51975 = cljs.core.first(seq__51958__$1);
var map__51975__$1 = cljs.core.__destructure_map(map__51975);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51975__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52080 = cljs.core.next(seq__51958__$1);
var G__52081 = null;
var G__52082 = (0);
var G__52083 = (0);
seq__51958 = G__52080;
chunk__51960 = G__52081;
count__51961 = G__52082;
i__51962 = G__52083;
continue;
} else {
var G__52084 = cljs.core.next(seq__51958__$1);
var G__52085 = null;
var G__52086 = (0);
var G__52087 = (0);
seq__51958 = G__52084;
chunk__51960 = G__52085;
count__51961 = G__52086;
i__51962 = G__52087;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
