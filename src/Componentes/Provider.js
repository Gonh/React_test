import React,{createContext,useState} from 'react'

export default function Provider(props) {
  const [state,useState] = useState({});
  const UserContext = createContext();
     return (
    <div>
    <UserContext.Provider value={{state,useState}}>
        
    </UserContext.Provider>
    </div>
  )
}
