import React, { useState, useEffect ,useReducer} from 'react'
import Layout from './components/Layout/Layout.jsx';
import userContext from './Context/userContext.jsx';
import { Reducer, initialState } from './Reducer/dataReducer.jsx'
import useFetch from './components/CustomHooks/useFetch.jsx';

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)
  // const {data} = useFetch('/Users')

  return (
    <>
    <userContext.Provider value={{state, dispatch}}>
       <Layout/>
    </userContext.Provider>
    
    </>
  );
}

export default App;
