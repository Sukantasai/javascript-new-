for (let i =0;i<=10;i++){
    const element = i;
    if (element ==5){
    // console.log("5 is the best number :");  
    }   
    // console.log(element);
       
}
for(let i =1;i<=10; i++){
    // console.log(`Outer loop value ${i} `);
    
    for(let j =1 ; j<=10; j++){
        // console.log(`Inner loop Value:${j} and inner loop${i}`);
        // console.log(i +'*' + j + '=' + i*j);
        

    }

}



// let myArray = ["thor", "batman", "hulk"]
// for(i = 0; i<myArray.length; i++){
//     const element = myArray[i];
//     console.log(element);
    
// }


// for (let i =1; i<=20;i++){
//     if(i == 5){
//         console.log(`detected 5`);
//         break
        
//     }
//     console.log(`value of i is ${i}`);
    
// }





for (let i =1; i<=20;i++){
    if(i == 5){
        console.log(`detected 5`);
        continue
        
    }
    console.log(`value of i is ${i}`);
    
}