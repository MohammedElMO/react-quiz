import { useEffect, useReducer, useState } from "react"
import {
  ActionKind,
  ResponseJSON,
  questionReducer,
} from "../Reducers/questionReducer"

export const initalState = {
  questions: [],
  status: "",
}

export const useQuestions = () => {
  const [states, dispatch] = useReducer(questionReducer, initalState)

  useEffect(() => {
    const controller = new AbortController()

    const getQuestions = async () => {
      dispatch({
        type: ActionKind.LOADING_STATUS,
      })
      try {
        const resp = await fetch("http://localhost:8000/questions", {
          method: "GET",
          signal: controller.signal,
        })
        const data: ResponseJSON[] = await resp.json()
        if (!resp.ok) throw new Error("the questions are not available")

        dispatch({
          type: ActionKind.FETCH_QUESTIONS,
          payload: data,
        })
        dispatch({
          type: ActionKind.START_STATUS,
        })
      } catch (e) {
        if (e instanceof Error)
          dispatch({
            type: ActionKind.ERROR_STATUS,
          })
      }
    }
    getQuestions()
   
    return () => controller.abort()
  }, [])
  return {
    states,
    dispatch,
  }
}
