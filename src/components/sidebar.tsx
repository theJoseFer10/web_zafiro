// NavBar.tsx
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"; // Asegúrate de importar Sheet

function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Abrir</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menú de opciones</SheetTitle>
          <SheetDescription>
            Navega a través de las opciones disponibles
          </SheetDescription>
        </SheetHeader>
        <ul>
          <li>Nuevas Características</li>
          <li>Documentación</li>
          <li>Descargas</li>
          <li>Comentarios e ideas.</li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;
