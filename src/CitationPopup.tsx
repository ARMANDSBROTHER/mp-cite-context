import { useState } from "react";
import { fetchRelevantDoiInfo, RelevantContext } from "./fetchRelevantDoiInfo";

type CitationPopupProps = {
  url: string;
};
export function CitationPopup(props: CitationPopupProps) {
  const [info, setInfo] = useState<RelevantContext>();

  fetchRelevantDoiInfo(props.url).then((relevantContext) =>
    setInfo(relevantContext)
  );

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
