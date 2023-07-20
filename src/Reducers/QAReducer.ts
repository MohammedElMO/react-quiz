export enum ProgressKind {
  ANSWRING_STATUS = "ANSWRING_STATUS",
  INCREASE_SCORE = "INCREASE_SCORE",
  COMPLATED_QUESTION = "COMPLATED_QUESTION",
  NEXT_QUESTION = "NEXT_QUESTION",
  ACTIVE_QUESTIONS = "ACTIVE_QUESTIONS",
  RESET_TIME = "RESET_TIME",
  TOAST_ON = "TOAST_ON",
}

type AnswerAction = {
  type: ProgressKind.ANSWRING_STATUS
  payload: number | undefined
}
type TrueQuestionAction = {
  type: Exclude<
    ProgressKind,
    | ProgressKind.ANSWRING_STATUS
    | ProgressKind.ACTIVE_QUESTIONS
    | ProgressKind.RESET_TIME
    | ProgressKind.TOAST_ON
  >
  payload: number
}
type ActiveQuestionAction = {
  type: ProgressKind.ACTIVE_QUESTIONS
  payload: boolean
}

type ResetAction = {
  type: ProgressKind.RESET_TIME
  payload: boolean
}

type ToastAction = {
  type: ProgressKind.TOAST_ON
  payload: boolean
}

export type Action =
  | TrueQuestionAction
  | AnswerAction
  | ActiveQuestionAction
  | ResetAction
  | ToastAction

export interface State {
  answer: number | undefined
  points: number
  complatedQuestion: number
  indexAtQuestion: number
  isQuestionsActive: boolean
  reset: boolean
  isToasted: boolean
}

export const initalState: State = {
  answer: undefined,
  points: 0,
  complatedQuestion: 1,
  indexAtQuestion: 0,
  isQuestionsActive: false,
  reset: false,
  isToasted:false
}

export const ProgressReducer = (data: State, action: Action) => {
  switch (action.type) {
    case ProgressKind.ANSWRING_STATUS:
      return {
        ...data,
        answer: action.payload,
      }
    case ProgressKind.COMPLATED_QUESTION:
      return {
        ...data,
        complatedQuestion: action.payload + 1,
      }
    case ProgressKind.INCREASE_SCORE:
      return {
        ...data,
        points: action.payload + data.points,
      }
    case ProgressKind.NEXT_QUESTION:
      return {
        ...data,
        indexAtQuestion: action.payload + 1,
      }
    case ProgressKind.ACTIVE_QUESTIONS:
      return {
        ...data,
        isQuestionsActive: action.payload,
      }
    case ProgressKind.RESET_TIME:
      return {
        ...data,
        reset: action.payload,
      }
    case ProgressKind.TOAST_ON:
      return {
        ...data,
        isToasted: action.payload,
      }

    default:
      return data
  }
}
