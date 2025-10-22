"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-zinc-900 text-zinc-100 rounded-md p-4 text-sm font-mono overflow-auto">
      <pre>{code}</pre>
      <div className="absolute top-2 right-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={handleCopy}>
              {copied ? "Copiado" : "Copiar"}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {copied ? "¡Listo!" : "Copiar al portapapeles"}
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
