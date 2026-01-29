import {Form as AntForm,Input,Button} from "antd";
import styled from '@emotion/styled'

const SubmitButton = styled(Button)`
    background: linear-gradient(90deg, #855080 0%, #8f6adf 50%, #4da3ff 100%);
    opacity: 1;
    transition: all 0.3s;
    &:hover {
        background: linear-gradient(90deg, #7a4a74 0%, #4f72f2 100%);
        opacity: 0.8;
        color: #fff;
    }
`


function Form(){
    const handleSubmit = ({ url }: { url: string }) => {
    console.log(url);
    };
    return (
       
            <AntForm
            name="Submit Bookmark"
            style={{maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            autoComplete="off"
            onFinish={handleSubmit}
            >
                <AntForm.Item
                label="Bookmark URL"
                name="url"
                rules={[{ required: true, message: 'Please input the URL!' }]}
                >
                <Input type="url" placeholder="https://example.com" />
                </AntForm.Item>
                <AntForm.Item label={null}>
                    <SubmitButton type="primary" htmlType="submit">
                        Submit
                    </SubmitButton>
                </AntForm.Item>
            </AntForm>
    )
}
    
export default Form;