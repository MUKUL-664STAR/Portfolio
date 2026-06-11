import { cn } from '@/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({ children, className, hover = false, glass = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        glass && 'backdrop-blur-md bg-white/5 border-white/10',
        hover &&
          'hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
