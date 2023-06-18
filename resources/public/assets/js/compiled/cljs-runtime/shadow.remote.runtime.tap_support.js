goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__55507,p__55508){
var map__55509 = p__55507;
var map__55509__$1 = cljs.core.__destructure_map(map__55509);
var svc = map__55509__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55509__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55509__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55509__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__55510 = p__55508;
var map__55510__$1 = cljs.core.__destructure_map(map__55510);
var msg = map__55510__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55510__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55510__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55510__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55510__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__55520,p__55521){
var map__55523 = p__55520;
var map__55523__$1 = cljs.core.__destructure_map(map__55523);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55523__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__55524 = p__55521;
var map__55524__$1 = cljs.core.__destructure_map(map__55524);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55524__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__55530,p__55531){
var map__55533 = p__55530;
var map__55533__$1 = cljs.core.__destructure_map(map__55533);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55533__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55533__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__55534 = p__55531;
var map__55534__$1 = cljs.core.__destructure_map(map__55534);
var msg = map__55534__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55534__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__55539,tid){
var map__55540 = p__55539;
var map__55540__$1 = cljs.core.__destructure_map(map__55540);
var svc = map__55540__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55540__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__55574 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__55575 = null;
var count__55576 = (0);
var i__55577 = (0);
while(true){
if((i__55577 < count__55576)){
var vec__55617 = chunk__55575.cljs$core$IIndexed$_nth$arity$2(null,i__55577);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55617,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55617,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__55712 = seq__55574;
var G__55713 = chunk__55575;
var G__55714 = count__55576;
var G__55715 = (i__55577 + (1));
seq__55574 = G__55712;
chunk__55575 = G__55713;
count__55576 = G__55714;
i__55577 = G__55715;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55574);
if(temp__5804__auto__){
var seq__55574__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55574__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55574__$1);
var G__55716 = cljs.core.chunk_rest(seq__55574__$1);
var G__55717 = c__5568__auto__;
var G__55718 = cljs.core.count(c__5568__auto__);
var G__55719 = (0);
seq__55574 = G__55716;
chunk__55575 = G__55717;
count__55576 = G__55718;
i__55577 = G__55719;
continue;
} else {
var vec__55647 = cljs.core.first(seq__55574__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55647,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55647,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__55720 = cljs.core.next(seq__55574__$1);
var G__55721 = null;
var G__55722 = (0);
var G__55723 = (0);
seq__55574 = G__55720;
chunk__55575 = G__55721;
count__55576 = G__55722;
i__55577 = G__55723;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__55541_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__55541_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__55546_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__55546_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__55555_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__55555_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__55556_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__55556_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__55676){
var map__55678 = p__55676;
var map__55678__$1 = cljs.core.__destructure_map(map__55678);
var svc = map__55678__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55678__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55678__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
