// NavBar.tsx
import SideBar from "./sidebar";
import Link from "next/link";
import { BellPlus, FileSearch, Download, Palette } from "lucide-react";

function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-foreground p-4 text-background">
      {/* Sección izquierda: Logo y Título */}
      <Link href="/" className="flex items-center gap-2">
        <img src="/zafiro.png" alt="Logo de Zafiro" className="h-8 w-8" />
        <h1 className="text-xl font-bold">Zafiro Editor</h1>
      </Link>

      {/* Sección central: Enlaces de navegación (ocultos en pantallas pequeñas) */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/features" className="flex flex-row hover:text-primary transition-colors">
          <BellPlus className="mr-1"/>
          Características
        </Link>
        <Link href="/docs" className="flex flex-row hover:text-primary transition-colors">
          <FileSearch className="mr-1"/>
          Documentación
        </Link>
        <Link href="/download" className="flex flex-row hover:text-primary transition-colors">
          <Download className="mr-1"/>
          Descargar
        </Link>
        <Link href="/themes" className="flex flex-row hover:text-primary transition-colors">
          <Palette className="mr-1"/>
          Temas
        </Link>
      </div>

      {/* Sección derecha: Menú lateral (oculto en pantallas grandes) */}
      <div className="md:hidden">
        <SideBar />
      </div>
    </nav>
  );
}

export default NavBar;
