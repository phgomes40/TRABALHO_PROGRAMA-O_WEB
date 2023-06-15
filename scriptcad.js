const sen = document.getElementById("exampleInputPassword1")
const confsen = document.getElementById("exampleInputPassword2")
const salvar = document.getElementById("btn-primary")
const email = document.getElementById("key")

window.addEventListener("load", function(){
    let chave = document.getElementById("key")
    let valor = document.getElementById("exampleInputPassword1")
    const salvar = document.getElementById("btn-primary")
    /* let limpar = document.getElementById("btnLimp")
    let conteudo = document.getElementById("conteudo") */


    salvar.addEventListener("click", function(){
        let input1=chave.value
        let input2=valor.value
        if (sen.value == confsen.value && sen.value != ""){
            localStorage.setItem(input1, input2)
            alert("Dados salvos com sucesso!✔")
       }else if (sen.value != confsen.value){
        alert("As senhas estão diferentes!❌")
       }else{
        alert("Os campos estão vazios")
       }
        
    })

   
    

 /*    function exibir() {
        let str = ""
        for (let i = 0, len = localStorage.length; i < len; i++) {
            let key = localStorage.key(i)
            let valor = localStorage.getItem(key)
            str += `${[i+1]} . ${key} : ${valor}  <br>`
        }

        valor.value = ""
        chave.value = ""
        
    } */

})