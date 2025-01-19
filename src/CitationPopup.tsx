import { useEffect, useState } from "react";
import { fetchRelevantDoiInfo, RelevantContext } from "./fetchRelevantDoiInfo";

type CitationPopupProps = {
  url: string;
};
export function CitationPopup(props: CitationPopupProps) {
  const [info, setInfo] = useState<RelevantContext>();

  // useEffect, makes the function only be called when the url changes or on first load
  useEffect(() => {
    fetchRelevantDoiInfo(props.url).then((relevantContext) =>
      setInfo(relevantContext)
    );
  }, [props.url]);

  if (info === undefined) {
    return <p>...</p>;
  }

  return (
    <div
      style={{
        border: "1px solid currentColor",
        backgroundColor: "rgb(215, 239, 255)",
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "10px 10px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        {info.title}
      </div>
      <div>Journal: {info.publisher}</div>
      <div>Cited by: {info.citationsCount} Studies</div>
    </div>
  );
}
