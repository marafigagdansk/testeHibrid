import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useNavigate } from 'react-router-dom';
import {
  Github,
  LifeBuoy,
  LogOut,
  Plus,
  Settings,
  User,
  SquareMousePointer
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
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

const Pag2 = () => {
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
            className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
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
                    <DropdownMenuShortcut>⇧+P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⇧+S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                <DropdownMenuItem>
                    <SquareMousePointer className="mr-2 h-4 w-4" />
                    <span>Modo Selecionar</span>
                    <DropdownMenuShortcut>⇧+S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span onClick={handleAddPatient}>Novo Paciente</span>
                    <DropdownMenuShortcut>⇧+T</DropdownMenuShortcut>
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
              <h2>EXAME FÍSICO</h2>
              <div className="columnArea">
                  <div>
                      <Label>PA Sentado:</Label>
                      <Input type="text" name="paSentado" />
                  </div>
                  <div>
                      <Label>PA Ortostatismo:</Label>
                      <Input type="text" name="paOrtostatismo" />
                  </div>
                  <div>
                      <Label>FC:</Label>
                      <Input type="text" name="fc" />
                  </div>
                  <div>
                      <Label>FR:</Label>
                      <Input type="text" name="fr" />
                  </div>
              </div>
              <Label>INSPEÇÃO</Label>
              <Textarea name="inspecao"></Textarea>
              <Label>PALPAÇÃO</Label>
              <Textarea name="palpacao"></Textarea>
              <Label>ACALIAÇÃO SENSORIAL - Propriocepção (Senso de Posição Articular):</Label>
              <Textarea name="propriocepcao"></Textarea>
              <div className="funcaoAplitude">
                  <h3>Amplitude de Movimento</h3>
                  <div className='funcaoNova'>
                    {/* <!-- função aqui --> */}
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

export default Pag2;
