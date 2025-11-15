"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMemo, useState } from "react";

export function CodeBlock({
  code,
  language = "text",
  formatJson = false,
}: {
  code: string | object;
  language?: string;
  formatJson?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const formatted = useMemo(() => {
    // Si se pasa un objeto, lo formatea como JSON bonito
    if (typeof code !== "string") {
      try {
        return JSON.stringify(code, null, 2);
      } catch {
        return String(code);
      }
    }
    // Si es string y pedimos formatear JSON, intenta parsearlo y re-stringify
    if (formatJson && typeof code === "string") {
      try {
        return JSON.stringify(JSON.parse(code), null, 2);
      } catch {
        // Si no es JSON válido, devolvemos el string tal cual
        return code;
      }
    }
    return code;
  }, [code, formatJson]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-zinc-900 text-zinc-100 rounded-md p-4 text-sm font-mono">
      <div className="absolute left-3 top-1 text-xs text-zinc-300 select-none">
        {language.toUpperCase()}
      </div>

      <pre className="max-h-[60vh] overflow-auto whitespace-pre rounded-md">
        <code className={language === "json" ? "language-json" : undefined}>
          {formatted}
        </code>
      </pre>

      <div className="absolute top-2 right-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={handleCopy}>
              {copied ? "Copiado" : "Copiar"}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{copied ? "¡Listo!" : "Copiar al portapapeles"}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}