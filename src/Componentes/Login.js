import React, {useRef,useContext} from 'react'

export default function Login() {
 function check_login(){
     useState({name :nom.current.value});
 }
  let nom = useRef(null);
  const [state,useState] = useContext();
    return (
    <div>
    <input type='text' ref={nom} onChange={check_login}></input>
    </div>
  )
}
