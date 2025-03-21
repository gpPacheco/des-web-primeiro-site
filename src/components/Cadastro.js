import { useState, useEffect } from "react";

function Cadastro() {
  const [input,setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    "Estudar React",
    "Estudar Node",
    "Estudar MongoDB",
  ]);
  const tarfaStorage = localStorage.getItem('@tarefas');

  useEffect(() => {
    prompt('Qual o seu nome?')
    localStorage.setItem('nome')
  },[])  
  
  useEffect(() => {
    if(tarfaStorage) {
      setTarefas(JSON.parse(tarfaStorage));
    }
  })

  useEffect(() => {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas));
  }, [tarefas]);
  function handleRegistro(e) {
    e.preventDefault();

    setTarefas([...tarefas, input])
    setInput('');
  }

  return (
    <div>
      <form onSubmit={handleRegistro}>
        <label>Nome da tarefa: </label>
        < br/>
        <input
          placeholder="Digite o nome da tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />

        <button type="submit">Registro</button>
      </form>
      <br />
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

    </div>
  );
}
export default Cadastro;
