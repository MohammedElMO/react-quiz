import { useReducer } from "react";
import {
  ActionKind,
  counterReducer,
  initalState,
} from "../Reducers/countReducer";

function DateCounter() {
  const [{ count, step }, dispatch] = useReducer(counterReducer, initalState);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) =>
            dispatch({
              type: ActionKind.SET_STEP,
              payload: e.target.valueAsNumber,
            })
          }
        />
        <span>{step}</span>
      </div>

      <div>
        <button
          onClick={() =>
            dispatch({
              payload: 1,
              type: ActionKind.DECREASE_COUNT,
            })
          }
        >
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) =>
            dispatch({
              type: ActionKind.SET_COUNT,
              payload: e.target.valueAsNumber,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              payload: 1,
              type: ActionKind.INCREASE_COUNT,
            })
          }
        >
          +
        </button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button
          onClick={() =>
            dispatch({
              type: ActionKind.RESET_ALL,
              payload: 0,
            })
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default DateCounter;
