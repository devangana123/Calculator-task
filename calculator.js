var screen=document.getElementById("result");
var scr=document.getElementById("button")
scr.addEventListener("click",(key)=>{
    let d=key.target
    if (d.classList.contains("numbers")){
        screen.value+=d.innerHTML
    }
    else if (d.classList.contains("operators")){
        operators(d.innerHTML);
    }
    else if (d.classList.contains("point")){
        point(d.innerHTML)
    }
    else if (d.classList.contains("equals")){
        let g=eval(screen.value)
        screen.value=g
    }
    else if (d.classList.contains("ac")){
        screen.value=" "
    }
    else if (d.classList.contains("c")){
        screen.value=screen.value.slice(0,-1)
    }
})
function operators(k){
    let p=screen.value[screen.value.length-1];
    if (["+","-","*","/"].includes(p)){
        screen.value=screen.value.slice(0,-1)+k;
    }
    else{
        if (p=="."){
            screen.value+="0"+k
        }else{
            screen.value+=k;
        }
    }
}
function point(n){
    let p=screen.value[screen.value.length-1];
    if (["+","-","*","/"].includes(p)){
        screen.value=screen.value+"0"+n;
        // console.log("hi")
    }
    else{
        flag=1;
        for(let i=screen.value.length-1;i>=0;i--){
            if (["+","-","*","/"].includes(screen.value[i])){
                break;
            }else{
                if (screen.value[i]==n){
                    flag=0;
                    break;
                }

            }

        }
        if (flag==1){
            screen.value+=n;
        }else{
            alert("U can use it only once");
        }
    }
}