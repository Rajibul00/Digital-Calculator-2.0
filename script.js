let inputbox = document.querySelector('input');
let childbutton= document.querySelectorAll('.childbutton');
 inputbox.value = "";
childbutton.forEach(function(val){
val.addEventListener('click',function(dets){
    inputbox.value += dets.target.innerText;


})
})
document.addEventListener('keypress',function(val){
if(val.key=='Enter'){
    inputbox.value = eval( inputbox.value)
}
})
function resultfnc(){
    inputbox.value = eval( inputbox.value)
}
/*clearfnc*/
let clearfnc =()=>{
    inputbox.value = ''
}
let signs = [0,1,2,3,4,5,6,7,8,9,'+','-','*','/']
document.addEventListener('keypress',function(val){
    
    if(val.key==signs[0]||val.key==signs[1]||val.key==signs[2]||val.key==signs[3]||val.key==signs[4]||val.key==signs[5]||val.key==signs[6]||val.key==signs[7]||val.key==signs[8]||val.key==signs[9]||val.key==signs[10]||val.key==signs[11]||val.key==signs[12]||val.key==signs[13]){
        inputbox.value +=val.key;
    
    }
}
)
