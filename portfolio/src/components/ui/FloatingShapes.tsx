/**
 * ==========================================================
 * Floating Shapes
 * ==========================================================
 *
 * Decorative floating blurred shapes.
 *
 * ==========================================================
 */

const shapes = [
  {
    size: "h-20 w-20",
    top: "top-16",
    left: "left-12",
    color: "bg-indigo-500/20",
    delay: "0s",
  },
  {
    size: "h-16 w-16",
    top: "top-64",
    right: "right-24",
    color: "bg-cyan-500/20",
    delay: "2s",
  },
  {
    size: "h-24 w-24",
    bottom: "bottom-24",
    left: "left-1/4",
    color: "bg-violet-500/20",
    delay: "4s",
  },
];

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`
            absolute
            ${shape.size}
            ${shape.top ?? ""}
            ${shape.bottom ?? ""}
            ${shape.left ?? ""}
            ${shape.right ?? ""}
            ${shape.color}
            rounded-full
            blur-2xl
            animate-bounce
          `}
          style={{
            animationDuration: "7s",
            animationDelay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingShapes;
