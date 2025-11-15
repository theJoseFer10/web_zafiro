import NavBar from "@/components/navbar";
import ThemeCard from "@/components/temaCard";
import Image from "next/image";

import {
  zafiroDarkTheme,
  zafiroMonokaiTheme,
  zafiro_SolarizedTheme,
  zafiro_vimGruvBoxTheme,
} from "./themes";


// --- Componente Principal ---
export default function ThemesPage() {
    return (
        <>
            <NavBar />
            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
                
                {/* 🎨 Sección de Cabecera (Hero) */}
                <section className="bg-gradient-to-r from-indigo-50 to-white/60 border-t-4 border-indigo-600 rounded-xl shadow-lg p-8 md:p-12 text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-800 mb-4 tracking-tight">
                        ✨ Biblioteca de Temas Zafiro
                    </h1>
                    <p className="text-xl text-indigo-700 mb-8 max-w-2xl mx-auto">
                        Personaliza tu entorno de desarrollo. Explora y descarga temas oficiales para tu Zafiro Editor.
                    </p>
                    <p className="text-zinc-600 text-base">
                        Puedes crear tus propios temas siguiendo nuestra <a href="/docs" className="text-indigo-600 hover:text-indigo-800 font-semibold underline transition-colors">documentación oficial</a> y compartirlos con otros usuarios.
                    </p>
                </section>

                {/* 📚 Títulos de Sección */}
                <h2 className="text-4xl font-extrabold text-zinc-900 mb-8 border-b-4 border-indigo-400 pb-3">
                    Temas Oficiales del Equipo Zafiro
                </h2>

                {/* 🧩 Bloques de Temas */}
                <ThemeCard 
                    title="Zafiro Dark"
                    themeName="ZafiroDark.json"
                    description="Un tema oscuro, elegante y moderno que reduce la fatiga visual y mejora la concentración durante largas sesiones de edición."
                    code={zafiroDarkTheme}
                />

                <ThemeCard 
                    title="Zafiro Monokai"
                    themeName="ZafiroMonokai.json"
                    description="Inspirado en el popular tema Monokai, este tema ofrece colores vibrantes y un alto contraste para una experiencia de codificación atractiva."
                    code={zafiroMonokaiTheme}
                />

                <ThemeCard 
                    title="Zafiro Solarized"
                    themeName="ZafiroSolarized.json"
                    description="Basado en el esquema de colores Solarized, este tema proporciona una paleta equilibrada que es fácil para los ojos y mejora la legibilidad del código."
                    code={zafiro_SolarizedTheme}
                />

                <ThemeCard 
                    title="Zafiro VIM Gruvbox"
                    themeName="ZafiroGRIM.json"
                    description="Un tema cálido y terroso inspirado en el popular tema Gruvbox de VIM, ideal para quienes prefieren una estética retro y cómoda."
                    code={zafiro_vimGruvBoxTheme}
                />

                {/* Se puede añadir el tema retro si lo incluyes en los imports */}
                {/* <ThemeCard 
                    title="Zafiro Retro Green"
                    themeName="Retro"
                    description="Un esquema monocromático nostálgico que evoca la estética de las terminales de fósforo verde de los años 80."
                    code={zafiroRetroTheme}
                /> */}
            </main>
        </>
    );
}