import React, { createContext, useContext, useState } from "react"
const AppContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const InitialState = {}
const AppProvider = ({ children }) => {
  const [name, setName] = useState("Dude")
  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
