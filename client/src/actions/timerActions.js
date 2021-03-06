import axios from '../utils/axios'
import { TIMER_SESSIONS_URL } from '../constants/timer/endpoints'
import { SET_TIMER_SESSIONS } from '../constants/timer/reducerTypes'

export function postNewTimerSession(data, callback) {
  return function (_dispatch) {
    axios
      .post(TIMER_SESSIONS_URL, data)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.error(error)
        callback()
      })
  }
}

export function getTimerSessions() {
  return function (dispatch) {
    axios
      .get(TIMER_SESSIONS_URL)
      .then((response) => {
        dispatch({ type: SET_TIMER_SESSIONS, data: response.data })
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export function deleteTimerSession(id, callback) {
  return function (_dispatch) {
    axios
      .delete(`${TIMER_SESSIONS_URL}/${id}`)
      .then((_response) => {
        callback()
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
