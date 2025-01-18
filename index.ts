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

const response = await fetch("https://dx.doi.org/10.1210/jc.2017-01658", {
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

console.log(relevantContext);

export {};
