const panelElemntos=[...document.querySelectorAll('.imagen')]
document.addEventListener('DOMContentLoaded',actualizar)

function actualizar(){
    panelElemntos.forEach(Element=>{
        Element.addEventListener('click',()=>{
            remover()
            Element.classList.add('active')
            
        })
    })
}
function remover(){
    panelElemntos.forEach(e=>{
        e.classList.remove('active')
    })
}