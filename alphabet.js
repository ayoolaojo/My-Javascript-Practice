




let vowels = ["a", "e", "i", "o", "u"] 

let isVowel = false;
 search = prompt("input an aphabet").toLowerCase()






for( let i = 0; i < vowels.length; i++) {
    let vowel=vowels[i];

   if(search===vowel) {
     
     isVowel = true;
    
   }
 

  if(isVowel===true){
    document.write(search + " is a vowel")
  } else {
     document.write(search + " is a consonant")
  }

}


  let names = ["Ola", "Ayoola", "Johnson" ];

  let hobbies = ["music","coding","football" ]

  let joinTogether = names.concat(hobbies)

  document.write(joinTogether)











