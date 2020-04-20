var btn = document.querySelector("#btn");
btn.addEventListener("click", function verificar(){

    // Dados do HTML
    var nasc = document.querySelector("#year");
    var masc = document.querySelector("#masculino");
    var femin = document.querySelector("#feminino");
    var img = document.querySelector("#image");
    var text = document.querySelector("#text");
    // Ano Atual
    var year = new Date().getFullYear();
    var age = year - nasc.value;

    console.log(age)

    nasc.value == "" ? alert("Faltou sua data de nascimento!") : validador(text, img)
    nasc.value > year ? alert("Nasceu daqui alguns anos?") : validador(text, img)
    masc.checked == false && femin.checked == false ? alert("Faltou a escolha de sexo!") : validador(text, img)

    function validador(text, img){
        if(masc.checked){
            if(age >= 0 && age <= 7){
                text.innerHTML = `Encontramos um Bebê com ${age} anos!`
                img.src = "img/bebe_menino.png"
            }
            else if(age >= 8 && age <= 17){
                text.innerHTML = `Encontramos um Jovem com ${age} anos!`
                img.src = "img/jovem_homem.png"
            }
            else if(age >= 18 && age <= 49){
                text.innerHTML = `Encontramos um Homem Adulto com ${age} anos!`
                img.src = "img/adulto_homem.png"
            }
            else{
                text.innerHTML = `Não encontramos nada na nossa base de dados`
            }
        }
        if(femin.checked){
            if(age >= 0 && age <= 7){
                text.innerHTML = `Encontramos uma Bebê com ${age} anos!`
                img.src = "img/bebe_menina.png"
            }
            else if(age >= 8 && age <= 17){
                text.innerHTML = `Encontramos uma Jovem com ${age} anos!`
                img.src = "img/jovem_mulher.png"
            }
            else if(age >= 18 && age <= 49){
                text.innerHTML = `Encontramos uma Mulher Adulto com ${age} anos!`
                img.src = "img/adulta_mulher.png"
            }
            else if(age >= 50){
                text.innerHTML = `Encontramos uma Senhora com ${age} anos!`
                img.src = "img/senhora_mulher.png"
            }
            else{
                text.innerHTML = `Não encontramos nada na nossa base de dados`
            }
        }
        
    }

    nasc.value = "";
    masc.checked = false;
    femin.checked = false;
    //checar o radio
    //femin.checked
})