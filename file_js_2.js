let myInput=document.createElement("input")
let type=document.createAttribute("type")
myInput.setAttributeNode(type)
myInput.setAttribute("type" , "text")
document.body.appendChild(myInput)



let myTextArea=document.createElement("textarea")

window.onload=function(){
    myTextArea.focus();
}
document.body.appendChild(myTextArea)

let myInputNumber=document.createElement("input")
let typeInput=document.createAttribute("type")
typeInput.value="number"
myInputNumber.setAttributeNode(typeInput)
document.body.appendChild(myInputNumber)



let myForm=document.createElement("form")
myForm.append(myInput  , myTextArea , myInputNumber)
document.body.appendChild(myForm)
