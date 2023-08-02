function login(callback){

    let username = document.getElementById('name').value
    let password = document.getElementById('password').value

    if(username=='admin' && password=='12345'){
        callback()
    }
}

function redirect(){
    window.location ='todo.html'
}