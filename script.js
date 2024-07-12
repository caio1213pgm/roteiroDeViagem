const atividade = {
    nome: "Academia - ",
    data: new Date("2024-07-12 10:00"),
    finalizada: true
}

const atividades = [
    atividade,
    {
        nome: "Ensaio da peça - ",
        data: new Date("2024-07-12 18:30"),
        finalizada: false
    },
    {
        nome: "Tocar com o Projeto Alerta -",
        data: new Date("2024-07-13 19:30"),
        finalizada: false
    },
    {
        nome: "Evangelismo - ",
        data: new Date("2024-07-13 20:30"),
        finalizada: false
    }
]

const criarItemAtividade = (atividade) => {

    let input = '<input type="checkbox" '

    if(atividade.finalizada){
        input += 'checked'
        input += '>'
    }
    else{
        input += '>'
    }

    return `
     <div>
        ${input}
        <span>${atividade.nome}</span>
        <time>${atividade.data}</time>
    </div>
    `
}

const section = document.querySelector('section')

for(let atividade of atividades){
    section.innerHTML += criarItemAtividade(atividade)
}
