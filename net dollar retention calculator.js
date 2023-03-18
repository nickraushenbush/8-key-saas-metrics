const calculateButton = document.getElementById("calculate-button");
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", function() {
  const currentRevenue = Number(document.getElementById("current-revenue").value);
  const lostRevenue = Number(document.getElementById("lost-revenue").value);
  const previousRevenue = Number(document.getElementById("previous-revenue").value);

  const netDollarRetention = ((currentRevenue - lostRevenue) / previousRevenue) * 100;

  resultDiv.innerHTML = `Net Dollar Retention Rate: ${netDollarRetention.toFixed(2)}%`;
});
