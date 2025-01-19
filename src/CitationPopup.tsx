import { ReactNode, useEffect, useState } from "react";
import { fetchRelevantDoiInfo, RelevantContext } from "./fetchRelevantDoiInfo";

type CitationPopupProps = {
  url: string;
  children?: ReactNode;
};

function useRelevantDoiInfo(url: string) {
  const [info, setInfo] = useState<RelevantContext>();

  // useEffect, makes the function only be called when the url changes or on first load
  useEffect(() => {
    fetchRelevantDoiInfo(url).then((relevantContext) =>
      setInfo(relevantContext)
    );
  }, [url]);

  return info;
}

export function CitationPopup(props: CitationPopupProps) {
  const info = useRelevantDoiInfo(props.url);

  if (info === undefined) {
    return <p>...</p>;
  }

  return (
    <div style={{ display: "inline" }}>
      <div style={{ display: "inline", position: "relative" }}>
        {props.children}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              borderWidth: "5px",
              borderStyle: "solid",
              borderColor: "transparent transparent black transparent",
            }}
          ></div>
        </div>
      </div>

      <CitationPopupBox info={info} />
    </div>
  );
}

type CitationPopupBoxProps = {
  info: RelevantContext;
};

function CitationPopupBox(props: CitationPopupBoxProps) {
  return (
    <div
      style={{
        position: "absolute",
        marginTop: "0.5rem",
        left: "2rem",
        right: "2rem",
        border: "1px solid currentColor",
        backgroundColor: "rgb(215, 239, 255)",
        borderRadius: "0.5rem",
        padding: "0.75rem",
        boxShadow: "10px 10px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        {props.info.title}
      </div>
      <div>Journal: {props.info.publisher}</div>
      <div>Cited by: {props.info.citationsCount} studies</div>
    </div>
  );
}
