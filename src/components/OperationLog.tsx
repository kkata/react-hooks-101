import React from 'react'

import dayjs from 'dayjs';

import { OperationLogState } from '../interfaces'

import 'dayjs/locale/ja';
dayjs.locale('ja');

type OperationLogProps = {
  operationLog: OperationLogState
}

const OperationLog = ({ operationLog }: OperationLogProps) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{dayjs(operationLog.operatedAt).format('YYYY-MM-DD HH:mm:ss')}</td>
    </tr>
  )
}

export default OperationLog
