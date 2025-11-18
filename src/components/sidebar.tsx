// NavBar.tsx
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import {
  BellPlus,
  Download,
  FileSearch,
  Palette,
} from "lucide-react";

function SideBar() {
  // Array de elementos para hacer el mapeo y limpiar el código
  const navItems = [
    { href: "/features", icon: BellPlus, label: "Características" },
    { href: "/docs", icon: FileSearch, label: "Documentación" },
    { href: "/download", icon: Download, label: "Descargar" },
    { href: "/themes", icon: Palette, label: "Temas" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">Abrir Menú</Button>
      </SheetTrigger>
      {/* Añadimos 'sm:max-w-xs' para que el sidebar sea un poco más ancho en móviles y el contenido no esté apretado */}
      <SheetContent side="left" className="sm:max-w-xs p-0">
        
        {/* === Encabezado === */}
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="text-xl font-bold">
            Menú Principal
          </SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground">
            Navega a través de las opciones disponibles
          </SheetDescription>
        </SheetHeader>

        {/* === Contenedor de Navegación === */}
        <div className="p-4 flex flex-col space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // Estilos clave:
              // flex-row & items-center: Alinear el ícono y texto
              // p-3: Aumenta la zona clickeable
              // rounded-md: Bordes suaves
              // font-medium: Texto más grueso
              // hover:bg-muted/50: Fondo sutil en hover
              // hover:text-primary: Color de texto primario en hover
              className="flex items-center p-3 rounded-md text-sm font-medium transition-colors hover:bg-muted/50 hover:text-primary"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;