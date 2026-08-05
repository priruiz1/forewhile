let idade = Number(prompt('Digite a sua idade:'))

while(idade < 18){
idade = Number(prompt('Idade insuficiente. Digite novamente'));
}
console.log(`Cadastro aceito. Idade registrada: ${idade}`);