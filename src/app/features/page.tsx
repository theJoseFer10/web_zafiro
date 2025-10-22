// components/features.tsx
import NavBar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Features() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center px-4 py-12 md:py-20">
        <section className="container mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Características
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Explora las características clave que hacen de Zafiro un editor
            único.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card>
              <CardHeader>
                <CardTitle>Edición de texto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Zafiro permite editar y formatear texto de forma rápida y
                  sencilla. Con una interfaz intuitiva y herramientas de edición
                  que facilitan la escritura y el código.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gestión de archivos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Administra tus archivos con una variedad de comandos y atajos
                  de teclado, optimizando tu flujo de trabajo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rendimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Enfocado en la simplicidad y productividad, Zafiro ofrece un
                  rendimiento excepcionalmente rápido, ideal para equipos con
                  recursos limitados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personalizable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Al ser de código abierto, tienes la libertad de personalizar
                  tu editor con temas, fuentes y funcionalidades a tu gusto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compatibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Soporte inicial para la sintaxis de Python y C, con planes de
                  añadir más lenguajes en el futuro.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sistemas compatibles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Funciona en sistemas Windows y Linux, incluyendo
                  distribuciones como Debian, Fedora y Arch.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}

export default Features;
