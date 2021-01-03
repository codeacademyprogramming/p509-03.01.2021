const input = document.getElementById('kqInput');
const output = document.getElementById('output');
//
const gramsOutput = document.getElementById('gramsOutput');
const ozOutput = document.getElementById('ozOutput');
const pOutput = document.getElementById('pOutput');

const pound = 2.20462;
const once = 35.274;
const gram = 1000;

output.style.visibility = 'hidden';

input.addEventListener('input', (e) => {
  let kq = e.target.value;

  if (kq === '') {
    output.style.visibility = 'hidden';
  } else {
    output.style.visibility = 'visible';

    if (kq > 0) {
      gramsOutput.innerHTML = (kq * gram).toFixed(2);
      ozOutput.innerHTML = (kq * once).toFixed(2);
      pOutput.innerHTML = (kq * pound).toFixed(2);
    }
  }
});
