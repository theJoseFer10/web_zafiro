import NavBar from "@/components/navbar";
import { Download, Github, Package, AppWindow } from "lucide-react";
import DownloadCard from "@/components/DownloadCard";
import Image from "next/image";

const DOWNLOADS = [
  {
    id: "repo",
    title: "Repositorio",
    description: "Código fuente y contribuciones en GitHub.",
    link: "https://github.com/theJoseFer10/sources_editor.git",
    icon: Github,
    variant: "neutral",
  },
  {
    id: "arch",
    title: ".pkg.tar.zst",
    description: "Paquete para Arch Linux / Manjaro.",
    link:
      "https://github.com/theJoseFer10/sources_editor/releases/download/New_Release/zafiro-1.0.1-1-any.pkg.tar.zst",
    icon: Download,
    variant: "primary",
  },
  {
    id: "deb",
    title: ".deb",
    description: "Paquete para Debian / Ubuntu.",
    link:
      "https://github.com/theJoseFer10/sources_editor/releases/download/Release_Debian_1.0.0.1/zafiro.deb",
    icon: Package,
    variant: "primary",
  },
  {
    id: "exe",
    title: "Windows .exe",
    description: "Versión para Windows (en desarrollo).",
    link: "#",
    icon: AppWindow,
    variant: "disabled",
  },
];


function DownloadPage() {
  return (
    <>
      <NavBar />
      <main className="max-w-5xl mx-auto px-6 py-16 text-zinc-800">
        <header className="bg-gradient-to-r from-indigo-50 to-white/60 border-t-4 border-indigo-600 rounded-xl p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700">
                Descargas
              </h1>
              <p className="mt-2 text-zinc-600 max-w-xl">
                Obtén el código fuente y los paquetes de instalación de Zafiro
                Editor. Selecciona la versión adecuada para tu plataforma.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-800 px-3 py-1 text-sm font-medium">
                Última versión: <strong className="ml-2">v1.0.1.1</strong>
              </span>
              <time className="text-sm text-muted-foreground">Actualizado 22 sep 2025</time>
            </div>
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-white shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2">Descargas rápidas</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Enlaces directos y paquetes oficiales. Firma y comprobante disponibles en la página de release.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {DOWNLOADS.map((d) => (
                <DownloadCard
                  key={d.id}
                  title={d.title}
                  description={d.description}
                  link={d.link}
                  Icon={d.icon}
                  variant={d.variant as any}
                />
              ))}
            </div>
          </div>

          <aside className="rounded-xl bg-white shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Instrucciones rápidas</h3>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
              <li>Descarga el paquete apropiado para tu distribución.</li>
              <li>Verifica la firma o checksum antes de instalar.</li>
              <li>Sigue las instrucciones de instalación en la página de repositorio.</li>
            </ol>

            <div className="mt-6 border-t pt-4 text-sm text-muted-foreground">
              <p>
                Puedes visualizar el historial de releases en: {" "}
                <a
                  href="https://github.com/theJoseFer10/sources_editor/releases"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  historial de releases
                </a>
                .
              </p>
              <Image 
              src="/zafiro_sin_fondo.png" 
              alt="Imagen de gato jugando" 
              width={500} 
              height={500}
              className="border-b"
              >

              </Image>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}

export default DownloadPage;