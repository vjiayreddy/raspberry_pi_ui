export const getApiData = (urlPath) => {
  let apiData = null;
  fetch(urlPath)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      apiData = data;
    })
    .catch((error) => {
      apiData = null;
    });

  return apiData;
};
