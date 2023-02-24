const containerDom = document.querySelector(".container");


for (let i = 1; i <= 100; i++ ) {
    const quadratino = document.createElement("div");
    quadratino.classList.add("square");
    // quadratino.append(i);
    containerDom.append(quadratino);




    if ( i%15 == 0){
        // console.log("fizzbuzz")
        quadratino.append("fizzbuzz");
        // quadratino.classList.remove("square");
        quadratino.classList.add("square_fizzbuzz");
    } else if ( i%3 == 0){       
        // console.log("fizz");
        quadratino.append("fizz");
        // quadratino.classList.remove("square");
        quadratino.classList.add("square_fizz");        
    } else if ( i%5 == 0){
        // console.log("buzz")
        quadratino.append("buzz");
        // quadratino.classList.remove("square");
        quadratino.classList.add("square_buzz");
    }else{
        // console.log(i);
        quadratino.append(i);
        quadratino.classList.add("simple");
        
    }
}


 