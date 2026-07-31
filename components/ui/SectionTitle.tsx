interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-red-500">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}