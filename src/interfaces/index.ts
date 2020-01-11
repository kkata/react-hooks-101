export interface EventState {
  id: number
  body: string
  title: string
}

export interface OperationLogState {
  description: string
  operatedAt: string
}

export interface EventAction {
  type: string
  id?: number
  body?: string
  title?: string
}
export interface OperationLogsAction {
  type: string
  description?: string
  operatedAt?: string
}

export interface AppContextIF {
  state: {
    events: EventState[]
    operationLogs: OperationLogState[]
  },
  dispatch: React.Dispatch<EventAction | OperationLogsAction>
}
