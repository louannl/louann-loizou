import { GlassCard } from '../../liquid-glass/glass-card';

const optics = { tintColor: '#13283e', borderColor: '#a5e7ff', borderAlpha: 0.32 };

export default function PortfolioCard({ className = '', ...props }) {
  return (
    <GlassCard
      className={`portfolio-glass portfolio-work-card rounded-2xl ${className}`}
      tint={0.7}
      optics={optics}
      {...props}
    />
  );
}
