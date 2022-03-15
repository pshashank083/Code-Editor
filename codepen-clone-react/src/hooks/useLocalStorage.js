import {useState, useEffect} from 'react'

const PREFIX= 'codepen-clone-'
function useLocalStorage( key, initialValue) {
    const prefixdkey=PREFIX+key

    const [value,setValue]= useState(()=>{
        const jsonValue = localStorage.getItem(prefixdkey)

        if(jsonValue!= null) return JSON.parse(jsonValue)

        if(typeof initialValue === 'function'){
            return initialValue()
        }
        else{
            return initialValue
        }
    })

    useEffect(()=>{
     localStorage.setItem(prefixdkey, JSON.stringify(value))
    },[value,prefixdkey])
  return [value,setValue]
}

export default useLocalStorage