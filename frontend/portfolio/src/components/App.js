import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate replace to="/projects" />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
