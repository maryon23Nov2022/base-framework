import $ from "jquery"
import "./index.css"
import abc from "./assets/logo.png"
// require.context(
//     directory,
//     (useSubdirectories = true),
//     (regExp = /^\.\/.*$/),
//     (mode = 'sync')
// );
require.context("./assets", true, /.*/i, "sync");
require.context("../public", true, /.*/i, "sync");

// require.context("!!file-loader?name=[name].[ext]!../public", true, /.*/, "sync");
// It's possible to specify loaders in an import statement, or any equivalent "importing" method. Separate loaders from the resource with !. Each part is resolved relative to the current directory.
// Options can be passed with a query parameter, e.g. ?key=value&foo=bar, or a JSON object, e.g. ?{"key":"value","foo":"bar"}.
// All normal, post and pre loaders can be omitted (overridden) by prefixing !! in the request.
// Rule.enforce: Specifies the category of the loader. No value means normal loader.
// https://webpack.js.org/configuration/module/#ruleenforce

// short-hand of $(document).ready(function() { ... });
// What it's designed to do is ensure that the function is called once all the DOM elements of the page are ready to be used.
$(function(){
    $("li:odd").css("background-color", "red");
    $("li:even").css("background-color", "blue");
    $(".box").attr("src", abc);
    // $(".fav").attr("src", def);
});

// Decorator function
// @babel/plugin-proposal-decorators may be required.
function info(target){
    target.info = "decorator called";
}

@info
class Person{};

console.log(Person.info);

// console.log(abc, def);