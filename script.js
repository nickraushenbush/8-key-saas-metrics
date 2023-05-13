// ARR Growth Rate Calculator

document.getElementById('calculate-arr-button').addEventListener('click', function() {
  var previousArr = parseFloat(document.getElementById('previous-arr').value);
  var currentArr = parseFloat(document.getElementById('current-arr').value);

  if(isNaN(previousArr) || isNaN(currentArr)) {
    document.getElementById('arr-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var arrGrowthRate = ((currentArr - previousArr) / previousArr) * 100;
  document.getElementById('arr-result').innerHTML = 'ARR Growth Rate: ' + arrGrowthRate.toFixed(2) + '%';
});

// NDR Growth Rate Calculator

document.getElementById('calculate-ndr-button').addEventListener('click', function() {
  var currentRevenue = parseFloat(document.getElementById('current-revenue').value);
  var lostRevenue = parseFloat(document.getElementById('lost-revenue').value);
  var previousRevenue = parseFloat(document.getElementById('previous-revenue').value);

  if(isNaN(currentRevenue) || isNaN(lostRevenue) || isNaN(previousRevenue)) {
    document.getElementById('ndr-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var ndr = ((currentRevenue - lostRevenue) / previousRevenue) * 100;
  document.getElementById('ndr-result').innerHTML = 'Net Dollar Retention Rate: ' + ndr.toFixed(2) + '%';
});

// Revenue Churn Rate Calculator

document.getElementById('calculate-churn-button').addEventListener('click', function() {
  var startRevenue = parseFloat(document.getElementById('start-revenue').value);
  var endRevenue = parseFloat(document.getElementById('end-revenue').value);

  if(isNaN(startRevenue) || isNaN(endRevenue)) {
    document.getElementById('churn-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var churnRate = ((startRevenue - endRevenue) / startRevenue) * 100;
  document.getElementById('churn-result').innerHTML = 'Revenue Churn Rate: ' + churnRate.toFixed(2) + '%';
});


// Burn Multiple Calculator 

document.getElementById('calculate-burn-multiple-button').addEventListener('click', function() {
  var netBurn = parseFloat(document.getElementById('net-burn').value);
  var netNewArr = parseFloat(document.getElementById('net-new-arr').value);

  if(isNaN(netBurn) || isNaN(netNewArr)) {
    document.getElementById('burn-multiple-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var burnMultiple = netBurn / netNewArr;
  document.getElementById('burn-multiple-result').innerHTML = 'Burn Multiple: ' + burnMultiple.toFixed(2);
});


// Net Promoter Score (NPS)

document.getElementById('calculate-nps-button').addEventListener('click', function() {
  var promoters = parseFloat(document.getElementById('promoters').value);
  var passives = parseFloat(document.getElementById('passives').value);
  var detractors = parseFloat(document.getElementById('detractors').value);

  if(isNaN(promoters) || isNaN(passives) || isNaN(detractors)) {
    document.getElementById('nps-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var totalResponses = promoters + passives + detractors;

  var nps = ((promoters - detractors) / totalResponses) * 100;
  document.getElementById('nps-result').innerHTML = 'Net Promoter Score: ' + nps.toFixed(2);
});

// Employee Net Promoter Score (eNPS)

document.getElementById('calculate-enps-button').addEventListener('click', function() {
  var employeePromoters = parseFloat(document.getElementById('employee-promoters').value);
  var employeePassives = parseFloat(document.getElementById('employee-passives').value);
  var employeeDetractors = parseFloat(document.getElementById('employee-detractors').value);

  if(isNaN(employeePromoters) || isNaN(employeePassives) || isNaN(employeeDetractors)) {
    document.getElementById('enps-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var employeeTotalResponses = employeePromoters + employeePassives + employeeDetractors;

  var enps = ((employeePromoters - employeeDetractors) / employeeTotalResponses) * 100;
  document.getElementById('enps-result').innerHTML = 'Employee Net Promoter Score: ' + enps.toFixed(2);
});

// Burn Rate

document.getElementById('calculate-burn-rate-button').addEventListener('click', function() {
  var startCash = parseFloat(document.getElementById('start-cash').value);
  var endCash = parseFloat(document.getElementById('end-cash').value);
  var months = parseFloat(document.getElementById('months').value);

  if(isNaN(startCash) || isNaN(endCash) || isNaN(months)) {
    document.getElementById('burn-rate-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var burnRate = (startCash - endCash) / months;
  document.getElementById('burn-rate-result').innerHTML = 'Burn Rate: $' + burnRate.toFixed(2) + ' per month';
});


// Runway

document.getElementById('calculate-runway-button').addEventListener('click', function() {
  var cash = parseFloat(document.getElementById('cash').value);
  var monthlyBurn = parseFloat(document.getElementById('monthly-burn').value);

  if(isNaN(cash) || isNaN(monthlyBurn)) {
    document.getElementById('runway-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var runway = cash / monthlyBurn;
  document.getElementById('runway-result').innerHTML = 'Runway: ' + runway.toFixed(2) + ' months';
});


// ARR Growth Rate Calculator

document.getElementById('calculate-arr-button').addEventListener('click', function() {
  var previousArr = parseFloat(document.getElementById('previous-arr').value);
  var currentArr = parseFloat(document.getElementById('current-arr').value);

  if(isNaN(previousArr) || isNaN(currentArr)) {
    document.getElementById('arr-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var arrGrowthRate = ((currentArr - previousArr) / previousArr) * 100;
  document.getElementById('arr-result').innerHTML = 'ARR Growth Rate: ' + arrGrowthRate.toFixed(2) + '%';
});

// NDR Growth Rate Calculator

document.getElementById('calculate-ndr-button').addEventListener('click', function() {
  var currentRevenue = parseFloat(document.getElementById('current-revenue').value);
  var lostRevenue = parseFloat(document.getElementById('lost-revenue').value);
  var previousRevenue = parseFloat(document.getElementById('previous-revenue').value);

  if(isNaN(currentRevenue) || isNaN(lostRevenue) || isNaN(previousRevenue)) {
    document.getElementById('ndr-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var ndr = ((currentRevenue - lostRevenue) / previousRevenue) * 100;
  document.getElementById('ndr-result').innerHTML = 'Net Dollar Retention Rate: ' + ndr.toFixed(2) + '%';
});

// Revenue Churn Rate Calculator

document.getElementById('calculate-churn-button').addEventListener('click', function() {
  var startRevenue = parseFloat(document.getElementById('start-revenue').value);
  var endRevenue = parseFloat(document.getElementById('end-revenue').value);

  if(isNaN(startRevenue) || isNaN(endRevenue)) {
    document.getElementById('churn-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var churnRate = ((startRevenue - endRevenue) / startRevenue) * 100;
  document.getElementById('churn-result').innerHTML = 'Revenue Churn Rate: ' + churnRate.toFixed(2) + '%';
});


// Burn Multiple Calculator 

document.getElementById('calculate-burn-multiple-button').addEventListener('click', function() {
  var netBurn = parseFloat(document.getElementById('net-burn').value);
  var netNewArr = parseFloat(document.getElementById('net-new-arr').value);

  if(isNaN(netBurn) || isNaN(netNewArr)) {
    document.getElementById('burn-multiple-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var burnMultiple = netBurn / netNewArr;
  document.getElementById('burn-multiple-result').innerHTML = 'Burn Multiple: ' + burnMultiple.toFixed(2);
});


// Net Promoter Score (NPS)

document.getElementById('calculate-nps-button').addEventListener('click', function() {
  var promoters = parseFloat(document.getElementById('promoters').value);
  var passives = parseFloat(document.getElementById('passives').value);
  var detractors = parseFloat(document.getElementById('detractors').value);

  if(isNaN(promoters) || isNaN(passives) || isNaN(detractors)) {
    document.getElementById('nps-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var totalResponses = promoters + passives + detractors;

  var nps = ((promoters - detractors) / totalResponses) * 100;
  document.getElementById('nps-result').innerHTML = 'Net Promoter Score: ' + nps.toFixed(2);
});

// Employee Net Promoter Score (eNPS)

document.getElementById('calculate-enps-button').addEventListener('click', function() {
  var employeePromoters = parseFloat(document.getElementById('employee-promoters').value);
  var employeePassives = parseFloat(document.getElementById('employee-passives').value);
  var employeeDetractors = parseFloat(document.getElementById('employee-detractors').value);

  if(isNaN(employeePromoters) || isNaN(employeePassives) || isNaN(employeeDetractors)) {
    document.getElementById('enps-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var employeeTotalResponses = employeePromoters + employeePassives + employeeDetractors;

  var enps = ((employeePromoters - employeeDetractors) / employeeTotalResponses) * 100;
  document.getElementById('enps-result').innerHTML = 'Employee Net Promoter Score: ' + enps.toFixed(2);
});

// Burn Rate

document.getElementById('calculate-burn-rate-button').addEventListener('click', function() {
  var startCash = parseFloat(document.getElementById('start-cash').value);
  var endCash = parseFloat(document.getElementById('end-cash').value);
  var months = parseFloat(document.getElementById('months').value);

  if(isNaN(startCash) || isNaN(endCash) || isNaN(months)) {
    document.getElementById('burn-rate-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var burnRate = (startCash - endCash) / months;
  document.getElementById('burn-rate-result').innerHTML = 'Burn Rate: $' + burnRate.toFixed(2) + ' per month';
});


// Runway

document.getElementById('calculate-runway-button').addEventListener('click', function() {
  var cash = parseFloat(document.getElementById('cash').value);
  var monthlyBurn = parseFloat(document.getElementById('monthly-burn').value);

  if(isNaN(cash) || isNaN(monthlyBurn)) {
    document.getElementById('runway-result').innerHTML = 'Please enter valid numbers';
    return;
  }

  var runway = cash / monthlyBurn;
  document.getElementById('runway-result').innerHTML = 'Runway: ' + runway.toFixed(2) + ' months';
});


