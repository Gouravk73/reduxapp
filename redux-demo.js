const redux =require('redux');
const counterReduce=(state={counter:0},action)=>{
 
        if(action.type=="incrementBy2")
            return {
                counter:state.counter+2,
            };
        else
            return {
                counter:state.counter-2,
            };
}
const store=redux.legacy_createStore(counterReduce);

// console.log(store.getState());
const counterSubscriber=()=>{
    const latestState=store.getState();
    console.log("state",latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type:'incrementBy2'});
store.dispatch({type:'incrementBy2'});
store.dispatch({type:'incrementBy2'}); 
store.dispatch({type:'decrementBy2'});


