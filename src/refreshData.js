const loadData = async () => {  
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HuDs7U0CQZGKymImVaSp/scores/')
  const data = await response.json();

  const container = document.querySelector('.recent__container');
  let dataToLoad = '';
  
  data.result.forEach(element => {
    dataToLoad += `
          <div class="recent__score">Name:${element.user} ${element.score}</div>    
          `;
  });
  
  container.innerHTML = dataToLoad;

};

export default loadData;