import { useEffect } from "react";
import { useState } from "react";
import { IFrame } from "./IFrame";

const basename = "/iframes/mf/orquestrador";

const microfronts = [
  {
    name: "site1",
    url: "http://localhost/iframes/mf/site1",
  },
  {
    name: "site2",
    url: "http://localhost/iframes/mf/site2",
  },
];

function App() {
  const [microfront, setMicrofront] = useState("site1");

  useEffect(() => {
    const microfront = window.location.pathname
      .replace(basename, "")
      .split("/")[1];

    setMicrofront(microfront);
  }, []);

  function handleUpdateUrl(microfront, pathname) {
    setMicrofront(microfront);
    window.history.pushState({}, "", `${basename}/${microfront}${pathname}`);
    window?.navigate?.(pathname);
  }

  const pathname = window.location.pathname.replace(
    basename + "/" + microfront,
    ""
  );

  return (
    <div>
      <h3>Orquestrador</h3>
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
              handleUpdateUrl("site1", "/page1");
            }}
          >
            Page 1
          </button>
          <button
            onClick={() => {
              handleUpdateUrl("site1", "/page2");
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
              handleUpdateUrl("site2", "/page1");
            }}
          >
            Page 1
          </button>
          <button
            onClick={() => {
              handleUpdateUrl("site2", "/page2");
            }}
          >
            Page 2
          </button>
        </div>
      </div>

      <hr />

      <div>
        {!microfront && <div>Home</div>}
        {microfront && (
          <IFrame
            name={microfront}
            src={microfronts.find((item) => item.name == microfront)?.url}
            pathname={pathname}
          />
        )}
      </div>
    </div>
  );
}

export default App;
