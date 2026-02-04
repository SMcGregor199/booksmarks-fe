
import {Routes, Route } from 'react-router-dom';
import AppMain from "./components/AppMain";
import type { JSX } from "react";
import AppLayout from "./AppLayout";

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<AppMain />} />
      </Route>
    </Routes>
  )
}

export default App
