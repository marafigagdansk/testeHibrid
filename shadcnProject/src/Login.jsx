import './Login.css'
import { Button } from './components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
function App() {

  return (
    <>
    <div className='geral'>
      <div className='left'>
          <div className='img'>
            <img src="https://i.pinimg.com/originals/2c/56/12/2c56126e8617b29f0ffe7a38157e1026.png" alt="fisio"/>
          </div>
      </div>  
      
      <div className='right'>
        <div className='form'>
          <Label htmlFor="user-code">Nome do Usuário</Label>
          <Input id="user-code" type="text" placeholder="username" aria-label="Código do Usuário" />

          <Label htmlFor="user-password">Senha do Usuário</Label>
          <Input id="user-password" type="password" placeholder="Senha" aria-label="Senha do Usuário" />

          <Button variant="link">Esqueceu a Senha?</Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
