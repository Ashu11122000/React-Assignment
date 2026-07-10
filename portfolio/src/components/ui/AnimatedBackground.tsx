/**
 * ==========================================================
 * Animated Background
 * ==========================================================
 *
 * Premium animated gradient background.
 *
 * Features
 * ----------
 * ✓ Gradient Mesh
 * ✓ Blur Effect
 * ✓ Dark Mode
 * ✓ Responsive
 *
 * ==========================================================
 */

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Top Left */}
      <div className="absolute left-0 top-0 h-120 w-120 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />

      {/* Top Right */}
      <div className="absolute right-0 top-0 h-100 w-100 rounded-full bg-cyan-500/20 blur-3xl animate-pulse delay-1000" />

      {/* Bottom */}
      <div className="absolute bottom-0 left-1/2 h-140 w-140 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl animate-pulse delay-700" />
    </div>
  );
}

export default AnimatedBackground;
