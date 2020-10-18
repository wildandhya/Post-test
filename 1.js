function sortString(str){
    let arr;
    for(var i = 0; i < str.length; i++){
      for(var j = i + 1; j < str.length; j++){
        if(str[i] > str[j]){
          arr = str[i];
          str[i] = str[j];
          str[j] = arr;
        }
      }
    }
    return str
  }

  console.log(sortString(['a', 'r', 'z', 'b', 'd']))