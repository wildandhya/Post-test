const count_Handshake = (n)=>{
    let count = '';
    for(let i=0;i<n;i++){
      for(let j=i;j<n-1;j++){
        count++;
      }
    }
    return count;
  }
  console.log(count_Handshake(6));