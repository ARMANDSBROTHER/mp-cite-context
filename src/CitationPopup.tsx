import { fetchRelevantDoiInfo } from "./fetchRelevantDoiInfo";

type CitationPopupProps = {
  url: string;
};
export async function CitationPopup(props: CitationPopupProps) {
  const info = await fetchRelevantDoiInfo(props.url);

  return (
    <p>
      {info.citationsCount} {info.publishedYearOnline} {info.publisher}{" "}
      {info.title}
    </p>
  );
}
