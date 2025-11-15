import type { ComponentType, SVGProps } from "react";
function FeatureCard({
  title,
  desc,
  icon }: {
    title: string;
    desc: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>
  }) {
  const IconComp = icon;
  return (
    <article
      className="bg-card text-card-foreground p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 motion-reduce:transition-none focus-within:ring-2 ring-indigo-300"
      tabIndex={0}
      aria-label={title}
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          <IconComp className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
    </article>
  );
} export default FeatureCard