const orbs = [
  {
    size: 420,
    top: "-6%",
    left: "-8%",
    color: "rgba(59,130,246,0.35)", // brand blue
    animation: "drift-a 26s ease-in-out infinite",
  },
  {
    size: 360,
    top: "10%",
    left: "70%",
    color: "rgba(139,92,246,0.30)", // purple
    animation: "drift-b 32s ease-in-out infinite",
  },
  {
    size: 300,
    top: "45%",
    left: "20%",
    color: "rgba(34,211,238,0.22)", // cyan
    animation: "drift-c 30s ease-in-out infinite",
  },
  {
    size: 460,
    top: "60%",
    left: "78%",
    color: "rgba(99,102,241,0.28)", // indigo
    animation: "drift-a 36s ease-in-out infinite",
  },
  {
    size: 260,
    top: "80%",
    left: "8%",
    color: "rgba(236,72,153,0.20)", // pink
    animation: "drift-b 28s ease-in-out infinite",
  },
  {
    size: 340,
    top: "35%",
    left: "45%",
    color: "rgba(56,189,248,0.20)", // sky
    animation: "drift-c 34s ease-in-out infinite",
  },
];

export function SpaceBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base sutil en modo oscuro (profundidad espacial) */}
      <div className="absolute inset-0 bg-transparent dark:bg-[radial-gradient(ellipse_at_top,_rgba(30,41,89,0.5),_transparent_60%)]" />

      {/* Estrellas (solo en modo oscuro) */}
      <div className="stars" />

      {/* Orbes flotantes */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="orb"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: orb.color,
            animation: orb.animation,
          }}
        />
      ))}
    </div>
  );
}
