// components/features.tsx
import NavBar from "@/components/navbar";
import { Pencil, File, BatteryCharging, FileUser, LaptopMinimalCheck, PackageOpen } from "lucide-react";
import FeatureCard from "@/components/feature_card";

const FEATURES = [
  {
   title: "Edición de texto",
   desc: "Zafiro permite editar y formatear texto de forma rápida y sencilla. Con una interfaz intuitiva y herramientas de edición que facilitan la escritura y el código.",
   icon: Pencil,
  },
  {
    title: "Gestión de archivos",
    desc: "Administra tus archivos con una variedad de comandos y atajos de teclado, optimizando tu flujo de trabajo.",
    icon: File,
  },
  {
    title: "Rendimiento",
    desc: "Enfocado en la simplicidad y productividad, Zafiro ofrece un rendimiento excepcionalmente rápido, ideal para equipos con recursos limitados.",
    icon: BatteryCharging,
  },
  {
    title: "Personalizable",
    desc: "Al ser de código abierto, tienes la libertad de personalizar tu editor con temas, fuentes y funcionalidades a tu gusto.",
    icon: FileUser,
  },
  {
    title: "Compatibilidad",
    desc: "Soporte inicial para la sintaxis de Python y C, con planes de añadir más lenguajes en el futuro.",
    icon: LaptopMinimalCheck,
  },
  {
    title: "Sistemas compatibles",
    desc: "Funciona en sistemas Windows y Linux, incluyendo distribuciones como Debian, Fedora y Arch.",
    icon: PackageOpen,
  }
];

function Features() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center px-4 py-12 md:py-20">
        <section className="bg-gradient-to-r from-indigo-50 to-white/60 border-t-4 border-indigo-600 rounded-xl shadow-lg p-8 md:p-12 text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-800 mb-4 tracking-tight">
            ✨ Caracteristicas del editor zafiro.
          </h1>
          <p className="text-xl text-indigo-700 mb-8 max-w-2xl mx-auto">
            Explora las características clave que hacen de Zafiro un editor
            único.
          </p>
        </section>

        <section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {FEATURES.map((f)=>(
              <FeatureCard key={f.title} title={f.title} desc={f.desc} icon={f.icon} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Features;
