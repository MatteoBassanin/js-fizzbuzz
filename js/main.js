const containerDom = document.querySelector(".container");


for (let i = 1; i <= 100; i++ ) {
    const quadratino = document.createElement("div");
    quadratino.classList.add("square");
    containerDom.append(quadratino);




    if ( i%15 == 0){
        quadratino.append("fizzbuzz");
        quadratino.classList.add("square_fizzbuzz");
    } else if ( i%3 == 0){       
        quadratino.append("fizz");
        quadratino.classList.add("square_fizz");        
    } else if ( i%5 == 0){
        quadratino.append("buzz");
        quadratino.classList.add("square_buzz");
    }else{
        quadratino.append(i);
        quadratino.classList.add("simple");
        
    }
}


 