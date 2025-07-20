const coding  = ["js", "python", "ruby", "html", "java"]


// coding.forEach(function(val){
//     console.log(val);
    
// })



// coding.forEach((item)=>{
//     console.log(item);
    
// })



// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)


// coding.forEach((item , index, arr) => {
//     console.log(item , index, arr);
    
// });

const myCoding = [
    {
        languageaName : "javascript",
        languageFileName:"js"
    },
    {
        languageaName : "java",
        languageFileName:"java"
    },
    {
        languageaName : "cpp",
        languageFileName:"c++"
    },

]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})