// Compiled by ClojureScript 0.0-3308 {}
goog.provide('gamma.emit.fun');
goog.require('cljs.core');
goog.require('gamma.emit.emit');
goog.require('gamma.ast');
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"function","function",-2127255473),(function (db,x){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.name.call(null,gamma.ast.head.call(null,x)),"(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.map.call(null,(function (p1__20228_SHARP_){
return gamma.emit.emit.emit.call(null,db,db.call(null,p1__20228_SHARP_));
}),gamma.ast.body.call(null,x)))], null),")"], null);
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"swizzle","swizzle",-956643048),(function (db,x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),gamma.emit.emit.emit.call(null,db,db.call(null,cljs.core.first.call(null,gamma.ast.body.call(null,x)))),".",cljs.core.name.call(null,new cljs.core.Keyword(null,"swizzle","swizzle",-956643048).cljs$core$IFn$_invoke$arity$1(x))], null);
}));

//# sourceMappingURL=fun.js.map