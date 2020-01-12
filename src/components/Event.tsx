import React, { useContext } from 'react'
import { ADD_OPERATION_LOG,  DELETE_EVENT } from '../actions'
import { EventState } from '../interfaces'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

type EventProps = {
  event: EventState
}

const Event = ({ event }: EventProps) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const handleClickDleteButton = () => {
    const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)
    if (result) {
      dispatch({type: DELETE_EVENT, id})
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました。`,
        operatedAt: timeCurrentIso8601()
      })
    }
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className="button is-danger is-small" type="button" onClick={handleClickDleteButton}>削除</button></td>
    </tr>
  )
}

export default Event
