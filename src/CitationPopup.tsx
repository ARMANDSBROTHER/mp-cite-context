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
    <p>
      {info.citationsCount} {info.publishedYearOnline} {info.publisher}{" "}
      {info.title}
    </p>
  );
}
