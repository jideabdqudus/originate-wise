import { ADD_PLAN } from './Types'

export const addPlan = add => {
  return {
    type: ADD_PLAN,
    payload: add,
  }
}