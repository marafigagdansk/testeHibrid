import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Github,
  LifeBuoy,
  LogOut,
  Plus,
  Settings,
  User,
  Search,
  SquareMousePointer
} from "lucide-react"

import { Button } from "@/components/ui/button"
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

import "./TelaPrincipal.css"

function TelaPrincipal() {

  const navigate = useNavigate();
  const handleAddPatient = () => {
    navigate('/cadastrar-paciente');
  };

  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  }

  return (
    <>
      <div className='geral'>
        <div className='header'>
          <div className={`search-bar ${searchOpen ? 'active' : ''}`}>
            <button className="search-icon" onClick={toggleSearch}>
              <Search />
            </button>
            <input type="text" className="search-input" placeholder="Search..." />
          </div>

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

        <div className='info-area'>
        </div>
        
        <div className='footer-area'>
          <p>© 2024 Your Company</p>
        </div>
      </div>
    </>
  )
}

export default TelaPrincipal
