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
    <section className="grid gap-4 sm:grid-cols-3">
      {items.map((s) => (
        <div
          key={s.label}
          className="p-6 space-y-1 text-center border rounded-xl"
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