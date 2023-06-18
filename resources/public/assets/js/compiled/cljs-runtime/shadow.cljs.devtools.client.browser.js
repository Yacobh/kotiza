goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57076 = arguments.length;
var i__5770__auto___57077 = (0);
while(true){
if((i__5770__auto___57077 < len__5769__auto___57076)){
args__5775__auto__.push((arguments[i__5770__auto___57077]));

var G__57078 = (i__5770__auto___57077 + (1));
i__5770__auto___57077 = G__57078;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56622){
var G__56623 = cljs.core.first(seq56622);
var seq56622__$1 = cljs.core.next(seq56622);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56623,seq56622__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__56629 = cljs.core.seq(sources);
var chunk__56630 = null;
var count__56631 = (0);
var i__56632 = (0);
while(true){
if((i__56632 < count__56631)){
var map__56642 = chunk__56630.cljs$core$IIndexed$_nth$arity$2(null,i__56632);
var map__56642__$1 = cljs.core.__destructure_map(map__56642);
var src = map__56642__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56642__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56642__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56642__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56642__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56643){var e_57079 = e56643;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57079);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57079.message)].join('')));
}

var G__57081 = seq__56629;
var G__57082 = chunk__56630;
var G__57083 = count__56631;
var G__57084 = (i__56632 + (1));
seq__56629 = G__57081;
chunk__56630 = G__57082;
count__56631 = G__57083;
i__56632 = G__57084;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56629);
if(temp__5804__auto__){
var seq__56629__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56629__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56629__$1);
var G__57085 = cljs.core.chunk_rest(seq__56629__$1);
var G__57086 = c__5568__auto__;
var G__57087 = cljs.core.count(c__5568__auto__);
var G__57088 = (0);
seq__56629 = G__57085;
chunk__56630 = G__57086;
count__56631 = G__57087;
i__56632 = G__57088;
continue;
} else {
var map__56647 = cljs.core.first(seq__56629__$1);
var map__56647__$1 = cljs.core.__destructure_map(map__56647);
var src = map__56647__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56647__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56647__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56647__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56647__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56649){var e_57089 = e56649;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57089);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57089.message)].join('')));
}

var G__57090 = cljs.core.next(seq__56629__$1);
var G__57091 = null;
var G__57092 = (0);
var G__57093 = (0);
seq__56629 = G__57090;
chunk__56630 = G__57091;
count__56631 = G__57092;
i__56632 = G__57093;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__56651 = cljs.core.seq(js_requires);
var chunk__56652 = null;
var count__56653 = (0);
var i__56654 = (0);
while(true){
if((i__56654 < count__56653)){
var js_ns = chunk__56652.cljs$core$IIndexed$_nth$arity$2(null,i__56654);
var require_str_57096 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57096);


var G__57097 = seq__56651;
var G__57098 = chunk__56652;
var G__57099 = count__56653;
var G__57100 = (i__56654 + (1));
seq__56651 = G__57097;
chunk__56652 = G__57098;
count__56653 = G__57099;
i__56654 = G__57100;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56651);
if(temp__5804__auto__){
var seq__56651__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56651__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56651__$1);
var G__57101 = cljs.core.chunk_rest(seq__56651__$1);
var G__57102 = c__5568__auto__;
var G__57103 = cljs.core.count(c__5568__auto__);
var G__57104 = (0);
seq__56651 = G__57101;
chunk__56652 = G__57102;
count__56653 = G__57103;
i__56654 = G__57104;
continue;
} else {
var js_ns = cljs.core.first(seq__56651__$1);
var require_str_57105 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57105);


