export const getApiData = (urlPath) => {
  let _data = null;
  fetch(urlPath)
    .then((res) => res.json())
    .then((data) => {
      data = _data;
    })
    .catch((error) => {
      _data = null;
    });

  return _data;  
};
