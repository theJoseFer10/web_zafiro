import { zafiroDarkTheme } from "@/app/themes/themes";
import { CodeBlock } from "./codeblock";

interface ThemeCardProps {
  title: string;
  description?: string;
  code?: string;
  themeName: string;
}

function ThemeCard({ title, description, code, themeName }: ThemeCardProps) {
  // Aseguramos que el tema se muestre correctamente, usando el JSON que le corresponde.
  const themeCode = code || zafiroDarkTheme;

  return (
    <section
      className="border border-indigo-100 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 mb-8"
      id={`theme-${themeName.toLowerCase().replace(/\s/g, "-")}`} // ID para navegación/enlaces
    >
      <div className="mb-4">
        <h3 className="text-3xl font-semibold text-zinc-900 border-b-2 border-indigo-200 pb-2">
          {title}
        </h3>
        <p className="text-lg text-zinc-500 mt-2">{description}</p>
      </div>

      <div className="mt-6">
        <CodeBlock code={themeCode} language="json" formatJson={true} />
      </div>

      <div className="mt-6 text-right">
        <a
          href={`/themes/${themeName}`} // Ahora apunta al archivo estático en /public/themes/
          download
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Descargar JSON
        </a>
      </div>
    </section>
  );
}
export default ThemeCard;
