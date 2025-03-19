import Nome from './components/Nome';
import Cadstro from './components/Cadastro';
import {useState} from 'react';

function App() {
  const [aluno, setAluno] = useState('Aluno');

  function handleChangeName(nome){
    setAluno(nome);
  }

  return (
    <div>
      <h1>Minha página web</h1>
      <h2>Olá {aluno}</h2>
      <button onClick={ () => handleChangeName ('Jaré')}>
        Mudar nome
        </button>
    </div>
  );
}

export default App;

