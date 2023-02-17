let httpRequest, method;

const getData = function(){
    const id = document.querySelector("#id").value;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let identity = document.querySelector("input[name='identity']:checked").value;
    if(username.length === 0) username = null;
    if(password.length === 0) password = null;
    const data = {
        id: id,
        username: username,
        password: password,
        identity: identity,
    }
    console.log(data);
    return JSON.stringify(data);
}

const handler = function(){
    if(httpRequest.readyState === 4 && httpRequest.status === 200){
        // alert(httpRequest.responseText);
        const data = JSON.parse(httpRequest.responseText).data;
        console.log(data);
    }
}

const sendData = function(){
    let data = getData();
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = handler;
    if(method === "GET"){
        data = encodeURIComponent(data);
        httpRequest.open(method, `http://127.0.0.1:8080/mvc_demo/users?req=${data}`, true);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send();
    } else{
        httpRequest.open(method, "http://127.0.0.1:8080/mvc_demo/users", true);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send(data);
    }
}

const listener = function(){
    const btns = document.querySelectorAll("input[type='button']");
    for(let i = 0; i < btns.length; ++ i){
        btns[i].addEventListener("click", function(){
            method = btns[i].id;
            sendData();
        })
    }
}

export{
    listener,
}