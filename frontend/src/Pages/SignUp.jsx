import { useSignup } from '../Hooks/useSignup'
import { useState } from 'react'

export default function SignUp() {

  const { signup, isLoading, error } = useSignup()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    setUsername("")
    setEmail("")
    setPassword("")

    await signup(username, email, password)
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" disabled={isLoading} >Sign Up</button>
        {error && <div className="error">{error}</div>}
    </form>
  )
}
