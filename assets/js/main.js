import { b } from "./helpers/functions"

const body = document.querySelector('body') 

console.log("Javascript loaded");

console.log("This is Mimi J's website of recipes");

window.onload = (e) => {
    var html = document.querySelector("html")
    html.classList.remove('sr')
    console.log(html.classList)
}
