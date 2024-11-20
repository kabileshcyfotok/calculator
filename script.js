function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
  }
  
  function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
  }
  
  function calculateResult() {
    const resultField = document.getElementById('result');
    try {
      resultField.value = eval(resultField.value); // Use eval carefully
    } catch (error) {
      resultField.value = 'Error';
    }
  }
  