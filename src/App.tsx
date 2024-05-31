import { FormEvent, useState } from 'react';
import './App.css';

interface ResultadoProps {
  nome: string;
  idade: number;
}

function App() {

  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");

  const [resultado, setResultado] = useState<ResultadoProps>();

  function findAge(e: FormEvent) {
    e.preventDefault();

    if (nome === "") {
      alert("Informe seu nome");
      return;
    } else if (ano === "") {
      alert("Informe o ano do seu nascimento!")
      return;
    }

    const currentYear = new Date().getUTCFullYear();

    setResultado({
      nome: nome,
      idade: currentYear - Number(ano),
    });

    setNome("");
    setAno("");

  }

  return (
    <main>
      <h1 className='title' >Descubra sua idade</h1>
      <form className='container' onSubmit={findAge} >

        <label className='label' >Digite seu nome:</label>
        <input
          className="input"
          type="text"
          value={nome}
          onChange={ (e) => setNome(e.target.value) }
          placeholder='Digite o seu nome'
        />

        <label className='label' >Digite o ano que nasceu:</label>
        <input
          className="input"
          type="number"
          value={ano}
          onChange={ (e) => setAno(e.target.value) }
          placeholder='Digite o ano do nascimento...'
        />

        <button type='submit' className='button' onClick={findAge} >Descobrir idade</button>

      </form>
      {resultado && resultado.nome !== '' && (
        <h2 className='resultado'>{resultado?.nome} você tem: {resultado?.idade} anos.</h2>
      )}
    </main>
  )
}

export default App
