"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  decimal?: boolean;
}

export default function AnimatedCounter({
  value,
  duration = 2,
  className = "",
  decimal = false,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = Number.parseInt(value.toString(), 10);
    const isDecimal = decimal && !Number.isInteger(value);
    const endValue = isDecimal ? value : end;

    if (start === endValue) return;

    const totalMilSecDur = Number.parseInt(String(duration * 1000), 10);
    const incrementTime =
      totalMilSecDur / (isDecimal ? endValue * 10 : endValue);
    const increment = isDecimal ? 0.1 : 1;

    let timer: NodeJS.Timeout;

    const run = () => {
      start += increment;
      setCount(isDecimal ? Number(start.toFixed(1)) : start);

      if (start < endValue) {
        timer = setTimeout(run, incrementTime);
      }
    };

    timer = setTimeout(run, incrementTime);

    return () => {
      clearTimeout(timer);
    };
  }, [value, duration, inView, decimal]);

  return (
    <span ref={ref} className={className}>
      {decimal ? count.toFixed(1) : count}
    </span>
  );
}
