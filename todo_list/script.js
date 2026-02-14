



arr=[];
const getinput=document.querySelector("#getinput");
const btn=document.querySelector("#btn");
const ul=document.querySelector("#ul");
btn.addEventListener("click",function(){
    if (getinput.value ===""){
        alert("please enter the task");
    }
    else{
        arr.push(getinput.value);

        getinput.value=""
        ul.innerHTML=""
        for(let i=0;i<arr.length;i++){
            const li=document.createElement("li");
            const del=document.createElement("button")
            del.textContent="completed"
            del.classList.add("completed-btn"); 
            
            li.textContent=arr[i]
            li.appendChild(del)
            ul.append(li)
            del.addEventListener("click", function(){

                arr.splice(i, 1);

                li.remove();

            });
    }
    

    }
    

})
