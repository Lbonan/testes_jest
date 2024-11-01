import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaTemp, setTarefaTemp] = useState("");

  function cadastrarTarefa() {
    setTarefas([...tarefas, tarefaTemp]);
    setTarefaTemp("");
  }
  return (
    <div className="App">
      <input data-testId="campo-tarefa" type="text" value={tarefaTemp} onChange={(ev) => setTarefaTemp(ev.target.value)} />
      <button data-testId="btn-cadastar" onClick={cadastrarTarefa} type="button">
        Cadastrar
      </button>
      <ul>
        {tarefas.map((tarefa) => (
          <li>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
