goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51702 = arguments.length;
switch (G__51702) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51703 = (function (f,blockable,meta51704){
this.f = f;
this.blockable = blockable;
this.meta51704 = meta51704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51705,meta51704__$1){
var self__ = this;
var _51705__$1 = this;
return (new cljs.core.async.t_cljs$core$async51703(self__.f,self__.blockable,meta51704__$1));
}));

(cljs.core.async.t_cljs$core$async51703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51705){
var self__ = this;
var _51705__$1 = this;
return self__.meta51704;
}));

(cljs.core.async.t_cljs$core$async51703.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51703.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async51703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async51703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51704","meta51704",-1108556178,null)], null);
}));

(cljs.core.async.t_cljs$core$async51703.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51703");

(cljs.core.async.t_cljs$core$async51703.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51703");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51703.
 */
cljs.core.async.__GT_t_cljs$core$async51703 = (function cljs$core$async$__GT_t_cljs$core$async51703(f__$1,blockable__$1,meta51704){
return (new cljs.core.async.t_cljs$core$async51703(f__$1,blockable__$1,meta51704));
});

}

return (new cljs.core.async.t_cljs$core$async51703(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__51714 = arguments.length;
switch (G__51714) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__51730 = arguments.length;
switch (G__51730) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__51735 = arguments.length;
switch (G__51735) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_54006 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54006) : fn1.call(null,val_54006));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54006) : fn1.call(null,val_54006));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__51743 = arguments.length;
switch (G__51743) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___54014 = n;
var x_54015 = (0);
while(true){
if((x_54015 < n__5636__auto___54014)){
(a[x_54015] = x_54015);

var G__54016 = (x_54015 + (1));
x_54015 = G__54016;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51744 = (function (flag,meta51745){
this.flag = flag;
this.meta51745 = meta51745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51746,meta51745__$1){
var self__ = this;
var _51746__$1 = this;
return (new cljs.core.async.t_cljs$core$async51744(self__.flag,meta51745__$1));
}));

(cljs.core.async.t_cljs$core$async51744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51746){
var self__ = this;
var _51746__$1 = this;
return self__.meta51745;
}));

(cljs.core.async.t_cljs$core$async51744.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async51744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51745","meta51745",-206772873,null)], null);
}));

(cljs.core.async.t_cljs$core$async51744.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51744");

(cljs.core.async.t_cljs$core$async51744.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51744");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51744.
 */
cljs.core.async.__GT_t_cljs$core$async51744 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51744(flag__$1,meta51745){
return (new cljs.core.async.t_cljs$core$async51744(flag__$1,meta51745));
});

}

return (new cljs.core.async.t_cljs$core$async51744(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51747 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51747 = (function (flag,cb,meta51748){
this.flag = flag;
this.cb = cb;
this.meta51748 = meta51748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51749,meta51748__$1){
var self__ = this;
var _51749__$1 = this;
return (new cljs.core.async.t_cljs$core$async51747(self__.flag,self__.cb,meta51748__$1));
}));

(cljs.core.async.t_cljs$core$async51747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51749){
var self__ = this;
var _51749__$1 = this;
return self__.meta51748;
}));

(cljs.core.async.t_cljs$core$async51747.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51747.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async51747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51748","meta51748",-2070862330,null)], null);
}));

(cljs.core.async.t_cljs$core$async51747.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51747");

(cljs.core.async.t_cljs$core$async51747.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51747");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51747.
 */
cljs.core.async.__GT_t_cljs$core$async51747 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51747(flag__$1,cb__$1,meta51748){
return (new cljs.core.async.t_cljs$core$async51747(flag__$1,cb__$1,meta51748));
});

}

