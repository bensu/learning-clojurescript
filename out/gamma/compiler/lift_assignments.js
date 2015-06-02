// Compiled by ClojureScript 0.0-3308 {}
goog.provide('gamma.compiler.lift_assignments');
goog.require('cljs.core');
goog.require('gamma.ast');
goog.require('gamma.compiler.common');
gamma.compiler.lift_assignments.liftable_QMARK_ = (function gamma$compiler$lift_assignments$liftable_QMARK_(db,location){
var e = gamma.compiler.common.get_element.call(null,db,location);
var or__4953__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.peek.call(null,cljs.core.pop.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(location)))));
if(or__4953__auto__){
return or__4953__auto__;
} else {
var and__4941__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if","if",-458814265),null], null), null).call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(e));
if(cljs.core.truth_(and__4941__auto__)){
var env = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(db.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(location)))));
return cljs.core.not.call(null,(cljs.core.truth_(env)?env.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e)):false));
} else {
return and__4941__auto__;
}
}
});
gamma.compiler.lift_assignments.lift_assignments_sub = (function gamma$compiler$lift_assignments$lift_assignments_sub(db,location,target_block_id){
if(cljs.core.truth_(gamma.compiler.lift_assignments.liftable_QMARK_.call(null,db,location))){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_block_id,new cljs.core.Keyword(null,"assignments","assignments",-1114514911)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location));
} else {
return db;
}
});
gamma.compiler.lift_assignments.get_target = (function gamma$compiler$lift_assignments$get_target(db,location,target_block_id){
var e = gamma.compiler.common.get_element.call(null,db,location);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(e))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e);
} else {
return target_block_id;
}
});
gamma.compiler.lift_assignments.lift_assignments = (function gamma$compiler$lift_assignments$lift_assignments(target_block_id){
return (function (db,location){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993),gamma.compiler.common.map_path.call(null,gamma$compiler$lift_assignments$lift_assignments.call(null,target_block_id))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var target = gamma.compiler.lift_assignments.get_target.call(null,db,location,target_block_id);
return gamma.compiler.common.map_path.call(null,gamma$compiler$lift_assignments$lift_assignments.call(null,target));
})()], null),(function (db__$1,location__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamma.compiler.lift_assignments.lift_assignments_sub.call(null,db__$1,location__$1,target_block_id),null], null);
})], null)], null);
});
});

//# sourceMappingURL=lift_assignments.js.map