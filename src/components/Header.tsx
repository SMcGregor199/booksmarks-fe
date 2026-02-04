import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

function Header(){
    const items = [
        {
            key:"Reasoning",
            label: <Link to="/reasoning">Reasoning</Link>
        },
        {
            key:"Contact",
            label: <Link to="/contact">Contact</Link>
        },
        {
            key:"Login",
            label: <Link to="/login">Login</Link>
        }
    ];
    return (
        <Layout.Header>
            <nav>
                <Menu mode="horizontal" items={items} style={{justifyContent: 'flex-end'}}/>
            </nav>
        </Layout.Header>
    )
}

export default Header