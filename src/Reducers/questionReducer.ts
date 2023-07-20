export enum ActionKind {
  FETCH_QUESTIONS = "FETCH_QUESTIONS",
  ERROR_STATUS = "ERROR_STATUS",
  LOADING_STATUS = "LOADING_STATUS",
  ACTIVE_STATUS = "ACTIVE_STATUS",
  FINISHED_STATUS = "FINISHED_STATUS",
  ON_NEXT_QUESTION = "ON_NEXT_QUESTION",
  
}

export type ResponseJSON = {
  question: string
  options: string[]
  correctOption: number
  points: number
}
type FetchAction = {
  type: ActionKind
  payload: ResponseJSON[]
}

type StatusAction = {
  type: Exclude<ActionKind, ActionKind.FETCH_QUESTIONS>
}

export type Action = FetchAction | StatusAction

export interface State {
  questions: ResponseJSON[]
  status:
    | "loading"
    | "error"
    | "stale"
    | "active"
    | "finished"
    | "next"
    | string
}

export const questionReducer = (data: State, action: Action) => {
  switch (action.type) {
    case ActionKind.FETCH_QUESTIONS:
      return {
        questions: action.payload,
        status: "stale",
      }
    case ActionKind.ERROR_STATUS:
      return {
        ...data,
        status: "error",
      }
    case ActionKind.LOADING_STATUS:
      return {
        ...data,
        status: "loading",
      }
    case ActionKind.FINISHED_STATUS:
      return {
        ...data,
        status: "finished",
      }
    case ActionKind.ACTIVE_STATUS:
      return {
        ...data,
        status: "active",
      }
    case ActionKind.ON_NEXT_QUESTION:
      return {
        ...data,
        status: "next",
      }
  }
}
