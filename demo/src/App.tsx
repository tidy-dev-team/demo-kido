import './App.css'
import './vars.css'
import Sidebar from './Sidebar'
import Layout from './Layout'

function App() {

  return (
    <>
      <div style={{ display: "flex", width: "calc(100% - (var(--pixel-20) * 2))", padding: "var(--pixel-20)"}}>
        <Sidebar></Sidebar>
        <Layout></Layout>
      </div>
    </>
  )
}

export default App
