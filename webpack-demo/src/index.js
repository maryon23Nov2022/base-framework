import $ from "jquery"
import "./index.css"
import abc from "./assets/logo.png"
// import def from "../public/favicon.ico"

//short-hand of $(document).ready(function() { ... });
//What it's designed to do is ensure that the function is called once all the DOM elements of the page are ready to be used.
$(function(){
    $("li:odd").css("background-color", "red");
    $("li:even").css("background-color", "blue");
    $(".box").attr("src", abc);
    // $(".fav").attr("src", def);
});

//Decorator function
//@babel/plugin-proposal-decorators may be required.
function info(target){
    target.info = "decorator called";
}

@info
class Person{};

console.log(Person.info);

// console.log(abc, def);