var G__57106 = cljs.core.next(seq__56651__$1);
var G__57107 = null;
var G__57108 = (0);
var G__57109 = (0);
seq__56651 = G__57106;
chunk__56652 = G__57107;
count__56653 = G__57108;
i__56654 = G__57109;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__56662){
var map__56663 = p__56662;
var map__56663__$1 = cljs.core.__destructure_map(map__56663);
var msg = map__56663__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56663__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56663__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56665(s__56666){
return (new cljs.core.LazySeq(null,(function (){
var s__56666__$1 = s__56666;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56666__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__56672 = cljs.core.first(xs__6360__auto__);
var map__56672__$1 = cljs.core.__destructure_map(map__56672);
var src = map__56672__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56672__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56672__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__56666__$1,map__56672,map__56672__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56663,map__56663__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56665_$_iter__56667(s__56668){
return (new cljs.core.LazySeq(null,((function (s__56666__$1,map__56672,map__56672__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56663,map__56663__$1,msg,info,reload_info){
return (function (){
var s__56668__$1 = s__56668;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__56668__$1);
if(temp__5804__auto____$1){
var s__56668__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56668__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56668__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56670 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56669 = (0);
while(true){
if((i__56669 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__56669);
cljs.core.chunk_append(b__56670,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__57111 = (i__56669 + (1));
i__56669 = G__57111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56670),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56665_$_iter__56667(cljs.core.chunk_rest(s__56668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56670),null);
}
} else {
var warning = cljs.core.first(s__56668__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56665_$_iter__56667(cljs.core.rest(s__56668__$2)));
}
} else {
return null;
}
break;
}
});})(s__56666__$1,map__56672,map__56672__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56663,map__56663__$1,msg,info,reload_info))
,null,null));
});})(s__56666__$1,map__56672,map__56672__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56663,map__56663__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56665(cljs.core.rest(s__56666__$1)));
} else {
var G__57112 = cljs.core.rest(s__56666__$1);
s__56666__$1 = G__57112;
continue;
}
} else {
var G__57113 = cljs.core.rest(s__56666__$1);
s__56666__$1 = G__57113;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__56675_57114 = cljs.core.seq(warnings);
var chunk__56676_57115 = null;
var count__56677_57116 = (0);
var i__56678_57117 = (0);
while(true){
if((i__56678_57117 < count__56677_57116)){
var map__56681_57118 = chunk__56676_57115.cljs$core$IIndexed$_nth$arity$2(null,i__56678_57117);
var map__56681_57119__$1 = cljs.core.__destructure_map(map__56681_57118);
var w_57120 = map__56681_57119__$1;
var msg_57121__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56681_57119__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56681_57119__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56681_57119__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56681_57119__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57124)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57122),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57123),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57121__$1)].join(''));


var G__57125 = seq__56675_57114;
var G__57126 = chunk__56676_57115;
var G__57127 = count__56677_57116;
var G__57128 = (i__56678_57117 + (1));
seq__56675_57114 = G__57125;
chunk__56676_57115 = G__57126;
count__56677_57116 = G__57127;
i__56678_57117 = G__57128;
continue;
} else {
var temp__5804__auto___57129 = cljs.core.seq(seq__56675_57114);
if(temp__5804__auto___57129){
var seq__56675_57130__$1 = temp__5804__auto___57129;
if(cljs.core.chunked_seq_QMARK_(seq__56675_57130__$1)){
var c__5568__auto___57131 = cljs.core.chunk_first(seq__56675_57130__$1);
var G__57132 = cljs.core.chunk_rest(seq__56675_57130__$1);
var G__57133 = c__5568__auto___57131;
var G__57134 = cljs.core.count(c__5568__auto___57131);
var G__57135 = (0);
seq__56675_57114 = G__57132;
chunk__56676_57115 = G__57133;
count__56677_57116 = G__57134;
i__56678_57117 = G__57135;
continue;
} else {
var map__56682_57136 = cljs.core.first(seq__56675_57130__$1);
var map__56682_57137__$1 = cljs.core.__destructure_map(map__56682_57136);
var w_57138 = map__56682_57137__$1;
var msg_57139__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56682_57137__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56682_57137__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56682_57137__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56682_57137__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57142)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57140),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57141),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57139__$1)].join(''));


var G__57143 = cljs.core.next(seq__56675_57130__$1);
var G__57144 = null;
var G__57145 = (0);
var G__57146 = (0);
seq__56675_57114 = G__57143;
chunk__56676_57115 = G__57144;
count__56677_57116 = G__57145;
i__56678_57117 = G__57146;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__56661_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56661_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__56683){
var map__56684 = p__56683;
var map__56684__$1 = cljs.core.__destructure_map(map__56684);
var msg = map__56684__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56684__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56684__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__56685 = cljs.core.seq(updates);
var chunk__56687 = null;
var count__56688 = (0);
var i__56689 = (0);
while(true){
if((i__56689 < count__56688)){
var path = chunk__56687.cljs$core$IIndexed$_nth$arity$2(null,i__56689);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56844_57148 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56848_57149 = null;
var count__56849_57150 = (0);
var i__56850_57151 = (0);
while(true){
if((i__56850_57151 < count__56849_57150)){
var node_57152 = chunk__56848_57149.cljs$core$IIndexed$_nth$arity$2(null,i__56850_57151);
if(cljs.core.not(node_57152.shadow$old)){
var path_match_57154 = shadow.cljs.devtools.client.browser.match_paths(node_57152.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57154)){
var new_link_57155 = (function (){var G__56889 = node_57152.cloneNode(true);
G__56889.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57154),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56889;
})();
(node_57152.shadow$old = true);

(new_link_57155.onload = ((function (seq__56844_57148,chunk__56848_57149,count__56849_57150,i__56850_57151,seq__56685,chunk__56687,count__56688,i__56689,new_link_57155,path_match_57154,node_57152,path,map__56684,map__56684__$1,msg,updates,reload_info){
return (function (e){
var seq__56890_57156 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__56892_57157 = null;
var count__56893_57158 = (0);
var i__56894_57159 = (0);
while(true){
if((i__56894_57159 < count__56893_57158)){
var map__56902_57160 = chunk__56892_57157.cljs$core$IIndexed$_nth$arity$2(null,i__56894_57159);
var map__56902_57161__$1 = cljs.core.__destructure_map(map__56902_57160);
var task_57162 = map__56902_57161__$1;
var fn_str_57163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56902_57161__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56902_57161__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57165 = goog.getObjectByName(fn_str_57163,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57164)].join(''));

(fn_obj_57165.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57165.cljs$core$IFn$_invoke$arity$2(path,new_link_57155) : fn_obj_57165.call(null,path,new_link_57155));


var G__57166 = seq__56890_57156;
var G__57167 = chunk__56892_57157;
var G__57168 = count__56893_57158;
var G__57169 = (i__56894_57159 + (1));
seq__56890_57156 = G__57166;
chunk__56892_57157 = G__57167;
count__56893_57158 = G__57168;
i__56894_57159 = G__57169;
continue;
} else {
var temp__5804__auto___57170 = cljs.core.seq(seq__56890_57156);
if(temp__5804__auto___57170){
var seq__56890_57171__$1 = temp__5804__auto___57170;
if(cljs.core.chunked_seq_QMARK_(seq__56890_57171__$1)){
var c__5568__auto___57172 = cljs.core.chunk_first(seq__56890_57171__$1);
var G__57173 = cljs.core.chunk_rest(seq__56890_57171__$1);
var G__57174 = c__5568__auto___57172;
var G__57175 = cljs.core.count(c__5568__auto___57172);
var G__57176 = (0);
seq__56890_57156 = G__57173;
chunk__56892_57157 = G__57174;
count__56893_57158 = G__57175;
i__56894_57159 = G__57176;
continue;
} else {
var map__56907_57178 = cljs.core.first(seq__56890_57171__$1);
var map__56907_57179__$1 = cljs.core.__destructure_map(map__56907_57178);
var task_57180 = map__56907_57179__$1;
var fn_str_57181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56907_57179__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56907_57179__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57183 = goog.getObjectByName(fn_str_57181,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57182)].join(''));

(fn_obj_57183.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57183.cljs$core$IFn$_invoke$arity$2(path,new_link_57155) : fn_obj_57183.call(null,path,new_link_57155));


var G__57184 = cljs.core.next(seq__56890_57171__$1);
var G__57185 = null;
var G__57186 = (0);
var G__57187 = (0);
seq__56890_57156 = G__57184;
chunk__56892_57157 = G__57185;
count__56893_57158 = G__57186;
i__56894_57159 = G__57187;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57152);
});})(seq__56844_57148,chunk__56848_57149,count__56849_57150,i__56850_57151,seq__56685,chunk__56687,count__56688,i__56689,new_link_57155,path_match_57154,node_57152,path,map__56684,map__56684__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57154], 0));

goog.dom.insertSiblingAfter(new_link_57155,node_57152);


var G__57188 = seq__56844_57148;
var G__57189 = chunk__56848_57149;
var G__57190 = count__56849_57150;
var G__57191 = (i__56850_57151 + (1));
seq__56844_57148 = G__57188;
chunk__56848_57149 = G__57189;
count__56849_57150 = G__57190;
i__56850_57151 = G__57191;
continue;
} else {
var G__57192 = seq__56844_57148;
var G__57193 = chunk__56848_57149;
var G__57194 = count__56849_57150;
var G__57195 = (i__56850_57151 + (1));
seq__56844_57148 = G__57192;
chunk__56848_57149 = G__57193;
count__56849_57150 = G__57194;
i__56850_57151 = G__57195;
continue;
}
} else {
var G__57196 = seq__56844_57148;
var G__57197 = chunk__56848_57149;
var G__57198 = count__56849_57150;
var G__57199 = (i__56850_57151 + (1));
seq__56844_57148 = G__57196;
chunk__56848_57149 = G__57197;
count__56849_57150 = G__57198;
i__56850_57151 = G__57199;
continue;
}
} else {
var temp__5804__auto___57200 = cljs.core.seq(seq__56844_57148);
if(temp__5804__auto___57200){
var seq__56844_57201__$1 = temp__5804__auto___57200;
if(cljs.core.chunked_seq_QMARK_(seq__56844_57201__$1)){
var c__5568__auto___57202 = cljs.core.chunk_first(seq__56844_57201__$1);
var G__57203 = cljs.core.chunk_rest(seq__56844_57201__$1);
var G__57204 = c__5568__auto___57202;
var G__57205 = cljs.core.count(c__5568__auto___57202);
var G__57206 = (0);
seq__56844_57148 = G__57203;
chunk__56848_57149 = G__57204;
count__56849_57150 = G__57205;
i__56850_57151 = G__57206;
continue;
} else {
var node_57207 = cljs.core.first(seq__56844_57201__$1);
if(cljs.core.not(node_57207.shadow$old)){
var path_match_57208 = shadow.cljs.devtools.client.browser.match_paths(node_57207.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57208)){
var new_link_57209 = (function (){var G__56908 = node_57207.cloneNode(true);
G__56908.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57208),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56908;
})();
(node_57207.shadow$old = true);

(new_link_57209.onload = ((function (seq__56844_57148,chunk__56848_57149,count__56849_57150,i__56850_57151,seq__56685,chunk__56687,count__56688,i__56689,new_link_57209,path_match_57208,node_57207,seq__56844_57201__$1,temp__5804__auto___57200,path,map__56684,map__56684__$1,msg,updates,reload_info){
return (function (e){
var seq__56909_57210 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__56911_57211 = null;
var count__56912_57212 = (0);
var i__56913_57213 = (0);
while(true){
if((i__56913_57213 < count__56912_57212)){
var map__56917_57214 = chunk__56911_57211.cljs$core$IIndexed$_nth$arity$2(null,i__56913_57213);
var map__56917_57215__$1 = cljs.core.__destructure_map(map__56917_57214);
var task_57216 = map__56917_57215__$1;
var fn_str_57217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56917_57215__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56917_57215__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57219 = goog.getObjectByName(fn_str_57217,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57218)].join(''));

(fn_obj_57219.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57219.cljs$core$IFn$_invoke$arity$2(path,new_link_57209) : fn_obj_57219.call(null,path,new_link_57209));


var G__57220 = seq__56909_57210;
var G__57221 = chunk__56911_57211;
var G__57222 = count__56912_57212;
var G__57223 = (i__56913_57213 + (1));
seq__56909_57210 = G__57220;
chunk__56911_57211 = G__57221;
count__56912_57212 = G__57222;
i__56913_57213 = G__57223;
continue;
} else {
var temp__5804__auto___57225__$1 = cljs.core.seq(seq__56909_57210);
if(temp__5804__auto___57225__$1){
var seq__56909_57227__$1 = temp__5804__auto___57225__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56909_57227__$1)){
var c__5568__auto___57228 = cljs.core.chunk_first(seq__56909_57227__$1);
var G__57229 = cljs.core.chunk_rest(seq__56909_57227__$1);
var G__57230 = c__5568__auto___57228;
var G__57231 = cljs.core.count(c__5568__auto___57228);
var G__57232 = (0);
seq__56909_57210 = G__57229;
chunk__56911_57211 = G__57230;
count__56912_57212 = G__57231;
i__56913_57213 = G__57232;
continue;
} else {
var map__56919_57233 = cljs.core.first(seq__56909_57227__$1);
var map__56919_57234__$1 = cljs.core.__destructure_map(map__56919_57233);
var task_57235 = map__56919_57234__$1;
var fn_str_57236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56919_57234__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56919_57234__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57238 = goog.getObjectByName(fn_str_57236,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57237)].join(''));

(fn_obj_57238.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57238.cljs$core$IFn$_invoke$arity$2(path,new_link_57209) : fn_obj_57238.call(null,path,new_link_57209));


var G__57239 = cljs.core.next(seq__56909_57227__$1);
var G__57240 = null;
var G__57241 = (0);
var G__57242 = (0);
seq__56909_57210 = G__57239;
chunk__56911_57211 = G__57240;
count__56912_57212 = G__57241;
i__56913_57213 = G__57242;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57207);
});})(seq__56844_57148,chunk__56848_57149,count__56849_57150,i__56850_57151,seq__56685,chunk__56687,count__56688,i__56689,new_link_57209,path_match_57208,node_57207,seq__56844_57201__$1,temp__5804__auto___57200,path,map__56684,map__56684__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57208], 0));

goog.dom.insertSiblingAfter(new_link_57209,node_57207);


var G__57243 = cljs.core.next(seq__56844_57201__$1);
var G__57244 = null;
var G__57245 = (0);
var G__57246 = (0);
seq__56844_57148 = G__57243;
chunk__56848_57149 = G__57244;
count__56849_57150 = G__57245;
i__56850_57151 = G__57246;
continue;
} else {
var G__57247 = cljs.core.next(seq__56844_57201__$1);
var G__57248 = null;
var G__57249 = (0);
var G__57250 = (0);
seq__56844_57148 = G__57247;
chunk__56848_57149 = G__57248;
count__56849_57150 = G__57249;
i__56850_57151 = G__57250;
continue;
}
} else {
var G__57251 = cljs.core.next(seq__56844_57201__$1);
var G__57252 = null;
var G__57253 = (0);
var G__57254 = (0);
seq__56844_57148 = G__57251;
chunk__56848_57149 = G__57252;
count__56849_57150 = G__57253;
i__56850_57151 = G__57254;
continue;
}
}
} else {
}
}
break;
}


