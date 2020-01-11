import React from 'react'

import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

const OperationLog = ({ operationLog }) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{dayjs(operationLog.operatedAt).format('YYYY-MM-DD HH:mm:ss')}</td>
    </tr>
  )
}

export default OperationLog
