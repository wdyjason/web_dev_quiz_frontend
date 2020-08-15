const fetchData = (url, methods) => {
    return fetch(url, {
        method: methods,
    })
      .then((response) => {
        if (response.status === 200) {
            // console.log(response)
          return response.json();
        }
        throw new Error('error');
      })
      .catch((error) => console.error(error));
  }

 const putData = (url, data) => {
    return fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
    },
    })
      .then((response) => {
        if (response.status === 200) {
            // console.log(response)
          return response.json();
        }
        throw new Error('error');
      })
      .catch((error) => console.error(error));
  }


  export {fetchData, putData};