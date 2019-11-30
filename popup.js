document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('checkHypeBuy');
  checkPageButton.addEventListener('click', function () {
    document.getElementById('rebate').innerHTML = "$8"
    document.getElementById('netCost').innerHTML = "FREE!"

  }, false);
}, false);