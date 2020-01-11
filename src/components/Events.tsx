import React, { useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
  const { state } = useContext(AppContext)
  if (!state.events.length) {
    return <p className="has-text-grey">イベントはありません</p>
  } else {
    return (
      <table className="table is-hoverable is-fullwidth">
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
    )
  }
}

export default Events
