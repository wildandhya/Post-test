const fibonanci = (deret)=>{
    let a = 0
    let b = 1
    let result=b;
    for(let i = 1; i <= deret; i++){
        result;
        result=a+b;
        a=b;
        b=result
        console.log(result)
    }
}

fibonanci(11)