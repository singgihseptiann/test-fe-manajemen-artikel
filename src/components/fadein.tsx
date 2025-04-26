// components/motion/MotionFadeIn.tsx
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

interface MotionFadeInProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
}

export default function MotionFadeIn({
  children,
  className,
  delay = 0,
  direction = "up", // default: dari bawah ke atas
  distance = 20, // default jaraknya
  ...props
}: MotionFadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
