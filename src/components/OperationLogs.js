import React, { useContext } from 'react'

import AppContext from '../contexts/AppContext'

import OperationLog from '../components/OperationLog'

const OperationLogs = () => {
  const { state } = useContext(AppContext)
  if (!state.operationLogs.length) {
    return <p className="has-text-grey">操作ログはありません</p>
  } else {
    return (
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {
            state.operationLogs.map((operationLog, index) => {
              return <OperationLog key={index} operationLog={operationLog} />
            })
          }
        </tbody>
      </table>
    )
  }
}

export default OperationLogs
