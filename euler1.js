var supersum = function(num){
  var bucket = 0
  for (var i=0; i<num; i++) {
    if(i % 3 === 0 || i % 5 === 0 ) {
      bucket += i;
    }
  }
  console.log(bucket)
}



