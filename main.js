const form = document.getElementById('form');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const successMessage= document.getElementById('success-message');
const errorMessage =document.getElementById('error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); //função que cancela o padrão do submit

const ValorN1 = parseFloat(n1.value);
const ValorN2 = parseFloat(n2.value);

if (ValorN1>ValorN2){
    const mensagemSucesso = `O número <b>${ValorN1} </b> é maior que o número <b>${ValorN2}</b>` ;
    successMessage.innerHTML = mensagemSucesso;
    successMessage.style.display='block';
    errorMessage.style.display='none';}

else {
    const mensagemError = `O número <b>${ValorN1} </b> deve se menor ou igual ao número <b>${ValorN2}</b>`;
    errorMessage.innerHTML = mensagemError;
    errorMessage.style.display='block';
    successMessage.style.display='none';}
});

