const myObject = {

    js: 'javascript',
    cpp:'c++',
    py:'python',
    rb:'ruby'
}
for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const prog = ["js", "rb", "py", "java", "cpp"]
for(const key in prog){
    // console.log(prog[key]);
    
}

const map  = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map){
    console.log(key);
    
}