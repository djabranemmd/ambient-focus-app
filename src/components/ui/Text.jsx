export function TextPrimary({ children, className = "" }) {
  return (
    <span className={className} style={{ color: "var(--text-primary)" }}>
      {children}
    </span>
  );
}

export function TextSecondary({ children, className = "" }) {
  return (
    <span className={className} style={{ color: "var(--text-secondary)" }}>
      {children}
    </span>
  );
}