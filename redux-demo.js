const redux =require('redux');
const counterReduce=(state={counter:0},action)=>{
 
        if(action.type=="increment")
            return {
                counter:state.counter+1,
            };
        else
            return {
                counter:state.counter-1,
            };
}
const store=redux.createStore(counterReduce);

// console.log(store.getState());
const counterSubscriber=()=>{
    const latestState=store.getState();
    console.log("state",latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'decrement '});


