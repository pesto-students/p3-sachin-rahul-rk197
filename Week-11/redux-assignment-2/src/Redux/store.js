import { compose } from 'redux'
import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit'
import commonDataReducer from './Reducers/commonReducer'


let reducer = combineReducers({
  commonData: commonDataReducer,
})

export default compose(configureStore)({reducer:reducer});