import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Github,
  LifeBuoy,
  LogOut,
  Plus,
  Settings,
  User,
  SquareMousePointer,
  Trash
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import '@/CadastroPaciente.css';

const Pag2 = () => {
  const navigate = useNavigate();
  const [sheets, setSheets] = useState([{ name: 'Planilha 1', rows: [{ articulacao: "", movimento: "", direito: "", esquerdo: "" }] }]);

  const handleAddRow = (sheetIndex) => {
    const newSheets = [...sheets];
    newSheets[sheetIndex].rows.push({ articulacao: "", movimento: "", direito: "", esquerdo: "" });
    setSheets(newSheets);
  };

  const handleInputChange = (sheetIndex, rowIndex, event) => {
    const newSheets = [...sheets];
    newSheets[sheetIndex].rows[rowIndex][event.target.name] = event.target.value;
    setSheets(newSheets);
  };

  const handleRemoveRow = (sheetIndex, rowIndex) => {
    const newSheets = [...sheets];
    newSheets[sheetIndex].rows.splice(rowIndex, 1);
    setSheets(newSheets);
  };

  const handleAddSheet = () => {
    const newSheetIndex = sheets.length;
    setSheets([...sheets, { name: `Planilha ${newSheetIndex + 1}`, rows: [{ articulacao: "", movimento: "", direito: "", esquerdo: "" }] }]);
  };

  const handleSheetNameChange = (index, event) => {
    const newSheets = [...sheets];
    newSheets[index].name = event.target.value;
    setSheets(newSheets);
  };

  const handleRemoveSheet = (sheetIndex) => {
    const newSheets = [...sheets];
    newSheets.splice(sheetIndex, 1);
    setSheets(newSheets);
  };

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

            {sheets.map((sheet, sheetIndex) => (
              <div className="funcaoAplitude" key={sheetIndex}>
                <div className="sheet-header">
                  <h3>{sheet.name}</h3>
                  <Button type="button" variant="outline" onClick={() => handleRemoveSheet(sheetIndex)}><Trash className="h-4 w-4" /></Button>
                </div>
                <Input type="text" value={sheet.name} onChange={(e) => handleSheetNameChange(sheetIndex, e)} placeholder="Nome da Planilha" className="sheet-name-input" />
                <table className="amplitude-table">
                  <thead>
                    <tr>
                      <th>Articulação</th>
                      <th>Movimento</th>
                      <th>Direito</th>
                      <th>Esquerdo</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sheet.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td><Input type="text" name="articulacao" value={row.articulacao} onChange={event => handleInputChange(sheetIndex, rowIndex, event)} /></td>
                        <td><Input type="text" name="movimento" value={row.movimento} onChange={event => handleInputChange(sheetIndex, rowIndex, event)} /></td>
                        <td><Input type="text" name="direito" value={row.direito} onChange={event => handleInputChange(sheetIndex, rowIndex, event)} /></td>
                        <td><Input type="text" name="esquerdo" value={row.esquerdo} onChange={event => handleInputChange(sheetIndex, rowIndex, event)} /></td>
                        <td><Button type="button" variant="outline" onClick={() => handleRemoveRow(sheetIndex, rowIndex)}><Trash className="h-4 w-4" /></Button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Button type="button" onClick={() => handleAddRow(sheetIndex)} variant="outline" className="add-row-button">Adicionar Linha</Button>
              </div>
            ))}
            <Button type="button" onClick={handleAddSheet} variant="outline" className="add-sheet-button">Nova Planilha</Button>
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
