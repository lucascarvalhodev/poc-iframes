import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [mf, setMf] = useState("site1");

  useEffect(() => {
    const microfront = window.location.pathname.split("/")?.[1];
    setMf(microfront);
  }, []);

  function handleUpdateUrl(mf, page) {
    setMf(mf);
    window.history.pushState({}, "", `/${mf}/${page}`);
    window?.navigate(page);
  }

  const src = `http://localhost/mf/${mf}`;

  return (
    <div>
      <h3>Home</h3>
      <hr />
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <div>
          <div>Menu site 1</div>
          <button
            onClick={() => {
              handleUpdateUrl("site1", "page1");
            }}
          >
            Page 1
          </button>
          <button
            onClick={() => {
              handleUpdateUrl("site1", "page2");
            }}
          >
            Page 2
          </button>
        </div>

        <hr />

        <div>
          <div>Menu site 2</div>
          <button
            onClick={() => {
              handleUpdateUrl("site2", "page1");
            }}
          >
            Page 1
          </button>
          <button
            onClick={() => {
              handleUpdateUrl("site2", "page2");
            }}
          >
            Page 2
          </button>
        </div>
      </div>

      <hr />

      <div>
        <div>Src: {src}</div>
        <iframe src={src} style={{ width: "100%", height: "500px" }} />
      </div>
    </div>
  );
}

export default App;
