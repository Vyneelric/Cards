'use strict'

const cidades = [
    {Nome: 'Jandira', Cor: 'red', icon: 'cidade1.png'},
    {Nome: 'Tabuão', Cor: 'blue', icon: 'cidade2.png'},
    {Nome: 'Carapicuíba', Cor: 'orange', icon: 'cidade3.png'},
    {Nome: 'Romaíma', Cor: 'purple', icon: 'cidade4.png'}
]

const cards = [
    {img: 'ar_condicionado.jpg', titulo: 'Ar Condicionado LG', desc: 'Equipamento que controla a temperatura e a umidade, oferecendo conforto e eficiência energética com opções de controle remoto.', preco: '$50', botao: 'ADD TO CART' },
    {img: 'banco_bar.jpg', titulo: 'Banco de Plástico', desc: 'Assento resistente, fácil de limpar, ideal para ambientes como bares e áreas externas, com design prático e durável.', preco: '$50', botao: 'ADD TO CART' },
    {img: 'garrafa_café.png', titulo: 'Garrafa Térmica de Café', desc: 'Mesa com o logo da Brahma, perfeita para bares e ambientes de lazer, combinando estilo e funcionalidade para socializar.', preco: '$50', botao: 'ADD TO CART' },
    {img: 'mesa_brahma.jpg', titulo: 'Mesa de Bar Brahma', desc: 'Recipiente que mantém o café quente por horas, com isolamento eficiente, feito de inox ou plástico de alta qualidade.', preco: '$50', botao: 'ADD TO CART' }
]


function criarMenu(cidade){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const Menu = document.getElementById('menu')
    const novaImagem = document.createElement('img')

    novaImagem.src = `./icons/${cidade.icon}`

    novoLink.href = '#'
    novoLink.textContent = cidade.Nome

    novoItem.appendChild(novaImagem)
    novoItem.style = `--cor-hover: ${cidade.Cor}`
    novoItem.appendChild(novoLink)
    Menu.appendChild(novoItem)
}

function criarCard(card){
    const main = document.getElementById('main')
    const divCard = document.createElement('div')
    const imgCard = document.createElement('img')
    const tituloCard = document.createElement('h3')
    const descCard = document.createElement('span')
    const precoCard = document.createElement('h2')
    const butaoCard = document.createElement('button')

    imgCard.src = `./icons/${card.img}`

    tituloCard.textContent = card.titulo

    descCard.textContent = card.desc

    precoCard.textContent = card.preco

    butaoCard.textContent = card.botao

    divCard.appendChild(imgCard)
    divCard.appendChild(tituloCard)
    divCard.appendChild(descCard)
    divCard.appendChild(precoCard)
    divCard.appendChild(butaoCard)


    main.appendChild(divCard)
}

cidades.forEach(criarMenu)
cards.forEach(criarCard)
