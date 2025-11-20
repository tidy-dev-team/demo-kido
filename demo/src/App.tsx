import './App.css'
import Sidebar from './Sidebar'
import Layout from './Layout'

function App() {

  return (
    <>
      <div style={{ display: "flex", width: "100%"}}>
        <Sidebar></Sidebar>
        <Layout></Layout>
      </div>
    </>
  )
}

export default App
