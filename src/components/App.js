import React, { useEffect, useReducer} from 'react'

import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'

import '../App.scss'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <section className="section">
        <div className="container">
          <h1 className="title">イベント作成フォーム</h1>
          <EventForm />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">イベント一覧</h1>
          <Events />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">操作ログ一覧</h1>
          <OperationLogs />
        </div>
      </section>
    </AppContext.Provider>
  )
}

export default App
