
function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar () {
    window.open("https://google.com.br/");
    //window.location.href = "https://google.com.br/"
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load() {
    alert("Página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*function soma(n1, n2){
    return n1 + n2;
};

//alert(soma(5, 10));

function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
    
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));*/

/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert (d.getMinutes());*/

/*var count;
for(count=0; count <= 5; count++){
    alert(count);
};*/


/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};*/


/*var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
};*/


/* var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Pêra", cor:"Verde"}, {nome:"Laranja", cor:"Laranja"}, {nome:"Uva", cor:"Roxa"}];
console.log (frutas);
alert (frutas [1].nome); */

/* var fruta = {nome:"Maçã", cor:"Vermelha"};
console.log (fruta.nome);
alert (fruta.cor); */

//var lista = ["Maçã" , "Pêra", "Laranja"];
//lista.push("Uva");
//lista.pop ();

//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Valéria Ulisses";
//var idade = 26;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase());
// alert (frase.replace("Japão", "Brasil"));