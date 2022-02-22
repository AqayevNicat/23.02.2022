var myBtn  = document.getElementById("btn")
var myInp  = document.getElementById("myinput")

// 1ci tapsiriq
myBtn.onclick = ()=>{
    var mynewinp = "";
    for(let i=1;i<myInp.value.length;i++){
        mynewinp += myInp.value[i-1];
    }
    myInp.value = mynewinp;
}

// 2ci tapsiriq
myBtn.onclick = ()=>{
    document.body.setAttribute("class",`${myInp.value}`);
}