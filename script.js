let t = 'Hey there welcome to our page 😊💖'
let index =0;
function auto_text(){
    document.body.innerHTML = t.slice(0,index);
    index++;
    if(index > t.length){
        index=0;
    }
}
setInterval(auto_text,100);