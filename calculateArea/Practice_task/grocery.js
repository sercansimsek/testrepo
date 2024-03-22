function calculateSum() {
  let first = Number(document.getElementById('grocery1').value);
  let second = Number(document.getElementById('grocery2').value);
  let third = Number(document.getElementById('grocery3').value);
  let result = first + second + third;

  document.getElementById(
    'result'
  ).innerText = `The total amount is:$ ${result}`;
}
