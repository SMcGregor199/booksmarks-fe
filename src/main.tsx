import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom';
import {ConfigProvider, theme} from "antd";  
import "antd/dist/reset.css";
import variables from './styles/variables.ts';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
    <ConfigProvider
      theme={{
      algorithm: theme.defaultAlgorithm,
      token: {
        fontSize: variables.fontSize,
        fontFamily: "'Noto Sans', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        colorPrimary: variables.colorPrimary,
        colorPrimaryHover: variables.colorPrimary,
      },
      components: {
        Layout: {
        bodyBg: variables.white,
        footerBg: variables.white
        }
      }
      }}
    >
      <App/>
    </ConfigProvider>
  </Router>
  </StrictMode>,
)
