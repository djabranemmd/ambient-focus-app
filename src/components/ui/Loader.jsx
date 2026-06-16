function Loader() {

  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[var(--bg-primary)]
      "
    >

      <div
        className="
          h-12
          w-12
          rounded-full
          border-4
          border-purple-500/30
          border-t-purple-500
          animate-spin
        "
      />

    </div>

  );

}


export default Loader;