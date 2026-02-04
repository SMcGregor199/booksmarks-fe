import {Layout} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import {Outlet} from 'react-router-dom';
function AppLayout() {
    return (
        <Layout>
            <Header />
            <Layout.Content style={{ padding: "24px", maxWidth:"1200px",width:"100%", margin:"0 auto" }} id="main">
                <Outlet />
            </Layout.Content>
            <Footer />
        </Layout>
    );
}

export default AppLayout;