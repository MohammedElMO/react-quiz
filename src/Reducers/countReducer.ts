// // export enum ActionKind {
// //   INCREASE_COUNT = "INCREASE_COUNT",
// //   DECREASE_COUNT = "DECREASE_COUNT",
// //   RESET_ALL = "RESET_ALL",
// //   INCREASE_STEP = "INCREASE_STEP",
// //   DECREASE_STEP = "DECREASE_STEP",
// //   SET_STEP = "SET_STEP",
// //   SET_COUNT = "SET_COUNT",
// // }

// export interface Action {
//   type: ActionKind;
//   payload: number;
// }

// interface State {
//   count: number;
//   step: number;
// }
// export const initalState = {
//   count: 0,
//   step: 1,
// };
// export function counterReducer(counter: State, action: Action) {
//   console.log(action, counter);

//   switch (action.type) {
//     case ActionKind.INCREASE_COUNT:
//       return {
//         ...counter,
//         count: counter.count + (!counter.step ? action.payload :counter.step),
//       };

//     case ActionKind.DECREASE_COUNT:
//       return {
//         ...counter,
//         count: counter.count - (!counter.step ? action.payload :counter.step),
//       };

//     case ActionKind.RESET_ALL:
//       return {
//         count: action.payload,
//         step: action.payload,
//       };
//     case ActionKind.SET_STEP:
//       return {
//         ...counter,
//         step: action.payload,
//       };
//     case ActionKind.SET_COUNT:
//       return {
//         ...counter,
//         count: action.payload,
//       };

//     default:
//       return {
//         count: action.payload,
//         step: action.payload,
//       };
//   }
// }
