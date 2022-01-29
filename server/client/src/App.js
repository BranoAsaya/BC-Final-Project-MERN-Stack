import React, { useState, useEffect ,useReducer} from 'react'
import Layout from './components/Layout/Layout.jsx';
import userContext from './Context/userContext.jsx';
import { Reducer, initialState } from './Reducer/dataReducer.jsx'

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)


  return (
    <>
    <userContext.Provider value={{state, dispatch}}>
       <Layout/>
    </userContext.Provider>
    
    </>
  );
}

export default App;
