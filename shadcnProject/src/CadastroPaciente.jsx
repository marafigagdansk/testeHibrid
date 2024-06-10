import { Button } from './components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from '@/components/ui/checkbox'

import { useNavigate } from 'react-router-dom';
import {
  Github,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import './CadastroPaciente.css'

const CadastroPaciente = () => {

  const navigate = useNavigate();
  const handleAddPatient = () => {
    navigate('/');
  };

  return (
    <>
      <div className='geral'>
        <div className='header'>
        <Button variant="ghost" onClick={handleAddPatient} className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Cards</Button>
        <div className="menu">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>User Name</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span onClick={handleAddPatient}>Novo Paciente</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      
        <div className="form-container">
          <h2 className="scroll-m-20Form border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Ficha do Paciente</h2>
          <form>
            <div className="form-group">
              <Label htmlFor="name">Nome</Label>
              <div className="name-inputs">
                <Input type="text" id="firstName" placeholder="Nome" />
                <Input type="text" id="lastName" placeholder="Sobrenome" />
              </div>
            </div>
            <div className="form-group">
              <Label htmlFor="birthDate">Data de Nascimento</Label>
              <Input type="date" id="birthDate" placeholder="MM-DD-YYYY" />
            </div>
            <div className="form-group">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="example@example.com" />
            </div>
            <div className="form-group">
              <Label>Sexo</Label>
                <div className="radio-group">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Feminino</Label>
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Masculino</Label>

                </div>
            </div>
            <div className="form-group">
              <Label htmlFor="age">Idade</Label>
              <Input type="text" id="age" placeholder="ex: 23" />
            </div>
            <div className="form-group">
              <Label htmlFor="height">Altura</Label>
              <Input type="text" id="height" />
            </div>
            <div className="form-group">
              <Label htmlFor="profession">Profissão</Label>
              <Input type="text" id="profession" />
            </div>
            <div className="form-group">
              <Button  type="submit">Próximo</Button >
            </div>
          </form>
        </div>
      </div>
    </>
    
  );
};

export default CadastroPaciente;
