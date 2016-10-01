    var myOption=document.getElementsByClassName('newOption')     
    var content=document.getElementById('content')
	var myInput=document.getElementById("myInput")

	for(var i=0;i<myOption.length;i++){
		myOption[i].onclick=function(){
			myInput.value = this.innerHTML;
		}
	}
	myInput.oninput=function(){		
		for(var j=0;j<myOption.length;j++){								
			myOption[j].style.display="none";		//重置
		}

		for(var i=0;i<myOption.length;i++){
			if(myOption[i].innerHTML.indexOf(myInput.value)===0){

				myOption[i].style.display="block";   //前缀匹配输入	
			} 
		}	
	}

	myInput.onfocus=function(){							//获取焦点后列表全显示
		content.style.display="block";
	}	
	
	myInput.onblur=function(){							//失去焦点后列表消失 要兼顾点击事件，所以用定时器
		setTimeout('content.style.display="none"',100)
	}
