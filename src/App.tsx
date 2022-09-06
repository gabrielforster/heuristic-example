import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [heuristic, setHeuristic] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const [isThereErrorOnUsername, setIsThereErrorOnUsername] = useState(false)
  const [isThereErrorOnPassword, setIsThereErrorOnPassword] = useState(false)
  const [isThereErrorOnRepeatPassword, setIsThereErrorOnRepeatPassword] = useState(false)

  const handleClick = () => setHeuristic(!heuristic)

  const checkErrorOnUsername = () => {
    if (username.length < 8 && username.length > 0) {
      setIsThereErrorOnUsername(true)
    } else {
      setIsThereErrorOnUsername(false)
    }
  }

  const passwordregex = /^(?=.*[a-zA-Z])(?=.*[0-9])/

  const checkErrorOnPassword = () => {
    if (!passwordregex.test(password) && password.length > 0) {
      setIsThereErrorOnPassword(true)
    } else {
      setIsThereErrorOnPassword(false)
    }
  }

  const checkErrorOnRepeatPassword = () => {
    if (password !== repeatPassword && repeatPassword.length > 0) {
      setIsThereErrorOnRepeatPassword(true)
    } else {
      setIsThereErrorOnRepeatPassword(false)
    }
  }

  return (
    <div className="App">
      <main>
        <input checked={heuristic} onChange={handleClick} type="checkbox" name="switch" id="switch" />
        <label htmlFor="switch">Heuristica 9</label>

        <div className="infos">
          <p>Infos</p>
          <ul>
            <li>Nome de usuário deve ter 8 caractéres</li>
            <li>Senha deve conter números e letras</li>
          </ul>
        </div>

        <form>
          <label htmlFor="username">Nome de usuário</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" onBlur={checkErrorOnUsername} />
          {heuristic && isThereErrorOnUsername && <p className='danger'>Nome de usuário deve conter 8 caractéres</p>}
          
          <label htmlFor="password">Senha</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" onBlur={checkErrorOnPassword} />
          {heuristic && isThereErrorOnPassword && <p className='danger'>Senha não contém números e letras</p>}
          
          <label htmlFor="repeat-password">Repita a senha</label>
          <input value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} type="password" name="repeat-password" id="repeat-password" onBlur={checkErrorOnRepeatPassword} />
          {heuristic && isThereErrorOnRepeatPassword && <p className='danger'>Senhas diferentes</p>}

          {isThereErrorOnPassword && isThereErrorOnRepeatPassword && isThereErrorOnUsername && <p className='danger'>Preencha os campos corretamente</p>}
        </form>
      </main>
    </div>
  )
}

export default App
