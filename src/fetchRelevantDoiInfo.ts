type DoiResponse = {
  title: string;
  publisher: string;
  "is-referenced-by-count": number;
  URL: string;
  "published-online": {
    // year, month, day
    "date-parts": [number, number, number][];
  };
};

export type RelevantContext = {
  publisher: string;
  title: string;
  citationsCount: number;
  publishedYearOnline: number;
};

export async function fetchRelevantDoiInfo(
  url: string
): Promise<RelevantContext> {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  const responseJson: DoiResponse = await response.json();

  const relevantContext = {
    publisher: responseJson.publisher,
    title: responseJson.title,
    citationsCount: responseJson["is-referenced-by-count"],
    publishedYearOnline: responseJson["published-online"]["date-parts"][0][0],
  };

  return relevantContext;
}
