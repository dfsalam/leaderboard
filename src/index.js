import './style.css';
import loadData from './refreshData';
import submitData from './submitData';



const refresh = document.querySelector('.refresh');
const formCnt = document.querySelector('.inputs');

//Load stored data
loadData();

refresh.addEventListener('click', () => {
  loadData();
})

formCnt.addEventListener('submit', (e) => {
  e.preventDefault();  
  submitData();  
})

