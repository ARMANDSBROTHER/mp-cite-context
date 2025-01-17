const promiseOfResponse = fetch("https://dx.doi.org/10.1210/jc.2017-01658", {
  headers: {
    Accept: "application/json",
  },
});

promiseOfResponse.then((successfulResponse) =>
  successfulResponse.json().then((jsontext) => console.log(jsontext))
);
