export function MarkBrand({ size = 22 }: { size?: number }) {
  const id = `zf-cut-${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" style={{ display: "block", color: "var(--brass)" }}>
      <defs>
        <mask id={id}>
          <rect width="64" height="64" fill="#fff" />
          <path d="M14 18 L50 18 L24 44 L50 44 L50 50 L14 50 L14 44 L40 44 L14 18 Z" fill="#000" />
        </mask>
      </defs>
      <circle cx="32" cy="32" r="28" fill="currentColor" mask={`url(#${id})`} />
    </svg>
  );
}
