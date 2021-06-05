/*
alert('welcome')
var travel = prompt('do you like to travel')
document.write('<p>'+"do you like traveling? "+travel+'</p>')
if(travel=='yes'){
  document.write('<h2>'+"CALL US"+'</h2>'), prompt('add your phone number')
}

*/
// i wanted to save the phone number but i couldn't :

var useranswer = prompt("pcik a number") 

while( 3 < useranswer) {
  
     if(useranswer>3){
      alert("pick lower")
     }
   
 useranswer = prompt("pick again")  
} 

var petra = prompt("how many times do you want to see Petra")
var i = 0
for (i ; i < petra ; i++ ){  
     document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Al_Khazneh_Petra_edit_2.jpg/1200px-Al_Khazneh_Petra_edit_2.jpg" width="100px" height="100px";>')
  if (petra>21){
    petra = prompt("max 20")  
  }
}