import './App.css'
import Sidebar from './Sidebar'
import Layout from './Layout'

function App() {

  return (
    <>
      <div style={{ display: "flex", width: "calc(100% - 40px)", padding: "20px"}}>
        <Sidebar></Sidebar>
        <Layout></Layout>
      </div>
    </>
  )
}

export default App
