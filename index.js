let input = document.getElementById("inputTfa");
let main = document.getElementById("areaTarefas");
let contador = 0;

function adicionarTarefa() {
    ++contador;
    let valorInput = input.value;
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        let itemNovo = ` <div id=${contador} class="item">
    <div id="ic_${contador}"; class="icone">
        <i id="icone_${contador}"; onclick="riscarTarefa(${contador})"; class="mdi mdi-circle-outline"></i>
    </div>
    <div id="desc_${contador}"; onclick="riscarTarefa(${contador})"; class="descricao">${valorInput}</div>
    <div class="btn">
        <button onclick="deletar(${contador})"; class="delete"><i class="mdi mdi-delete">Deletar</i></button>
    </div>
</div>`;
        main.innerHTML += itemNovo;
        input.focus();
        input.value = "";
        input.placeholder = "Digite sua tarefa";
    } else {
        input.placeholder = "O elemento está vazio!";
    }
}


function deletar(id) {
    let elemento = document.getElementById(id);
    elemento.remove(id);
}

function riscarTarefa(id) {

    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if ((classe == "item")) {
        item.classList.add("itemClicado");

        let descricao = document.getElementById("desc_" + id);
        descricao.classList.add("NovaDescricao");

        let icon = document.getElementById("ic_" + id);
        icon.style.backgroundColor = "white";

        let icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");
        icone.style.color = "green";
        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("itemClicado");
        item.classList.add("item");

        let descricao = document.getElementById("desc_" + id);
        let icone = document.getElementById("icone_" + id);

        descricao.classList.remove("NovaDescricao");
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");

    }
}



