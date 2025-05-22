function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = "";

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter both numbers.";
  } else {
    switch (operator) {
      case "+":
        result = `Result: ${num1 + num2}`;
        break;
      case "-":
        result = `Result: ${num1 - num2}`;
        break;
      case "*":
        result = `Result: ${num1 * num2}`;
        break;
      case "/":
        result =
          num2 === 0 ? "Cannot divide by zero." : `Result: ${num1 / num2}`;
        break;
      default:
        result = "Invalid operation.";
    }
  }

  document.getElementById("result").textContent = result;
}

function clearCalculator() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "";
}
