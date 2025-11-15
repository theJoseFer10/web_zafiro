// ...existing code...
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavBar from "@/components/navbar";
import { Pencil, File, BatteryCharging, FileUser, LaptopMinimalCheck, PackageOpen} from "lucide-react";
import FeatureCard from "@/components/feature_card";

const FEATURES = [
  {
    title: "Edición de texto",
    desc: "Numeración de líneas y navegación intuitiva con flechas y scroll.",
    icon: Pencil,
  },
  {
    title: "Gestión de archivos",
    desc: "Guardar y abrir archivos con comandos (`save`, `save_as`, `open`).",
    icon: File,
  },
  {
    title: "Rendimiento",
    desc: "Editor ligero para equipos con recursos limitados, diseñado para ser rápido.",
    icon: BatteryCharging,
  },
  {
    title: "Personalizable",
    desc: "Extensible para adaptarse a tu flujo de trabajo.",
    icon: FileUser
  },
  {
    title: "Compatibilidad",
    desc: "Soporte para múltiples lenguajes de programación.",
    icon: LaptopMinimalCheck,
  },
  {
    title: "Código Abierto",
    desc: "Totalmente accesible y transparente, con código abierto en GitHub.",
    icon: PackageOpen,
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center">
        {/* Hero */}
        <section className="w-full bg-gradient-to-br from-indigo-50 to-white/60 dark:from-slate-900 dark:to-slate-800/40">
          <div className="container mx-auto px-6 py-20 md:py-28 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
              Zafiro Editor
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Un editor de código de terminal ligero y rápido para desarrolladores que valoran la simplicidad y el rendimiento.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/download">
                <Button size="lg" className="px-8 text-lg shadow-md">
                  Descargar ahora
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="lg" className="px-8 text-lg">
                  Ver Docs
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Ligero, personalizable y de código abierto.</p>
          </div>
        </section>

        {/* Features */}
        <section id="features" aria-labelledby="features-heading" className="w-full py-20 px-4">
          <div className="container mx-auto text-center space-y-12">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Características clave
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <FeatureCard key={f.title} title={f.title} desc={f.desc} icon={f.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="w-full py-20 px-4">
          <div className="container mx-auto text-center space-y-6 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">¿Cómo nació Zafiro?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zafiro nació de la necesidad de un editor de código en terminal que fuera fácil de usar y ligero para equipos con recursos limitados.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
// ...existing code...