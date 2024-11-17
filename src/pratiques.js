const alunos = [{nome: 'João', nota: 9}, {nome: 'Pedro', nota: 2}, {nome: 'Ana', nota: 10}, {nome: 'Maria', nota: 6}, {nome: 'Julia', nota: 7}, {nome: 'Bento', nota: 5}];

function alunosAprovados (alunos) {
    return alunos.filter(alunos => alunos.nota >= 6);
}

const aprovados = alunosAprovados(alunos);
console.log("Lista de Alunos Aprovados:");
aprovados.forEach(alunos => {
    console.log(`Nome: ${alunos.nome}, Nota: ${alunos.nota}`);
});

// Reprovados
// function alunosReprovados (alunos) {
//     return alunos.filter(alunos => alunos.nota < 6);
// }

// const reprovados = alunosReprovados(alunos);
// console.log("Lista de Alunos Reprovados:");
// reprovados.forEach(alunos => {
//     console.log(`Nome: ${alunos.nome}, Nota: ${alunos.nota}`);
// });

