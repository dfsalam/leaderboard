const submitData = async () => {
  const name = document.querySelector('.input__user');
  const score = document.querySelector('.input__score');
  const dataToPost = {
    user: name.value,
    score: score.value,
  };
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HuDs7U0CQZGKymImVaSp/scores/', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPost),
  })
  name.value = '';
  score.value = '';

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  } 
};

export default submitData;
