$items=document.querySelector(".items");
$input=document.querySelector(".input");
$button=document.querySelector("#button");
$warn=document.querySelector(".warn");
$resert=document.querySelector(".resert");
$resert2=document.querySelector(".resert2");
$form = document.querySelector("#form");


$form.addEventListener("submit", function(e){
    e.preventDefault();
    if($input.value==""){
        warnMsg();
    }
     else
    addtask();
})

function addtask(){
    let li = document.createElement("li");
    let check = document.createElement("button");
    let clear = document.createElement("button");
    let label = document.createElement("label");

    label.innerHTML=$input.value;
    clear.innerHTML = "Clear";
    check.innerHTML="complete";
    li.appendChild(label);
    li.appendChild(clear);
    li.appendChild(check);
    $resert.appendChild(li);

    li.classList.add("task");
   clear.classList.add("clear");
    label.classList.add("task-content");
    check.classList.add("check-complete");
   
    clear.addEventListener("click",function(){
        let parent = this.parentNode;
        parent.remove();
       })
       check.addEventListener("click",function(){
           let parent = this.parentNode;
           parent.remove();
           $resert2.appendChild(parent);
           check.remove();
    })


}
function warnMsg(){
    $warn.style.display="block" ;
    $input.style.border="1px solid red"
}

$input.addEventListener("keypress",function(){
    $warn.style.display="none" ;
    $input.style.border="1px solid white ";
})