return (new cljs.core.async.t_cljs$core$async51747(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51750_SHARP_){
var G__51753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51750_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51753) : fret.call(null,G__51753));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51751_SHARP_){
var G__51754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51751_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51754) : fret.call(null,G__51754));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__54031 = (i + (1));
i = G__54031;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54035 = arguments.length;
var i__5770__auto___54036 = (0);
while(true){
if((i__5770__auto___54036 < len__5769__auto___54035)){
args__5775__auto__.push((arguments[i__5770__auto___54036]));

var G__54037 = (i__5770__auto___54036 + (1));
i__5770__auto___54036 = G__54037;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51761){
var map__51763 = p__51761;
var map__51763__$1 = cljs.core.__destructure_map(map__51763);
var opts = map__51763__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51758){
var G__51759 = cljs.core.first(seq51758);
var seq51758__$1 = cljs.core.next(seq51758);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51759,seq51758__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__51793 = arguments.length;
switch (G__51793) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__51636__auto___54042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_51910){
var state_val_51913 = (state_51910[(1)]);
if((state_val_51913 === (7))){
var inst_51904 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
var statearr_51923_54043 = state_51910__$1;
(statearr_51923_54043[(2)] = inst_51904);

(statearr_51923_54043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (1))){
var state_51910__$1 = state_51910;
var statearr_51928_54045 = state_51910__$1;
(statearr_51928_54045[(2)] = null);

(statearr_51928_54045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (4))){
var inst_51859 = (state_51910[(7)]);
var inst_51859__$1 = (state_51910[(2)]);
var inst_51880 = (inst_51859__$1 == null);
var state_51910__$1 = (function (){var statearr_51936 = state_51910;
(statearr_51936[(7)] = inst_51859__$1);

return statearr_51936;
})();
if(cljs.core.truth_(inst_51880)){
var statearr_51937_54047 = state_51910__$1;
(statearr_51937_54047[(1)] = (5));

} else {
var statearr_51938_54048 = state_51910__$1;
(statearr_51938_54048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (13))){
var state_51910__$1 = state_51910;
var statearr_51943_54049 = state_51910__$1;
(statearr_51943_54049[(2)] = null);

(statearr_51943_54049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (6))){
var inst_51859 = (state_51910[(7)]);
var state_51910__$1 = state_51910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51910__$1,(11),to,inst_51859);
} else {
if((state_val_51913 === (3))){
var inst_51906 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51910__$1,inst_51906);
} else {
if((state_val_51913 === (12))){
var state_51910__$1 = state_51910;
var statearr_51948_54054 = state_51910__$1;
(statearr_51948_54054[(2)] = null);

(statearr_51948_54054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (2))){
var state_51910__$1 = state_51910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51910__$1,(4),from);
} else {
if((state_val_51913 === (11))){
var inst_51893 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
if(cljs.core.truth_(inst_51893)){
var statearr_51951_54056 = state_51910__$1;
(statearr_51951_54056[(1)] = (12));

} else {
var statearr_51952_54057 = state_51910__$1;
(statearr_51952_54057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (9))){
var state_51910__$1 = state_51910;
var statearr_51953_54059 = state_51910__$1;
(statearr_51953_54059[(2)] = null);

(statearr_51953_54059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (5))){
var state_51910__$1 = state_51910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51954_54060 = state_51910__$1;
(statearr_51954_54060[(1)] = (8));

} else {
var statearr_51956_54061 = state_51910__$1;
(statearr_51956_54061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (14))){
var inst_51901 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
var statearr_51957_54063 = state_51910__$1;
(statearr_51957_54063[(2)] = inst_51901);

(statearr_51957_54063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (10))){
var inst_51890 = (state_51910[(2)]);
var state_51910__$1 = state_51910;
var statearr_51964_54064 = state_51910__$1;
(statearr_51964_54064[(2)] = inst_51890);

(statearr_51964_54064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (8))){
var inst_51887 = cljs.core.async.close_BANG_(to);
var state_51910__$1 = state_51910;
var statearr_51966_54065 = state_51910__$1;
(statearr_51966_54065[(2)] = inst_51887);

(statearr_51966_54065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_51967 = [null,null,null,null,null,null,null,null];
(statearr_51967[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_51967[(1)] = (1));

return statearr_51967;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_51910){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_51910);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e51969){var ex__51327__auto__ = e51969;
var statearr_51970_54072 = state_51910;
(statearr_51970_54072[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_51910[(4)]))){
var statearr_51972_54073 = state_51910;
(statearr_51972_54073[(1)] = cljs.core.first((state_51910[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54078 = state_51910;
state_51910 = G__54078;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_51910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_51910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_51974 = f__51637__auto__();
(statearr_51974[(6)] = c__51636__auto___54042);

return statearr_51974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__51977){
var vec__51979 = p__51977;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51979,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51979,(1),null);
var job = vec__51979;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__51636__auto___54084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_51986){
var state_val_51987 = (state_51986[(1)]);
if((state_val_51987 === (1))){
var state_51986__$1 = state_51986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51986__$1,(2),res,v);
} else {
if((state_val_51987 === (2))){
var inst_51983 = (state_51986[(2)]);
var inst_51984 = cljs.core.async.close_BANG_(res);
var state_51986__$1 = (function (){var statearr_51992 = state_51986;
(statearr_51992[(7)] = inst_51983);

return statearr_51992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51986__$1,inst_51984);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0 = (function (){
var statearr_51993 = [null,null,null,null,null,null,null,null];
(statearr_51993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__);

(statearr_51993[(1)] = (1));

return statearr_51993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1 = (function (state_51986){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_51986);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e51994){var ex__51327__auto__ = e51994;
var statearr_51999_54091 = state_51986;
(statearr_51999_54091[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_51986[(4)]))){
var statearr_52004_54092 = state_51986;
(statearr_52004_54092[(1)] = cljs.core.first((state_51986[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54094 = state_51986;
state_51986 = G__54094;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__ = function(state_51986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1.call(this,state_51986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_52014 = f__51637__auto__();
(statearr_52014[(6)] = c__51636__auto___54084);

return statearr_52014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__52019){
var vec__52020 = p__52019;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52020,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52020,(1),null);
var job = vec__52020;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___54102 = n;
var __54103 = (0);
while(true){
if((__54103 < n__5636__auto___54102)){
var G__52023_54104 = type;
var G__52023_54105__$1 = (((G__52023_54104 instanceof cljs.core.Keyword))?G__52023_54104.fqn:null);
switch (G__52023_54105__$1) {
case "compute":
var c__51636__auto___54107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54103,c__51636__auto___54107,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async){
return (function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = ((function (__54103,c__51636__auto___54107,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async){
return (function (state_52037){
var state_val_52038 = (state_52037[(1)]);
if((state_val_52038 === (1))){
var state_52037__$1 = state_52037;
var statearr_52039_54108 = state_52037__$1;
(statearr_52039_54108[(2)] = null);

(statearr_52039_54108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (2))){
var state_52037__$1 = state_52037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52037__$1,(4),jobs);
} else {
if((state_val_52038 === (3))){
var inst_52035 = (state_52037[(2)]);
var state_52037__$1 = state_52037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52037__$1,inst_52035);
} else {
if((state_val_52038 === (4))){
var inst_52027 = (state_52037[(2)]);
var inst_52028 = process__$1(inst_52027);
var state_52037__$1 = state_52037;
if(cljs.core.truth_(inst_52028)){
var statearr_52041_54110 = state_52037__$1;
(statearr_52041_54110[(1)] = (5));

} else {
var statearr_52042_54111 = state_52037__$1;
(statearr_52042_54111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (5))){
var state_52037__$1 = state_52037;
var statearr_52043_54113 = state_52037__$1;
(statearr_52043_54113[(2)] = null);

(statearr_52043_54113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (6))){
var state_52037__$1 = state_52037;
var statearr_52044_54114 = state_52037__$1;
(statearr_52044_54114[(2)] = null);

(statearr_52044_54114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (7))){
var inst_52033 = (state_52037[(2)]);
var state_52037__$1 = state_52037;
var statearr_52045_54115 = state_52037__$1;
(statearr_52045_54115[(2)] = inst_52033);

(statearr_52045_54115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__54103,c__51636__auto___54107,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async))
;
return ((function (__54103,switch__51323__auto__,c__51636__auto___54107,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0 = (function (){
var statearr_52046 = [null,null,null,null,null,null,null];
(statearr_52046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__);

(statearr_52046[(1)] = (1));

return statearr_52046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1 = (function (state_52037){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_52037);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e52047){var ex__51327__auto__ = e52047;
var statearr_52048_54117 = state_52037;
(statearr_52048_54117[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_52037[(4)]))){
var statearr_52050_54118 = state_52037;
(statearr_52050_54118[(1)] = cljs.core.first((state_52037[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54119 = state_52037;
state_52037 = G__54119;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__ = function(state_52037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1.call(this,state_52037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__;
})()
;})(__54103,switch__51323__auto__,c__51636__auto___54107,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async))
})();
var state__51638__auto__ = (function (){var statearr_52051 = f__51637__auto__();
(statearr_52051[(6)] = c__51636__auto___54107);

return statearr_52051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
});})(__54103,c__51636__auto___54107,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async))
);


break;
case "async":
var c__51636__auto___54120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54103,c__51636__auto___54120,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async){
return (function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = ((function (__54103,c__51636__auto___54120,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async){
return (function (state_52064){
var state_val_52065 = (state_52064[(1)]);
if((state_val_52065 === (1))){
var state_52064__$1 = state_52064;
var statearr_52078_54125 = state_52064__$1;
(statearr_52078_54125[(2)] = null);

(statearr_52078_54125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52065 === (2))){
var state_52064__$1 = state_52064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52064__$1,(4),jobs);
} else {
if((state_val_52065 === (3))){
var inst_52062 = (state_52064[(2)]);
var state_52064__$1 = state_52064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52064__$1,inst_52062);
} else {
if((state_val_52065 === (4))){
var inst_52054 = (state_52064[(2)]);
var inst_52055 = async(inst_52054);
var state_52064__$1 = state_52064;
if(cljs.core.truth_(inst_52055)){
var statearr_52088_54131 = state_52064__$1;
(statearr_52088_54131[(1)] = (5));

} else {
var statearr_52089_54137 = state_52064__$1;
(statearr_52089_54137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52065 === (5))){
var state_52064__$1 = state_52064;
var statearr_52090_54138 = state_52064__$1;
(statearr_52090_54138[(2)] = null);

(statearr_52090_54138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52065 === (6))){
var state_52064__$1 = state_52064;
var statearr_52091_54139 = state_52064__$1;
(statearr_52091_54139[(2)] = null);

(statearr_52091_54139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52065 === (7))){
var inst_52060 = (state_52064[(2)]);
var state_52064__$1 = state_52064;
var statearr_52092_54140 = state_52064__$1;
(statearr_52092_54140[(2)] = inst_52060);

(statearr_52092_54140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__54103,c__51636__auto___54120,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async))
;
return ((function (__54103,switch__51323__auto__,c__51636__auto___54120,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0 = (function (){
var statearr_52094 = [null,null,null,null,null,null,null];
(statearr_52094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__);

(statearr_52094[(1)] = (1));

return statearr_52094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1 = (function (state_52064){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_52064);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e52095){var ex__51327__auto__ = e52095;
var statearr_52096_54141 = state_52064;
(statearr_52096_54141[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_52064[(4)]))){
var statearr_52097_54142 = state_52064;
(statearr_52097_54142[(1)] = cljs.core.first((state_52064[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54143 = state_52064;
state_52064 = G__54143;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__ = function(state_52064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1.call(this,state_52064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__;
})()
;})(__54103,switch__51323__auto__,c__51636__auto___54120,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async))
})();
var state__51638__auto__ = (function (){var statearr_52098 = f__51637__auto__();
(statearr_52098[(6)] = c__51636__auto___54120);

return statearr_52098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
});})(__54103,c__51636__auto___54120,G__52023_54104,G__52023_54105__$1,n__5636__auto___54102,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52023_54105__$1)].join('')));

}

var G__54145 = (__54103 + (1));
__54103 = G__54145;
continue;
} else {
}
break;
}

var c__51636__auto___54146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_52121){
var state_val_52122 = (state_52121[(1)]);
if((state_val_52122 === (7))){
var inst_52117 = (state_52121[(2)]);
var state_52121__$1 = state_52121;
var statearr_52124_54148 = state_52121__$1;
(statearr_52124_54148[(2)] = inst_52117);

(statearr_52124_54148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52122 === (1))){
var state_52121__$1 = state_52121;
var statearr_52125_54149 = state_52121__$1;
(statearr_52125_54149[(2)] = null);

(statearr_52125_54149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52122 === (4))){
var inst_52101 = (state_52121[(7)]);
var inst_52101__$1 = (state_52121[(2)]);
var inst_52102 = (inst_52101__$1 == null);
var state_52121__$1 = (function (){var statearr_52126 = state_52121;
(statearr_52126[(7)] = inst_52101__$1);

return statearr_52126;
})();
if(cljs.core.truth_(inst_52102)){
var statearr_52127_54150 = state_52121__$1;
(statearr_52127_54150[(1)] = (5));

} else {
var statearr_52128_54151 = state_52121__$1;
(statearr_52128_54151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52122 === (6))){
var inst_52106 = (state_52121[(8)]);
var inst_52101 = (state_52121[(7)]);
var inst_52106__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52108 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52109 = [inst_52101,inst_52106__$1];
var inst_52110 = (new cljs.core.PersistentVector(null,2,(5),inst_52108,inst_52109,null));
var state_52121__$1 = (function (){var statearr_52129 = state_52121;
(statearr_52129[(8)] = inst_52106__$1);

return statearr_52129;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52121__$1,(8),jobs,inst_52110);
} else {
if((state_val_52122 === (3))){
var inst_52119 = (state_52121[(2)]);
var state_52121__$1 = state_52121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52121__$1,inst_52119);
} else {
if((state_val_52122 === (2))){
var state_52121__$1 = state_52121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52121__$1,(4),from);
} else {
if((state_val_52122 === (9))){
var inst_52114 = (state_52121[(2)]);
var state_52121__$1 = (function (){var statearr_52131 = state_52121;
(statearr_52131[(9)] = inst_52114);

return statearr_52131;
})();
var statearr_52132_54159 = state_52121__$1;
(statearr_52132_54159[(2)] = null);

(statearr_52132_54159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52122 === (5))){
var inst_52104 = cljs.core.async.close_BANG_(jobs);
var state_52121__$1 = state_52121;
var statearr_52133_54160 = state_52121__$1;
(statearr_52133_54160[(2)] = inst_52104);

(statearr_52133_54160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52122 === (8))){
var inst_52106 = (state_52121[(8)]);
var inst_52112 = (state_52121[(2)]);
var state_52121__$1 = (function (){var statearr_52134 = state_52121;
(statearr_52134[(10)] = inst_52112);

return statearr_52134;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52121__$1,(9),results,inst_52106);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0 = (function (){
var statearr_52135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__);

(statearr_52135[(1)] = (1));

return statearr_52135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1 = (function (state_52121){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_52121);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e52136){var ex__51327__auto__ = e52136;
var statearr_52137_54161 = state_52121;
(statearr_52137_54161[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_52121[(4)]))){
var statearr_52139_54162 = state_52121;
(statearr_52139_54162[(1)] = cljs.core.first((state_52121[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54163 = state_52121;
state_52121 = G__54163;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__ = function(state_52121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1.call(this,state_52121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_52140 = f__51637__auto__();
(statearr_52140[(6)] = c__51636__auto___54146);

return statearr_52140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


var c__51636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_52178){
var state_val_52180 = (state_52178[(1)]);
if((state_val_52180 === (7))){
var inst_52174 = (state_52178[(2)]);
var state_52178__$1 = state_52178;
var statearr_52181_54164 = state_52178__$1;
(statearr_52181_54164[(2)] = inst_52174);

(statearr_52181_54164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (20))){
var state_52178__$1 = state_52178;
var statearr_52182_54169 = state_52178__$1;
(statearr_52182_54169[(2)] = null);

(statearr_52182_54169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (1))){
var state_52178__$1 = state_52178;
var statearr_52183_54173 = state_52178__$1;
(statearr_52183_54173[(2)] = null);

(statearr_52183_54173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (4))){
var inst_52143 = (state_52178[(7)]);
var inst_52143__$1 = (state_52178[(2)]);
var inst_52144 = (inst_52143__$1 == null);
var state_52178__$1 = (function (){var statearr_52184 = state_52178;
(statearr_52184[(7)] = inst_52143__$1);

return statearr_52184;
})();
if(cljs.core.truth_(inst_52144)){
var statearr_52185_54178 = state_52178__$1;
(statearr_52185_54178[(1)] = (5));

} else {
var statearr_52186_54179 = state_52178__$1;
(statearr_52186_54179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (15))){
var inst_52156 = (state_52178[(8)]);
var state_52178__$1 = state_52178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52178__$1,(18),to,inst_52156);
} else {
if((state_val_52180 === (21))){
var inst_52169 = (state_52178[(2)]);
var state_52178__$1 = state_52178;
var statearr_52187_54183 = state_52178__$1;
(statearr_52187_54183[(2)] = inst_52169);

(statearr_52187_54183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (13))){
var inst_52171 = (state_52178[(2)]);
var state_52178__$1 = (function (){var statearr_52189 = state_52178;
(statearr_52189[(9)] = inst_52171);

return statearr_52189;
})();
var statearr_52190_54184 = state_52178__$1;
(statearr_52190_54184[(2)] = null);

(statearr_52190_54184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (6))){
var inst_52143 = (state_52178[(7)]);
var state_52178__$1 = state_52178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52178__$1,(11),inst_52143);
} else {
if((state_val_52180 === (17))){
var inst_52164 = (state_52178[(2)]);
var state_52178__$1 = state_52178;
if(cljs.core.truth_(inst_52164)){
var statearr_52191_54188 = state_52178__$1;
(statearr_52191_54188[(1)] = (19));

} else {
var statearr_52192_54189 = state_52178__$1;
(statearr_52192_54189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (3))){
var inst_52176 = (state_52178[(2)]);
var state_52178__$1 = state_52178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52178__$1,inst_52176);
} else {
if((state_val_52180 === (12))){
var inst_52153 = (state_52178[(10)]);
var state_52178__$1 = state_52178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52178__$1,(14),inst_52153);
} else {
if((state_val_52180 === (2))){
var state_52178__$1 = state_52178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52178__$1,(4),results);
} else {
if((state_val_52180 === (19))){
var state_52178__$1 = state_52178;
var statearr_52193_54193 = state_52178__$1;
(statearr_52193_54193[(2)] = null);

(statearr_52193_54193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (11))){
var inst_52153 = (state_52178[(2)]);
var state_52178__$1 = (function (){var statearr_52195 = state_52178;
(statearr_52195[(10)] = inst_52153);

return statearr_52195;
})();
var statearr_52196_54201 = state_52178__$1;
(statearr_52196_54201[(2)] = null);

(statearr_52196_54201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (9))){
var state_52178__$1 = state_52178;
var statearr_52197_54202 = state_52178__$1;
(statearr_52197_54202[(2)] = null);

(statearr_52197_54202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (5))){
var state_52178__$1 = state_52178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52198_54206 = state_52178__$1;
(statearr_52198_54206[(1)] = (8));

} else {
var statearr_52199_54207 = state_52178__$1;
(statearr_52199_54207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (14))){
var inst_52158 = (state_52178[(11)]);
var inst_52156 = (state_52178[(8)]);
var inst_52156__$1 = (state_52178[(2)]);
var inst_52157 = (inst_52156__$1 == null);
var inst_52158__$1 = cljs.core.not(inst_52157);
var state_52178__$1 = (function (){var statearr_52200 = state_52178;
(statearr_52200[(11)] = inst_52158__$1);

(statearr_52200[(8)] = inst_52156__$1);

return statearr_52200;
})();
if(inst_52158__$1){
var statearr_52201_54215 = state_52178__$1;
(statearr_52201_54215[(1)] = (15));

} else {
var statearr_52202_54216 = state_52178__$1;
(statearr_52202_54216[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (16))){
var inst_52158 = (state_52178[(11)]);
var state_52178__$1 = state_52178;
var statearr_52203_54217 = state_52178__$1;
(statearr_52203_54217[(2)] = inst_52158);

(statearr_52203_54217[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (10))){
var inst_52150 = (state_52178[(2)]);
var state_52178__$1 = state_52178;
var statearr_52205_54218 = state_52178__$1;
(statearr_52205_54218[(2)] = inst_52150);

(statearr_52205_54218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (18))){
var inst_52161 = (state_52178[(2)]);
var state_52178__$1 = state_52178;
var statearr_52206_54219 = state_52178__$1;
(statearr_52206_54219[(2)] = inst_52161);

(statearr_52206_54219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52180 === (8))){
var inst_52147 = cljs.core.async.close_BANG_(to);
var state_52178__$1 = state_52178;
var statearr_52207_54223 = state_52178__$1;
(statearr_52207_54223[(2)] = inst_52147);

(statearr_52207_54223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0 = (function (){
var statearr_52208 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52208[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__);

(statearr_52208[(1)] = (1));

return statearr_52208;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1 = (function (state_52178){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_52178);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e52209){var ex__51327__auto__ = e52209;
var statearr_52210_54227 = state_52178;
(statearr_52210_54227[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_52178[(4)]))){
var statearr_52211_54228 = state_52178;
(statearr_52211_54228[(1)] = cljs.core.first((state_52178[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54229 = state_52178;
state_52178 = G__54229;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__ = function(state_52178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1.call(this,state_52178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_52213 = f__51637__auto__();
(statearr_52213[(6)] = c__51636__auto__);

return statearr_52213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));

return c__51636__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52215 = arguments.length;
switch (G__52215) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__52218 = arguments.length;
switch (G__52218) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__52221 = arguments.length;
switch (G__52221) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__51636__auto___54240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_52248){
var state_val_52249 = (state_52248[(1)]);
if((state_val_52249 === (7))){
var inst_52244 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52251_54241 = state_52248__$1;
(statearr_52251_54241[(2)] = inst_52244);

(statearr_52251_54241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (1))){
var state_52248__$1 = state_52248;
var statearr_52252_54242 = state_52248__$1;
(statearr_52252_54242[(2)] = null);

(statearr_52252_54242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (4))){
var inst_52225 = (state_52248[(7)]);
var inst_52225__$1 = (state_52248[(2)]);
var inst_52226 = (inst_52225__$1 == null);
var state_52248__$1 = (function (){var statearr_52253 = state_52248;
(statearr_52253[(7)] = inst_52225__$1);

return statearr_52253;
})();
if(cljs.core.truth_(inst_52226)){
var statearr_52254_54243 = state_52248__$1;
(statearr_52254_54243[(1)] = (5));

} else {
var statearr_52255_54244 = state_52248__$1;
(statearr_52255_54244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (13))){
var state_52248__$1 = state_52248;
var statearr_52256_54245 = state_52248__$1;
(statearr_52256_54245[(2)] = null);

(statearr_52256_54245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (6))){
var inst_52225 = (state_52248[(7)]);
var inst_52231 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52225) : p.call(null,inst_52225));
var state_52248__$1 = state_52248;
if(cljs.core.truth_(inst_52231)){
var statearr_52257_54246 = state_52248__$1;
(statearr_52257_54246[(1)] = (9));

} else {
var statearr_52258_54247 = state_52248__$1;
(statearr_52258_54247[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (3))){
var inst_52246 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52248__$1,inst_52246);
} else {
if((state_val_52249 === (12))){
var state_52248__$1 = state_52248;
var statearr_52260_54248 = state_52248__$1;
(statearr_52260_54248[(2)] = null);

(statearr_52260_54248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (2))){
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52248__$1,(4),ch);
} else {
if((state_val_52249 === (11))){
var inst_52225 = (state_52248[(7)]);
var inst_52235 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52248__$1,(8),inst_52235,inst_52225);
} else {
if((state_val_52249 === (9))){
var state_52248__$1 = state_52248;
var statearr_52261_54249 = state_52248__$1;
(statearr_52261_54249[(2)] = tc);

(statearr_52261_54249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (5))){
var inst_52228 = cljs.core.async.close_BANG_(tc);
var inst_52229 = cljs.core.async.close_BANG_(fc);
var state_52248__$1 = (function (){var statearr_52262 = state_52248;
(statearr_52262[(8)] = inst_52228);

return statearr_52262;
})();
var statearr_52263_54250 = state_52248__$1;
(statearr_52263_54250[(2)] = inst_52229);

(statearr_52263_54250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (14))){
var inst_52242 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52264_54251 = state_52248__$1;
(statearr_52264_54251[(2)] = inst_52242);

(statearr_52264_54251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (10))){
var state_52248__$1 = state_52248;
var statearr_52266_54252 = state_52248__$1;
(statearr_52266_54252[(2)] = fc);

(statearr_52266_54252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (8))){
var inst_52237 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
if(cljs.core.truth_(inst_52237)){
var statearr_52267_54253 = state_52248__$1;
(statearr_52267_54253[(1)] = (12));

} else {
var statearr_52268_54254 = state_52248__$1;
(statearr_52268_54254[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_52269 = [null,null,null,null,null,null,null,null,null];
(statearr_52269[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_52269[(1)] = (1));

return statearr_52269;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_52248){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_52248);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e52270){var ex__51327__auto__ = e52270;
var statearr_52271_54255 = state_52248;
(statearr_52271_54255[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_52248[(4)]))){
var statearr_52272_54256 = state_52248;
(statearr_52272_54256[(1)] = cljs.core.first((state_52248[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54257 = state_52248;
state_52248 = G__54257;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_52248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_52248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_52274 = f__51637__auto__();
(statearr_52274[(6)] = c__51636__auto___54240);

return statearr_52274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__51636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_52297){
var state_val_52298 = (state_52297[(1)]);
if((state_val_52298 === (7))){
var inst_52293 = (state_52297[(2)]);
var state_52297__$1 = state_52297;
var statearr_52299_54258 = state_52297__$1;
(statearr_52299_54258[(2)] = inst_52293);

(statearr_52299_54258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52298 === (1))){
var inst_52275 = init;
var inst_52276 = inst_52275;
var state_52297__$1 = (function (){var statearr_52300 = state_52297;
(statearr_52300[(7)] = inst_52276);

return statearr_52300;
})();
var statearr_52301_54261 = state_52297__$1;
(statearr_52301_54261[(2)] = null);

(statearr_52301_54261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52298 === (4))){
var inst_52279 = (state_52297[(8)]);
var inst_52279__$1 = (state_52297[(2)]);
var inst_52280 = (inst_52279__$1 == null);
var state_52297__$1 = (function (){var statearr_52303 = state_52297;
(statearr_52303[(8)] = inst_52279__$1);

return statearr_52303;
})();
if(cljs.core.truth_(inst_52280)){
var statearr_52304_54266 = state_52297__$1;
(statearr_52304_54266[(1)] = (5));

} else {
var statearr_52305_54267 = state_52297__$1;
(statearr_52305_54267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52298 === (6))){
var inst_52283 = (state_52297[(9)]);
var inst_52279 = (state_52297[(8)]);
var inst_52276 = (state_52297[(7)]);
var inst_52283__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52276,inst_52279) : f.call(null,inst_52276,inst_52279));
var inst_52285 = cljs.core.reduced_QMARK_(inst_52283__$1);
var state_52297__$1 = (function (){var statearr_52306 = state_52297;
(statearr_52306[(9)] = inst_52283__$1);

return statearr_52306;
})();
if(inst_52285){
var statearr_52307_54269 = state_52297__$1;
(statearr_52307_54269[(1)] = (8));

} else {
var statearr_52308_54270 = state_52297__$1;
(statearr_52308_54270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52298 === (3))){
var inst_52295 = (state_52297[(2)]);
var state_52297__$1 = state_52297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52297__$1,inst_52295);
} else {
if((state_val_52298 === (2))){
var state_52297__$1 = state_52297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52297__$1,(4),ch);
} else {
if((state_val_52298 === (9))){
var inst_52283 = (state_52297[(9)]);
var inst_52276 = inst_52283;
var state_52297__$1 = (function (){var statearr_52309 = state_52297;
(statearr_52309[(7)] = inst_52276);

return statearr_52309;
})();
var statearr_52311_54272 = state_52297__$1;
(statearr_52311_54272[(2)] = null);

(statearr_52311_54272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52298 === (5))){
var inst_52276 = (state_52297[(7)]);
var state_52297__$1 = state_52297;
var statearr_52312_54277 = state_52297__$1;
(statearr_52312_54277[(2)] = inst_52276);

(statearr_52312_54277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52298 === (10))){
var inst_52291 = (state_52297[(2)]);
var state_52297__$1 = state_52297;
var statearr_52313_54278 = state_52297__$1;
(statearr_52313_54278[(2)] = inst_52291);

(statearr_52313_54278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52298 === (8))){
var inst_52283 = (state_52297[(9)]);
var inst_52287 = cljs.core.deref(inst_52283);
var state_52297__$1 = state_52297;
var statearr_52314_54279 = state_52297__$1;
(statearr_52314_54279[(2)] = inst_52287);

(statearr_52314_54279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__51324__auto__ = null;
var cljs$core$async$reduce_$_state_machine__51324__auto____0 = (function (){
var statearr_52315 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52315[(0)] = cljs$core$async$reduce_$_state_machine__51324__auto__);

(statearr_52315[(1)] = (1));

return statearr_52315;
});
var cljs$core$async$reduce_$_state_machine__51324__auto____1 = (function (state_52297){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_52297);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e52316){var ex__51327__auto__ = e52316;
var statearr_52317_54280 = state_52297;
(statearr_52317_54280[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_52297[(4)]))){
var statearr_52319_54281 = state_52297;
(statearr_52319_54281[(1)] = cljs.core.first((state_52297[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54282 = state_52297;
state_52297 = G__54282;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51324__auto__ = function(state_52297){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51324__auto____1.call(this,state_52297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51324__auto____0;
cljs$core$async$reduce_$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51324__auto____1;
return cljs$core$async$reduce_$_state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_52320 = f__51637__auto__();
(statearr_52320[(6)] = c__51636__auto__);

return statearr_52320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));

return c__51636__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__51636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_52326){
var state_val_52327 = (state_52326[(1)]);
if((state_val_52327 === (1))){
var inst_52321 = cljs.core.async.reduce(f__$1,init,ch);
var state_52326__$1 = state_52326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52326__$1,(2),inst_52321);
} else {
if((state_val_52327 === (2))){
var inst_52323 = (state_52326[(2)]);
var inst_52324 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52323) : f__$1.call(null,inst_52323));
var state_52326__$1 = state_52326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52326__$1,inst_52324);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__51324__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51324__auto____0 = (function (){
var statearr_52329 = [null,null,null,null,null,null,null];
(statearr_52329[(0)] = cljs$core$async$transduce_$_state_machine__51324__auto__);

(statearr_52329[(1)] = (1));

return statearr_52329;
});
var cljs$core$async$transduce_$_state_machine__51324__auto____1 = (function (state_52326){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_52326);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e52330){var ex__51327__auto__ = e52330;
var statearr_52331_54290 = state_52326;
(statearr_52331_54290[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_52326[(4)]))){
var statearr_52332_54291 = state_52326;
(statearr_52332_54291[(1)] = cljs.core.first((state_52326[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54292 = state_52326;
state_52326 = G__54292;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51324__auto__ = function(state_52326){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51324__auto____1.call(this,state_52326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51324__auto____0;
cljs$core$async$transduce_$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51324__auto____1;
return cljs$core$async$transduce_$_state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_52334 = f__51637__auto__();
(statearr_52334[(6)] = c__51636__auto__);

return statearr_52334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));

return c__51636__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__52336 = arguments.length;
switch (G__52336) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__51636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_52362){
var state_val_52363 = (state_52362[(1)]);
if((state_val_52363 === (7))){
var inst_52344 = (state_52362[(2)]);
var state_52362__$1 = state_52362;
var statearr_52364_54298 = state_52362__$1;
(statearr_52364_54298[(2)] = inst_52344);

(statearr_52364_54298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52363 === (1))){
var inst_52338 = cljs.core.seq(coll);
var inst_52339 = inst_52338;
var state_52362__$1 = (function (){var statearr_52366 = state_52362;
(statearr_52366[(7)] = inst_52339);

return statearr_52366;
})();
var statearr_52367_54302 = state_52362__$1;
(statearr_52367_54302[(2)] = null);

(statearr_52367_54302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52363 === (4))){
var inst_52339 = (state_52362[(7)]);
var inst_52342 = cljs.core.first(inst_52339);
var state_52362__$1 = state_52362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52362__$1,(7),ch,inst_52342);
} else {
if((state_val_52363 === (13))){
var inst_52356 = (state_52362[(2)]);
var state_52362__$1 = state_52362;
var statearr_52368_54307 = state_52362__$1;
(statearr_52368_54307[(2)] = inst_52356);

(statearr_52368_54307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52363 === (6))){
var inst_52347 = (state_52362[(2)]);
var state_52362__$1 = state_52362;
if(cljs.core.truth_(inst_52347)){
var statearr_52369_54314 = state_52362__$1;
(statearr_52369_54314[(1)] = (8));

} else {
var statearr_52370_54315 = state_52362__$1;
(statearr_52370_54315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52363 === (3))){
var inst_52360 = (state_52362[(2)]);
var state_52362__$1 = state_52362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52362__$1,inst_52360);
} else {
if((state_val_52363 === (12))){
var state_52362__$1 = state_52362;
var statearr_52372_54317 = state_52362__$1;
(statearr_52372_54317[(2)] = null);

(statearr_52372_54317[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52363 === (2))){
var inst_52339 = (state_52362[(7)]);
var state_52362__$1 = state_52362;
if(cljs.core.truth_(inst_52339)){
var statearr_52373_54318 = state_52362__$1;
(statearr_52373_54318[(1)] = (4));

} else {
var statearr_52374_54319 = state_52362__$1;
(statearr_52374_54319[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52363 === (11))){
var inst_52353 = cljs.core.async.close_BANG_(ch);
var state_52362__$1 = state_52362;
var statearr_52375_54320 = state_52362__$1;
(statearr_52375_54320[(2)] = inst_52353);

(statearr_52375_54320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52363 === (9))){
var state_52362__$1 = state_52362;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52376_54321 = state_52362__$1;
(statearr_52376_54321[(1)] = (11));

} else {
var statearr_52377_54322 = state_52362__$1;
(statearr_52377_54322[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52363 === (5))){
var inst_52339 = (state_52362[(7)]);
var state_52362__$1 = state_52362;
var statearr_52378_54323 = state_52362__$1;
(statearr_52378_54323[(2)] = inst_52339);

(statearr_52378_54323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52363 === (10))){
var inst_52358 = (state_52362[(2)]);
var state_52362__$1 = state_52362;
var statearr_52379_54324 = state_52362__$1;
(statearr_52379_54324[(2)] = inst_52358);

(statearr_52379_54324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52363 === (8))){
var inst_52339 = (state_52362[(7)]);
var inst_52349 = cljs.core.next(inst_52339);
var inst_52339__$1 = inst_52349;
var state_52362__$1 = (function (){var statearr_52381 = state_52362;
(statearr_52381[(7)] = inst_52339__$1);

return statearr_52381;
})();
var statearr_52382_54325 = state_52362__$1;
(statearr_52382_54325[(2)] = null);

(statearr_52382_54325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_52383 = [null,null,null,null,null,null,null,null];
(statearr_52383[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_52383[(1)] = (1));

return statearr_52383;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_52362){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_52362);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e52384){var ex__51327__auto__ = e52384;
var statearr_52385_54330 = state_52362;
(statearr_52385_54330[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_52362[(4)]))){
var statearr_52386_54331 = state_52362;
(statearr_52386_54331[(1)] = cljs.core.first((state_52362[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54332 = state_52362;
state_52362 = G__54332;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_52362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_52362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_52387 = f__51637__auto__();
(statearr_52387[(6)] = c__51636__auto__);

return statearr_52387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));

return c__51636__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52390 = arguments.length;
switch (G__52390) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_54344 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_54344(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_54345 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_54345(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_54346 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_54346(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_54349 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_54349(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52397 = (function (ch,cs,meta52398){
this.ch = ch;
this.cs = cs;
this.meta52398 = meta52398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52399,meta52398__$1){
var self__ = this;
var _52399__$1 = this;
return (new cljs.core.async.t_cljs$core$async52397(self__.ch,self__.cs,meta52398__$1));
}));

(cljs.core.async.t_cljs$core$async52397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52399){
var self__ = this;
var _52399__$1 = this;
return self__.meta52398;
}));

(cljs.core.async.t_cljs$core$async52397.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52397.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52397.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52397.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async52397.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async52397.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async52397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52398","meta52398",-243754840,null)], null);
}));

(cljs.core.async.t_cljs$core$async52397.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52397");

(cljs.core.async.t_cljs$core$async52397.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52397");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52397.
 */
cljs.core.async.__GT_t_cljs$core$async52397 = (function cljs$core$async$mult_$___GT_t_cljs$core$async52397(ch__$1,cs__$1,meta52398){
return (new cljs.core.async.t_cljs$core$async52397(ch__$1,cs__$1,meta52398));
});

}

return (new cljs.core.async.t_cljs$core$async52397(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__51636__auto___54356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_52536){
var state_val_52537 = (state_52536[(1)]);
if((state_val_52537 === (7))){
var inst_52532 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
var statearr_52538_54357 = state_52536__$1;
(statearr_52538_54357[(2)] = inst_52532);

(statearr_52538_54357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (20))){
var inst_52435 = (state_52536[(7)]);
var inst_52447 = cljs.core.first(inst_52435);
var inst_52448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52447,(0),null);
var inst_52449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52447,(1),null);
var state_52536__$1 = (function (){var statearr_52539 = state_52536;
(statearr_52539[(8)] = inst_52448);

return statearr_52539;
})();
if(cljs.core.truth_(inst_52449)){
var statearr_52540_54358 = state_52536__$1;
(statearr_52540_54358[(1)] = (22));

} else {
var statearr_52541_54359 = state_52536__$1;
(statearr_52541_54359[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (27))){
var inst_52477 = (state_52536[(9)]);
var inst_52485 = (state_52536[(10)]);
var inst_52404 = (state_52536[(11)]);
var inst_52479 = (state_52536[(12)]);
var inst_52485__$1 = cljs.core._nth(inst_52477,inst_52479);
var inst_52486 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52485__$1,inst_52404,done);
var state_52536__$1 = (function (){var statearr_52542 = state_52536;
(statearr_52542[(10)] = inst_52485__$1);

return statearr_52542;
})();
if(cljs.core.truth_(inst_52486)){
var statearr_52543_54366 = state_52536__$1;
(statearr_52543_54366[(1)] = (30));

} else {
var statearr_52544_54367 = state_52536__$1;
(statearr_52544_54367[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (1))){
var state_52536__$1 = state_52536;
var statearr_52545_54368 = state_52536__$1;
(statearr_52545_54368[(2)] = null);

(statearr_52545_54368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (24))){
var inst_52435 = (state_52536[(7)]);
var inst_52454 = (state_52536[(2)]);
var inst_52455 = cljs.core.next(inst_52435);
var inst_52413 = inst_52455;
var inst_52414 = null;
var inst_52415 = (0);
var inst_52416 = (0);
var state_52536__$1 = (function (){var statearr_52546 = state_52536;
(statearr_52546[(13)] = inst_52414);

(statearr_52546[(14)] = inst_52413);

(statearr_52546[(15)] = inst_52416);

(statearr_52546[(16)] = inst_52415);

(statearr_52546[(17)] = inst_52454);

return statearr_52546;
})();
var statearr_52548_54369 = state_52536__$1;
(statearr_52548_54369[(2)] = null);

(statearr_52548_54369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (39))){
var state_52536__$1 = state_52536;
var statearr_52556_54370 = state_52536__$1;
(statearr_52556_54370[(2)] = null);

(statearr_52556_54370[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (4))){
var inst_52404 = (state_52536[(11)]);
var inst_52404__$1 = (state_52536[(2)]);
var inst_52405 = (inst_52404__$1 == null);
var state_52536__$1 = (function (){var statearr_52558 = state_52536;
(statearr_52558[(11)] = inst_52404__$1);

return statearr_52558;
})();
if(cljs.core.truth_(inst_52405)){
var statearr_52562_54372 = state_52536__$1;
(statearr_52562_54372[(1)] = (5));

} else {
var statearr_52563_54376 = state_52536__$1;
(statearr_52563_54376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (15))){
var inst_52414 = (state_52536[(13)]);
var inst_52413 = (state_52536[(14)]);
var inst_52416 = (state_52536[(15)]);
var inst_52415 = (state_52536[(16)]);
var inst_52431 = (state_52536[(2)]);
var inst_52432 = (inst_52416 + (1));
var tmp52551 = inst_52414;
var tmp52552 = inst_52413;
var tmp52553 = inst_52415;
var inst_52413__$1 = tmp52552;
var inst_52414__$1 = tmp52551;
var inst_52415__$1 = tmp52553;
var inst_52416__$1 = inst_52432;
var state_52536__$1 = (function (){var statearr_52564 = state_52536;
(statearr_52564[(13)] = inst_52414__$1);

(statearr_52564[(14)] = inst_52413__$1);

(statearr_52564[(15)] = inst_52416__$1);

(statearr_52564[(16)] = inst_52415__$1);

(statearr_52564[(18)] = inst_52431);

return statearr_52564;
})();
var statearr_52565_54377 = state_52536__$1;
(statearr_52565_54377[(2)] = null);

(statearr_52565_54377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (21))){
var inst_52458 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
var statearr_52569_54378 = state_52536__$1;
(statearr_52569_54378[(2)] = inst_52458);

(statearr_52569_54378[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (31))){
var inst_52485 = (state_52536[(10)]);
var inst_52489 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52485);
var state_52536__$1 = state_52536;
var statearr_52571_54382 = state_52536__$1;
(statearr_52571_54382[(2)] = inst_52489);

(statearr_52571_54382[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (32))){
var inst_52477 = (state_52536[(9)]);
var inst_52478 = (state_52536[(19)]);
var inst_52476 = (state_52536[(20)]);
var inst_52479 = (state_52536[(12)]);
var inst_52491 = (state_52536[(2)]);
var inst_52492 = (inst_52479 + (1));
var tmp52566 = inst_52477;
var tmp52567 = inst_52478;
var tmp52568 = inst_52476;
var inst_52476__$1 = tmp52568;
var inst_52477__$1 = tmp52566;
var inst_52478__$1 = tmp52567;
var inst_52479__$1 = inst_52492;
var state_52536__$1 = (function (){var statearr_52575 = state_52536;
(statearr_52575[(9)] = inst_52477__$1);

(statearr_52575[(19)] = inst_52478__$1);

(statearr_52575[(21)] = inst_52491);

(statearr_52575[(20)] = inst_52476__$1);

(statearr_52575[(12)] = inst_52479__$1);

return statearr_52575;
})();
var statearr_52577_54383 = state_52536__$1;
(statearr_52577_54383[(2)] = null);

(statearr_52577_54383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (40))){
var inst_52505 = (state_52536[(22)]);
var inst_52509 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52505);
var state_52536__$1 = state_52536;
var statearr_52581_54384 = state_52536__$1;
(statearr_52581_54384[(2)] = inst_52509);

(statearr_52581_54384[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (33))){
var inst_52495 = (state_52536[(23)]);
var inst_52498 = cljs.core.chunked_seq_QMARK_(inst_52495);
var state_52536__$1 = state_52536;
if(inst_52498){
var statearr_52583_54385 = state_52536__$1;
(statearr_52583_54385[(1)] = (36));

} else {
var statearr_52584_54386 = state_52536__$1;
(statearr_52584_54386[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (13))){
var inst_52425 = (state_52536[(24)]);
var inst_52428 = cljs.core.async.close_BANG_(inst_52425);
var state_52536__$1 = state_52536;
var statearr_52588_54387 = state_52536__$1;
(statearr_52588_54387[(2)] = inst_52428);

(statearr_52588_54387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (22))){
var inst_52448 = (state_52536[(8)]);
var inst_52451 = cljs.core.async.close_BANG_(inst_52448);
var state_52536__$1 = state_52536;
var statearr_52590_54388 = state_52536__$1;
(statearr_52590_54388[(2)] = inst_52451);

(statearr_52590_54388[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (36))){
var inst_52495 = (state_52536[(23)]);
var inst_52500 = cljs.core.chunk_first(inst_52495);
var inst_52501 = cljs.core.chunk_rest(inst_52495);
var inst_52502 = cljs.core.count(inst_52500);
var inst_52476 = inst_52501;
var inst_52477 = inst_52500;
var inst_52478 = inst_52502;
var inst_52479 = (0);
var state_52536__$1 = (function (){var statearr_52594 = state_52536;
(statearr_52594[(9)] = inst_52477);

(statearr_52594[(19)] = inst_52478);

(statearr_52594[(20)] = inst_52476);

(statearr_52594[(12)] = inst_52479);

return statearr_52594;
})();
var statearr_52595_54389 = state_52536__$1;
(statearr_52595_54389[(2)] = null);

(statearr_52595_54389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (41))){
var inst_52495 = (state_52536[(23)]);
var inst_52511 = (state_52536[(2)]);
var inst_52512 = cljs.core.next(inst_52495);
var inst_52476 = inst_52512;
var inst_52477 = null;
var inst_52478 = (0);
var inst_52479 = (0);
var state_52536__$1 = (function (){var statearr_52599 = state_52536;
(statearr_52599[(9)] = inst_52477);

(statearr_52599[(19)] = inst_52478);

(statearr_52599[(25)] = inst_52511);

(statearr_52599[(20)] = inst_52476);

(statearr_52599[(12)] = inst_52479);

return statearr_52599;
})();
var statearr_52601_54391 = state_52536__$1;
(statearr_52601_54391[(2)] = null);

(statearr_52601_54391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (43))){
var state_52536__$1 = state_52536;
var statearr_52603_54396 = state_52536__$1;
(statearr_52603_54396[(2)] = null);

(statearr_52603_54396[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (29))){
var inst_52520 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
var statearr_52606_54398 = state_52536__$1;
(statearr_52606_54398[(2)] = inst_52520);

(statearr_52606_54398[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (44))){
var inst_52529 = (state_52536[(2)]);
var state_52536__$1 = (function (){var statearr_52609 = state_52536;
(statearr_52609[(26)] = inst_52529);

return statearr_52609;
})();
var statearr_52610_54399 = state_52536__$1;
(statearr_52610_54399[(2)] = null);

(statearr_52610_54399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (6))){
var inst_52468 = (state_52536[(27)]);
var inst_52467 = cljs.core.deref(cs);
var inst_52468__$1 = cljs.core.keys(inst_52467);
var inst_52469 = cljs.core.count(inst_52468__$1);
var inst_52470 = cljs.core.reset_BANG_(dctr,inst_52469);
var inst_52475 = cljs.core.seq(inst_52468__$1);
var inst_52476 = inst_52475;
var inst_52477 = null;
var inst_52478 = (0);
var inst_52479 = (0);
var state_52536__$1 = (function (){var statearr_52615 = state_52536;
(statearr_52615[(9)] = inst_52477);

(statearr_52615[(28)] = inst_52470);

(statearr_52615[(19)] = inst_52478);

(statearr_52615[(27)] = inst_52468__$1);

(statearr_52615[(20)] = inst_52476);

(statearr_52615[(12)] = inst_52479);

return statearr_52615;
})();
var statearr_52617_54400 = state_52536__$1;
(statearr_52617_54400[(2)] = null);

(statearr_52617_54400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (28))){
var inst_52495 = (state_52536[(23)]);
var inst_52476 = (state_52536[(20)]);
var inst_52495__$1 = cljs.core.seq(inst_52476);
var state_52536__$1 = (function (){var statearr_52620 = state_52536;
(statearr_52620[(23)] = inst_52495__$1);

return statearr_52620;
})();
if(inst_52495__$1){
var statearr_52622_54401 = state_52536__$1;
(statearr_52622_54401[(1)] = (33));

} else {
var statearr_52623_54402 = state_52536__$1;
(statearr_52623_54402[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (25))){
var inst_52478 = (state_52536[(19)]);
var inst_52479 = (state_52536[(12)]);
var inst_52482 = (inst_52479 < inst_52478);
var inst_52483 = inst_52482;
var state_52536__$1 = state_52536;
if(cljs.core.truth_(inst_52483)){
var statearr_52627_54403 = state_52536__$1;
(statearr_52627_54403[(1)] = (27));

} else {
var statearr_52628_54404 = state_52536__$1;
(statearr_52628_54404[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (34))){
var state_52536__$1 = state_52536;
var statearr_52630_54405 = state_52536__$1;
(statearr_52630_54405[(2)] = null);

(statearr_52630_54405[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (17))){
var state_52536__$1 = state_52536;
var statearr_52634_54406 = state_52536__$1;
(statearr_52634_54406[(2)] = null);

(statearr_52634_54406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (3))){
var inst_52534 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52536__$1,inst_52534);
} else {
if((state_val_52537 === (12))){
var inst_52463 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
var statearr_52636_54408 = state_52536__$1;
(statearr_52636_54408[(2)] = inst_52463);

(statearr_52636_54408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (2))){
var state_52536__$1 = state_52536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52536__$1,(4),ch);
} else {
if((state_val_52537 === (23))){
var state_52536__$1 = state_52536;
var statearr_52640_54413 = state_52536__$1;
(statearr_52640_54413[(2)] = null);

(statearr_52640_54413[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (35))){
var inst_52518 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
var statearr_52642_54414 = state_52536__$1;
(statearr_52642_54414[(2)] = inst_52518);

(statearr_52642_54414[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (19))){
var inst_52435 = (state_52536[(7)]);
var inst_52439 = cljs.core.chunk_first(inst_52435);
var inst_52440 = cljs.core.chunk_rest(inst_52435);
var inst_52441 = cljs.core.count(inst_52439);
var inst_52413 = inst_52440;
var inst_52414 = inst_52439;
var inst_52415 = inst_52441;
var inst_52416 = (0);
var state_52536__$1 = (function (){var statearr_52646 = state_52536;
(statearr_52646[(13)] = inst_52414);

(statearr_52646[(14)] = inst_52413);

(statearr_52646[(15)] = inst_52416);

(statearr_52646[(16)] = inst_52415);

return statearr_52646;
})();
var statearr_52648_54415 = state_52536__$1;
(statearr_52648_54415[(2)] = null);

(statearr_52648_54415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (11))){
var inst_52413 = (state_52536[(14)]);
var inst_52435 = (state_52536[(7)]);
var inst_52435__$1 = cljs.core.seq(inst_52413);
var state_52536__$1 = (function (){var statearr_52652 = state_52536;
(statearr_52652[(7)] = inst_52435__$1);

return statearr_52652;
})();
if(inst_52435__$1){
var statearr_52653_54417 = state_52536__$1;
(statearr_52653_54417[(1)] = (16));

} else {
var statearr_52654_54418 = state_52536__$1;
(statearr_52654_54418[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (9))){
var inst_52465 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
var statearr_52656_54420 = state_52536__$1;
(statearr_52656_54420[(2)] = inst_52465);

(statearr_52656_54420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (5))){
var inst_52411 = cljs.core.deref(cs);
var inst_52412 = cljs.core.seq(inst_52411);
var inst_52413 = inst_52412;
var inst_52414 = null;
var inst_52415 = (0);
var inst_52416 = (0);
var state_52536__$1 = (function (){var statearr_52660 = state_52536;
(statearr_52660[(13)] = inst_52414);

(statearr_52660[(14)] = inst_52413);

(statearr_52660[(15)] = inst_52416);

(statearr_52660[(16)] = inst_52415);

return statearr_52660;
})();
var statearr_52661_54421 = state_52536__$1;
(statearr_52661_54421[(2)] = null);

(statearr_52661_54421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (14))){
var state_52536__$1 = state_52536;
var statearr_52663_54422 = state_52536__$1;
(statearr_52663_54422[(2)] = null);

(statearr_52663_54422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (45))){
var inst_52526 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
var statearr_52667_54423 = state_52536__$1;
(statearr_52667_54423[(2)] = inst_52526);

(statearr_52667_54423[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (26))){
var inst_52468 = (state_52536[(27)]);
var inst_52522 = (state_52536[(2)]);
var inst_52523 = cljs.core.seq(inst_52468);
var state_52536__$1 = (function (){var statearr_52668 = state_52536;
(statearr_52668[(29)] = inst_52522);

return statearr_52668;
})();
if(inst_52523){
var statearr_52670_54424 = state_52536__$1;
(statearr_52670_54424[(1)] = (42));

} else {
var statearr_52671_54425 = state_52536__$1;
(statearr_52671_54425[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (16))){
var inst_52435 = (state_52536[(7)]);
var inst_52437 = cljs.core.chunked_seq_QMARK_(inst_52435);
var state_52536__$1 = state_52536;
if(inst_52437){
var statearr_52673_54426 = state_52536__$1;
(statearr_52673_54426[(1)] = (19));

} else {
var statearr_52676_54427 = state_52536__$1;
(statearr_52676_54427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (38))){
var inst_52515 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
var statearr_52677_54428 = state_52536__$1;
(statearr_52677_54428[(2)] = inst_52515);

(statearr_52677_54428[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (30))){
var state_52536__$1 = state_52536;
var statearr_52680_54429 = state_52536__$1;
(statearr_52680_54429[(2)] = null);

(statearr_52680_54429[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (10))){
var inst_52414 = (state_52536[(13)]);
var inst_52416 = (state_52536[(15)]);
var inst_52424 = cljs.core._nth(inst_52414,inst_52416);
var inst_52425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52424,(0),null);
var inst_52426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52424,(1),null);
var state_52536__$1 = (function (){var statearr_52684 = state_52536;
(statearr_52684[(24)] = inst_52425);

return statearr_52684;
})();
if(cljs.core.truth_(inst_52426)){
var statearr_52685_54430 = state_52536__$1;
(statearr_52685_54430[(1)] = (13));

} else {
var statearr_52687_54431 = state_52536__$1;
(statearr_52687_54431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (18))){
var inst_52461 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
var statearr_52689_54433 = state_52536__$1;
(statearr_52689_54433[(2)] = inst_52461);

(statearr_52689_54433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (42))){
var state_52536__$1 = state_52536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52536__$1,(45),dchan);
} else {
if((state_val_52537 === (37))){
var inst_52495 = (state_52536[(23)]);
var inst_52404 = (state_52536[(11)]);
var inst_52505 = (state_52536[(22)]);
var inst_52505__$1 = cljs.core.first(inst_52495);
var inst_52506 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52505__$1,inst_52404,done);
var state_52536__$1 = (function (){var statearr_52694 = state_52536;
(statearr_52694[(22)] = inst_52505__$1);

return statearr_52694;
})();
if(cljs.core.truth_(inst_52506)){
var statearr_52695_54435 = state_52536__$1;
(statearr_52695_54435[(1)] = (39));

} else {
var statearr_52698_54436 = state_52536__$1;
(statearr_52698_54436[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (8))){
var inst_52416 = (state_52536[(15)]);
var inst_52415 = (state_52536[(16)]);
var inst_52418 = (inst_52416 < inst_52415);
var inst_52419 = inst_52418;
var state_52536__$1 = state_52536;
if(cljs.core.truth_(inst_52419)){
var statearr_52700_54437 = state_52536__$1;
(statearr_52700_54437[(1)] = (10));

} else {
var statearr_52702_54438 = state_52536__$1;
(statearr_52702_54438[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__51324__auto__ = null;
var cljs$core$async$mult_$_state_machine__51324__auto____0 = (function (){
var statearr_52708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52708[(0)] = cljs$core$async$mult_$_state_machine__51324__auto__);

(statearr_52708[(1)] = (1));

return statearr_52708;
});
var cljs$core$async$mult_$_state_machine__51324__auto____1 = (function (state_52536){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_52536);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e52711){var ex__51327__auto__ = e52711;
var statearr_52713_54439 = state_52536;
(statearr_52713_54439[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_52536[(4)]))){
var statearr_52714_54441 = state_52536;
(statearr_52714_54441[(1)] = cljs.core.first((state_52536[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54442 = state_52536;
state_52536 = G__54442;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51324__auto__ = function(state_52536){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51324__auto____1.call(this,state_52536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51324__auto____0;
cljs$core$async$mult_$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51324__auto____1;
return cljs$core$async$mult_$_state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_52716 = f__51637__auto__();
(statearr_52716[(6)] = c__51636__auto___54356);

return statearr_52716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__52722 = arguments.length;
switch (G__52722) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_54446 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_54446(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_54448 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_54448(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_54449 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_54449(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_54454 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_54454(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_54455 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_54455(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54456 = arguments.length;
var i__5770__auto___54457 = (0);
while(true){
if((i__5770__auto___54457 < len__5769__auto___54456)){
args__5775__auto__.push((arguments[i__5770__auto___54457]));

var G__54458 = (i__5770__auto___54457 + (1));
i__5770__auto___54457 = G__54458;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52779){
var map__52780 = p__52779;
var map__52780__$1 = cljs.core.__destructure_map(map__52780);
var opts = map__52780__$1;
var statearr_52783_54459 = state;
(statearr_52783_54459[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_52785_54460 = state;
(statearr_52785_54460[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_52787_54461 = state;
(statearr_52787_54461[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52769){
var G__52770 = cljs.core.first(seq52769);
var seq52769__$1 = cljs.core.next(seq52769);
var G__52771 = cljs.core.first(seq52769__$1);
var seq52769__$2 = cljs.core.next(seq52769__$1);
var G__52772 = cljs.core.first(seq52769__$2);
var seq52769__$3 = cljs.core.next(seq52769__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52770,G__52771,G__52772,seq52769__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52804 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52805){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52805 = meta52805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52806,meta52805__$1){
var self__ = this;
var _52806__$1 = this;
return (new cljs.core.async.t_cljs$core$async52804(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52805__$1));
}));

(cljs.core.async.t_cljs$core$async52804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52806){
var self__ = this;
var _52806__$1 = this;
return self__.meta52805;
}));

(cljs.core.async.t_cljs$core$async52804.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async52804.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52804.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52804.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52804.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52804.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52804.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52805","meta52805",-311941349,null)], null);
}));

(cljs.core.async.t_cljs$core$async52804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52804");

(cljs.core.async.t_cljs$core$async52804.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52804.
 */
cljs.core.async.__GT_t_cljs$core$async52804 = (function cljs$core$async$mix_$___GT_t_cljs$core$async52804(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52805){
return (new cljs.core.async.t_cljs$core$async52804(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52805));
});

}

return (new cljs.core.async.t_cljs$core$async52804(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51636__auto___54492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_52903){
var state_val_52904 = (state_52903[(1)]);
if((state_val_52904 === (7))){
var inst_52859 = (state_52903[(2)]);
var state_52903__$1 = state_52903;
if(cljs.core.truth_(inst_52859)){
var statearr_52909_54493 = state_52903__$1;
(statearr_52909_54493[(1)] = (8));

} else {
var statearr_52910_54494 = state_52903__$1;
(statearr_52910_54494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (20))){
var inst_52852 = (state_52903[(7)]);
var state_52903__$1 = state_52903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52903__$1,(23),out,inst_52852);
} else {
if((state_val_52904 === (1))){
var inst_52830 = calc_state();
var inst_52831 = cljs.core.__destructure_map(inst_52830);
var inst_52832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52831,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52831,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52831,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52835 = inst_52830;
var state_52903__$1 = (function (){var statearr_52915 = state_52903;
(statearr_52915[(8)] = inst_52834);

(statearr_52915[(9)] = inst_52835);

(statearr_52915[(10)] = inst_52832);

(statearr_52915[(11)] = inst_52833);

return statearr_52915;
})();
var statearr_52920_54495 = state_52903__$1;
(statearr_52920_54495[(2)] = null);

(statearr_52920_54495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (24))){
var inst_52842 = (state_52903[(12)]);
var inst_52835 = inst_52842;
var state_52903__$1 = (function (){var statearr_52921 = state_52903;
(statearr_52921[(9)] = inst_52835);

return statearr_52921;
})();
var statearr_52922_54496 = state_52903__$1;
(statearr_52922_54496[(2)] = null);

(statearr_52922_54496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (4))){
var inst_52854 = (state_52903[(13)]);
var inst_52852 = (state_52903[(7)]);
var inst_52851 = (state_52903[(2)]);
var inst_52852__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52851,(0),null);
var inst_52853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52851,(1),null);
var inst_52854__$1 = (inst_52852__$1 == null);
var state_52903__$1 = (function (){var statearr_52926 = state_52903;
(statearr_52926[(13)] = inst_52854__$1);

(statearr_52926[(14)] = inst_52853);

(statearr_52926[(7)] = inst_52852__$1);

return statearr_52926;
})();
if(cljs.core.truth_(inst_52854__$1)){
var statearr_52928_54499 = state_52903__$1;
(statearr_52928_54499[(1)] = (5));

} else {
var statearr_52929_54500 = state_52903__$1;
(statearr_52929_54500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (15))){
var inst_52873 = (state_52903[(15)]);
var inst_52843 = (state_52903[(16)]);
var inst_52873__$1 = cljs.core.empty_QMARK_(inst_52843);
var state_52903__$1 = (function (){var statearr_52930 = state_52903;
(statearr_52930[(15)] = inst_52873__$1);

return statearr_52930;
})();
if(inst_52873__$1){
var statearr_52932_54501 = state_52903__$1;
(statearr_52932_54501[(1)] = (17));

} else {
var statearr_52933_54502 = state_52903__$1;
(statearr_52933_54502[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (21))){
var inst_52842 = (state_52903[(12)]);
var inst_52835 = inst_52842;
var state_52903__$1 = (function (){var statearr_52934 = state_52903;
(statearr_52934[(9)] = inst_52835);

return statearr_52934;
})();
var statearr_52935_54503 = state_52903__$1;
(statearr_52935_54503[(2)] = null);

(statearr_52935_54503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (13))){
var inst_52866 = (state_52903[(2)]);
var inst_52867 = calc_state();
var inst_52835 = inst_52867;
var state_52903__$1 = (function (){var statearr_52936 = state_52903;
(statearr_52936[(17)] = inst_52866);

(statearr_52936[(9)] = inst_52835);

return statearr_52936;
})();
var statearr_52937_54508 = state_52903__$1;
(statearr_52937_54508[(2)] = null);

(statearr_52937_54508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (22))){
var inst_52893 = (state_52903[(2)]);
var state_52903__$1 = state_52903;
var statearr_52942_54509 = state_52903__$1;
(statearr_52942_54509[(2)] = inst_52893);

(statearr_52942_54509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (6))){
var inst_52853 = (state_52903[(14)]);
var inst_52857 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52853,change);
var state_52903__$1 = state_52903;
var statearr_52947_54510 = state_52903__$1;
(statearr_52947_54510[(2)] = inst_52857);

(statearr_52947_54510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (25))){
var state_52903__$1 = state_52903;
var statearr_52948_54515 = state_52903__$1;
(statearr_52948_54515[(2)] = null);

(statearr_52948_54515[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (17))){
var inst_52853 = (state_52903[(14)]);
var inst_52844 = (state_52903[(18)]);
var inst_52875 = (inst_52844.cljs$core$IFn$_invoke$arity$1 ? inst_52844.cljs$core$IFn$_invoke$arity$1(inst_52853) : inst_52844.call(null,inst_52853));
var inst_52876 = cljs.core.not(inst_52875);
var state_52903__$1 = state_52903;
var statearr_52952_54516 = state_52903__$1;
(statearr_52952_54516[(2)] = inst_52876);

(statearr_52952_54516[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (3))){
var inst_52897 = (state_52903[(2)]);
var state_52903__$1 = state_52903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52903__$1,inst_52897);
} else {
if((state_val_52904 === (12))){
var state_52903__$1 = state_52903;
var statearr_52954_54517 = state_52903__$1;
(statearr_52954_54517[(2)] = null);

(statearr_52954_54517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (2))){
var inst_52835 = (state_52903[(9)]);
var inst_52842 = (state_52903[(12)]);
var inst_52842__$1 = cljs.core.__destructure_map(inst_52835);
var inst_52843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52842__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52842__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52842__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52903__$1 = (function (){var statearr_52959 = state_52903;
(statearr_52959[(16)] = inst_52843);

(statearr_52959[(18)] = inst_52844);

(statearr_52959[(12)] = inst_52842__$1);

return statearr_52959;
})();
return cljs.core.async.ioc_alts_BANG_(state_52903__$1,(4),inst_52845);
} else {
if((state_val_52904 === (23))){
var inst_52884 = (state_52903[(2)]);
var state_52903__$1 = state_52903;
if(cljs.core.truth_(inst_52884)){
var statearr_52960_54518 = state_52903__$1;
(statearr_52960_54518[(1)] = (24));

} else {
var statearr_52961_54519 = state_52903__$1;
(statearr_52961_54519[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (19))){
var inst_52879 = (state_52903[(2)]);
var state_52903__$1 = state_52903;
var statearr_52966_54520 = state_52903__$1;
(statearr_52966_54520[(2)] = inst_52879);

(statearr_52966_54520[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (11))){
var inst_52853 = (state_52903[(14)]);
var inst_52863 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52853);
var state_52903__$1 = state_52903;
var statearr_52967_54521 = state_52903__$1;
(statearr_52967_54521[(2)] = inst_52863);

(statearr_52967_54521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (9))){
var inst_52853 = (state_52903[(14)]);
var inst_52843 = (state_52903[(16)]);
var inst_52870 = (state_52903[(19)]);
var inst_52870__$1 = (inst_52843.cljs$core$IFn$_invoke$arity$1 ? inst_52843.cljs$core$IFn$_invoke$arity$1(inst_52853) : inst_52843.call(null,inst_52853));
var state_52903__$1 = (function (){var statearr_52969 = state_52903;
(statearr_52969[(19)] = inst_52870__$1);

return statearr_52969;
})();
if(cljs.core.truth_(inst_52870__$1)){
var statearr_52970_54530 = state_52903__$1;
(statearr_52970_54530[(1)] = (14));

} else {
var statearr_52971_54531 = state_52903__$1;
(statearr_52971_54531[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (5))){
var inst_52854 = (state_52903[(13)]);
var state_52903__$1 = state_52903;
var statearr_52972_54538 = state_52903__$1;
(statearr_52972_54538[(2)] = inst_52854);

(statearr_52972_54538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (14))){
var inst_52870 = (state_52903[(19)]);
var state_52903__$1 = state_52903;
var statearr_52973_54539 = state_52903__$1;
(statearr_52973_54539[(2)] = inst_52870);

(statearr_52973_54539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (26))){
var inst_52889 = (state_52903[(2)]);
var state_52903__$1 = state_52903;
var statearr_52978_54540 = state_52903__$1;
(statearr_52978_54540[(2)] = inst_52889);

(statearr_52978_54540[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (16))){
var inst_52881 = (state_52903[(2)]);
var state_52903__$1 = state_52903;
if(cljs.core.truth_(inst_52881)){
var statearr_52982_54542 = state_52903__$1;
(statearr_52982_54542[(1)] = (20));

} else {
var statearr_52984_54543 = state_52903__$1;
(statearr_52984_54543[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (10))){
var inst_52895 = (state_52903[(2)]);
var state_52903__$1 = state_52903;
var statearr_52985_54544 = state_52903__$1;
(statearr_52985_54544[(2)] = inst_52895);

(statearr_52985_54544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (18))){
var inst_52873 = (state_52903[(15)]);
var state_52903__$1 = state_52903;
var statearr_52986_54551 = state_52903__$1;
(statearr_52986_54551[(2)] = inst_52873);

(statearr_52986_54551[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52904 === (8))){
var inst_52852 = (state_52903[(7)]);
var inst_52861 = (inst_52852 == null);
var state_52903__$1 = state_52903;
if(cljs.core.truth_(inst_52861)){
var statearr_52990_54552 = state_52903__$1;
(statearr_52990_54552[(1)] = (11));

} else {
var statearr_52992_54553 = state_52903__$1;
(statearr_52992_54553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__51324__auto__ = null;
var cljs$core$async$mix_$_state_machine__51324__auto____0 = (function (){
var statearr_52996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52996[(0)] = cljs$core$async$mix_$_state_machine__51324__auto__);

(statearr_52996[(1)] = (1));

return statearr_52996;
});
var cljs$core$async$mix_$_state_machine__51324__auto____1 = (function (state_52903){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_52903);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e52998){var ex__51327__auto__ = e52998;
var statearr_52999_54563 = state_52903;
(statearr_52999_54563[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_52903[(4)]))){
var statearr_53000_54564 = state_52903;
(statearr_53000_54564[(1)] = cljs.core.first((state_52903[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54565 = state_52903;
state_52903 = G__54565;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51324__auto__ = function(state_52903){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51324__auto____1.call(this,state_52903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51324__auto____0;
cljs$core$async$mix_$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51324__auto____1;
return cljs$core$async$mix_$_state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_53005 = f__51637__auto__();
(statearr_53005[(6)] = c__51636__auto___54492);

return statearr_53005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_54572 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_54572(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_54578 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_54578(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_54579 = (function() {
var G__54580 = null;
var G__54580__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__54580__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__54580 = function(p,v){
switch(arguments.length){
case 1:
return G__54580__1.call(this,p);
case 2:
return G__54580__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54580.cljs$core$IFn$_invoke$arity$1 = G__54580__1;
G__54580.cljs$core$IFn$_invoke$arity$2 = G__54580__2;
return G__54580;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__53032 = arguments.length;
switch (G__53032) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54579(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54579(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__53036 = arguments.length;
switch (G__53036) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__53034_SHARP_){
if(cljs.core.truth_((p1__53034_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53034_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__53034_SHARP_.call(null,topic)))){
return p1__53034_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53034_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53039 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53040){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53040 = meta53040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53041,meta53040__$1){
var self__ = this;
var _53041__$1 = this;
return (new cljs.core.async.t_cljs$core$async53039(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53040__$1));
}));

(cljs.core.async.t_cljs$core$async53039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53041){
var self__ = this;
var _53041__$1 = this;
return self__.meta53040;
}));

(cljs.core.async.t_cljs$core$async53039.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async53039.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53039.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async53039.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async53039.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async53039.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async53039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53040","meta53040",-1709330019,null)], null);
}));

(cljs.core.async.t_cljs$core$async53039.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53039");

(cljs.core.async.t_cljs$core$async53039.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async53039");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53039.
 */
cljs.core.async.__GT_t_cljs$core$async53039 = (function cljs$core$async$__GT_t_cljs$core$async53039(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53040){
return (new cljs.core.async.t_cljs$core$async53039(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53040));
});

}

return (new cljs.core.async.t_cljs$core$async53039(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51636__auto___54590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_53114){
var state_val_53115 = (state_53114[(1)]);
if((state_val_53115 === (7))){
var inst_53109 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
var statearr_53117_54592 = state_53114__$1;
(statearr_53117_54592[(2)] = inst_53109);

(statearr_53117_54592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (20))){
var state_53114__$1 = state_53114;
var statearr_53118_54594 = state_53114__$1;
(statearr_53118_54594[(2)] = null);

(statearr_53118_54594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (1))){
var state_53114__$1 = state_53114;
var statearr_53119_54595 = state_53114__$1;
(statearr_53119_54595[(2)] = null);

(statearr_53119_54595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (24))){
var inst_53092 = (state_53114[(7)]);
var inst_53101 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53092);
var state_53114__$1 = state_53114;
var statearr_53120_54597 = state_53114__$1;
(statearr_53120_54597[(2)] = inst_53101);

(statearr_53120_54597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (4))){
var inst_53044 = (state_53114[(8)]);
var inst_53044__$1 = (state_53114[(2)]);
var inst_53045 = (inst_53044__$1 == null);
var state_53114__$1 = (function (){var statearr_53122 = state_53114;
(statearr_53122[(8)] = inst_53044__$1);

return statearr_53122;
})();
if(cljs.core.truth_(inst_53045)){
var statearr_53123_54598 = state_53114__$1;
(statearr_53123_54598[(1)] = (5));

} else {
var statearr_53124_54599 = state_53114__$1;
(statearr_53124_54599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (15))){
var inst_53086 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
var statearr_53125_54600 = state_53114__$1;
(statearr_53125_54600[(2)] = inst_53086);

(statearr_53125_54600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (21))){
var inst_53106 = (state_53114[(2)]);
var state_53114__$1 = (function (){var statearr_53127 = state_53114;
(statearr_53127[(9)] = inst_53106);

return statearr_53127;
})();
var statearr_53128_54603 = state_53114__$1;
(statearr_53128_54603[(2)] = null);

(statearr_53128_54603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (13))){
var inst_53068 = (state_53114[(10)]);
var inst_53070 = cljs.core.chunked_seq_QMARK_(inst_53068);
var state_53114__$1 = state_53114;
if(inst_53070){
var statearr_53129_54604 = state_53114__$1;
(statearr_53129_54604[(1)] = (16));

} else {
var statearr_53130_54605 = state_53114__$1;
(statearr_53130_54605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (22))){
var inst_53098 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
if(cljs.core.truth_(inst_53098)){
var statearr_53131_54606 = state_53114__$1;
(statearr_53131_54606[(1)] = (23));

} else {
var statearr_53132_54607 = state_53114__$1;
(statearr_53132_54607[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (6))){
var inst_53092 = (state_53114[(7)]);
var inst_53094 = (state_53114[(11)]);
var inst_53044 = (state_53114[(8)]);
var inst_53092__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53044) : topic_fn.call(null,inst_53044));
var inst_53093 = cljs.core.deref(mults);
var inst_53094__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53093,inst_53092__$1);
var state_53114__$1 = (function (){var statearr_53133 = state_53114;
(statearr_53133[(7)] = inst_53092__$1);

(statearr_53133[(11)] = inst_53094__$1);

return statearr_53133;
})();
if(cljs.core.truth_(inst_53094__$1)){
var statearr_53135_54613 = state_53114__$1;
(statearr_53135_54613[(1)] = (19));

} else {
var statearr_53137_54614 = state_53114__$1;
(statearr_53137_54614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (25))){
var inst_53103 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
var statearr_53138_54615 = state_53114__$1;
(statearr_53138_54615[(2)] = inst_53103);

(statearr_53138_54615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (17))){
var inst_53068 = (state_53114[(10)]);
var inst_53077 = cljs.core.first(inst_53068);
var inst_53078 = cljs.core.async.muxch_STAR_(inst_53077);
var inst_53079 = cljs.core.async.close_BANG_(inst_53078);
var inst_53080 = cljs.core.next(inst_53068);
var inst_53054 = inst_53080;
var inst_53055 = null;
var inst_53056 = (0);
var inst_53057 = (0);
var state_53114__$1 = (function (){var statearr_53139 = state_53114;
(statearr_53139[(12)] = inst_53057);

(statearr_53139[(13)] = inst_53054);

(statearr_53139[(14)] = inst_53055);

(statearr_53139[(15)] = inst_53079);

(statearr_53139[(16)] = inst_53056);

return statearr_53139;
})();
var statearr_53140_54616 = state_53114__$1;
(statearr_53140_54616[(2)] = null);

(statearr_53140_54616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (3))){
var inst_53111 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53114__$1,inst_53111);
} else {
if((state_val_53115 === (12))){
var inst_53088 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
var statearr_53141_54618 = state_53114__$1;
(statearr_53141_54618[(2)] = inst_53088);

(statearr_53141_54618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (2))){
var state_53114__$1 = state_53114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53114__$1,(4),ch);
} else {
if((state_val_53115 === (23))){
var state_53114__$1 = state_53114;
var statearr_53142_54627 = state_53114__$1;
(statearr_53142_54627[(2)] = null);

(statearr_53142_54627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (19))){
var inst_53094 = (state_53114[(11)]);
var inst_53044 = (state_53114[(8)]);
var inst_53096 = cljs.core.async.muxch_STAR_(inst_53094);
var state_53114__$1 = state_53114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53114__$1,(22),inst_53096,inst_53044);
} else {
if((state_val_53115 === (11))){
var inst_53054 = (state_53114[(13)]);
var inst_53068 = (state_53114[(10)]);
var inst_53068__$1 = cljs.core.seq(inst_53054);
var state_53114__$1 = (function (){var statearr_53143 = state_53114;
(statearr_53143[(10)] = inst_53068__$1);

return statearr_53143;
})();
if(inst_53068__$1){
var statearr_53144_54641 = state_53114__$1;
(statearr_53144_54641[(1)] = (13));

} else {
var statearr_53145_54642 = state_53114__$1;
(statearr_53145_54642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (9))){
var inst_53090 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
var statearr_53146_54643 = state_53114__$1;
(statearr_53146_54643[(2)] = inst_53090);

(statearr_53146_54643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (5))){
var inst_53051 = cljs.core.deref(mults);
var inst_53052 = cljs.core.vals(inst_53051);
var inst_53053 = cljs.core.seq(inst_53052);
var inst_53054 = inst_53053;
var inst_53055 = null;
var inst_53056 = (0);
var inst_53057 = (0);
var state_53114__$1 = (function (){var statearr_53147 = state_53114;
(statearr_53147[(12)] = inst_53057);

(statearr_53147[(13)] = inst_53054);

(statearr_53147[(14)] = inst_53055);

(statearr_53147[(16)] = inst_53056);

return statearr_53147;
})();
var statearr_53148_54651 = state_53114__$1;
(statearr_53148_54651[(2)] = null);

(statearr_53148_54651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (14))){
var state_53114__$1 = state_53114;
var statearr_53152_54652 = state_53114__$1;
(statearr_53152_54652[(2)] = null);

(statearr_53152_54652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (16))){
var inst_53068 = (state_53114[(10)]);
var inst_53072 = cljs.core.chunk_first(inst_53068);
var inst_53073 = cljs.core.chunk_rest(inst_53068);
var inst_53074 = cljs.core.count(inst_53072);
var inst_53054 = inst_53073;
var inst_53055 = inst_53072;
var inst_53056 = inst_53074;
var inst_53057 = (0);
var state_53114__$1 = (function (){var statearr_53155 = state_53114;
(statearr_53155[(12)] = inst_53057);

(statearr_53155[(13)] = inst_53054);

(statearr_53155[(14)] = inst_53055);

(statearr_53155[(16)] = inst_53056);

return statearr_53155;
})();
var statearr_53156_54657 = state_53114__$1;
(statearr_53156_54657[(2)] = null);

(statearr_53156_54657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (10))){
var inst_53057 = (state_53114[(12)]);
var inst_53054 = (state_53114[(13)]);
var inst_53055 = (state_53114[(14)]);
var inst_53056 = (state_53114[(16)]);
var inst_53062 = cljs.core._nth(inst_53055,inst_53057);
var inst_53063 = cljs.core.async.muxch_STAR_(inst_53062);
var inst_53064 = cljs.core.async.close_BANG_(inst_53063);
var inst_53065 = (inst_53057 + (1));
var tmp53149 = inst_53054;
var tmp53150 = inst_53055;
var tmp53151 = inst_53056;
var inst_53054__$1 = tmp53149;
var inst_53055__$1 = tmp53150;
var inst_53056__$1 = tmp53151;
var inst_53057__$1 = inst_53065;
var state_53114__$1 = (function (){var statearr_53157 = state_53114;
(statearr_53157[(12)] = inst_53057__$1);

(statearr_53157[(13)] = inst_53054__$1);

(statearr_53157[(14)] = inst_53055__$1);

(statearr_53157[(17)] = inst_53064);

(statearr_53157[(16)] = inst_53056__$1);

return statearr_53157;
})();
var statearr_53162_54668 = state_53114__$1;
(statearr_53162_54668[(2)] = null);

(statearr_53162_54668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (18))){
var inst_53083 = (state_53114[(2)]);
var state_53114__$1 = state_53114;
var statearr_53163_54677 = state_53114__$1;
(statearr_53163_54677[(2)] = inst_53083);

(statearr_53163_54677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53115 === (8))){
var inst_53057 = (state_53114[(12)]);
var inst_53056 = (state_53114[(16)]);
var inst_53059 = (inst_53057 < inst_53056);
var inst_53060 = inst_53059;
var state_53114__$1 = state_53114;
if(cljs.core.truth_(inst_53060)){
var statearr_53164_54687 = state_53114__$1;
(statearr_53164_54687[(1)] = (10));

} else {
var statearr_53165_54695 = state_53114__$1;
(statearr_53165_54695[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_53167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53167[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_53167[(1)] = (1));

return statearr_53167;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_53114){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_53114);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e53169){var ex__51327__auto__ = e53169;
var statearr_53170_54696 = state_53114;
(statearr_53170_54696[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_53114[(4)]))){
var statearr_53171_54697 = state_53114;
(statearr_53171_54697[(1)] = cljs.core.first((state_53114[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54705 = state_53114;
state_53114 = G__54705;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_53114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_53114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_53173 = f__51637__auto__();
(statearr_53173[(6)] = c__51636__auto___54590);

return statearr_53173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__53177 = arguments.length;
switch (G__53177) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__53182 = arguments.length;
switch (G__53182) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__53203 = arguments.length;
switch (G__53203) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__51636__auto___54746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_53269){
var state_val_53270 = (state_53269[(1)]);
if((state_val_53270 === (7))){
var state_53269__$1 = state_53269;
var statearr_53272_54748 = state_53269__$1;
(statearr_53272_54748[(2)] = null);

(statearr_53272_54748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (1))){
var state_53269__$1 = state_53269;
var statearr_53274_54749 = state_53269__$1;
(statearr_53274_54749[(2)] = null);

(statearr_53274_54749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (4))){
var inst_53219 = (state_53269[(7)]);
var inst_53220 = (state_53269[(8)]);
var inst_53222 = (inst_53220 < inst_53219);
var state_53269__$1 = state_53269;
if(cljs.core.truth_(inst_53222)){
var statearr_53275_54751 = state_53269__$1;
(statearr_53275_54751[(1)] = (6));

} else {
var statearr_53276_54752 = state_53269__$1;
(statearr_53276_54752[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (15))){
var inst_53253 = (state_53269[(9)]);
var inst_53258 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_53253);
var state_53269__$1 = state_53269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53269__$1,(17),out,inst_53258);
} else {
if((state_val_53270 === (13))){
var inst_53253 = (state_53269[(9)]);
var inst_53253__$1 = (state_53269[(2)]);
var inst_53254 = cljs.core.some(cljs.core.nil_QMARK_,inst_53253__$1);
var state_53269__$1 = (function (){var statearr_53277 = state_53269;
(statearr_53277[(9)] = inst_53253__$1);

return statearr_53277;
})();
if(cljs.core.truth_(inst_53254)){
var statearr_53278_54756 = state_53269__$1;
(statearr_53278_54756[(1)] = (14));

} else {
var statearr_53279_54757 = state_53269__$1;
(statearr_53279_54757[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (6))){
var state_53269__$1 = state_53269;
var statearr_53280_54761 = state_53269__$1;
(statearr_53280_54761[(2)] = null);

(statearr_53280_54761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (17))){
var inst_53260 = (state_53269[(2)]);
var state_53269__$1 = (function (){var statearr_53282 = state_53269;
(statearr_53282[(10)] = inst_53260);

return statearr_53282;
})();
var statearr_53284_54763 = state_53269__$1;
(statearr_53284_54763[(2)] = null);

(statearr_53284_54763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (3))){
var inst_53265 = (state_53269[(2)]);
var state_53269__$1 = state_53269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53269__$1,inst_53265);
} else {
if((state_val_53270 === (12))){
var _ = (function (){var statearr_53286 = state_53269;
(statearr_53286[(4)] = cljs.core.rest((state_53269[(4)])));

return statearr_53286;
})();
var state_53269__$1 = state_53269;
var ex53281 = (state_53269__$1[(2)]);
var statearr_53287_54765 = state_53269__$1;
(statearr_53287_54765[(5)] = ex53281);


if((ex53281 instanceof Object)){
var statearr_53288_54766 = state_53269__$1;
(statearr_53288_54766[(1)] = (11));

(statearr_53288_54766[(5)] = null);

} else {
throw ex53281;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (2))){
var inst_53218 = cljs.core.reset_BANG_(dctr,cnt);
var inst_53219 = cnt;
var inst_53220 = (0);
var state_53269__$1 = (function (){var statearr_53294 = state_53269;
(statearr_53294[(11)] = inst_53218);

(statearr_53294[(7)] = inst_53219);

(statearr_53294[(8)] = inst_53220);

return statearr_53294;
})();
var statearr_53295_54767 = state_53269__$1;
(statearr_53295_54767[(2)] = null);

(statearr_53295_54767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (11))){
var inst_53228 = (state_53269[(2)]);
var inst_53230 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_53269__$1 = (function (){var statearr_53296 = state_53269;
(statearr_53296[(12)] = inst_53228);

return statearr_53296;
})();
var statearr_53297_54771 = state_53269__$1;
(statearr_53297_54771[(2)] = inst_53230);

(statearr_53297_54771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (9))){
var inst_53220 = (state_53269[(8)]);
var _ = (function (){var statearr_53298 = state_53269;
(statearr_53298[(4)] = cljs.core.cons((12),(state_53269[(4)])));

return statearr_53298;
})();
var inst_53239 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_53220) : chs__$1.call(null,inst_53220));
var inst_53240 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_53220) : done.call(null,inst_53220));
var inst_53241 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_53239,inst_53240);
var ___$1 = (function (){var statearr_53299 = state_53269;
(statearr_53299[(4)] = cljs.core.rest((state_53269[(4)])));

return statearr_53299;
})();
var state_53269__$1 = state_53269;
var statearr_53300_54773 = state_53269__$1;
(statearr_53300_54773[(2)] = inst_53241);

(statearr_53300_54773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (5))){
var inst_53251 = (state_53269[(2)]);
var state_53269__$1 = (function (){var statearr_53301 = state_53269;
(statearr_53301[(13)] = inst_53251);

return statearr_53301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53269__$1,(13),dchan);
} else {
if((state_val_53270 === (14))){
var inst_53256 = cljs.core.async.close_BANG_(out);
var state_53269__$1 = state_53269;
var statearr_53302_54776 = state_53269__$1;
(statearr_53302_54776[(2)] = inst_53256);

(statearr_53302_54776[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (16))){
var inst_53263 = (state_53269[(2)]);
var state_53269__$1 = state_53269;
var statearr_53303_54777 = state_53269__$1;
(statearr_53303_54777[(2)] = inst_53263);

(statearr_53303_54777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (10))){
var inst_53220 = (state_53269[(8)]);
var inst_53244 = (state_53269[(2)]);
var inst_53245 = (inst_53220 + (1));
var inst_53220__$1 = inst_53245;
var state_53269__$1 = (function (){var statearr_53304 = state_53269;
(statearr_53304[(14)] = inst_53244);

(statearr_53304[(8)] = inst_53220__$1);

return statearr_53304;
})();
var statearr_53305_54778 = state_53269__$1;
(statearr_53305_54778[(2)] = null);

(statearr_53305_54778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (8))){
var inst_53249 = (state_53269[(2)]);
var state_53269__$1 = state_53269;
var statearr_53306_54780 = state_53269__$1;
(statearr_53306_54780[(2)] = inst_53249);

(statearr_53306_54780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_53307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53307[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_53307[(1)] = (1));

return statearr_53307;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_53269){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_53269);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e53308){var ex__51327__auto__ = e53308;
var statearr_53309_54782 = state_53269;
(statearr_53309_54782[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_53269[(4)]))){
var statearr_53310_54787 = state_53269;
(statearr_53310_54787[(1)] = cljs.core.first((state_53269[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54788 = state_53269;
state_53269 = G__54788;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_53269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_53269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_53311 = f__51637__auto__();
(statearr_53311[(6)] = c__51636__auto___54746);

return statearr_53311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__53319 = arguments.length;
switch (G__53319) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51636__auto___54796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_53353){
var state_val_53354 = (state_53353[(1)]);
if((state_val_53354 === (7))){
var inst_53331 = (state_53353[(7)]);
var inst_53330 = (state_53353[(8)]);
var inst_53330__$1 = (state_53353[(2)]);
var inst_53331__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53330__$1,(0),null);
var inst_53332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53330__$1,(1),null);
var inst_53333 = (inst_53331__$1 == null);
var state_53353__$1 = (function (){var statearr_53357 = state_53353;
(statearr_53357[(7)] = inst_53331__$1);

(statearr_53357[(9)] = inst_53332);

(statearr_53357[(8)] = inst_53330__$1);

return statearr_53357;
})();
if(cljs.core.truth_(inst_53333)){
var statearr_53358_54801 = state_53353__$1;
(statearr_53358_54801[(1)] = (8));

} else {
var statearr_53359_54803 = state_53353__$1;
(statearr_53359_54803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (1))){
var inst_53320 = cljs.core.vec(chs);
var inst_53321 = inst_53320;
var state_53353__$1 = (function (){var statearr_53363 = state_53353;
(statearr_53363[(10)] = inst_53321);

return statearr_53363;
})();
var statearr_53364_54804 = state_53353__$1;
(statearr_53364_54804[(2)] = null);

(statearr_53364_54804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (4))){
var inst_53321 = (state_53353[(10)]);
var state_53353__$1 = state_53353;
return cljs.core.async.ioc_alts_BANG_(state_53353__$1,(7),inst_53321);
} else {
if((state_val_53354 === (6))){
var inst_53349 = (state_53353[(2)]);
var state_53353__$1 = state_53353;
var statearr_53365_54805 = state_53353__$1;
(statearr_53365_54805[(2)] = inst_53349);

(statearr_53365_54805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (3))){
var inst_53351 = (state_53353[(2)]);
var state_53353__$1 = state_53353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53353__$1,inst_53351);
} else {
if((state_val_53354 === (2))){
var inst_53321 = (state_53353[(10)]);
var inst_53323 = cljs.core.count(inst_53321);
var inst_53324 = (inst_53323 > (0));
var state_53353__$1 = state_53353;
if(cljs.core.truth_(inst_53324)){
var statearr_53367_54806 = state_53353__$1;
(statearr_53367_54806[(1)] = (4));

} else {
var statearr_53368_54807 = state_53353__$1;
(statearr_53368_54807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (11))){
var inst_53321 = (state_53353[(10)]);
var inst_53342 = (state_53353[(2)]);
var tmp53366 = inst_53321;
var inst_53321__$1 = tmp53366;
var state_53353__$1 = (function (){var statearr_53369 = state_53353;
(statearr_53369[(11)] = inst_53342);

(statearr_53369[(10)] = inst_53321__$1);

return statearr_53369;
})();
var statearr_53370_54809 = state_53353__$1;
(statearr_53370_54809[(2)] = null);

(statearr_53370_54809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (9))){
var inst_53331 = (state_53353[(7)]);
var state_53353__$1 = state_53353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53353__$1,(11),out,inst_53331);
} else {
if((state_val_53354 === (5))){
var inst_53347 = cljs.core.async.close_BANG_(out);
var state_53353__$1 = state_53353;
var statearr_53371_54818 = state_53353__$1;
(statearr_53371_54818[(2)] = inst_53347);

(statearr_53371_54818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (10))){
var inst_53345 = (state_53353[(2)]);
var state_53353__$1 = state_53353;
var statearr_53372_54819 = state_53353__$1;
(statearr_53372_54819[(2)] = inst_53345);

(statearr_53372_54819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (8))){
var inst_53321 = (state_53353[(10)]);
var inst_53331 = (state_53353[(7)]);
var inst_53332 = (state_53353[(9)]);
var inst_53330 = (state_53353[(8)]);
var inst_53337 = (function (){var cs = inst_53321;
var vec__53326 = inst_53330;
var v = inst_53331;
var c = inst_53332;
return (function (p1__53316_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53316_SHARP_);
});
})();
var inst_53338 = cljs.core.filterv(inst_53337,inst_53321);
var inst_53321__$1 = inst_53338;
var state_53353__$1 = (function (){var statearr_53373 = state_53353;
(statearr_53373[(10)] = inst_53321__$1);

return statearr_53373;
})();
var statearr_53375_54820 = state_53353__$1;
(statearr_53375_54820[(2)] = null);

(statearr_53375_54820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_53379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53379[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_53379[(1)] = (1));

return statearr_53379;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_53353){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_53353);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e53380){var ex__51327__auto__ = e53380;
var statearr_53381_54831 = state_53353;
(statearr_53381_54831[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_53353[(4)]))){
var statearr_53382_54832 = state_53353;
(statearr_53382_54832[(1)] = cljs.core.first((state_53353[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54838 = state_53353;
state_53353 = G__54838;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_53353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_53353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_53387 = f__51637__auto__();
(statearr_53387[(6)] = c__51636__auto___54796);

return statearr_53387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__53389 = arguments.length;
switch (G__53389) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51636__auto___54852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_53413){
var state_val_53414 = (state_53413[(1)]);
if((state_val_53414 === (7))){
var inst_53395 = (state_53413[(7)]);
var inst_53395__$1 = (state_53413[(2)]);
var inst_53396 = (inst_53395__$1 == null);
var inst_53397 = cljs.core.not(inst_53396);
var state_53413__$1 = (function (){var statearr_53415 = state_53413;
(statearr_53415[(7)] = inst_53395__$1);

return statearr_53415;
})();
if(inst_53397){
var statearr_53416_54860 = state_53413__$1;
(statearr_53416_54860[(1)] = (8));

} else {
var statearr_53418_54863 = state_53413__$1;
(statearr_53418_54863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (1))){
var inst_53390 = (0);
var state_53413__$1 = (function (){var statearr_53420 = state_53413;
(statearr_53420[(8)] = inst_53390);

return statearr_53420;
})();
var statearr_53421_54864 = state_53413__$1;
(statearr_53421_54864[(2)] = null);

(statearr_53421_54864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (4))){
var state_53413__$1 = state_53413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53413__$1,(7),ch);
} else {
if((state_val_53414 === (6))){
var inst_53408 = (state_53413[(2)]);
var state_53413__$1 = state_53413;
var statearr_53422_54865 = state_53413__$1;
(statearr_53422_54865[(2)] = inst_53408);

(statearr_53422_54865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (3))){
var inst_53410 = (state_53413[(2)]);
var inst_53411 = cljs.core.async.close_BANG_(out);
var state_53413__$1 = (function (){var statearr_53423 = state_53413;
(statearr_53423[(9)] = inst_53410);

return statearr_53423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53413__$1,inst_53411);
} else {
if((state_val_53414 === (2))){
var inst_53390 = (state_53413[(8)]);
var inst_53392 = (inst_53390 < n);
var state_53413__$1 = state_53413;
if(cljs.core.truth_(inst_53392)){
var statearr_53427_54866 = state_53413__$1;
(statearr_53427_54866[(1)] = (4));

} else {
var statearr_53428_54867 = state_53413__$1;
(statearr_53428_54867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (11))){
var inst_53390 = (state_53413[(8)]);
var inst_53400 = (state_53413[(2)]);
var inst_53401 = (inst_53390 + (1));
var inst_53390__$1 = inst_53401;
var state_53413__$1 = (function (){var statearr_53429 = state_53413;
(statearr_53429[(10)] = inst_53400);

(statearr_53429[(8)] = inst_53390__$1);

return statearr_53429;
})();
var statearr_53430_54868 = state_53413__$1;
(statearr_53430_54868[(2)] = null);

(statearr_53430_54868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (9))){
var state_53413__$1 = state_53413;
var statearr_53431_54869 = state_53413__$1;
(statearr_53431_54869[(2)] = null);

(statearr_53431_54869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (5))){
var state_53413__$1 = state_53413;
var statearr_53432_54870 = state_53413__$1;
(statearr_53432_54870[(2)] = null);

(statearr_53432_54870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (10))){
var inst_53405 = (state_53413[(2)]);
var state_53413__$1 = state_53413;
var statearr_53433_54871 = state_53413__$1;
(statearr_53433_54871[(2)] = inst_53405);

(statearr_53433_54871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (8))){
var inst_53395 = (state_53413[(7)]);
var state_53413__$1 = state_53413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53413__$1,(11),out,inst_53395);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_53434 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53434[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_53434[(1)] = (1));

return statearr_53434;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_53413){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_53413);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e53435){var ex__51327__auto__ = e53435;
var statearr_53436_54888 = state_53413;
(statearr_53436_54888[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_53413[(4)]))){
var statearr_53437_54894 = state_53413;
(statearr_53437_54894[(1)] = cljs.core.first((state_53413[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54896 = state_53413;
state_53413 = G__54896;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_53413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_53413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_53438 = f__51637__auto__();
(statearr_53438[(6)] = c__51636__auto___54852);

return statearr_53438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53440 = (function (f,ch,meta53441){
this.f = f;
this.ch = ch;
this.meta53441 = meta53441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53442,meta53441__$1){
var self__ = this;
var _53442__$1 = this;
return (new cljs.core.async.t_cljs$core$async53440(self__.f,self__.ch,meta53441__$1));
}));

(cljs.core.async.t_cljs$core$async53440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53442){
var self__ = this;
var _53442__$1 = this;
return self__.meta53441;
}));

(cljs.core.async.t_cljs$core$async53440.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53440.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53440.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53443 = (function (f,ch,meta53441,_,fn1,meta53444){
this.f = f;
this.ch = ch;
this.meta53441 = meta53441;
this._ = _;
this.fn1 = fn1;
this.meta53444 = meta53444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53445,meta53444__$1){
var self__ = this;
var _53445__$1 = this;
return (new cljs.core.async.t_cljs$core$async53443(self__.f,self__.ch,self__.meta53441,self__._,self__.fn1,meta53444__$1));
}));

(cljs.core.async.t_cljs$core$async53443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53445){
var self__ = this;
var _53445__$1 = this;
return self__.meta53444;
}));

(cljs.core.async.t_cljs$core$async53443.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async53443.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__53439_SHARP_){
var G__53446 = (((p1__53439_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53439_SHARP_) : self__.f.call(null,p1__53439_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53446) : f1.call(null,G__53446));
});
}));

(cljs.core.async.t_cljs$core$async53443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53441","meta53441",976356949,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53440","cljs.core.async/t_cljs$core$async53440",-326655706,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53444","meta53444",678280171,null)], null);
}));

(cljs.core.async.t_cljs$core$async53443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53443");

(cljs.core.async.t_cljs$core$async53443.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async53443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53443.
 */
cljs.core.async.__GT_t_cljs$core$async53443 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53443(f__$1,ch__$1,meta53441__$1,___$2,fn1__$1,meta53444){
return (new cljs.core.async.t_cljs$core$async53443(f__$1,ch__$1,meta53441__$1,___$2,fn1__$1,meta53444));
});

}

return (new cljs.core.async.t_cljs$core$async53443(self__.f,self__.ch,self__.meta53441,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53447 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53447) : self__.f.call(null,G__53447));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async53440.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async53440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53441","meta53441",976356949,null)], null);
}));

(cljs.core.async.t_cljs$core$async53440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53440");

(cljs.core.async.t_cljs$core$async53440.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async53440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53440.
 */
cljs.core.async.__GT_t_cljs$core$async53440 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53440(f__$1,ch__$1,meta53441){
return (new cljs.core.async.t_cljs$core$async53440(f__$1,ch__$1,meta53441));
});

}

return (new cljs.core.async.t_cljs$core$async53440(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53449 = (function (f,ch,meta53450){
this.f = f;
this.ch = ch;
this.meta53450 = meta53450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53451,meta53450__$1){
var self__ = this;
var _53451__$1 = this;
return (new cljs.core.async.t_cljs$core$async53449(self__.f,self__.ch,meta53450__$1));
}));

(cljs.core.async.t_cljs$core$async53449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53451){
var self__ = this;
var _53451__$1 = this;
return self__.meta53450;
}));

(cljs.core.async.t_cljs$core$async53449.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53449.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53449.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async53449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53450","meta53450",877845529,null)], null);
}));

(cljs.core.async.t_cljs$core$async53449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53449");

(cljs.core.async.t_cljs$core$async53449.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async53449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53449.
 */
cljs.core.async.__GT_t_cljs$core$async53449 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53449(f__$1,ch__$1,meta53450){
return (new cljs.core.async.t_cljs$core$async53449(f__$1,ch__$1,meta53450));
});

}

return (new cljs.core.async.t_cljs$core$async53449(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53459 = (function (p,ch,meta53460){
this.p = p;
this.ch = ch;
this.meta53460 = meta53460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53461,meta53460__$1){
var self__ = this;
var _53461__$1 = this;
return (new cljs.core.async.t_cljs$core$async53459(self__.p,self__.ch,meta53460__$1));
}));

(cljs.core.async.t_cljs$core$async53459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53461){
var self__ = this;
var _53461__$1 = this;
return self__.meta53460;
}));

(cljs.core.async.t_cljs$core$async53459.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53459.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53459.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53459.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53459.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53459.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53459.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async53459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53460","meta53460",86944806,null)], null);
}));

(cljs.core.async.t_cljs$core$async53459.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53459");

(cljs.core.async.t_cljs$core$async53459.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async53459");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53459.
 */
cljs.core.async.__GT_t_cljs$core$async53459 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53459(p__$1,ch__$1,meta53460){
return (new cljs.core.async.t_cljs$core$async53459(p__$1,ch__$1,meta53460));
});

}

return (new cljs.core.async.t_cljs$core$async53459(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__53463 = arguments.length;
switch (G__53463) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51636__auto___54990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_53504){
var state_val_53505 = (state_53504[(1)]);
if((state_val_53505 === (7))){
var inst_53500 = (state_53504[(2)]);
var state_53504__$1 = state_53504;
var statearr_53506_54991 = state_53504__$1;
(statearr_53506_54991[(2)] = inst_53500);

(statearr_53506_54991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53505 === (1))){
var state_53504__$1 = state_53504;
var statearr_53515_54992 = state_53504__$1;
(statearr_53515_54992[(2)] = null);

(statearr_53515_54992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53505 === (4))){
var inst_53486 = (state_53504[(7)]);
var inst_53486__$1 = (state_53504[(2)]);
var inst_53487 = (inst_53486__$1 == null);
var state_53504__$1 = (function (){var statearr_53522 = state_53504;
(statearr_53522[(7)] = inst_53486__$1);

return statearr_53522;
})();
if(cljs.core.truth_(inst_53487)){
var statearr_53523_54993 = state_53504__$1;
(statearr_53523_54993[(1)] = (5));

} else {
var statearr_53530_54994 = state_53504__$1;
(statearr_53530_54994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53505 === (6))){
var inst_53486 = (state_53504[(7)]);
var inst_53491 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53486) : p.call(null,inst_53486));
var state_53504__$1 = state_53504;
if(cljs.core.truth_(inst_53491)){
var statearr_53531_54996 = state_53504__$1;
(statearr_53531_54996[(1)] = (8));

} else {
var statearr_53532_54997 = state_53504__$1;
(statearr_53532_54997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53505 === (3))){
var inst_53502 = (state_53504[(2)]);
var state_53504__$1 = state_53504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53504__$1,inst_53502);
} else {
if((state_val_53505 === (2))){
var state_53504__$1 = state_53504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53504__$1,(4),ch);
} else {
if((state_val_53505 === (11))){
var inst_53494 = (state_53504[(2)]);
var state_53504__$1 = state_53504;
var statearr_53533_54998 = state_53504__$1;
(statearr_53533_54998[(2)] = inst_53494);

(statearr_53533_54998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53505 === (9))){
var state_53504__$1 = state_53504;
var statearr_53536_54999 = state_53504__$1;
(statearr_53536_54999[(2)] = null);

(statearr_53536_54999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53505 === (5))){
var inst_53489 = cljs.core.async.close_BANG_(out);
var state_53504__$1 = state_53504;
var statearr_53537_55001 = state_53504__$1;
(statearr_53537_55001[(2)] = inst_53489);

(statearr_53537_55001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53505 === (10))){
var inst_53497 = (state_53504[(2)]);
var state_53504__$1 = (function (){var statearr_53538 = state_53504;
(statearr_53538[(8)] = inst_53497);

return statearr_53538;
})();
var statearr_53540_55005 = state_53504__$1;
(statearr_53540_55005[(2)] = null);

(statearr_53540_55005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53505 === (8))){
var inst_53486 = (state_53504[(7)]);
var state_53504__$1 = state_53504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53504__$1,(11),out,inst_53486);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_53541 = [null,null,null,null,null,null,null,null,null];
(statearr_53541[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_53541[(1)] = (1));

return statearr_53541;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_53504){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_53504);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e53542){var ex__51327__auto__ = e53542;
var statearr_53543_55012 = state_53504;
(statearr_53543_55012[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_53504[(4)]))){
var statearr_53544_55013 = state_53504;
(statearr_53544_55013[(1)] = cljs.core.first((state_53504[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55014 = state_53504;
state_53504 = G__55014;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_53504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_53504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_53548 = f__51637__auto__();
(statearr_53548[(6)] = c__51636__auto___54990);

return statearr_53548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53550 = arguments.length;
switch (G__53550) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__51636__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_53612){
var state_val_53613 = (state_53612[(1)]);
if((state_val_53613 === (7))){
var inst_53608 = (state_53612[(2)]);
var state_53612__$1 = state_53612;
var statearr_53614_55022 = state_53612__$1;
(statearr_53614_55022[(2)] = inst_53608);

(statearr_53614_55022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (20))){
var inst_53578 = (state_53612[(7)]);
var inst_53589 = (state_53612[(2)]);
var inst_53590 = cljs.core.next(inst_53578);
var inst_53564 = inst_53590;
var inst_53565 = null;
var inst_53566 = (0);
var inst_53567 = (0);
var state_53612__$1 = (function (){var statearr_53615 = state_53612;
(statearr_53615[(8)] = inst_53565);

(statearr_53615[(9)] = inst_53566);

(statearr_53615[(10)] = inst_53589);

(statearr_53615[(11)] = inst_53567);

(statearr_53615[(12)] = inst_53564);

return statearr_53615;
})();
var statearr_53616_55023 = state_53612__$1;
(statearr_53616_55023[(2)] = null);

(statearr_53616_55023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (1))){
var state_53612__$1 = state_53612;
var statearr_53617_55024 = state_53612__$1;
(statearr_53617_55024[(2)] = null);

(statearr_53617_55024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (4))){
var inst_53553 = (state_53612[(13)]);
var inst_53553__$1 = (state_53612[(2)]);
var inst_53554 = (inst_53553__$1 == null);
var state_53612__$1 = (function (){var statearr_53618 = state_53612;
(statearr_53618[(13)] = inst_53553__$1);

return statearr_53618;
})();
if(cljs.core.truth_(inst_53554)){
var statearr_53619_55031 = state_53612__$1;
(statearr_53619_55031[(1)] = (5));

} else {
var statearr_53620_55032 = state_53612__$1;
(statearr_53620_55032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (15))){
var state_53612__$1 = state_53612;
var statearr_53624_55033 = state_53612__$1;
(statearr_53624_55033[(2)] = null);

(statearr_53624_55033[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (21))){
var state_53612__$1 = state_53612;
var statearr_53625_55034 = state_53612__$1;
(statearr_53625_55034[(2)] = null);

(statearr_53625_55034[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (13))){
var inst_53565 = (state_53612[(8)]);
var inst_53566 = (state_53612[(9)]);
var inst_53567 = (state_53612[(11)]);
var inst_53564 = (state_53612[(12)]);
var inst_53574 = (state_53612[(2)]);
var inst_53575 = (inst_53567 + (1));
var tmp53621 = inst_53565;
var tmp53622 = inst_53566;
var tmp53623 = inst_53564;
var inst_53564__$1 = tmp53623;
var inst_53565__$1 = tmp53621;
var inst_53566__$1 = tmp53622;
var inst_53567__$1 = inst_53575;
var state_53612__$1 = (function (){var statearr_53626 = state_53612;
(statearr_53626[(8)] = inst_53565__$1);

(statearr_53626[(9)] = inst_53566__$1);

(statearr_53626[(14)] = inst_53574);

(statearr_53626[(11)] = inst_53567__$1);

(statearr_53626[(12)] = inst_53564__$1);

return statearr_53626;
})();
var statearr_53627_55043 = state_53612__$1;
(statearr_53627_55043[(2)] = null);

(statearr_53627_55043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (22))){
var state_53612__$1 = state_53612;
var statearr_53628_55044 = state_53612__$1;
(statearr_53628_55044[(2)] = null);

(statearr_53628_55044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (6))){
var inst_53553 = (state_53612[(13)]);
var inst_53562 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53553) : f.call(null,inst_53553));
var inst_53563 = cljs.core.seq(inst_53562);
var inst_53564 = inst_53563;
var inst_53565 = null;
var inst_53566 = (0);
var inst_53567 = (0);
var state_53612__$1 = (function (){var statearr_53629 = state_53612;
(statearr_53629[(8)] = inst_53565);

(statearr_53629[(9)] = inst_53566);

(statearr_53629[(11)] = inst_53567);

(statearr_53629[(12)] = inst_53564);

return statearr_53629;
})();
var statearr_53630_55046 = state_53612__$1;
(statearr_53630_55046[(2)] = null);

(statearr_53630_55046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (17))){
var inst_53578 = (state_53612[(7)]);
var inst_53582 = cljs.core.chunk_first(inst_53578);
var inst_53583 = cljs.core.chunk_rest(inst_53578);
var inst_53584 = cljs.core.count(inst_53582);
var inst_53564 = inst_53583;
var inst_53565 = inst_53582;
var inst_53566 = inst_53584;
var inst_53567 = (0);
var state_53612__$1 = (function (){var statearr_53631 = state_53612;
(statearr_53631[(8)] = inst_53565);

(statearr_53631[(9)] = inst_53566);

(statearr_53631[(11)] = inst_53567);

(statearr_53631[(12)] = inst_53564);

return statearr_53631;
})();
var statearr_53632_55050 = state_53612__$1;
(statearr_53632_55050[(2)] = null);

(statearr_53632_55050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (3))){
var inst_53610 = (state_53612[(2)]);
var state_53612__$1 = state_53612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53612__$1,inst_53610);
} else {
if((state_val_53613 === (12))){
var inst_53598 = (state_53612[(2)]);
var state_53612__$1 = state_53612;
var statearr_53635_55051 = state_53612__$1;
(statearr_53635_55051[(2)] = inst_53598);

(statearr_53635_55051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (2))){
var state_53612__$1 = state_53612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53612__$1,(4),in$);
} else {
if((state_val_53613 === (23))){
var inst_53606 = (state_53612[(2)]);
var state_53612__$1 = state_53612;
var statearr_53642_55058 = state_53612__$1;
(statearr_53642_55058[(2)] = inst_53606);

(statearr_53642_55058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (19))){
var inst_53593 = (state_53612[(2)]);
var state_53612__$1 = state_53612;
var statearr_53646_55059 = state_53612__$1;
(statearr_53646_55059[(2)] = inst_53593);

(statearr_53646_55059[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (11))){
var inst_53578 = (state_53612[(7)]);
var inst_53564 = (state_53612[(12)]);
var inst_53578__$1 = cljs.core.seq(inst_53564);
var state_53612__$1 = (function (){var statearr_53647 = state_53612;
(statearr_53647[(7)] = inst_53578__$1);

return statearr_53647;
})();
if(inst_53578__$1){
var statearr_53648_55060 = state_53612__$1;
(statearr_53648_55060[(1)] = (14));

} else {
var statearr_53649_55061 = state_53612__$1;
(statearr_53649_55061[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (9))){
var inst_53600 = (state_53612[(2)]);
var inst_53601 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53612__$1 = (function (){var statearr_53650 = state_53612;
(statearr_53650[(15)] = inst_53600);

return statearr_53650;
})();
if(cljs.core.truth_(inst_53601)){
var statearr_53651_55063 = state_53612__$1;
(statearr_53651_55063[(1)] = (21));

} else {
var statearr_53652_55064 = state_53612__$1;
(statearr_53652_55064[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (5))){
var inst_53556 = cljs.core.async.close_BANG_(out);
var state_53612__$1 = state_53612;
var statearr_53653_55065 = state_53612__$1;
(statearr_53653_55065[(2)] = inst_53556);

(statearr_53653_55065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (14))){
var inst_53578 = (state_53612[(7)]);
var inst_53580 = cljs.core.chunked_seq_QMARK_(inst_53578);
var state_53612__$1 = state_53612;
if(inst_53580){
var statearr_53654_55066 = state_53612__$1;
(statearr_53654_55066[(1)] = (17));

} else {
var statearr_53655_55067 = state_53612__$1;
(statearr_53655_55067[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (16))){
var inst_53596 = (state_53612[(2)]);
var state_53612__$1 = state_53612;
var statearr_53656_55069 = state_53612__$1;
(statearr_53656_55069[(2)] = inst_53596);

(statearr_53656_55069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (10))){
var inst_53565 = (state_53612[(8)]);
var inst_53567 = (state_53612[(11)]);
var inst_53572 = cljs.core._nth(inst_53565,inst_53567);
var state_53612__$1 = state_53612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53612__$1,(13),out,inst_53572);
} else {
if((state_val_53613 === (18))){
var inst_53578 = (state_53612[(7)]);
var inst_53587 = cljs.core.first(inst_53578);
var state_53612__$1 = state_53612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53612__$1,(20),out,inst_53587);
} else {
if((state_val_53613 === (8))){
var inst_53566 = (state_53612[(9)]);
var inst_53567 = (state_53612[(11)]);
var inst_53569 = (inst_53567 < inst_53566);
var inst_53570 = inst_53569;
var state_53612__$1 = state_53612;
if(cljs.core.truth_(inst_53570)){
var statearr_53657_55071 = state_53612__$1;
(statearr_53657_55071[(1)] = (10));

} else {
var statearr_53658_55072 = state_53612__$1;
(statearr_53658_55072[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__51324__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__51324__auto____0 = (function (){
var statearr_53659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53659[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__51324__auto__);

(statearr_53659[(1)] = (1));

return statearr_53659;
});
var cljs$core$async$mapcat_STAR__$_state_machine__51324__auto____1 = (function (state_53612){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_53612);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e53660){var ex__51327__auto__ = e53660;
var statearr_53661_55073 = state_53612;
(statearr_53661_55073[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_53612[(4)]))){
var statearr_53662_55074 = state_53612;
(statearr_53662_55074[(1)] = cljs.core.first((state_53612[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55075 = state_53612;
state_53612 = G__55075;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__51324__auto__ = function(state_53612){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__51324__auto____1.call(this,state_53612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__51324__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__51324__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_53663 = f__51637__auto__();
(statearr_53663[(6)] = c__51636__auto__);

return statearr_53663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));

return c__51636__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53665 = arguments.length;
switch (G__53665) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53671 = arguments.length;
switch (G__53671) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53675 = arguments.length;
switch (G__53675) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51636__auto___55084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_53701){
var state_val_53702 = (state_53701[(1)]);
if((state_val_53702 === (7))){
var inst_53696 = (state_53701[(2)]);
var state_53701__$1 = state_53701;
var statearr_53703_55087 = state_53701__$1;
(statearr_53703_55087[(2)] = inst_53696);

(statearr_53703_55087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53702 === (1))){
var inst_53678 = null;
var state_53701__$1 = (function (){var statearr_53704 = state_53701;
(statearr_53704[(7)] = inst_53678);

return statearr_53704;
})();
var statearr_53705_55093 = state_53701__$1;
(statearr_53705_55093[(2)] = null);

(statearr_53705_55093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53702 === (4))){
var inst_53681 = (state_53701[(8)]);
var inst_53681__$1 = (state_53701[(2)]);
var inst_53682 = (inst_53681__$1 == null);
var inst_53683 = cljs.core.not(inst_53682);
var state_53701__$1 = (function (){var statearr_53706 = state_53701;
(statearr_53706[(8)] = inst_53681__$1);

return statearr_53706;
})();
if(inst_53683){
var statearr_53707_55094 = state_53701__$1;
(statearr_53707_55094[(1)] = (5));

} else {
var statearr_53708_55097 = state_53701__$1;
(statearr_53708_55097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53702 === (6))){
var state_53701__$1 = state_53701;
var statearr_53709_55098 = state_53701__$1;
(statearr_53709_55098[(2)] = null);

(statearr_53709_55098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53702 === (3))){
var inst_53698 = (state_53701[(2)]);
var inst_53699 = cljs.core.async.close_BANG_(out);
var state_53701__$1 = (function (){var statearr_53713 = state_53701;
(statearr_53713[(9)] = inst_53698);

return statearr_53713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53701__$1,inst_53699);
} else {
if((state_val_53702 === (2))){
var state_53701__$1 = state_53701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53701__$1,(4),ch);
} else {
if((state_val_53702 === (11))){
var inst_53681 = (state_53701[(8)]);
var inst_53690 = (state_53701[(2)]);
var inst_53678 = inst_53681;
var state_53701__$1 = (function (){var statearr_53714 = state_53701;
(statearr_53714[(10)] = inst_53690);

(statearr_53714[(7)] = inst_53678);

return statearr_53714;
})();
var statearr_53715_55107 = state_53701__$1;
(statearr_53715_55107[(2)] = null);

(statearr_53715_55107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53702 === (9))){
var inst_53681 = (state_53701[(8)]);
var state_53701__$1 = state_53701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53701__$1,(11),out,inst_53681);
} else {
if((state_val_53702 === (5))){
var inst_53681 = (state_53701[(8)]);
var inst_53678 = (state_53701[(7)]);
var inst_53685 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53681,inst_53678);
var state_53701__$1 = state_53701;
if(inst_53685){
var statearr_53717_55112 = state_53701__$1;
(statearr_53717_55112[(1)] = (8));

} else {
var statearr_53718_55113 = state_53701__$1;
(statearr_53718_55113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53702 === (10))){
var inst_53693 = (state_53701[(2)]);
var state_53701__$1 = state_53701;
var statearr_53719_55116 = state_53701__$1;
(statearr_53719_55116[(2)] = inst_53693);

(statearr_53719_55116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53702 === (8))){
var inst_53678 = (state_53701[(7)]);
var tmp53716 = inst_53678;
var inst_53678__$1 = tmp53716;
var state_53701__$1 = (function (){var statearr_53720 = state_53701;
(statearr_53720[(7)] = inst_53678__$1);

return statearr_53720;
})();
var statearr_53721_55118 = state_53701__$1;
(statearr_53721_55118[(2)] = null);

(statearr_53721_55118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_53732 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53732[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_53732[(1)] = (1));

return statearr_53732;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_53701){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_53701);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e53733){var ex__51327__auto__ = e53733;
var statearr_53737_55123 = state_53701;
(statearr_53737_55123[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_53701[(4)]))){
var statearr_53738_55124 = state_53701;
(statearr_53738_55124[(1)] = cljs.core.first((state_53701[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55125 = state_53701;
state_53701 = G__55125;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_53701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_53701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_53739 = f__51637__auto__();
(statearr_53739[(6)] = c__51636__auto___55084);

return statearr_53739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53751 = arguments.length;
switch (G__53751) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51636__auto___55129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_53802){
var state_val_53803 = (state_53802[(1)]);
if((state_val_53803 === (7))){
var inst_53798 = (state_53802[(2)]);
var state_53802__$1 = state_53802;
var statearr_53808_55131 = state_53802__$1;
(statearr_53808_55131[(2)] = inst_53798);

(statearr_53808_55131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (1))){
var inst_53759 = (new Array(n));
var inst_53760 = inst_53759;
var inst_53761 = (0);
var state_53802__$1 = (function (){var statearr_53811 = state_53802;
(statearr_53811[(7)] = inst_53760);

(statearr_53811[(8)] = inst_53761);

return statearr_53811;
})();
var statearr_53812_55132 = state_53802__$1;
(statearr_53812_55132[(2)] = null);

(statearr_53812_55132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (4))){
var inst_53764 = (state_53802[(9)]);
var inst_53764__$1 = (state_53802[(2)]);
var inst_53768 = (inst_53764__$1 == null);
var inst_53769 = cljs.core.not(inst_53768);
var state_53802__$1 = (function (){var statearr_53813 = state_53802;
(statearr_53813[(9)] = inst_53764__$1);

return statearr_53813;
})();
if(inst_53769){
var statearr_53814_55133 = state_53802__$1;
(statearr_53814_55133[(1)] = (5));

} else {
var statearr_53815_55135 = state_53802__$1;
(statearr_53815_55135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (15))){
var inst_53792 = (state_53802[(2)]);
var state_53802__$1 = state_53802;
var statearr_53816_55137 = state_53802__$1;
(statearr_53816_55137[(2)] = inst_53792);

(statearr_53816_55137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (13))){
var state_53802__$1 = state_53802;
var statearr_53817_55139 = state_53802__$1;
(statearr_53817_55139[(2)] = null);

(statearr_53817_55139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (6))){
var inst_53761 = (state_53802[(8)]);
var inst_53785 = (inst_53761 > (0));
var state_53802__$1 = state_53802;
if(cljs.core.truth_(inst_53785)){
var statearr_53818_55141 = state_53802__$1;
(statearr_53818_55141[(1)] = (12));

} else {
var statearr_53819_55142 = state_53802__$1;
(statearr_53819_55142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (3))){
var inst_53800 = (state_53802[(2)]);
var state_53802__$1 = state_53802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53802__$1,inst_53800);
} else {
if((state_val_53803 === (12))){
var inst_53760 = (state_53802[(7)]);
var inst_53790 = cljs.core.vec(inst_53760);
var state_53802__$1 = state_53802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53802__$1,(15),out,inst_53790);
} else {
if((state_val_53803 === (2))){
var state_53802__$1 = state_53802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53802__$1,(4),ch);
} else {
if((state_val_53803 === (11))){
var inst_53779 = (state_53802[(2)]);
var inst_53780 = (new Array(n));
var inst_53760 = inst_53780;
var inst_53761 = (0);
var state_53802__$1 = (function (){var statearr_53820 = state_53802;
(statearr_53820[(7)] = inst_53760);

(statearr_53820[(8)] = inst_53761);

(statearr_53820[(10)] = inst_53779);

return statearr_53820;
})();
var statearr_53821_55146 = state_53802__$1;
(statearr_53821_55146[(2)] = null);

(statearr_53821_55146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (9))){
var inst_53760 = (state_53802[(7)]);
var inst_53777 = cljs.core.vec(inst_53760);
var state_53802__$1 = state_53802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53802__$1,(11),out,inst_53777);
} else {
if((state_val_53803 === (5))){
var inst_53760 = (state_53802[(7)]);
var inst_53761 = (state_53802[(8)]);
var inst_53764 = (state_53802[(9)]);
var inst_53772 = (state_53802[(11)]);
var inst_53771 = (inst_53760[inst_53761] = inst_53764);
var inst_53772__$1 = (inst_53761 + (1));
var inst_53773 = (inst_53772__$1 < n);
var state_53802__$1 = (function (){var statearr_53822 = state_53802;
(statearr_53822[(12)] = inst_53771);

(statearr_53822[(11)] = inst_53772__$1);

return statearr_53822;
})();
if(cljs.core.truth_(inst_53773)){
var statearr_53823_55150 = state_53802__$1;
(statearr_53823_55150[(1)] = (8));

} else {
var statearr_53824_55151 = state_53802__$1;
(statearr_53824_55151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (14))){
var inst_53795 = (state_53802[(2)]);
var inst_53796 = cljs.core.async.close_BANG_(out);
var state_53802__$1 = (function (){var statearr_53826 = state_53802;
(statearr_53826[(13)] = inst_53795);

return statearr_53826;
})();
var statearr_53827_55154 = state_53802__$1;
(statearr_53827_55154[(2)] = inst_53796);

(statearr_53827_55154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (10))){
var inst_53783 = (state_53802[(2)]);
var state_53802__$1 = state_53802;
var statearr_53828_55157 = state_53802__$1;
(statearr_53828_55157[(2)] = inst_53783);

(statearr_53828_55157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (8))){
var inst_53760 = (state_53802[(7)]);
var inst_53772 = (state_53802[(11)]);
var tmp53825 = inst_53760;
var inst_53760__$1 = tmp53825;
var inst_53761 = inst_53772;
var state_53802__$1 = (function (){var statearr_53829 = state_53802;
(statearr_53829[(7)] = inst_53760__$1);

(statearr_53829[(8)] = inst_53761);

return statearr_53829;
})();
var statearr_53830_55160 = state_53802__$1;
(statearr_53830_55160[(2)] = null);

(statearr_53830_55160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_53831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53831[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_53831[(1)] = (1));

return statearr_53831;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_53802){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_53802);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e53832){var ex__51327__auto__ = e53832;
var statearr_53833_55162 = state_53802;
(statearr_53833_55162[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_53802[(4)]))){
var statearr_53834_55163 = state_53802;
(statearr_53834_55163[(1)] = cljs.core.first((state_53802[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55166 = state_53802;
state_53802 = G__55166;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_53802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_53802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_53835 = f__51637__auto__();
(statearr_53835[(6)] = c__51636__auto___55129);

return statearr_53835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53837 = arguments.length;
switch (G__53837) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51636__auto___55172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51637__auto__ = (function (){var switch__51323__auto__ = (function (state_53895){
var state_val_53896 = (state_53895[(1)]);
if((state_val_53896 === (7))){
var inst_53891 = (state_53895[(2)]);
var state_53895__$1 = state_53895;
var statearr_53898_55175 = state_53895__$1;
(statearr_53898_55175[(2)] = inst_53891);

(statearr_53898_55175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (1))){
var inst_53840 = [];
var inst_53841 = inst_53840;
var inst_53842 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53895__$1 = (function (){var statearr_53899 = state_53895;
(statearr_53899[(7)] = inst_53842);

(statearr_53899[(8)] = inst_53841);

return statearr_53899;
})();
var statearr_53900_55179 = state_53895__$1;
(statearr_53900_55179[(2)] = null);

(statearr_53900_55179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (4))){
var inst_53845 = (state_53895[(9)]);
var inst_53845__$1 = (state_53895[(2)]);
var inst_53846 = (inst_53845__$1 == null);
var inst_53847 = cljs.core.not(inst_53846);
var state_53895__$1 = (function (){var statearr_53902 = state_53895;
(statearr_53902[(9)] = inst_53845__$1);

return statearr_53902;
})();
if(inst_53847){
var statearr_53903_55180 = state_53895__$1;
(statearr_53903_55180[(1)] = (5));

} else {
var statearr_53904_55181 = state_53895__$1;
(statearr_53904_55181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (15))){
var inst_53841 = (state_53895[(8)]);
var inst_53883 = cljs.core.vec(inst_53841);
var state_53895__$1 = state_53895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53895__$1,(18),out,inst_53883);
} else {
if((state_val_53896 === (13))){
var inst_53878 = (state_53895[(2)]);
var state_53895__$1 = state_53895;
var statearr_53905_55183 = state_53895__$1;
(statearr_53905_55183[(2)] = inst_53878);

(statearr_53905_55183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (6))){
var inst_53841 = (state_53895[(8)]);
var inst_53880 = inst_53841.length;
var inst_53881 = (inst_53880 > (0));
var state_53895__$1 = state_53895;
if(cljs.core.truth_(inst_53881)){
var statearr_53906_55184 = state_53895__$1;
(statearr_53906_55184[(1)] = (15));

} else {
var statearr_53907_55185 = state_53895__$1;
(statearr_53907_55185[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (17))){
var inst_53888 = (state_53895[(2)]);
var inst_53889 = cljs.core.async.close_BANG_(out);
var state_53895__$1 = (function (){var statearr_53908 = state_53895;
(statearr_53908[(10)] = inst_53888);

return statearr_53908;
})();
var statearr_53909_55186 = state_53895__$1;
(statearr_53909_55186[(2)] = inst_53889);

(statearr_53909_55186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (3))){
var inst_53893 = (state_53895[(2)]);
var state_53895__$1 = state_53895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53895__$1,inst_53893);
} else {
if((state_val_53896 === (12))){
var inst_53841 = (state_53895[(8)]);
var inst_53861 = cljs.core.vec(inst_53841);
var state_53895__$1 = state_53895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53895__$1,(14),out,inst_53861);
} else {
if((state_val_53896 === (2))){
var state_53895__$1 = state_53895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53895__$1,(4),ch);
} else {
if((state_val_53896 === (11))){
var inst_53845 = (state_53895[(9)]);
var inst_53841 = (state_53895[(8)]);
var inst_53849 = (state_53895[(11)]);
var inst_53858 = inst_53841.push(inst_53845);
var tmp53910 = inst_53841;
var inst_53841__$1 = tmp53910;
var inst_53842 = inst_53849;
var state_53895__$1 = (function (){var statearr_53911 = state_53895;
(statearr_53911[(12)] = inst_53858);

(statearr_53911[(7)] = inst_53842);

(statearr_53911[(8)] = inst_53841__$1);

return statearr_53911;
})();
var statearr_53912_55195 = state_53895__$1;
(statearr_53912_55195[(2)] = null);

(statearr_53912_55195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (9))){
var inst_53842 = (state_53895[(7)]);
var inst_53854 = cljs.core.keyword_identical_QMARK_(inst_53842,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_53895__$1 = state_53895;
var statearr_53913_55201 = state_53895__$1;
(statearr_53913_55201[(2)] = inst_53854);

(statearr_53913_55201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (5))){
var inst_53845 = (state_53895[(9)]);
var inst_53851 = (state_53895[(13)]);
var inst_53842 = (state_53895[(7)]);
var inst_53849 = (state_53895[(11)]);
var inst_53849__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53845) : f.call(null,inst_53845));
var inst_53851__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53849__$1,inst_53842);
var state_53895__$1 = (function (){var statearr_53914 = state_53895;
(statearr_53914[(13)] = inst_53851__$1);

(statearr_53914[(11)] = inst_53849__$1);

return statearr_53914;
})();
if(inst_53851__$1){
var statearr_53915_55210 = state_53895__$1;
(statearr_53915_55210[(1)] = (8));

} else {
var statearr_53916_55211 = state_53895__$1;
(statearr_53916_55211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (14))){
var inst_53845 = (state_53895[(9)]);
var inst_53849 = (state_53895[(11)]);
var inst_53863 = (state_53895[(2)]);
var inst_53874 = [];
var inst_53875 = inst_53874.push(inst_53845);
var inst_53841 = inst_53874;
var inst_53842 = inst_53849;
var state_53895__$1 = (function (){var statearr_53917 = state_53895;
(statearr_53917[(14)] = inst_53875);

(statearr_53917[(7)] = inst_53842);

(statearr_53917[(8)] = inst_53841);

(statearr_53917[(15)] = inst_53863);

return statearr_53917;
})();
var statearr_53918_55219 = state_53895__$1;
(statearr_53918_55219[(2)] = null);

(statearr_53918_55219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (16))){
var state_53895__$1 = state_53895;
var statearr_53921_55220 = state_53895__$1;
(statearr_53921_55220[(2)] = null);

(statearr_53921_55220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (10))){
var inst_53856 = (state_53895[(2)]);
var state_53895__$1 = state_53895;
if(cljs.core.truth_(inst_53856)){
var statearr_53922_55222 = state_53895__$1;
(statearr_53922_55222[(1)] = (11));

} else {
var statearr_53923_55223 = state_53895__$1;
(statearr_53923_55223[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (18))){
var inst_53885 = (state_53895[(2)]);
var state_53895__$1 = state_53895;
var statearr_53924_55224 = state_53895__$1;
(statearr_53924_55224[(2)] = inst_53885);

(statearr_53924_55224[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53896 === (8))){
var inst_53851 = (state_53895[(13)]);
var state_53895__$1 = state_53895;
var statearr_53926_55229 = state_53895__$1;
(statearr_53926_55229[(2)] = inst_53851);

(statearr_53926_55229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51324__auto__ = null;
var cljs$core$async$state_machine__51324__auto____0 = (function (){
var statearr_53927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53927[(0)] = cljs$core$async$state_machine__51324__auto__);

(statearr_53927[(1)] = (1));

return statearr_53927;
});
var cljs$core$async$state_machine__51324__auto____1 = (function (state_53895){
while(true){
var ret_value__51325__auto__ = (function (){try{while(true){
var result__51326__auto__ = switch__51323__auto__(state_53895);
if(cljs.core.keyword_identical_QMARK_(result__51326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51326__auto__;
}
break;
}
}catch (e53928){var ex__51327__auto__ = e53928;
var statearr_53929_55240 = state_53895;
(statearr_53929_55240[(2)] = ex__51327__auto__);


if(cljs.core.seq((state_53895[(4)]))){
var statearr_53930_55241 = state_53895;
(statearr_53930_55241[(1)] = cljs.core.first((state_53895[(4)])));

} else {
throw ex__51327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55242 = state_53895;
state_53895 = G__55242;
continue;
} else {
return ret_value__51325__auto__;
}
break;
}
});
cljs$core$async$state_machine__51324__auto__ = function(state_53895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51324__auto____1.call(this,state_53895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51324__auto____0;
cljs$core$async$state_machine__51324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51324__auto____1;
return cljs$core$async$state_machine__51324__auto__;
})()
})();
var state__51638__auto__ = (function (){var statearr_53931 = f__51637__auto__();
(statearr_53931[(6)] = c__51636__auto___55172);

return statearr_53931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51638__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
