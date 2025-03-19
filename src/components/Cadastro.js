import React, { useState } from 'react';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');

    const handleRegistro = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página
        console.log('Dados registrados:', { nome, email, idade });
        alert('Cadastro realizado com sucesso!');
    };

    return (
        <div>
        <h1>Cadastro</h1>
        <form onSubmit={handleRegistro}>
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
            <button type="submit">Registrar</button>
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