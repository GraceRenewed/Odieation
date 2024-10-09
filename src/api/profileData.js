// GET PROFLE DATA

const endpoint = 'https://randomuser.me/api/?results=8';

const getProfiles = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(data.results);
          console.log(data.results);
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

export default getProfiles;
