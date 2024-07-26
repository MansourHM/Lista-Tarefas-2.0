const formatador = (data) => {
    return {
        dia: {
            numerico:dayjs(data).format('DD'),
            semana: {
                curto:dayjs(data).format('ddd'),
                longo:dayjs(data).format('dddd'),
            }
        },
        mes:dayjs(data).format('MMMM'),
        hora:dayjs(data).format('HH:mm')
    }
}

//OBJECT {}
const atividade = {
    nome: "Ir ao Mercado",
    data: new Date("2024-07-18 10:00"),
    finalizada: false
}

let atividades = [
    atividade,
        {
            nome: "Jantar",
            data: new Date("2024-07-19 20:00"),
            finalizada: true 
        },
        {
            nome: "Dormir",
            data: new Date("2024-07-19 23:00"),
            finalizada: false 
        },
        {
            nome: "Acordar",
            data: new Date("2024-07-20 06:00"),
            finalizada: true
        },
]

//atividades = []

criarItemDeAtividade = (atividade) => {
    let input = '<input type="checkbox" ';

    if (atividade.finalizada) {
        input = input + 'checked';
    }

    input = input + '>';

    const formatarInicio = formatador(atividade.dataInicio);
    const formatarFim = formatador(atividade.dataFim);

    return `<div class="atividade">
            <div class="separate">
                ${input}
                <span>${atividade.nome}</span>
                </div>
                <time>
                     ${formatarInicio.dia.semana.longo}, dia ${formatarInicio.dia.numerico} de ${formatarInicio.mes} às ${formatarInicio.hora}h<br>
                    
                </time>
            </div>`;
};

const atualizarListaDeAtividades = () => {

const section = document.querySelector('section')
section.innerHTML = ''

if(atividades.length == 0) {
    section.innerHTML = `<p>Nenhuma atividade cadastrada!</p>`
    return
}

for(let atividade of atividades) {
    section.innerHTML += criarItemDeAtividade(atividade)
    }
}

atualizarListaDeAtividades()

const salvarAtividade = (event) => {
    event.preventDefault();

    const nome = document.getElementById('atividade').value;
    const dataInicio = document.getElementById('dataInicio').value;
    const dataFim = document.getElementById('dataFim').value;

    const novaAtividade = {
        nome,
        dataInicio: new Date(dataInicio),
        dataFim: new Date(dataFim),
        finalizada: false
    };

    atividades.unshift(novaAtividade); // Adiciona no início do array

    atualizarListaDeAtividades();
    event.target.reset(); // Limpa o formulário após adicionar a atividade
};

// criarDiasSelecao = () => {
//     const dias = [
//         '2024-08-01',
//         '2024-08-02',
//         '2024-08-03',
//         '2024-08-04',
//         '2024-08-05',
//         '2024-08-06',
//     ]
// }