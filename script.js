const email2 = document.getElementById('key2')
const sen2 = document.getElementById('exampleInputPassword3')
const em = document.getElementById('key')
const cfsen = document.getElementById('exampleInputPassword2')
const entrar = document.getElementById('entrar')
const limpar = document.getElementById('btnLimp')

entrar.addEventListener("click", function(){
    let em1 = email2.value
    let senconf = sen2.value
    for (let i = 0, len = localStorage.length; i < len; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        if (key == em1 && value == senconf){
            var o = 1
        }

    }
    if(o == 1){
        alert("Seja bem-vindo")
    }
    else{
            alert("Seu email ou senha podem estar incorretos!")
        }
})

limpar.addEventListener("click", function(){
        localStorage.clear()
})
