import React, { useRef, useEffect } from 'react';

const HexBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setDimensions();
    window.addEventListener('resize', () => {
      setDimensions();
      buildGrid();
    });

    // Hexagon geometry
    const HEX_SIZE = 32;           // radius of each hex
    const HEX_H = Math.sqrt(3) * HEX_SIZE;  // hex height
    const HEX_W = 2 * HEX_SIZE;             // hex width
    const HEX_VERT_SPACING = HEX_H;
    const HEX_HORIZ_SPACING = HEX_W * 0.75;

    let hexagons = [];

    const buildGrid = () => {
      hexagons = [];
      const cols = Math.ceil(canvas.width / HEX_HORIZ_SPACING) + 2;
      const rows = Math.ceil(canvas.height / HEX_VERT_SPACING) + 2;

      for (let col = -1; col < cols; col++) {
        for (let row = -1; row < rows; row++) {
          const x = col * HEX_HORIZ_SPACING;
          const y = row * HEX_VERT_SPACING + (col % 2 === 0 ? 0 : HEX_H / 2);

          hexagons.push({
            x,
            y,
            // Pulse state
            alpha: 0,
            targetAlpha: 0,
            pulseTime: Math.random() * 200, // stagger start times
            pulseInterval: Math.random() * 300 + 200, // random interval between pulses
            pulseDuration: Math.random() * 60 + 40,   // how long each pulse lasts
            color: Math.random() < 0.7 ? '#10B981' : '#2563EB', // Matrix green or Cobalt
            timer: 0,
          });
        }
      }
    };

    buildGrid();

    const drawHex = (x, y, size, alpha, color) => {
      if (alpha <= 0.005) return;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = color + Math.round(alpha * 255).toString(16).padStart(2, '0');
      ctx.shadowBlur = alpha * 18;
      ctx.shadowColor = color;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      for (const hex of hexagons) {
        hex.timer++;

        // Trigger a pulse when timer reaches nextPulse
        if (hex.timer >= hex.pulseTime) {
          hex.targetAlpha = 1;
        }

        // Ease toward target alpha
        if (hex.targetAlpha > 0) {
          hex.alpha += (hex.targetAlpha - hex.alpha) * 0.06;

          // After peak, fade down
          if (hex.alpha > 0.92) {
            hex.targetAlpha = 0;
          }
        } else {
          hex.alpha *= 0.93; // decay
          if (hex.alpha < 0.005) {
            hex.alpha = 0;
            // schedule next pulse
            hex.timer = 0;
            hex.pulseTime = Math.random() * hex.pulseInterval + 60;
          }
        }

        drawHex(hex.x, hex.y, HEX_SIZE - 2, hex.alpha * 0.55, hex.color);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
};

export default HexBackground;
