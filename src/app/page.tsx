import react from "React"
import { Button } from "@/components/ui/button";
import Link from "next/link"; // O de Next.js
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <NavBar className="font-mono" />
      <main className="flex flex-col items-center">
        {/* Sección de Bienvenida (Hero) */}
        <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Zafiro Editor
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Un editor de código de terminal ligero y rápido para desarrolladores
            que valoran la simplicidad y el rendimiento.
          </p>
          <div className="flex gap-4">
            <Link href="/download">
              <Button size="lg" className="px-8 text-lg">
                Descargar ahora
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg" className="px-8 text-lg">
                Ver Docs
              </Button>
            </Link>
          </div>
        </section>

        {/* Sección de Características */}
        <section className="w-full bg-secondary py-20 px-4">
          <div className="container mx-auto text-center space-y-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Características clave
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl">Edición de texto</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Numeración de líneas y navegación intuitiva con flechas y
                  scroll.
                </p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl">Gestión de archivos</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Guarda y abre archivos con comandos (`save`, `save_as`,
                  `open`).
                </p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl">Rendimiento</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Editor ligero para equipos de pocos recursos, diseñado para
                  ser rápido.
                </p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl">Personalizable</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Extensible para adaptarse a tu flujo de trabajo.
                </p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl">Compatibilidad</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Soporte para múltiples lenguajes de programación.
                </p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl">Código Abierto</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Totalmente accesible y transparente, con código abierto en
                  GitHub.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Historia */}
        <section className="w-full py-20 px-4">
          <div className="container mx-auto text-center space-y-6 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              ¿Cómo nació Zafiro?
            </h2>
            <p className="text-lg text-muted-foreground">
              Zafiro nació de la necesidad de un editor de código en terminal
              que fuera fácil de usar y ligero para equipos con recursos
              limitados.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
