import { useRef, useEffect } from "react";


export default function WavyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Draw flowing web/wave lines
    const draw = () => {
      ctx.clearRect(0, 0, W(), H());

      // ── Gradient base ──────────────────────────────────────────────────────
      const grad = ctx.createLinearGradient(0, 0, W(), H());
      grad.addColorStop(0, "#e8f8f9");
      grad.addColorStop(0.45, "#d0f4f6");
      grad.addColorStop(1, "#b8eef1");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W(), H());

      // ── Radial light bloom (top-right) ────────────────────────────────────
      const bloom = ctx.createRadialGradient(W() * 0.78, H() * 0.18, 0, W() * 0.78, H() * 0.18, W() * 0.55);
      bloom.addColorStop(0, "rgba(92,225,230,0.18)");
      bloom.addColorStop(1, "rgba(92,225,230,0)");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, W(), H());

      // ── Horizontal wave lines ─────────────────────────────────────────────
      const lineCount = 18;
      for (let i = 0; i < lineCount; i++) {
        const yBase = (H() / (lineCount - 1)) * i;
        const amplitude = 18 + Math.sin(i * 0.7) * 10;
        const frequency = 0.008 + i * 0.0002;
        const phase = t * 0.4 + i * 0.55;

        ctx.beginPath();
        for (let x = 0; x <= W(); x += 2) {
          const y = yBase + Math.sin(x * frequency + phase) * amplitude;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const alpha = 0.06 + (i % 3 === 0 ? 0.06 : 0);
        ctx.strokeStyle = `rgba(0, 170, 180, ${alpha})`;
        ctx.lineWidth = i % 4 === 0 ? 1.2 : 0.7;
        ctx.stroke();
      }

      // ── Vertical wave lines (web cross-hatch) ─────────────────────────────
      const vLineCount = 14;
      for (let i = 0; i < vLineCount; i++) {
        const xBase = (W() / (vLineCount - 1)) * i;
        const amplitude = 14 + Math.cos(i * 0.9) * 8;
        const frequency = 0.009 + i * 0.0001;
        const phase = t * 0.3 + i * 0.7;

        ctx.beginPath();
        for (let y = 0; y <= H(); y += 2) {
          const x = xBase + Math.sin(y * frequency + phase) * amplitude;
          y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const alpha = 0.04 + (i % 3 === 0 ? 0.04 : 0);
        ctx.strokeStyle = `rgba(0, 160, 170, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // ── Diagonal accent lines ─────────────────────────────────────────────
      for (let i = 0; i < 6; i++) {
        const xStart = W() * (0.1 + i * 0.15);
        const yStart = 0;
        const xEnd = xStart - H() * 0.3;
        const yEnd = H();

        const diagGrad = ctx.createLinearGradient(xStart, yStart, xEnd, yEnd);
        diagGrad.addColorStop(0, "rgba(92,225,230,0.0)");
        diagGrad.addColorStop(0.4, `rgba(92,225,230,${0.06 + Math.sin(t * 0.5 + i) * 0.02})`);
        diagGrad.addColorStop(1, "rgba(92,225,230,0.0)");

        ctx.beginPath();
        ctx.moveTo(xStart, yStart);
        ctx.lineTo(xEnd, yEnd);
        ctx.strokeStyle = diagGrad;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      t += 0.012;
      animationId = requestAnimationFrame(draw);
    };

      draw();
      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
      };
    }, []);
  
    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />
    );
  }
  