"use client";

import { useEffect, useMemo, useState } from "react";

function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * progress));

      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

export default function HomeStats({ stats }) {
  const items = useMemo(() => stats ?? [], [stats]);

  return (
    <section className="grid sm:grid-cols-3 gap-4">
      {items.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border p-6 text-center space-y-1"
        >
          <div className="text-3xl font-bold tracking-tight">
            {useCountUp(s.value)}
            {s.suffix ?? ""}
          </div>
          <div className="text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
