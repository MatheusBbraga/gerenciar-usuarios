/*  

    Exemplo: 
    {
        primeiraPropriedade: 'Valor',
        segundaPropriedade: 'Valor'

    }


*/ 



const usuarios = [
    {
        nome: 'Matheus',
        email: 'matheus@gospel.com'
    },
    {
       nome: 'Marcos',
       email: 'marcos@gospel.com'
    },
    {
       nome: 'Lucas',
       email: 'Lucas@gospel.com'
    },
    {
       nome: 'João',
       email: 'João@gospel.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario); // <--- AQUI ESTÁ A MUDANÇA
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}