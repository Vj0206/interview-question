const res = fetch("https://jsonplaceholder.typicode.com/users")
res.then((data)=>data.json()).then((data1)=>{
     for (var i=0; i<data1.length; i++){
        console.log(data1[i].name)
     }

})