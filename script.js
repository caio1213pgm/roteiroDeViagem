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
    let input = '<input onchange="concluirAtividade(event)" value="${atividade.data}" type="checkbox" '

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
    section.innerHTML = ''

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
    
    const dadosFormulario = new FormData(event.target)

    const nome = dadosFormulario.get('atividade')
    const dia = dadosFormulario.get('dia')
    const hora = dadosFormulario.get('hora')
    const data = `${dia} ${hora}`

    const novaAtividade = {
        nome,
        data,
        finalizada: false
    }

    const atividadeExiste = atividades.find((atividade) => {
        return atividade.data == novaAtividade.data
    })

    if(atividadeExiste){
        return alert('Dia/hora não disponível')
    }

    atividades = [novaAtividade, ...atividades]
    atualizarListaAtividades()
}

const criarDiasSelecao = () =>{
    const dias = [
        "2024-07-30",
        "2024-07-31",
        "2024-08-01",
        "2024-08-02",
        "2024-08-03"
    ]

    let diasSelecao = ''

    for(let dia of dias){
        const formatar = formatador(dia)
        const diaFormatado = `${formatar.dia.numerico} de ${formatar.mes}`

        diasSelecao += `<option value="${dia}">${diaFormatado}</option>`
    }



    document.querySelector('select[name="dia"]').innerHTML = diasSelecao
}

criarDiasSelecao()

const criarHoraSelecao = () => {
    let horarDisponiveis = ''

    for(let i = 6; i < 23; i++){
        horarDisponiveis += `<option value="${i}:00">${i}:00</option>`
        horarDisponiveis += `<option value="${i}:30">${i}:30</option>`
    }

    document.querySelector('select[name="hora"]').innerHTML = horarDisponiveis
}

criarHoraSelecao()


const concluirAtividade = (event) => {
    const input = event.target
    const dataInput = input.value

    const atividade = atividades.find((atividade) => {
        return atividade.data == dataInput
    })

    if(!atividade){
        return
    }

    atividade.finalizada = !atividade.finalizada
}  