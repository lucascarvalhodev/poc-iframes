import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";

const basename = "/iframes/mf/site1";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <InitRouter />
      <Routes>
        <Route path="/" element={<div>Site 1 - Home</div>} />
        <Route path="/page1" element={<div>Site 1 - Page 1</div>} />
        <Route
          path="/page2"
          element={
            <div>
              <div>Site 1 - Page 2</div>
              <div>Exemplo de iframe 3 nivel</div>
              <iframe
                src="/iframes/mf/orquestrador/"
                style={{ width: "100%", height: "500px" }}
              />
            </div>
          }
        />

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function InitRouter() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.self !== window.top) {
      window.parent.navigate = navigate;
      navigate(window?.parent?.initialPathname || "/");
    }
  }, []);

  return null;
}
