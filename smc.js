function smallestCommons(arr) {
  //find min and max of array
  var min = Math.min(...arr);
  var max = Math.max(...arr);

  //put sequential numbers in an array
  let numbers = [];
  for(var i=min; i<=max; i++){
    numbers.push(i);
  }


  //use the last two numbers (higher) as a first check for the smallest common multiple. This is because they are more likely to be the smallest common multiple than the lower numbers.
  let counter = 1;
  while (true){
    var scm = numbers[numbers.length - 1] * numbers[numbers.length - 2] * counter;
    var isDivisible = true;
    for(let num of numbers){
      if(scm%num !== 0){
        isDivisible = false;
      }
    }
    if (isDivisible){
      return scm;
    }
    counter++;
  }
  
}


smallestCommons([1,5]);