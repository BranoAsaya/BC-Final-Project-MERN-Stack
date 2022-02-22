import React, { useState, useEffect, useReducer } from 'react'
import Layout from './components/Layout/Layout.jsx';
import userContext from './Context/userContext.js';
import { Reducer, initialState } from './Reducer/dataReducer.js'
import {useFetch} from './components/CustomHooks/getHooks'
function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)
  const { data } = useFetch('/Users')
  useEffect(() => {
    if (data) {
      dispatch({ type: 'UsersData', value: data })
    }
    
  }, [data])
  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Layout />
      </userContext.Provider>

    </>
  );
}

export default App;
