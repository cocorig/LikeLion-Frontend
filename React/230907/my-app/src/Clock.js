import React, { useReducer, useEffect } from 'react';

// 초기 상태 정의
const initialState = {
  time: new Date(),
};

// 액션 타입 정의
const actionTypes = {
  TICK: 'TICK',
};

// 리듀서 함수 정의
function clockReducer(state, action) {
  switch (action.type) {
    case actionTypes.TICK:
      return {
        ...state,
        time: new Date(),
      };
    default:
      return state;
  }
}


function Clock() {
  const [state, dispatch] = useReducer(clockReducer, initialState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: actionTypes.TICK });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const { time } = state;

  return (
    <div>
      <h1>React Clock</h1>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
