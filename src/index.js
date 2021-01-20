// write your createStore function here

//basicly exact same as read me in previous lesson!!!
//1. make createStore function that takes reducer as argument and returns the dispatch and getState.
//define the store which will be the createStore function with the candyReducer as its argument.
//call store.dispatch with @@Init so it hits the default.
function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
  function getState() {
    return state;
  }
  return { dispatch, getState };
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CANDY":
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  if (store.getState()) {
    container.textContent = store.getState().join(" ");
  } else {
    throw new Error("the store's state has not been defined yet");
  }
}
let store = createStore(candyReducer);
store.dispatch({ type: "@@INIT" });
// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch
