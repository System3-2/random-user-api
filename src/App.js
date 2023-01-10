import React, { useReducer } from "react";

const initialState = {
  count: 5,
  isDark: false,
};
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  DARKMODE: "darkmode",
  LIGHTMODE: "lightmode",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };

    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };

    case ACTION.DARKMODE:
      return { ...state, isDark: !state.isDark };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({ type: ACTION.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTION.DECREMENT });
  }
  function toggleDarkMode() {
    dispatch({ type: ACTION.DARKMODE });
    console.log(state.isDark);
  }

  return (
    <>
      <div className={state.isDark ? "dark" : "light"}>
        <h1>Count is {state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={toggleDarkMode}>Dark</button>
      </div>
    </>
  );
}

export default App;