var G__57255 = seq__56685;
var G__57256 = chunk__56687;
var G__57257 = count__56688;
var G__57258 = (i__56689 + (1));
seq__56685 = G__57255;
chunk__56687 = G__57256;
count__56688 = G__57257;
i__56689 = G__57258;
continue;
} else {
var G__57259 = seq__56685;
var G__57260 = chunk__56687;
var G__57261 = count__56688;
var G__57262 = (i__56689 + (1));
seq__56685 = G__57259;
chunk__56687 = G__57260;
count__56688 = G__57261;
i__56689 = G__57262;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56685);
if(temp__5804__auto__){
var seq__56685__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56685__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56685__$1);
var G__57263 = cljs.core.chunk_rest(seq__56685__$1);
var G__57264 = c__5568__auto__;
var G__57265 = cljs.core.count(c__5568__auto__);
var G__57266 = (0);
seq__56685 = G__57263;
chunk__56687 = G__57264;
count__56688 = G__57265;
i__56689 = G__57266;
continue;
} else {
var path = cljs.core.first(seq__56685__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56922_57267 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56926_57268 = null;
var count__56927_57269 = (0);
var i__56928_57270 = (0);
while(true){
if((i__56928_57270 < count__56927_57269)){
var node_57271 = chunk__56926_57268.cljs$core$IIndexed$_nth$arity$2(null,i__56928_57270);
if(cljs.core.not(node_57271.shadow$old)){
var path_match_57272 = shadow.cljs.devtools.client.browser.match_paths(node_57271.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57272)){
var new_link_57273 = (function (){var G__57017 = node_57271.cloneNode(true);
G__57017.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57272),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57017;
})();
(node_57271.shadow$old = true);

(new_link_57273.onload = ((function (seq__56922_57267,chunk__56926_57268,count__56927_57269,i__56928_57270,seq__56685,chunk__56687,count__56688,i__56689,new_link_57273,path_match_57272,node_57271,path,seq__56685__$1,temp__5804__auto__,map__56684,map__56684__$1,msg,updates,reload_info){
return (function (e){
var seq__57018_57274 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__57020_57275 = null;
var count__57021_57276 = (0);
var i__57022_57277 = (0);
while(true){
if((i__57022_57277 < count__57021_57276)){
var map__57033_57278 = chunk__57020_57275.cljs$core$IIndexed$_nth$arity$2(null,i__57022_57277);
var map__57033_57279__$1 = cljs.core.__destructure_map(map__57033_57278);
var task_57280 = map__57033_57279__$1;
var fn_str_57281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57033_57279__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57033_57279__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57283 = goog.getObjectByName(fn_str_57281,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57282)].join(''));

(fn_obj_57283.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57283.cljs$core$IFn$_invoke$arity$2(path,new_link_57273) : fn_obj_57283.call(null,path,new_link_57273));


var G__57284 = seq__57018_57274;
var G__57285 = chunk__57020_57275;
var G__57286 = count__57021_57276;
var G__57287 = (i__57022_57277 + (1));
seq__57018_57274 = G__57284;
chunk__57020_57275 = G__57285;
count__57021_57276 = G__57286;
i__57022_57277 = G__57287;
continue;
} else {
var temp__5804__auto___57288__$1 = cljs.core.seq(seq__57018_57274);
if(temp__5804__auto___57288__$1){
var seq__57018_57289__$1 = temp__5804__auto___57288__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57018_57289__$1)){
var c__5568__auto___57290 = cljs.core.chunk_first(seq__57018_57289__$1);
var G__57291 = cljs.core.chunk_rest(seq__57018_57289__$1);
var G__57292 = c__5568__auto___57290;
var G__57293 = cljs.core.count(c__5568__auto___57290);
var G__57294 = (0);
seq__57018_57274 = G__57291;
chunk__57020_57275 = G__57292;
count__57021_57276 = G__57293;
i__57022_57277 = G__57294;
continue;
} else {
var map__57035_57295 = cljs.core.first(seq__57018_57289__$1);
var map__57035_57296__$1 = cljs.core.__destructure_map(map__57035_57295);
var task_57297 = map__57035_57296__$1;
var fn_str_57298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57035_57296__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57035_57296__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57300 = goog.getObjectByName(fn_str_57298,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57299)].join(''));

(fn_obj_57300.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57300.cljs$core$IFn$_invoke$arity$2(path,new_link_57273) : fn_obj_57300.call(null,path,new_link_57273));


var G__57302 = cljs.core.next(seq__57018_57289__$1);
var G__57303 = null;
var G__57304 = (0);
var G__57305 = (0);
seq__57018_57274 = G__57302;
chunk__57020_57275 = G__57303;
count__57021_57276 = G__57304;
i__57022_57277 = G__57305;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57271);
});})(seq__56922_57267,chunk__56926_57268,count__56927_57269,i__56928_57270,seq__56685,chunk__56687,count__56688,i__56689,new_link_57273,path_match_57272,node_57271,path,seq__56685__$1,temp__5804__auto__,map__56684,map__56684__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57272], 0));

goog.dom.insertSiblingAfter(new_link_57273,node_57271);


var G__57306 = seq__56922_57267;
var G__57307 = chunk__56926_57268;
var G__57308 = count__56927_57269;
var G__57309 = (i__56928_57270 + (1));
seq__56922_57267 = G__57306;
chunk__56926_57268 = G__57307;
count__56927_57269 = G__57308;
i__56928_57270 = G__57309;
continue;
} else {
var G__57310 = seq__56922_57267;
var G__57311 = chunk__56926_57268;
var G__57312 = count__56927_57269;
var G__57313 = (i__56928_57270 + (1));
seq__56922_57267 = G__57310;
chunk__56926_57268 = G__57311;
count__56927_57269 = G__57312;
i__56928_57270 = G__57313;
continue;
}
} else {
var G__57314 = seq__56922_57267;
var G__57315 = chunk__56926_57268;
var G__57316 = count__56927_57269;
var G__57317 = (i__56928_57270 + (1));
seq__56922_57267 = G__57314;
chunk__56926_57268 = G__57315;
count__56927_57269 = G__57316;
i__56928_57270 = G__57317;
continue;
}
} else {
var temp__5804__auto___57318__$1 = cljs.core.seq(seq__56922_57267);
if(temp__5804__auto___57318__$1){
var seq__56922_57319__$1 = temp__5804__auto___57318__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56922_57319__$1)){
var c__5568__auto___57320 = cljs.core.chunk_first(seq__56922_57319__$1);
var G__57321 = cljs.core.chunk_rest(seq__56922_57319__$1);
var G__57322 = c__5568__auto___57320;
var G__57323 = cljs.core.count(c__5568__auto___57320);
var G__57324 = (0);
seq__56922_57267 = G__57321;
chunk__56926_57268 = G__57322;
count__56927_57269 = G__57323;
i__56928_57270 = G__57324;
continue;
} else {
var node_57325 = cljs.core.first(seq__56922_57319__$1);
if(cljs.core.not(node_57325.shadow$old)){
var path_match_57326 = shadow.cljs.devtools.client.browser.match_paths(node_57325.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57326)){
var new_link_57327 = (function (){var G__57036 = node_57325.cloneNode(true);
G__57036.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57326),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57036;
})();
(node_57325.shadow$old = true);

(new_link_57327.onload = ((function (seq__56922_57267,chunk__56926_57268,count__56927_57269,i__56928_57270,seq__56685,chunk__56687,count__56688,i__56689,new_link_57327,path_match_57326,node_57325,seq__56922_57319__$1,temp__5804__auto___57318__$1,path,seq__56685__$1,temp__5804__auto__,map__56684,map__56684__$1,msg,updates,reload_info){
return (function (e){
var seq__57037_57328 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__57039_57329 = null;
var count__57040_57330 = (0);
var i__57041_57331 = (0);
while(true){
if((i__57041_57331 < count__57040_57330)){
var map__57045_57332 = chunk__57039_57329.cljs$core$IIndexed$_nth$arity$2(null,i__57041_57331);
var map__57045_57333__$1 = cljs.core.__destructure_map(map__57045_57332);
var task_57334 = map__57045_57333__$1;
var fn_str_57335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57045_57333__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57045_57333__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57337 = goog.getObjectByName(fn_str_57335,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57336)].join(''));

(fn_obj_57337.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57337.cljs$core$IFn$_invoke$arity$2(path,new_link_57327) : fn_obj_57337.call(null,path,new_link_57327));


var G__57338 = seq__57037_57328;
var G__57339 = chunk__57039_57329;
var G__57340 = count__57040_57330;
var G__57341 = (i__57041_57331 + (1));
seq__57037_57328 = G__57338;
chunk__57039_57329 = G__57339;
count__57040_57330 = G__57340;
i__57041_57331 = G__57341;
continue;
} else {
var temp__5804__auto___57342__$2 = cljs.core.seq(seq__57037_57328);
if(temp__5804__auto___57342__$2){
var seq__57037_57344__$1 = temp__5804__auto___57342__$2;
if(cljs.core.chunked_seq_QMARK_(seq__57037_57344__$1)){
var c__5568__auto___57345 = cljs.core.chunk_first(seq__57037_57344__$1);
var G__57346 = cljs.core.chunk_rest(seq__57037_57344__$1);
var G__57347 = c__5568__auto___57345;
var G__57348 = cljs.core.count(c__5568__auto___57345);
var G__57349 = (0);
seq__57037_57328 = G__57346;
chunk__57039_57329 = G__57347;
count__57040_57330 = G__57348;
i__57041_57331 = G__57349;
continue;
} else {
var map__57046_57350 = cljs.core.first(seq__57037_57344__$1);
var map__57046_57351__$1 = cljs.core.__destructure_map(map__57046_57350);
var task_57352 = map__57046_57351__$1;
var fn_str_57353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57046_57351__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57046_57351__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57355 = goog.getObjectByName(fn_str_57353,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57354)].join(''));

(fn_obj_57355.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57355.cljs$core$IFn$_invoke$arity$2(path,new_link_57327) : fn_obj_57355.call(null,path,new_link_57327));


var G__57356 = cljs.core.next(seq__57037_57344__$1);
var G__57357 = null;
var G__57358 = (0);
var G__57359 = (0);
seq__57037_57328 = G__57356;
chunk__57039_57329 = G__57357;
count__57040_57330 = G__57358;
i__57041_57331 = G__57359;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57325);
});})(seq__56922_57267,chunk__56926_57268,count__56927_57269,i__56928_57270,seq__56685,chunk__56687,count__56688,i__56689,new_link_57327,path_match_57326,node_57325,seq__56922_57319__$1,temp__5804__auto___57318__$1,path,seq__56685__$1,temp__5804__auto__,map__56684,map__56684__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57326], 0));

