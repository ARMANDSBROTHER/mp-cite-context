const successfulResponse2 = await fetch(
  "https://dx.doi.org/10.1210/jc.2017-01658",
  {
    headers: {
      Accept: "application/json",
    },
  }
);

const jsontext = await successfulResponse2.json();

console.log(jsontext);

export {};
