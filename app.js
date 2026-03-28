console.log("Hello World!\n==========\n");

// Exercise 1 Section
for(var numbers = 100; numbers >= 0; numbers++){
    if(numbers % 2 != 0)
        {
        console.log(numbers);
    }
    else
        {
        continue;
    }


}


// Exercise 2 Section
for(var numbers = 100; numbers >= 0; numbers++){
    if(numbers % 3 == 0){
        console.log(`'FIZZ'`);
    }

    if(numbers % 5 == 0){
        console.log(`'BUZZ'`);
    }

    if(numbers % 3 == 0 && numbers % 5 == 0){
        console.log(`'FIZZBUZZ'`);
    }
}

 // Exercise 3 Section
 var numbers = 1;

 while(numbers <= 100){
    if(numbers % 3 == 0){
        console.log(`'FIZZ'`);
    }

    if(numbers % 5 == 0){
        console.log(`'BUZZ'`);
    }

    if(numbers % 3 == 0 && numbers % 5 == 0){
        console.log(`'FIZZBUZZ'`);
    }
 }

 var number = 1;

 do{
    if(number % 3 == 0){
        console.log(`'FIZZ'`);
    }

    if(number % 5 == 0){
        console.log(`'BUZZ'`);
    }

    if(number % 3 == 0 && number % 5 == 0){
        console.log(`'FIZZBUZZ'`);
    }
 } while(number <= 100);

  // Exercise 4 section
  let value = Math.round((Math.random() * 500));
  //let n = Math.round(Math.random() * (500 - 100) + 100);

  for(var i = 0; i <= n; i++){
    if(i == value){
        console.log("Found Value!");
        break;
    }
  }

  console.log("Did not find value");

  // Exercise 5 section
  let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
  let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
  let n = Math.round(Math.random() * (1000 - 1) + 1);
  let start = Math.round(Math.random() * (10 - 1) + 1);

  for(var i = start; i <= n; i++){
    if(i % 3 == 0){
        console.log(`${fizzDivisor}`);
    }

    if(i % 5 == 0){
        console.log(`${buzzDivisor}`);
    }

    if(i % 3 == 0 && i % 5 == 0){
        console.log(`'FIZZBUZZ'`);
    }
  }

  console.log(fizzDivisor, buzzDivisor);