goog.dom.insertSiblingAfter(new_link_57327,node_57325);


var G__57360 = cljs.core.next(seq__56922_57319__$1);
var G__57361 = null;
var G__57362 = (0);
var G__57363 = (0);
seq__56922_57267 = G__57360;
chunk__56926_57268 = G__57361;
count__56927_57269 = G__57362;
i__56928_57270 = G__57363;
continue;
} else {
var G__57364 = cljs.core.next(seq__56922_57319__$1);
var G__57365 = null;
var G__57366 = (0);
var G__57367 = (0);
seq__56922_57267 = G__57364;
chunk__56926_57268 = G__57365;
count__56927_57269 = G__57366;
i__56928_57270 = G__57367;
continue;
}
} else {
var G__57368 = cljs.core.next(seq__56922_57319__$1);
var G__57369 = null;
var G__57370 = (0);
var G__57371 = (0);
seq__56922_57267 = G__57368;
chunk__56926_57268 = G__57369;
count__56927_57269 = G__57370;
i__56928_57270 = G__57371;
continue;
}
}
} else {
}
}
break;
}


var G__57372 = cljs.core.next(seq__56685__$1);
var G__57373 = null;
var G__57374 = (0);
var G__57375 = (0);
seq__56685 = G__57372;
chunk__56687 = G__57373;
count__56688 = G__57374;
i__56689 = G__57375;
continue;
} else {
var G__57376 = cljs.core.next(seq__56685__$1);
var G__57377 = null;
var G__57378 = (0);
var G__57379 = (0);
seq__56685 = G__57376;
chunk__56687 = G__57377;
count__56688 = G__57378;
i__56689 = G__57379;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__57048){
var map__57049 = p__57048;
var map__57049__$1 = cljs.core.__destructure_map(map__57049);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57049__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__57050){
var map__57051 = p__57050;
var map__57051__$1 = cljs.core.__destructure_map(map__57051);
var _ = map__57051__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__57052,done,error){
var map__57053 = p__57052;
var map__57053__$1 = cljs.core.__destructure_map(map__57053);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57053__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__57054,done,error){
var map__57055 = p__57054;
var map__57055__$1 = cljs.core.__destructure_map(map__57055);
var msg = map__57055__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57055__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57055__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57055__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__57056){
var map__57057 = p__57056;
var map__57057__$1 = cljs.core.__destructure_map(map__57057);
var src = map__57057__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57057__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__57058 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__57058) : done.call(null,G__57058));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__57059){
var map__57060 = p__57059;
var map__57060__$1 = cljs.core.__destructure_map(map__57060);
var msg__$1 = map__57060__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57060__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e57061){var ex = e57061;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__57064){
var map__57065 = p__57064;
var map__57065__$1 = cljs.core.__destructure_map(map__57065);
var env = map__57065__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57065__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__57067){
var map__57068 = p__57067;
var map__57068__$1 = cljs.core.__destructure_map(map__57068);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57068__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57068__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__57073){
var map__57074 = p__57073;
var map__57074__$1 = cljs.core.__destructure_map(map__57074);
var svc = map__57074__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57074__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
