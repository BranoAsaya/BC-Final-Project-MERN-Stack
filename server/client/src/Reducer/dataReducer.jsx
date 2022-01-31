import fetchData from "../components/Tools/fetchData"

export const Reducer = (state, action) => {
    const { type, value } = action
    return { ...state, [type]: value }


}
const email = localStorage.getItem('email')
let isAuth = false
if (!email) {
    localStorage.setItem('email', null)
  } else if(email !== 'null' ){
    isAuth= true
  }  
const result = fetchData('/Users')
console.log(result);
export const initialState = {
    auth: isAuth,
   
}