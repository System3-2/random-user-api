import React, { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  DARKMODE: 'darkmode',
  LIGHTMODE: 'lightmode'
};
const reducer = (state, action) => {
  switch(action.type) {
    case ACTION.INCREMENT:
      return {count: state.count + 1};

      case ACTION.DECREMENT:
        return {count: state.count - 1};

        case ACTION.DARKMODE:
          return { isDark: state.isDark = !state.isDark }
        default:
          throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 5, isDark: false });
  console.log(state.isDark);

  return (
    <>
      <h1>Count is {state.count}</h1>
      <button onClick={() => dispatch({type: ACTION.INCREMENT})}>Increment</button>
      <button onClick={() => dispatch({type: ACTION.DECREMENT})}>Decrement</button>
      <button onClick={() => dispatch({type: ACTION.DARKMODE})}>Dark</button>
    </>
  );
}

export default App;
