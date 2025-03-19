// crie um cadastro que solicite nome, email e idade
// e exiba os dados em tela
//

import React, { useState } from 'react';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    
    return (
        <div>
        <h1>Cadastro</h1>
        <form>
            <label>
            Nome:
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            </label>
            <label>
            Email:
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </label>
            <label>
            Idade:
            <input
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />
            </label>
        </form>
        <div>
            <h2>Dados</h2>
            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
            <p>Idade: {idade}</p>
        </div>
        </div>
    );
    }

    