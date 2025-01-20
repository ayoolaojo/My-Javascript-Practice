let foods = ["eba", "iyan","fufu","amala", "wheat", "semo"] 

let search = prompt ("input your order here").toLowerCase()










let available = false;

    for (i = 0; i < foods.length; i++) {
       let food = foods[i];

       



       if(search===food){
        available = true
       }
      }

       if(available) {
        alert(search + " is available ")

       } else{
        alert(search + " is not available")
       }

    
      

     