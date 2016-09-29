   content=document.getElementById('content')
   content.style.display="none";          //默认不显示

   ip1=document.getElementById("ip1")

	for(i=0;i<document.getElementsByClassName('newOption').length;i++){
		 document.getElementsByClassName('newOption')[i].onclick=function(){
			document.getElementById('ip1').value = this.innerHTML;
		}
	}

	ip1.onInput = function(){		
		for(j=0;j<document.getElementsByClassName('newOption').length;j++){								
			document.getElementsByClassName('newOption')[j].style.display="none";		//重置
		}

		for(i=0;i<document.getElementsByClassName('newOption').length;i++){
			if(document.getElementsByClassName('newOption')[i].innerHTML.indexOf(document.getElementById('ip1').value)===0){

				document.getElementsByClassName('newOption')[i].style.display="block";   //前缀匹配输入	
			}
		}	
	}

	ip1.onfocus = function(){							//获取焦点后列表全显示
		content.style.display="block";
	}	
	
	ip1.onblur = function(){							//失去焦点后列表消失 要兼顾点击事件，所以用定时器
		setTimeout('content.style.display="none"',100)
	}
