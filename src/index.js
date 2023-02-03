import './style.css';
import loadData from './refreshData.js';
import submitData from './submitData.js';

const refresh = document.querySelector('.refresh');
const formCnt = document.querySelector('.inputs');

refresh.addEventListener('click', () => {
  loadData();
});

formCnt.addEventListener('submit', (e) => {
  e.preventDefault();
  submitData();
});

window.onload = () => {
  // Load stored data
  loadData();
}
