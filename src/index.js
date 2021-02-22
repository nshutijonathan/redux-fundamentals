import store from "./store";
import { bugAdded, bugResolved } from "./actions";
console.log("store", store);
const unsubscrice = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});
store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));
unsubscrice();
console.log("store", store.getState());
