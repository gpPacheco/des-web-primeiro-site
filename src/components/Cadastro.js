import { useState, useEffect } from "react";

function Cadastro() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Estudar React",
    "Estudar Node",
    "Estudar MongoDB",
  ]);
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState(localStorage.getItem("@cor") || "white");

  // Solicita o nome do usuário sempre que a página for recarregada
  useEffect(() => {
    const nomeUsuario = prompt("Qual é o seu nome?");
    if (nomeUsuario) {
      setNome(nomeUsuario);
      localStorage.setItem("nome", nomeUsuario);
    }
  }, []);

  // Carrega as tarefas do localStorage ao iniciar
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@tarefas");
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  // Salva as tarefas no localStorage sempre que elas forem alteradas
  useEffect(() => {
    localStorage.setItem("@tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  // Atualiza a cor de fundo e salva no localStorage
  useEffect(() => {
    document.body.style.backgroundColor = cor;
    localStorage.setItem("@cor", cor);
  }, [cor]);

  // Função para registrar uma nova tarefa
  function handleRegistro(e) {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Por favor, insira uma tarefa válida.");
      return;
    }

    setTarefas([...tarefas, input]);
    setInput("");
  }

  // Função para alterar a cor de fundo
  function handleCor(e) {
    setCor(e.target.value);
  }

  return (
    <div>
      <>
        <h1>Olá, {nome}</h1>
        <form onSubmit={handleRegistro}>
          <label>Nome da tarefa: </label>
          <br />
          <input
            placeholder="Digite o nome da tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <button type="submit">Registrar</button>
        </form>
        <br />
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
        <div>
          <label>Escolha a cor de fundo:</label>
          <br />
          <input
            type="radio"
            value="yellow"
            checked={cor === "yellow"}
            onChange={handleCor}
          />
          Amarelo
          <input
            type="radio"
            value="red"
            checked={cor === "red"}
            onChange={handleCor}
          />
          Vermelho
          <input
            type="radio"
            value="cyan"
            checked={cor === "cyan"}
            onChange={handleCor}
          />
          Ciano
        </div>
      </>
    </div>
  );
}

export default Cadastro;