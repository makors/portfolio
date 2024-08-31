import confetti from "canvas-confetti";

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Footer({ views }: { views: number }) {
  return (
    <div class="text-slate-500 font-mono text-center pb-2">
      visitor #{views} ●{" "}
      {new Date().toLocaleTimeString([], {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      })}{" "}
      ({new Date().toLocaleTimeString([], {
        timeZone: "America/New_York",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      })} for me) ●{" "}
      <button
        onClick={() => {
          confetti({
            angle: randomInRange(55, 125),
            spread: randomInRange(50, 70),
            particleCount: randomInRange(50, 100),
            origin: { y: 0.6 },
          });
        }}
      >
        click for confetti! 🎉
      </button>
    </div>
  );
}
