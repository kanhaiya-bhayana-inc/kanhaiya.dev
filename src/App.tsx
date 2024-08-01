import devLogo from './assets/dev-icon.svg'
import './App.css'

function App() {

  return (
    <>
      <div style={{"marginTop":"-300px"}}>
        <a href="https://kanhaiya.dev" target="_blank">
          <img src={devLogo} className="logo" alt="Dev logo" />
        </a>       
        <h2>Welcome to kanhaiya-dev</h2>
        <h4>Congratulations on our new site</h4>
        <h6>Site will be ready soon—please check back later.</h6>
      </div>            
    </>
  )
}

export default App
