import React from 'react'
import NavigationBar from "./components/NavigationBar"
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
     <div className="flex ">
  <NavigationBar />

  <div className="w-full ml-17.5 md:ml-60 transition-all duration-300">
    <Dashboard />
  </div>
</div>
    </>
   
  )
}

export default App