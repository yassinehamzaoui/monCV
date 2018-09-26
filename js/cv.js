





function showDetails(variable){

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