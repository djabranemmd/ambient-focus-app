function StatsCard({
  title,
  value,
  subtitle,
}) {
  return (
    <div
      className="
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-6
      "
    >
      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>

      {subtitle && (
        <p className="text-gray-500 mt-2 text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default StatsCard;