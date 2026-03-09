import React, { useRef, useEffect } from 'react';

const CODE_TOKENS = [
  '{}', '=>', '[]', '()', 'async', 'const', 'import', '||',
  '&&', '??', '...', '<>', '/>', 'api/', '.env', '0x1F',
  '200', '404', 'null', 'void', '::', '/*', '*/', 'npm',
];

const StarfieldBackground = () => {
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
    window.addEventListener('resize', setDimensions);

    // --- Stars ---
    const NUM_STARS = 120;
    const stars = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.6 + 0.1,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() < 0.5 ? 1 : -1,
    }));

    // --- Code Tokens ---
    const NUM_TOKENS = 18;
    const tokens = Array.from({ length: NUM_TOKENS }, () => ({
      text: CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)],
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -(Math.random() * 0.4 + 0.1), // drift upward gently
      alpha: Math.random() * 0.35 + 0.05,
      fontSize: Math.floor(Math.random() * 8 + 10), // 10–18px
      color: Math.random() < 0.65 ? '#10B981' : '#2563EB',
      // reset when token drifts off-screen
    }));

    const resetToken = (token) => {
      token.text = CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)];
      token.x = Math.random() * canvas.width;
      token.y = canvas.height + 20; // start from bottom
      token.speedX = (Math.random() - 0.5) * 0.3;
      token.speedY = -(Math.random() * 0.4 + 0.15);
      token.alpha = Math.random() * 0.3 + 0.05;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars with twinkle
      for (const star of stars) {
        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha >= 0.8 || star.alpha <= 0.05) star.twinkleDir *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      }

      // Draw floating code tokens
      ctx.textBaseline = 'middle';
      for (const token of tokens) {
        token.x += token.speedX;
        token.y += token.speedY;

        // Reset if drifted off-screen
        if (token.y < -30 || token.x < -60 || token.x > canvas.width + 60) {
          resetToken(token);
        }

        ctx.font = `${token.fontSize}px 'JetBrains Mono', monospace`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = token.color;
        ctx.fillStyle = token.color + Math.round(token.alpha * 255).toString(16).padStart(2, '0');
        ctx.fillText(token.text, token.x, token.y);
        ctx.shadowBlur = 0;
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50"
    />
  );
};

export default StarfieldBackground;
