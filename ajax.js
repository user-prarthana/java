function logout(callback){
    callback()
}
function redirect(){
    window.location='index.html'
}
function Todolist(){
    console.log("get data clicked")
// create XHR Object
var xhttp=new XMLHttpRequest();
// create an Event listerner
xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp.status == 200){
        var data = JSON.parse(this.responseText);
        
        var output =`<table><tr><th>Name</th>
                        <th>Email</th></tr>`;
                        for(let i=0;i<data.length;i++){
                            console.log(data.length)
                        output +=  `<tr>
                        <td> ${data[i].id}</td>
                        <td> ${data[i].title}</td>
                        <td><input type="checkbox" name="${checked}
                        onclick="ifcheck()"/></td>
                        </tr>`
                        console.log(output)
                    }
                }
                  output += '</table>'
                    document.getElementById("tbl").innerHTML=output
}

// request specification
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
// sending request
xhttp.send();
}
var checked =0;
function inchecked(){
    return new Promise((resolve,reject)=>{
        checked++
        if(checked==5)
        resolve()
    
    })
}
function ifcheck(){
    inchecked().then(()=>alert('congrats.5 tasks have been successfully completed'))
}