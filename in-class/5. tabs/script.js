const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

console.log(about, 'about');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  console.log('about.addEventListener ~ id', id);
  if (id) {
    // remove selected from other buttons
    btns.forEach((btn) => btn.classList.remove('active'));
    e.target.classList.add('active');
    // hide other contents
    articles.forEach((article) => article.classList.remove('active'));
    // !
    document.getElementById(id).classList.add('active');
  }
});
