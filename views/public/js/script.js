const closeMessage = document.querySelector("#close")
const message = document.querySelector("#message")

closeMessage.addEventListener("click", function (){
    message.style.display = "none"
})

setTimeout(() => {
    message.style.display = "none"
}, 5000)


function deleteFunction() {
    confirm("Are you sure you want to DELETE this album?");
  }

function updateFunction(){
    confirm("Are you sure this changes are OK?")
}