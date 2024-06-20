function convertTemperature() {
  const celsiusInput = document.getElementById('celsiusInput').value;
  if (!celsiusInput || isNaN(celsiusInput)) {
      alert("Please enter a valid number for Celsius.");
      return;
  }

  const celsius = parseFloat(celsiusInput);
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById('fahrenheitOutput').value = fahrenheit.toFixed(2);

  const calculation = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
  document.getElementById('calculationExplanation').value = calculation;
}

function reverseConversion() {
  const fahrenheitInput = document.getElementById('fahrenheitOutput').value;
  if (!fahrenheitInput || isNaN(fahrenheitInput)) {
      alert("Please enter a valid number for Fahrenheit.");
      return;
  }

  const fahrenheit = parseFloat(fahrenheitInput);
  const celsius = (fahrenheit - 32) * 5/9;
  document.getElementById('celsiusInput').value = celsius.toFixed(2);

  const calculation = `${fahrenheit}°F - 32 × 5/9 = ${celsius.toFixed(2)}°C`;
  document.getElementById('calculationExplanation').value = calculation;
}
