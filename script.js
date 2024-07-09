function randommask(){
let i=(Math.floor(Math.random()*6));
		let url1;
		const adir = ["page 1.html","page 2.html","page 3.html","page 4.html","page 5.html","page 6.html","page 7.html"];
		if(sessionStorage.getItem('ending')==1){
			i=6;
		} 
		url1= adir[i];
		return url1;
}

function nextround(){
	var x=parseInt(sessionStorage.getItem('rounds'));
	x+=1;
	sessionStorage.setItem('rounds',x);
}
function addpoint(){
	var x=parseInt(sessionStorage.getItem('points'));
	x+=1;
	sessionStorage.setItem('points',x);
}
function setround(){
	sessionStorage.setItem('rounds','0');
	sessionStorage.setItem('points','0');
	sessionStorage.setItem('ending','0');
	sessionStorage.setItem('url12','0');
}
function correct(){
	nextround();
	addpoint();
	endcheck();
	let קר=randommask();
	return קר;
	
	
}
function wrong(){
	nextround();
	endcheck();
	let ראט=randommask();
	return ראט;
}
function endcheck(){
	if(sessionStorage.getItem('rounds')==4){
		sessionStorage.setItem('ending','1');
	}
}

function start1(){
	setround();
	let cluck=randommask();
	return cluck;
}
function yes(){
	sessionStorage.setItem('corec','1');
	let ye = (correct());
	window.location.href = "page 8.html";	
}
function no(){
	sessionStorage.setItem('corec','0');
	let no0 = (wrong());
			
	window.location.href = "page 8.html";
}
function play( audio_path, time_in_milisec){
let beep = new Audio( audio_path);
beep.loop = true;
beep.play();
setTimeout(() => { beep.pause(); }, time_in_milisec);
}
function onarrow(e){
	let whicharrow = e.key
	 switch (whicharrow) {
    case "ArrowUp":
		return document.getElementById("omni").click();
      break;
    case "ArrowLeft":
		return document.getElementById("carni").click();
      break;
    case "ArrowRight":
		return document.getElementById("diary").click();
      break;
   
  }
	
	
}