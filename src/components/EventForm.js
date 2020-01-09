import React, { useContext, useState } from 'react'

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })
    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601()
    })
    setTitle('')
    setBody('')
  }
  const deleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601()
      })
    }
  }
  const unCreatable = title === '' || body === ''

  const deleteAllOperationLogs = e => {
    e.preventDefault()
    const result = window.confirm('全ての操作ログを本当に削除しても良いですか？')
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      })
    }
  }

  return (
    <form>
      <div className="field">
        <label className="label" htmlFor="formEventTitle">タイトル</label>
        <div className="control">
          <input className="input" type="text" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}></input>
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="formEventBody">ボディー</label>
        <div className="control">
          <textarea className="textarea" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>
      </div>
      <div className="buttons">
        <button className="button is-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="button is-danger" onClick={deleteAllEvents} disabled={!state.events.length}>全てのイベントを削除する</button>
        <button className="button is-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</button>
      </div>
    </form>
  )
}

export default EventForm
