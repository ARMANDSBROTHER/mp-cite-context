import { CitationPopup } from "./CitationPopup";

function App() {
  return (
    <>
      <h1>Citation test app</h1>
      <p>
        This is a DOI link:{" "}
        <a href="https://dx.doi.org/10.1210/jc.2017-01658">
          Hembree et al., 2017
        </a>
        <CitationPopup url={"https://dx.doi.org/10.1210/jc.2017-01658"} />
      </p>
    </>
  );
}

export default App;
