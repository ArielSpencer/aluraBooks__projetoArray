const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');

btnFiltrarLivrosFront.addEventListener('click', filtrarLivrosDeFront);

function filtrarLivrosDeFront() {
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end');
    console.table(livrosFiltrados);
}