import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Card = ({ title, children, className, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-white border border-slate-200 rounded-xl p-6 shadow-sm",
        className
      )}
    >
      {title && (
        <h3 className="text-xl font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">
          {title}
        </h3>
      )}
      <div className="text-slate-600">
        {children}
      </div>
    </motion.div>
  );
};

export const Badge = ({ children, className, variant = 'default' }: { children: React.ReactNode, className?: string, variant?: 'default' | 'outline' | 'destructive' | 'success' }) => {
  const variants = {
    default: "bg-blue-50 text-blue-700 border-blue-200",
    outline: "bg-transparent border-slate-200 text-slate-500",
    destructive: "bg-red-50 text-red-700 border-red-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  return (
    <span className={cn("px-2 py-1 rounded-md text-xs font-medium border", variants[variant], className)}>
      {children}
    </span>
  );
};
