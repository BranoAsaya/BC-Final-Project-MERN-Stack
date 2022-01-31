
function useSetLocalStorage({key, value}) {
      localStorage.setItem(key, JSON.stringify(value))

}

export default useSetLocalStorage
