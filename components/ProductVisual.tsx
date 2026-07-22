type ProductVisualProps = {
  variant: "analytics" | "workflow" | "warehouse";
};

export function ProductVisual({ variant }: ProductVisualProps) {
  return (
    <div className={`product-visual product-visual-${variant}`} aria-hidden="true">
      <div className="visual-bar" />
      <div className="visual-grid">
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="visual-panel">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
