import Card from "../ui/Card";

function StatsCard({
  title,
  value,
  subtitle,
}) {
  return (
    <Card>
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
    </Card>
  );
}

export default StatsCard;