"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Ribbon({
  children,
  className,
  size = "md",
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  as?: "h1" | "h2" | "h3";
}) {
  const sizeClasses = {
    sm: "text-sm md:text-base px-6 py-2 tracking-[0.2em]",
    md: "text-2xl md:text-3xl px-10 py-3 tracking-[0.15em]",
    lg: "text-4xl md:text-6xl px-14 py-5 tracking-[0.1em]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("inline-block mx-auto", className)}
    >
      <Tag
        className={cn(
          "ribbon font-display uppercase font-medium text-paper whitespace-nowrap",
          sizeClasses[size]
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
