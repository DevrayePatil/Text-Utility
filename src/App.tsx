
import './App.css'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'

function App() {

  return (
    <>
      <NavBar app_name='Text Utility'/>
      <div className="container">
        <TextForm heading ="Enter Text to analyze"/>
      </div>
    </>
  )
}

export default App
