import React, { useRef, useEffect } from 'react';

const CyberBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Mouse position tracking
    const mouse = {
      x: null,
      y: null,
      radius: 180, // Distance around cursor to interact
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle system
    const particlesArray = [];
    const numberOfParticles = Math.min(Math.floor(window.innerWidth / 12), 120);

    // Clean light theme accents (slate blue, indigo, teal, sky)
    const colors = [
      'rgba(99, 102, 241, 0.45)', // Indigo
      'rgba(14, 165, 233, 0.45)', // Sky
      'rgba(20, 184, 166, 0.45)', // Teal
      'rgba(148, 163, 184, 0.3)',  // Slate
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 1.2;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = (Math.random() - 0.5) * 0.35;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse collision/interaction (move particles slightly away or attract)
        if (mouse.x != null && mouse.y != null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            
            // Push away gently
            this.x += forceDirectionX * force * 0.6;
            this.y += forceDirectionY * force * 0.6;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      // Off-white trail clear
      ctx.fillStyle = 'rgba(250, 250, 250, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Connect particles with very thin lines
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.beginPath();
            // Indigo/gray lines with distance fade
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.07 - (distance / 2000)})`;
            ctx.lineWidth = 0.45;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }

        // Draw connections from mouse to nearby particles
        if (mouse.x != null && mouse.y != null) {
          const dx = particlesArray[i].x - mouse.x;
          const dy = particlesArray[i].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.14 - (distance / mouse.radius) * 0.14})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
      style={{ display: 'block' }}
    />
  );
};

export default CyberBackground;

