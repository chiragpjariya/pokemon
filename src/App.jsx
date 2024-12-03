import { Container } from "@mui/material"
import Layout from "./components/Layout"

function App() {


  return (
    <>
      {/* <div className="h-screen w-full">
        
      </div> */}

      <Container maxWidth='100vh' sx={{padding:'30px'}}>
        <Layout />
      </Container>
    </>
  )
}

export default App
