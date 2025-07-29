function prettyPrint() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');

  try {
    const obj = JSON.parse(input);
    output.textContent = JSON.stringify(obj, null, 2);
  } catch (e) {
    output.textContent = 'Invalid JSON: ' + e.message;
  }
}
