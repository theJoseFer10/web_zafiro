import { CodeBlock } from "@/components/codeblock";
import NavBar from "@/components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Docs() {
  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto px-6 py-10 text-zinc-800">
        <section className="mb-12">
          <h2 className="text-4xl font-extrabold mb-6 text-zinc-600 border-b border-zinc-200 pb-2">
            Introducción a Zafiro Editor
          </h2>
          <Accordion
            type="single"
            collapsible
            className="bg-white border border-zinc-200 rounded-md shadow-sm px-4 py-3"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-indigo-700 hover:underline">
                ¿Qué es Zafiro editor?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-base leading-relaxed text-zinc-700">
                Zafiro es un editor de código para terminal, ligero y rápido,
                diseñado para desarrolladores que valoran la simplicidad y el
                rendimiento. Ideal para entusiastas del terminal y equipos con
                recursos limitados.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-indigo-700 hover:underline">
                Principales características
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-base leading-relaxed text-zinc-700">
                <div>
                  <h3 className="font-semibold text-zinc-700">
                    Edición de texto
                  </h3>
                  <p>
                    Zafiro permite editar y formatear texto de forma rápida y
                    sencilla, con una interfaz intuitiva y herramientas que
                    facilitan la escritura.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-700">
                    Gestión de archivos
                  </h3>
                  <p>
                    Administra tus archivos con comandos y atajos de teclado que
                    optimizan tu flujo de trabajo.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-700">Rendimiento</h3>
                  <p>
                    Enfocado en la productividad, Zafiro ofrece un rendimiento
                    excepcionalmente rápido.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-700">
                    Personalización
                  </h3>
                  <p>
                    Al ser de código abierto, puedes personalizar temas, fuentes
                    y funcionalidades.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-700">
                    Compatibilidad
                  </h3>
                  <p>
                    Soporte inicial para sintaxis de Python y C, con planes de
                    expansión.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-700">
                    Sistemas compatibles
                  </h3>
                  <p>
                    Funciona en Windows y Linux, incluyendo Debian, Fedora y
                    Arch.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-extrabold mb-6 text-zinc-600 border-b border-zinc-200 pb-2">
            Instalación
          </h2>
          <Accordion
            type="single"
            collapsible
            className="bg-white border border-zinc-200 rounded-md shadow-sm px-4 py-3"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-indigo-700 hover:underline">
                Requisitos de instalación
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-base leading-relaxed text-zinc-700">
                Zafiro requiere Python 3.11+, una terminal compatible con
                `curses`, recomendaciones: kitty, warp, xfce terminal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-indigo-700 hover:underline">
                Instalación desde código fuente.
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-base leading-relaxed text-zinc-700">
                Para instalar Zafiro desde código fuente en linux, sigue estos
                pasos:
                <ol className="list-decimal pl-6">
                  <li>
                    Descarga el código fuente desde el repositorio oficial.
                  </li>
                  <li>
                    Instala las dependencias necesarias utilizando pip:
                    <CodeBlock code={"pip install curses"}></CodeBlock>
                    Generalmente curses ya viene preinstalado en sistemas linux.
                  </li>
                  <li>
                    Ingresa al directorio donde se descargó el código fuente.
                  </li>
                  <li>
                    Ejecuta Zafiro desde el directorio raíz del proyecto:
                    <CodeBlock code={"python main.py "}></CodeBlock>
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-indigo-700 hover:underline">
                Instalación de zafiro en sistemas Debian y derivados.
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-base leading-relaxed text-zinc-700">
                Para instalar Zafiro en sistemas Debian y derivados sigue estos pasos.
                <ol className="list-decimal pl-6">
                  <li>
                    Ve al apartado de "descargar" de este sitio web, seleciona el archivo con extensión ".deb"
                  </li>
                  <li>
                    Ingresa a la carpeta donde se guardo el archivo.
                  </li>
                  <li>
                    Ejecuta el siguiente comando para instalar el paquete:
                    <CodeBlock code={"sudo dpkg -i zafiro.deb"}></CodeBlock>
                  </li>
                  <li>
                    Ejecuta el siguiente comando para verificar la instalación:
                    <CodeBlock code={"zafiro --version"}></CodeBlock>
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
             <AccordionTrigger className="text-lg font-semibold text-indigo-700 hover:underline">
                Instalación de zafiro en sistemas Arch y derivados.
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-base leading-relaxed text-zinc-700">
                Para instalar Zafiro en sistemas Arch y derivados sigue estos pasos:
                <ol className="list-decimal pl-6">
                  <li>
                    Ve al apartado de "descargar" de este sitio web, seleciona el archivo con extensión ".tar.gz"
                  </li>
                  <li>
                    Ingresa a la carpeta donde se guardo el archivo.
                  </li>
                  <li>
                    Ejecuta el siguiente comando para instalar el paquete:
                    <CodeBlock code={"sudo pacman -i zafiro-1.0.0-1-any.pkg.tar.zst"}></CodeBlock>
                  </li>
                  <li>
                    Ejecuta el siguiente comando para verificar la instalación:
                    <CodeBlock code={"zafiro --version"}></CodeBlock>
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-extrabold mb-6 text-zinc-600 border-b border-zinc-200 pb-2">
            Ejecución.
          </h2>
          <Accordion
            type="single"
            collapsible
            className="bg-white border border-zinc-200 rounded-md shadow-sm px-4 py-3"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-indigo-700 hover:underline">
                ¿Cómo ejecutar zafiro editor?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-base leading-relaxed text-zinc-700">
                Ejecuta el siguiente comando para iniciar el editor:
                <CodeBlock code={"zafiro"}></CodeBlock>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-extrabold mb-6 text-zinc-600 border-b border-zinc-200 pb-2">
            Atajos de teclado y comandos por escrito.
          </h2>
          <Accordion
            type="single"
            collapsible
            className="bg-white border border-zinc-200 rounded-md shadow-sm px-4 py-3"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-indigo-700 hover:underline">
                Comandos por escrito (para ingresar a los comandos por escrito
                presiona la tecla "esc".).
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-base leading-relaxed text-zinc-700">
                <CodeBlock code={"exit"}></CodeBlock>
                Cierra el editor terminando con cada proceso del mismo.
                <CodeBlock code={"help"}></CodeBlock>
                Muestra los comandos disponibles en la barra de estados.
                <CodeBlock code={"save"}></CodeBlock>
                Guarda el archivo actual.
                <CodeBlock code={"save_as"}></CodeBlock>
                Guarda el archivo actual con un nuevo nombre.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-indigo-700 hover:underline">
                Atajos de teclado.
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-base leading-relaxed text-zinc-700">
                <CodeBlock code={"ctrl + s"}></CodeBlock>
                Guarda el archivo actual.
                <CodeBlock code={"ctrl + a"}></CodeBlock>
                Guarda el archivo actual con un nuevo nombre.
                <CodeBlock code={"ctrl + o"}></CodeBlock>
                Abre un archivo existente.
                <CodeBlock code={"ctrl + x"}></CodeBlock>
                Cierra el archivo actual.
                <CodeBlock code={"ctrl + q"}></CodeBlock>
                Cierra el editor terminando con cada proceso del mismo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-extrabold mb-6 text-zinc-600 border-b border-zinc-200 pb-2">
            Licencia de Zafiro.
          </h2>
          <Accordion
            type="single"
            collapsible
            className="bg-white border border-zinc-200 rounded-md shadow-sm px-4 py-3"
          >
            <AccordionItem value = "item-1">
              <AccordionTrigger className="text-lg font-semibold text-indigo-700 hover:underline">
               Conoce la como se distribulle Zafiro editor.
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-base leading-relaxed text-zinc-700">
                Zafiro editor es de código abierto, por lo que se invita a la comunidad a participar
                en su desarrollo, puedes descargar el código del editor, modificarlo y redistribuirlo
                libremente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </>
  );
}
export default Docs;
