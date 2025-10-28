import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";

const basename = "/mf/site2";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <div>Site 2</div>
      <Routes>
        <Route path="/page1" element={<div>Page 1</div>} />
        <Route path="/page2" element={<div>Page 2</div>} />

        <Route path="*" element={<div>404</div>} />
      </Routes>
      <InitRouter />
    </BrowserRouter>
  );
}

export default App;

function InitRouter() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.self !== window.top) {
      const pathname = (
        "/mf" +
        window.parent.location.pathname +
        window.parent.location.search
      ).replace(basename, "");

      navigate(pathname);

      window.parent.navigate = navigate;
    }
  }, []);

  return null;
}
