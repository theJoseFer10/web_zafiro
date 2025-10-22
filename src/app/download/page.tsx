import NavBar from "@/components/navbar";
import { Download, Github, Package, AppWindow } from "lucide-react";
import IconLinkButton from "@/components/buttonlinkicon";

function DownloadPage() {
  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 py-16 text-zinc-800">
        <section className="bg-white rounded-xl shadow-md p-8 text-center">
          <h1 className="text-5xl font-bold text-indigo-700 mb-4">Descargas</h1>
          <p className="text-lg text-zinc-600 mb-8">
            Obtén el código fuente y los paquetes de instalación de Zafiro
            Editor.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <IconLinkButton
              label={"Enlace a repositorio"}
              link={"https://github.com/theJoseFer10/sources_editor.git"}
              icon={Github}
            ></IconLinkButton>
            <IconLinkButton
              label={"Archivo .tar.gz"}
              link={"https://github.com/theJoseFer10/sources_editor/releases/download/Release_Arch_1.0.0.1/zafiro-1.0.0-1-any.pkg.tar.zst"}
              icon={Download}
            ></IconLinkButton>
            <IconLinkButton
              label={"Archivo .deb"}
              link={"https://github.com/theJoseFer10/sources_editor/releases/download/Release_Debian_1.0.0.1/zafiro.deb"}
              icon={Package}
            ></IconLinkButton>
            <IconLinkButton
              label={"Windows .exe (en desarrollo)"}
              link={"#"}
              icon={AppWindow}
            >
            </IconLinkButton>
          </div>

          <p className="text-sm text-zinc-500">
            Última versión: <strong>v1.0.0.1</strong> — Actualizado el 22 de
            septiembre de 2025
          </p>
        </section>
      </main>
    </>
  );
}

export default DownloadPage;
