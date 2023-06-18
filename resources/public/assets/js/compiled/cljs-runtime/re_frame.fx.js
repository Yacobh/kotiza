goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__58032 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__58033 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__58033);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___58114 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___58114)){
var new_db_58115 = temp__5804__auto___58114;
var fexpr__58034_58116 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__58034_58116.cljs$core$IFn$_invoke$arity$1 ? fexpr__58034_58116.cljs$core$IFn$_invoke$arity$1(new_db_58115) : fexpr__58034_58116.call(null,new_db_58115));
} else {
}

var seq__58035 = cljs.core.seq(effects_without_db);
var chunk__58036 = null;
var count__58037 = (0);
var i__58038 = (0);
while(true){
if((i__58038 < count__58037)){
var vec__58048 = chunk__58036.cljs$core$IIndexed$_nth$arity$2(null,i__58038);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58048,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58048,(1),null);
var temp__5802__auto___58117 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___58117)){
var effect_fn_58118 = temp__5802__auto___58117;
(effect_fn_58118.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58118.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58118.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58119 = seq__58035;
var G__58120 = chunk__58036;
var G__58121 = count__58037;
var G__58122 = (i__58038 + (1));
seq__58035 = G__58119;
chunk__58036 = G__58120;
count__58037 = G__58121;
i__58038 = G__58122;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58035);
if(temp__5804__auto__){
var seq__58035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58035__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58035__$1);
var G__58123 = cljs.core.chunk_rest(seq__58035__$1);
var G__58124 = c__5568__auto__;
var G__58125 = cljs.core.count(c__5568__auto__);
var G__58126 = (0);
seq__58035 = G__58123;
chunk__58036 = G__58124;
count__58037 = G__58125;
i__58038 = G__58126;
continue;
} else {
var vec__58051 = cljs.core.first(seq__58035__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58051,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58051,(1),null);
var temp__5802__auto___58127 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___58127)){
var effect_fn_58128 = temp__5802__auto___58127;
(effect_fn_58128.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58128.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58128.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58129 = cljs.core.next(seq__58035__$1);
var G__58130 = null;
var G__58131 = (0);
var G__58132 = (0);
seq__58035 = G__58129;
chunk__58036 = G__58130;
count__58037 = G__58131;
i__58038 = G__58132;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__57705__auto___58133 = re_frame.interop.now();
var duration__57706__auto___58134 = (end__57705__auto___58133 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__57706__auto___58134,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__57705__auto___58133);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__58032);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___58135 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___58135)){
var new_db_58136 = temp__5804__auto___58135;
var fexpr__58055_58137 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__58055_58137.cljs$core$IFn$_invoke$arity$1 ? fexpr__58055_58137.cljs$core$IFn$_invoke$arity$1(new_db_58136) : fexpr__58055_58137.call(null,new_db_58136));
} else {
}

