const response = await fetch("https://dx.doi.org/10.1210/jc.2017-01658", {
  headers: {
    Accept: "application/json",
  },
});

const responseJson = await response.json();

const relevantContext = {
  title: responseJson.title,
  publisher: responseJson.publisher,
};

console.log(relevantContext);

export {};
