let inStock = ["beans", "ewa", "dodo", "plantain", "rice" , "fufu", "potato","pizza","amala","semo", "pupuru"] ;

let search;

function print(message){
    return document.write(message);
}


while(true) {


  search =  prompt("Search a product in our store. Type 'items' to show all products available, and 'quit' to exit");

    if(search === 'quit') {
        break;
    } else if (search === 'list') {
        print(inStock.join(","));
    }



}
