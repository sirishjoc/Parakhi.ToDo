var count=0;
var entry=[];
		

function newdiv(){
		count++;
		var a=document.createElement('div');
		var element=document.getElementById('myinput');
		
		a.onclick = function (){
			newfunc(this);
		}
		
		a.id=count;
		a.innerHTML=element.value+"<br >";
		var x=document.getElementById('first');
		x.appendChild(a);
		element.value="";	
	
}

function newfunc(divElement){
	console.log(divElement);
	var state= true;
	
	for(var i=0;i<entry.length;i++){
		if(entry[i]==divElement.id){
			state=false;
		}

	}

	if (state==true){
		entry.push(divElement.id);
		console.log(divElement.id);
		var tempdiv = document.createElement('div');
		tempdiv.id=divElement.id;
		tempdiv.innerHTML = divElement.innerHTML;
		divElement.innerHTML="<strike>"+divElement.innerHTML+"</strike>";
		var element=document.getElementById('second');
		
		
		element.appendChild(tempdiv);
	}
	
}

