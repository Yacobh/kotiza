goog.provide('kotiza.core');
kotiza.core.dev_setup = (function kotiza$core$dev_setup(){
if(kotiza.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
kotiza.core.mount_root = (function kotiza$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kotiza.views.main_panel], null),root_el);
});
kotiza.core.init = (function kotiza$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kotiza.events","initialize-db","kotiza.events/initialize-db",379196069)], null));

kotiza.core.dev_setup();

return kotiza.core.mount_root();
});

//# sourceMappingURL=kotiza.core.js.map
