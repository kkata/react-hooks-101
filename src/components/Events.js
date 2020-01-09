import React, { useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <h4>イベント一覧</h4>
        <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>ボディー</th>
          <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          { state.events.map((event, index) => (<Event key={index} event={event} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events
