import { Button } from './components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from "@/components/ui/textarea"

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
          <Button
            variant="ghost"
            onClick={handleAddPatient}
            className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
          >
            Cards
          </Button>
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

        <div className="container">
          <h1>Adicionar Paciente</h1>
          <form>
            <h2>Dados Pessoais</h2>
            <Label>Nome:</Label>
            <Input type="text" name="nome" />
            
            <Label>Idade:</Label>
            <Input type="number" name="idade" />
            
            <h2>Exames</h2>
            <Label>Anamnese:</Label>
            <Textarea name="anamnese" />
            
            <Label>Teste MEEM:</Label>
            <Input type="checkbox" name="testeMeem" />
            
            <Label>Histórico de Doenças:</Label>
            <Textarea name="historicoDoencas" />
            
            <Label>Dados Vitais:</Label>
            <Textarea name="dadosVitais" />
            
            <h2>Exames Físicos</h2>
            <Label>PA Sentado:</Label>
            <Input type="text" name="paSentado" />
            
            <Label>PA Ortostatismo:</Label>
            <Input type="text" name="paOrtostatismo" />
            
            <Label>FC:</Label>
            <Input type="text" name="fc" />
            
            <Label>FR:</Label>
            <Input type="text" name="fr" />
            
            <Label>Inspeção:</Label>
            <Textarea name="inspecao" />
            
            <Label>Palpação:</Label>
            <Textarea name="palpacao" />
            
            <Label>Avaliação Sensorial - Propriocepção:</Label>
            <Textarea name="propriocepcao" />
            
            <h3>Amplitude de Movimento</h3>
            <Label>Direito:</Label>
            <Input type="text" name="amplitudeMovimento.direito" />
            
            <Label>Esquerdo:</Label>
            <Input type="text" name="amplitudeMovimento.esquerdo" />
            
            <Label>Comprimento Muscular:</Label>
            <Input type="text" name="comprimentoMuscular" />
            
            <h3>Força Muscular</h3>
            <Input type="text" placeholder="Exercício" name="forcaMuscular" />
            
            <h3>Equilíbrio</h3>
            <Input type="text" placeholder="Exercício" name="equilibrio" />
            
            <Label>Observação:</Label>
            <Textarea name="observacaoEquilibrio" />
            
            <h3>Funcionalidade</h3>
            <Input type="text" placeholder="Exercício" name="funcionalidade" />
            
            <Label>Observação:</Label>
            <Textarea name="observacaoFuncionalidade" />
            
            <Label>Marcha Texto:</Label>
            <Textarea name="marchaTexto" />
            
            <Label>Dispositivo de Auxílio à Marcha:</Label>
            <Input type="text" name="auxilioMarcha" />
            
            <Label>Velocidade de Marcha:</Label>
            <Input type="text" name="velocidadeMarcha" />
            
            <Label>Comprimento:</Label>
            <Input type="text" name="comprimentoMarcha" />
            
            <Label>Avaliação Postural:</Label>
            <Textarea name="avaliacaoPostural" />
            
            <Label>Avaliação Complementares:</Label>
            <Textarea name="avaliacaoComplementares" />
            
            <Label>Diagnóstico:</Label>
            <Textarea name="diagnostico" />
            
            <Label>Fisioterapêutico:</Label>
            <Textarea name="fisioterapeutico" />
            
            <Label>Prognóstico:</Label>
            <Textarea name="prognostico" />
            
            <Label>Objetivo do Tratamento:</Label>
            <Textarea name="objetivoTratamento" />
            
            <Label>Programa de Tratamento:</Label>
            <Textarea name="programaTratamento" />
            
            <button type="submit">Adicionar Paciente</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CadastroPaciente;
