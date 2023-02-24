const containerDom = document.querySelector(".container");


for (let i = 1; i <= 100; i++ ) {
    const quadratino = document.createElement("div");
    quadratino.classList.add("square");
    quadratino.append(i);
    containerDom.append(quadratino);




    if ( i%15 == 0){
        console.log("fizzbuzz")
    } else if ( i%3 == 0){       
        console.log("fizz");        
    } else if ( i%5 == 0){
        console.log("buzz")
    }else{
        console.log(i);
    }
}


 