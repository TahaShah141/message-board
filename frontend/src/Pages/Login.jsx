import { useLogin } from '../Hooks/useLogin'
import { useState } from 'react'

export default function Login() {

  const { login, isLoading, error } = useLogin()

  const [credentials, setCredentials] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    setCredentials("")
    setPassword("")

    await login(credentials, password)
  }

  return (
    <form method="POST" onSubmit={handleSubmit} autoComplete='off'>
        <input type="text" name="credentials" value={credentials} onChange={(e) => setCredentials(e.target.value)}/>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" disabled={isLoading} >Login</button>
        {error && <div className="error">{error}</div>}
    </form>
  )
}
