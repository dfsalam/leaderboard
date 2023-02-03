const loadData = async () => {  
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HuDs7U0CQZGKymImVaSp/scores/')
  const data = await response.json();

  const container = document.querySelector('.recent__container');
  let dataToLoad = '';
  
  for (let i = 0; i < data.result.length; i += 1) {
    dataToLoad += `
          <div class="recent__score">Name:${data.result[i].user} ${data.result[i].score}</div>    
          `;
  }
  container.innerHTML = dataToLoad;

};

export default loadData;