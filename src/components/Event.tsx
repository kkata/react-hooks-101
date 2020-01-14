import React, { useContext } from 'react'
import { ADD_OPERATION_LOG,  DELETE_EVENT, EDIT_EVENT_TITLE, EDIT_EVENT_BODY } from '../actions'
import { EventState } from '../interfaces'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'
import EasyEdit, { Types } from 'react-easy-edit'

type EventProps = {
  event: EventState
}

const Event = ({ event }: EventProps) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const saveTitle = (value: string) => {
    dispatch({
      type: EDIT_EVENT_TITLE,
      title: value,
      id
    })
    dispatch({
      type: ADD_OPERATION_LOG,
      description: `イベント(id=${id})のタイトルを編集しました。`,
      operatedAt: timeCurrentIso8601()
    })
  }
  const saveBody = (value: string) => {
    dispatch({
      type: EDIT_EVENT_BODY,
      body: value,
      id
    })
    dispatch({
      type: ADD_OPERATION_LOG,
      description: `イベント(id=${id})のボディーを編集しました。`,
      operatedAt: timeCurrentIso8601()
    })
  }
  const cancel = () => {}

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
      <td>
        <EasyEdit
          type={Types.TEXT}
          onCancel={cancel}
          onSave={saveTitle}
          cancelButtonLabel='キャンセル'
          saveButtonLabel='保存'
          cancelButtonStyle='button is-small'
          saveButtonStyle='button is-small is-primary'
          attributes={{ className: 'input is-small' }}
          value={event.title}
        />
      </td>
      <td>
        <EasyEdit
          type={Types.TEXTAREA}
          onCancel={cancel}
          onSave={saveBody}
          cancelButtonLabel='キャンセル'
          saveButtonLabel='保存'
          cancelButtonStyle='button is-small'
          saveButtonStyle='button is-small is-primary'
          attributes={{ className: 'textarea is-small' }}
          value={event.body}
        />
      </td>
      <td><button className="button is-danger is-small" type="button" onClick={handleClickDleteButton}>削除</button></td>
    </tr>
  )
}

export default Event
