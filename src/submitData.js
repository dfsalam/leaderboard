const submitData = async () => {
  const name = document.querySelector('.input__user');
  const score = document.querySelector('.input__score');
  const data = {
    user: name.value,
    score: score.value,
  };
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HuDs7U0CQZGKymImVaSp/scores/', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      name.value = '';
      score.value = '';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default submitData;
