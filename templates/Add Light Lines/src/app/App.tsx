export default function App() {
  return (
    <div className="size-full bg-slate-950 overflow-hidden relative">
      {/* Animated light lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-slate-400/30 to-transparent"
            style={{
              left: `${(i + 1) * 8}%`,
              animation: `fadeSlide ${3 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
        
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent"
            style={{
              top: `${(i + 1) * 12}%`,
              animation: `fadeSlide ${4 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Center glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <style>{`
        @keyframes fadeSlide {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}
