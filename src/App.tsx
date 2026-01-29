
import { Layout } from "antd";
import AppMain from "./components/AppMain";
import Footer from "./components/Footer";

function App() {

  return (
    <Layout style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <AppMain />
        <Footer />
    </Layout>
  )
}

export default App
