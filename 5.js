const checkPalidrom = (word) => { 
    let reverseWord = word.toLocaleLowerCase().split('').reverse().join('')
     if (reverseWord === word.toLocaleLowerCase()) { 
    console.log('string merupakan palidrom') 
} else { 
    console.log('string bukan palidrom') 
} 
} 
checkPalidrom('NaNaN');