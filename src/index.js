import './style.css';
import loadData from './refreshData.js';
import submitData from './submitData.js';

const refresh = document.querySelector('.refresh');
const formCnt = document.querySelector('.inputs');

// Load stored data
loadData();

refresh.addEventListener('click', () => {
  loadData();
});

formCnt.addEventListener('submit', (e) => {
  e.preventDefault();
  submitData();
});
