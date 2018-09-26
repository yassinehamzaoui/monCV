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
/*
function showDetailss(variable){

	var list = document.getElementsByClassName("p1");
		if(variable=='0'){
			if((list[1].style.display="block") || (list[2].style.display="block"))
			{
			list[1].style.display="none";
			list[2].style.display="none";
			}
			if(list[0].style.display=="none"){
				list[0].style.display="block";
			}
			else{
				list[0].style.display="none";
			}
		
		}
		if(variable=='1'){
			if((list[0].style.display="block") || (list[2].style.display="block"))
			{
			list[0].style.display="none";
			list[2].style.display="none";
			}
			if(list[1].style.display=="none"){
				list[1].style.display="block";
			}
			else{
				list[1].style.display="none";
			}
		
		}
		if(variable=='2'){
			if((list[0].style.display="block") || (list[1].style.display="block"))
			{
			list[0].style.display="none";
			list[1].style.display="none";
			}
			if(list[2].style.display=="none"){
				list[2].style.display="block";
			}
			else{
				list[2].style.display="none";
			}
		
		}
}
*/
