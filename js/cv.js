function showDetails(x){
	
        var divid=document.getElementById(x);            	
		var visibles = document.getElementsByClassName("p1");

		[].forEach.call(visibles, function (i) {i.classList.remove("p1");
			if(i!==divid)
			i.style.display="none";			
});		

		if(divid.style.display == 'none'){
		divid.classList.add("p1");
		divid.style.display='inline';}
		else{

		divid.style.display='none';
		}
}

function SizeProgress(multiple) {
	var divid=document.getElementById(multiple);
	var list = document.getElementsByClassName("p2");
	[].forEach.call(list, function (i) {i.classList.remove("p2");
	if(i!==divid)
	i.style.display="none";
	});
	if(divid.style.display == 'none'){
	divid.classList.add("p2");
	divid.style.display='inline';
	}
	else{
	divid.style.display='none';
	}	
	var myAwesomeVar = 2;
	//let timerId = setInterval(function (){var liste = document.getElementsByClassName("p2");liste[0].style.fontSize= myAwesomeVar++ + "px";}, 50);

	//let timerId = setInterval(function (){[].forEach.call(list, function (i) {i.style.fontSize= myAwesomeVar + "px";myAwesomeVar++;})}, 150);

	let timerId = setInterval(function (){var i=0;list[i].style.fontSize= myAwesomeVar++ + "px";i++;}, 70);
	// after 2 seconds stop
	setTimeout(() => { clearInterval(timerId);}, 1000);
}

function tooltip_move(e) {
  var tooltip = e.target.classList.contains("coupontooltip")
      ? e.target
      : e.target.querySelector(":scope .coupontooltip");
  tooltip.style.left =
      (e.pageX + tooltip.clientWidth + 10 < document.body.clientWidth)
          ? (e.pageX + 10 + "px")
          : (document.body.clientWidth + 5 - tooltip.clientWidth + "px");
  tooltip.style.top =
      (e.pageY + tooltip.clientHeight + 10 < document.body.clientHeight)
          ? (e.pageY + 10 + "px")
          : (document.body.clientHeight + 5 - tooltip.clientHeight + "px");
}

var tooltips = document.querySelectorAll('.couponcode');
for(var i = 0; i < tooltips.length; i++) {
  tooltips[i].addEventListener('mousemove', showTooltip);
}
