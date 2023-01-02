import { useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Splash from './components/splash'
import Navbar from './components/Navbar'
import Bball from "./assets/bball.svg"
import Swimming from "./assets/swimming.png"

function App() {

  return (
      <div className="App">
        <Splash />
        <Navbar />
        <div className='bgimg'>
          {/* FORMS */}
          <form className='formDiv'>

            {/* logo */}
            {/* {form == "basketball" ? <img src={Bball} alt="bball" height={70} width={70} style={{ marginBottom: 30 }} /> : undefined} */}


            <label htmlFor="id">Name</label>
            <input type='text' />
            <label htmlFor="id">Student ID</label>
            <input type="text" />

            {/* Submit Button */}

            <button className="sub" type='submit'>Submit</button>
          </form>
          {/* FOOTER */}
        </div>
      </div>
  )
}

export default App
