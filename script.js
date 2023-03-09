let textbox=document.getElementById('textbox');
var text;
textbox.addEventListener('input',function(){
      var text=this.value;
      var char=text.length;
      document.getElementById('char').innerHTML=char;
      text=text.trim();
      let words=text.split(" ");
      let cleanlist=words.filter(function(elm){
           return elm !="";
      });

      document.getElementById('word').innerHTML=cleanlist.length;
})
function reset()
{
      textbox.value="";
      document.getElementById('char').innerHTML=0;
      document.getElementById('word').innerHTML=0;
}

