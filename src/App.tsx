import './App.css'

function App() {

  return (
    <main>
      <h1 className='title' >Descubra sua idade</h1>
      <div className='container' >

        <label className='label' htmlFor="" >Digite seu nome:</label>
        <input className="input" type="text" placeholder='Digite o seu nome' />

        <label className='label' htmlFor="" >Digite o ano que nasceu:</label>
        <input className="input" type="text" placeholder='Digite o ano do nascimento...' />

        <button className='button' >Descobrir idade</button>

      </div>
      <h2 className='resultado' >Alex Nascimento você tem: 27 anos</h2>
    </main>
  )
}

export default App
