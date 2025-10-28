import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";

const basename = "/mf/site1";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <div>Site 1</div>
      <Routes>
        <Route path="/page1" element={<div>Page 1</div>} />
        <Route
          path="/page2"
          element={
            <div>
              <div>Page 2</div>
              <div>Exemplo de iframe 3 nivel</div>
              <iframe
                src="http://localhost/site2/page1"
                style={{ width: "100%", height: "500px" }}
              />
            </div>
          }
        />

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
