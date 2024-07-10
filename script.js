const atividade = {
    nome: "Academia",
    data: new Date("2024-07-10 10:30"),
    finalizada: true
}

const atividades = [
    atividade,
    {
        nome: "Almoçar",
        data: new Date("2024-07-10 12:40"),
        finalizada: true
    },

    {
        nome: "Ensaio",
        data: new Date("2024-07-10 19:30"),
        finalizada: false
    }
]


const criarItemLista = (atividade) => {
    let input = '<input type="checkbox" '

    if(atividade.finalizada){
        input += 'checked'
    }


    input += '>'

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
    section.innerHTML += criarItemLista(atividade)
}

