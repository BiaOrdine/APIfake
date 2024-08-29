//Conectar com a API utilizando FETCH

fetch('dados.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)

    document.getElementById('imagem').innerHTML = corpo.imagem;
    document.getElementById('editora').innerHTML = corpo.editora;
    document.getElementById('livro').innerHTML = corpo.livro;
    document.getElementById('estilo').innerHTML = corpo.estilo;
    document.getElementById('preco').innerHTML = corpo.preco;
    
})