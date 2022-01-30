const inputname = document.querySelector("#name")

const inputmensaje = document.querySelector("#mensaje")

const send = document.querySelector("#sendbtn")

const url = "https://apicssa.herokuapp.com/enviar"

var data = {
  name: inputname.value,
  mensaje: inputmensaje.value
}


send.addEventListener("click",()=>{
  if(inputmensaje.value.length > 0 && inputname.value.length > 0){

    data = {
      name: inputname.value,
      mensaje: inputmensaje.value
    }

  fetch(url,{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}else{
  console.log("escribe bien")
}
})

