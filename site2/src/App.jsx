import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";

const basename = "/iframes/mf/site2";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<div>Site 2 - home</div>} />
        <Route path="/page1" element={<div>Site 2 - Page 1</div>} />
        <Route path="/page2" element={<div>Site 2 - Page 2</div>} />
        <Route path="*" element={<div>Site 2 - 404</div>} />
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
      window.parent.navigate = navigate;
      console.log("InitRouter");
    }
  }, []);

  return null;
}