var seq__58056 = cljs.core.seq(effects_without_db);
var chunk__58057 = null;
var count__58058 = (0);
var i__58059 = (0);
while(true){
if((i__58059 < count__58058)){
var vec__58074 = chunk__58057.cljs$core$IIndexed$_nth$arity$2(null,i__58059);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58074,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58074,(1),null);
var temp__5802__auto___58138 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___58138)){
var effect_fn_58139 = temp__5802__auto___58138;
(effect_fn_58139.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58139.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58139.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58140 = seq__58056;
var G__58141 = chunk__58057;
var G__58142 = count__58058;
var G__58143 = (i__58059 + (1));
seq__58056 = G__58140;
chunk__58057 = G__58141;
count__58058 = G__58142;
i__58059 = G__58143;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58056);
if(temp__5804__auto__){
var seq__58056__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58056__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58056__$1);
var G__58144 = cljs.core.chunk_rest(seq__58056__$1);
var G__58145 = c__5568__auto__;
var G__58146 = cljs.core.count(c__5568__auto__);
var G__58147 = (0);
seq__58056 = G__58144;
chunk__58057 = G__58145;
count__58058 = G__58146;
i__58059 = G__58147;
continue;
} else {
var vec__58081 = cljs.core.first(seq__58056__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58081,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58081,(1),null);
var temp__5802__auto___58148 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___58148)){
var effect_fn_58149 = temp__5802__auto___58148;
(effect_fn_58149.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58149.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58149.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58150 = cljs.core.next(seq__58056__$1);
var G__58151 = null;
var G__58152 = (0);
var G__58153 = (0);
seq__58056 = G__58150;
chunk__58057 = G__58151;
count__58058 = G__58152;
i__58059 = G__58153;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__58084){
var map__58085 = p__58084;
var map__58085__$1 = cljs.core.__destructure_map(map__58085);
var effect = map__58085__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__58086 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__58087 = null;
var count__58088 = (0);
var i__58089 = (0);
while(true){
if((i__58089 < count__58088)){
var effect = chunk__58087.cljs$core$IIndexed$_nth$arity$2(null,i__58089);
re_frame.fx.dispatch_later(effect);


var G__58154 = seq__58086;
var G__58155 = chunk__58087;
var G__58156 = count__58088;
var G__58157 = (i__58089 + (1));
seq__58086 = G__58154;
chunk__58087 = G__58155;
count__58088 = G__58156;
i__58089 = G__58157;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58086);
if(temp__5804__auto__){
var seq__58086__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58086__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58086__$1);
var G__58159 = cljs.core.chunk_rest(seq__58086__$1);
var G__58160 = c__5568__auto__;
var G__58161 = cljs.core.count(c__5568__auto__);
var G__58162 = (0);
seq__58086 = G__58159;
chunk__58087 = G__58160;
count__58088 = G__58161;
i__58089 = G__58162;
continue;
} else {
var effect = cljs.core.first(seq__58086__$1);
re_frame.fx.dispatch_later(effect);


var G__58164 = cljs.core.next(seq__58086__$1);
var G__58165 = null;
var G__58166 = (0);
var G__58167 = (0);
seq__58086 = G__58164;
chunk__58087 = G__58165;
count__58088 = G__58166;
i__58089 = G__58167;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__58090 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__58091 = null;
var count__58092 = (0);
var i__58093 = (0);
while(true){
if((i__58093 < count__58092)){
var vec__58100 = chunk__58091.cljs$core$IIndexed$_nth$arity$2(null,i__58093);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58100,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58100,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___58168 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___58168)){
var effect_fn_58169 = temp__5802__auto___58168;
(effect_fn_58169.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58169.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58169.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__58170 = seq__58090;
var G__58171 = chunk__58091;
var G__58172 = count__58092;
var G__58173 = (i__58093 + (1));
seq__58090 = G__58170;
chunk__58091 = G__58171;
count__58092 = G__58172;
i__58093 = G__58173;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58090);
if(temp__5804__auto__){
var seq__58090__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58090__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58090__$1);
var G__58174 = cljs.core.chunk_rest(seq__58090__$1);
var G__58175 = c__5568__auto__;
var G__58176 = cljs.core.count(c__5568__auto__);
var G__58177 = (0);
seq__58090 = G__58174;
chunk__58091 = G__58175;
count__58092 = G__58176;
i__58093 = G__58177;
continue;
} else {
var vec__58103 = cljs.core.first(seq__58090__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58103,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58103,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___58178 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___58178)){
var effect_fn_58179 = temp__5802__auto___58178;
(effect_fn_58179.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58179.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58179.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__58181 = cljs.core.next(seq__58090__$1);
var G__58182 = null;
var G__58183 = (0);
var G__58184 = (0);
seq__58090 = G__58181;
chunk__58091 = G__58182;
count__58092 = G__58183;
i__58093 = G__58184;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__58106 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__58107 = null;
var count__58108 = (0);
var i__58109 = (0);
while(true){
if((i__58109 < count__58108)){
var event = chunk__58107.cljs$core$IIndexed$_nth$arity$2(null,i__58109);
re_frame.router.dispatch(event);


var G__58186 = seq__58106;
var G__58187 = chunk__58107;
var G__58188 = count__58108;
var G__58189 = (i__58109 + (1));
seq__58106 = G__58186;
chunk__58107 = G__58187;
count__58108 = G__58188;
i__58109 = G__58189;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58106);
if(temp__5804__auto__){
var seq__58106__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58106__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58106__$1);
var G__58190 = cljs.core.chunk_rest(seq__58106__$1);
var G__58191 = c__5568__auto__;
var G__58192 = cljs.core.count(c__5568__auto__);
var G__58193 = (0);
seq__58106 = G__58190;
chunk__58107 = G__58191;
count__58108 = G__58192;
i__58109 = G__58193;
continue;
} else {
var event = cljs.core.first(seq__58106__$1);
re_frame.router.dispatch(event);


var G__58194 = cljs.core.next(seq__58106__$1);
var G__58195 = null;
var G__58196 = (0);
var G__58197 = (0);
seq__58106 = G__58194;
chunk__58107 = G__58195;
count__58108 = G__58196;
i__58109 = G__58197;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__58110 = cljs.core.seq(value);
var chunk__58111 = null;
var count__58112 = (0);
var i__58113 = (0);
while(true){
if((i__58113 < count__58112)){
var event = chunk__58111.cljs$core$IIndexed$_nth$arity$2(null,i__58113);
clear_event(event);


var G__58199 = seq__58110;
var G__58200 = chunk__58111;
var G__58201 = count__58112;
var G__58202 = (i__58113 + (1));
seq__58110 = G__58199;
chunk__58111 = G__58200;
count__58112 = G__58201;
i__58113 = G__58202;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58110);
if(temp__5804__auto__){
var seq__58110__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58110__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58110__$1);
var G__58204 = cljs.core.chunk_rest(seq__58110__$1);
var G__58205 = c__5568__auto__;
var G__58206 = cljs.core.count(c__5568__auto__);
var G__58207 = (0);
seq__58110 = G__58204;
chunk__58111 = G__58205;
count__58112 = G__58206;
i__58113 = G__58207;
continue;
} else {
var event = cljs.core.first(seq__58110__$1);
clear_event(event);


var G__58208 = cljs.core.next(seq__58110__$1);
var G__58209 = null;
var G__58210 = (0);
var G__58211 = (0);
seq__58110 = G__58208;
chunk__58111 = G__58209;
count__58112 = G__58210;
i__58113 = G__58211;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
