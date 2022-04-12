import store from './store';
import { bugAdded, bugResolved } from "./actions";

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

// const unsubscribe = store.subscribe(() => {
//     console.log("Store Changed !", store.getState());
// })

// state = reducer (state, action);
// notify the subscribers

// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: "Bug1"
//     }
// });

// unsubscribe();

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1,
//     }
// });

console.log(store.getState());