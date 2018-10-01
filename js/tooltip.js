var tooltipsHTML = document.getElementsByClassName("tooltip");
var tooltips = [];
var tooltiptextsHTML = document.getElementsByClassName("tooltiptext");
var tooltiptexts = [];

for (var i = 0; i < tooltipsHTML.length; i++) {
  tooltips = [...tooltips, tooltipsHTML.item(i)];
  tooltiptexts = [...tooltiptexts, tooltiptextsHTML.item(i)];
}

tooltips.forEach(function(tooltip) {
  tooltip.onmousemove = function(event) {
    var rect = tooltip.getBoundingClientRect();
    var x = event.clientX - rect.x;
    tooltiptexts.forEach(function(tooltiptext) {
      tooltiptext.style.left = x + "px";
    });
  };
});