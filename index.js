function yearList() {
    let year = document.getElementById('ano')
    for (let i = 1922; i < 2023; i++) {
        let option = document.createElement("option")
        option.value = i
        option.text = i
        year.appendChild(option)
    }
}
yearList()

function dateList() {
    let dia = document.getElementById('dia')
    for (let i = 1; i < 32; i++) {
        let option = document.createElement("option")
        option.value = i
        option.text = i
        dia.appendChild(option)
    }
}
dateList()

class Dados{
    constructor(){
        this.id = 1
        this.arrayDados = []
    }

    salvar(){
        let dado = this.lerDados();
        if (this.validaCampos(dado)){
            if(this.editId == null){
                this.adicionar(dado)
        } else {
            this.atualizar(this.editId, dado);
        }
    }
        this.listaTabela()
       
    }

    listaTabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText=''
        
        for (let i = 0; i < this.arrayDados.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_idade = tr.insertCell()
            let td_dia = tr.insertCell()
            let td_mes = tr.insertCell()
            let td_ano = tr.insertCell()

            td_id.innerText = this.arrayDados[i].id
            td_nome.innerText = this.arrayDados[i].nome
            td_idade.innerText = this.arrayDados[i].idade
            td_dia.innerText = this.arrayDados[i].dia
            td_mes.innerText = this.arrayDados[i].mes
            td_ano.innerText = this.arrayDados[i].ano

            td_id.classList.add('center')            

        }
    }

    adicionar(dado){
        dado.idade = parseFloat(dado.idade)
        this.arrayDados.push(dado)
        this.id++

    }

    lerDados(){
        let dado = {}

        dado.id = this.id
        dado.nome = document.getElementById("nome").value
        dado.idade = document.getElementById("idade").value
        dado.dia = document.getElementById("dia").value
        dado.mes = document.getElementById("mes").value
        dado.ano = document.getElementById("ano").value
        return dado

    }
    validaCampos(dado){
        let msg = '';
        if(dado.nome == ''){
            msg += '- Informe o Nome \n'
        }
        if(dado.idade == ''){
            msg += '- Informe a Idade \n'
        }
        if(dado.dia == ''){
            msg += '- Informe o dia da admissão \n'
        }
        if(dado.mes == ''){
            msg += '- Informe o mês da admissão \n'
        }
        if(dado.ano == ''){
            msg += '- Informe o ano da admissão \n'
        }


        if(msg != ''){
            alert(msg);
            return false
        }

        return true
    }

}

var dado = new Dados()