import { createContext } from 'react'
import { AppContextIF } from '../interfaces'

const AppContext = createContext({} as AppContextIF)

export default AppContext
