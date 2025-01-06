"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { Heading } from "./heading";
import { Paragraph } from "./paragraph";

interface StatsCardProps {
  value: number;
  title: string;
  suffix: string;
}
export function StatsCard({ title, value, suffix = "" }: StatsCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) => `${latest}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2 });
    }
  }, [isInView, count, value]);

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 md:p-8 text-center space-y-4 grow rounded-2xl border border-black"
      transition={{ duration: 0.5 }}
    >
      <motion.p className="font-heading text-4xl md:text-[44px] lg:text-[52px] tracking-tight font-bold text-red text-center">
        {displayValue}
      </motion.p>
      <Paragraph size="lg" weight="bold" className="text-black text-center">
        {title}
      </Paragraph>
    </motion.div>
  );
}
