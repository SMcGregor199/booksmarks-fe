import {Layout} from "antd";
import type {JSX} from "react";
import Form from "./Form";
import Instructions from "./Instructions";

function AppMain() : JSX.Element {
    return (

        <Layout.Content id="main" style={{paddingInline: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Instructions />
            <Form />
        </Layout.Content>
      
    );
}

export default AppMain;