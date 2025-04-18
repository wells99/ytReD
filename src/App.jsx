import Nav from "./components/Nav"
import SideBar from "./components/sideBar"


function App() {
  return (
    <>
      
      <div className="bg-neutral-800 h-dvh text-gray-100">
        <Nav></Nav>
        <SideBar></SideBar>
        <h1 className="text-3xl pl-10 pt-10 font-bold">Funcionando</h1>
      </div>
    </>
  )
}

export default App
