function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-6">

      <h2
        className="
          text-3xl
          font-bold
          theme-text
          transition-colors
          duration-300
        "
      >
        {title}
      </h2>


      {subtitle && (

        <p
          className="
            theme-text-muted
            mt-2
            transition-colors
            duration-300
          "
        >
          {subtitle}
        </p>

      )}

    </div>
  );
}

export default SectionTitle;