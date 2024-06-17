import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import '@/CadastroPaciente.css'

const Pag3 = () => {
  const navigate = useNavigate();

  const handleAddPatient = () => {
    navigate('/');
  };

  const paginationPag1 = () => {
    navigate('/cadastrar-paciente');
  };

  const paginationPag2 = () => {
    navigate('/pag2');
  };

  const paginationPag3 = () => {
    navigate('/pag3');
  };

  const paginationPag4 = () => {
    navigate('/pag4');
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
          <form>    
            <Label>COMPRIMENTO MUSCULAR</Label>
            <Textarea name="comprimentoMuscular" />
            
            <Label>FORÇA MUSCULAR</Label>
            <Textarea name="forcaMuscular" />
            
            <h3>EQUILÍBRIO</h3>
            <div className="containerChange">
              <div className="row">
                <Label>Sistema Vestibular – Romberg:</Label>
                <Input type="text" />
              </div>
              <div className="row">
                <Label>TUG Tarefa 1:</Label>
                <Input type="text"/>
              </div>
              <div className="row">
                <Label>POMA Tinetti Equilíbrio:</Label>
                <Input type="text"/>
                <Label>Marcha:</Label>
                <Input type="text"/>
                <Label>Total:</Label>
                <Input type="text" />
              </div>
              <div className="row">
                <Label>Teste Apoio Unipodal D:</Label>
                <Input type="text" />
                <Label>Esquerdo:</Label>
                <Input type="text"/>
              </div>
              <div className="row">
                <Label>Teste Caminhada Tandem:</Label>
                <Input type="text" placeholder="" />
              </div>
            </div>
            
            <Label>Interpretação/observação</Label>
            <Textarea />
            
            <h3>FUNCIONALIDADE</h3>
            <div className="funcionalidade">
              <div className="row">
                <Label>Escala de Lawton:</Label>
                <Input type="text"/>
              </div>
              <div className="row">
                <Label>Índice de Barthel:</Label>
                <Input type="text"/>
              </div>
            </div>
            <Label>Interpretação/Observações</Label>
            <Textarea name="observacaoFuncionalidade"></Textarea>

            <h3>MARCHA</h3>
            <Label>Observação:</Label>
            <Textarea></Textarea>
            <div className="marcha">
              <div className="row">
                <Label>Dispositivo de Auxílio à Marcha:</Label>
                <Input type="text"/>
              </div>
              <div className="row">
                <Label>Velocidade da Marcha:</Label>
                <Input type="text"/>
              </div>
              <div className="row">
                <Label>Comprimento da Passada:</Label>
                <Input type="text" placeholder="Direito" />
                <Input type="text" placeholder="Esquerdo" />
              </div>
            </div>
          </form>
        </div>

        <div className='paginationArea'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={paginationPag1}>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={paginationPag2}>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={paginationPag3}>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={paginationPag4}>4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default Pag3;
