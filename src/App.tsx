
import './App.css'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'

function App() {

  return (
    <>
    <div className='app'>
      <NavBar app_name='Text Utility'/>
      <div className="container">
        <TextForm heading ="Enter Text to analyze"/>
      </div>
    </div>
    </>
  )
}

export default App
