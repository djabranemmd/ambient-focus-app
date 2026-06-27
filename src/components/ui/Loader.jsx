function Loader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] transition-colors duration-300"
      role="status"
      aria-label="Loading application"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-12 w-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin"
          aria-hidden="true"
        />

        <span className="text-sm theme-text-muted">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;