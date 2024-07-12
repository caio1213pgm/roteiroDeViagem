const formatador = (data) => {
    return{
        dia:{
            numerico: dayjs(data).format('DD'),
            semana: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd'),
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('hh:mm')
    }
}


const atividade = {
    nome: "Academia - ",
    data: new Date("2024-07-12 10:00"),
    finalizada: true
}

let atividades = [
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

//atividades = []

const criarItemAtividade = (atividade) => {
    let input = '<input type="checkbox" '

    if(atividade.finalizada){
        input += 'checked'
        input += '>'
    }
    else{
        input += '>'
    }

    const formatar = formatador(atividade.data)

    return `
     <div>
        ${input}
        <span>${atividade.nome}</span>
        <time>${formatar.dia.semana.longo}, dia ${formatar.dia.numerico} de ${formatar.mes} ás ${formatar.hora}h</time>
    </div>
    `
}

const atualizarListaAtividades = () =>{
    const section = document.querySelector('section')

    if(atividades.length == 0){
        section.innerHTML = `<p>Nenhuma atividade Encontrada</p>`
        return
    }

    for(let atividade of atividades){
    section.innerHTML += criarItemAtividade(atividade)
    }
}

atualizarListaAtividades()

const salvarAtividade = (event) =>{
    event.preventDefault()
}
