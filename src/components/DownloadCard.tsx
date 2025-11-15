import IconLinkButton from "./buttonlinkicon";

function DownloadCard({
  title,
  description,
  link,
  Icon,
  variant = "neutral",
}: {
  title: string;
  description: string;
  link: string;
  Icon: any;
  variant?: "primary" | "neutral" | "disabled";
}) {
  const base =
    "flex flex-col justify-between p-6 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1";
  const variants: Record<string, string> = {
    primary: "bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white",
    neutral: "bg-card text-card-foreground",
    disabled: "bg-gray-50 text-zinc-400 opacity-80",
  };

  return (
    <article className={`${base} ${variants[variant]} min-w-[200px]`}>
      <div className="flex items-start gap-4">
        <span
          className={`shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ${variant === "neutral" ? "bg-white/5" : ""
            }`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div className="text-left">
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <span className={`${variant === "disabled" ? "pointer-events-none opacity-60" : ""}`}>
          <IconLinkButton
            label={variant === "disabled" ? "Desarrollo" : `${title}`}
            link={link}
            icon={Icon}
          />
        </span>
        <span className="text-xs text-muted-foreground select-none"></span>
      </div>
    </article>
  );
} export default DownloadCard;