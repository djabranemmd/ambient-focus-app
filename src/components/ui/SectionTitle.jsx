function SectionTitle({
  title,
  subtitle,
  className = "",
}) {


  return (

    <div

      className={`
        mb-6

        ${className}
      `}

    >


      <h2

        className="
          text-2xl
          sm:text-3xl

          font-bold

          tracking-tight

          leading-tight

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

            max-w-2xl

            text-sm
            sm:text-base

            leading-relaxed

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