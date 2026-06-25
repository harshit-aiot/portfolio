import React, { useEffect, useRef } from 'react';

// Setup default global settings if not present
if (typeof window !== 'undefined') {
  window.meshConfig = window.meshConfig || {
    particleCount: Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000)),
    connectionDistance: 120,
    speedFactor: 1.0,
    theme: 'cyan-green',
    particleColor1: '#00f2fe',
    particleColor2: '#05ffa1',
    lineColor: '0, 242, 254', // R, G, B components
  };
}

export default function IotMeshBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const mouse = { x: null, y: null, radius: 160 };

    class Particle {
      constructor(isBurst = false, burstX = null, burstY = null) {
        this.x = burstX !== null ? burstX : Math.random() * width;
        this.y = burstY !== null ? burstY : Math.random() * height;
        
        const vxBase = (Math.random() - 0.5) * 0.45;
        const vyBase = (Math.random() - 0.5) * 0.45;

        if (isBurst) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2.5 + 1.2;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
          this.radius = Math.random() * 3 + 1.5;
          this.isBurst = true;
          this.life = 1.0;
        } else {
          this.vx = vxBase;
          this.vy = vyBase;
          this.radius = Math.random() * 2 + 1;
          this.isBurst = false;
        }

        this.colorType = Math.random() > 0.3 ? 1 : 2;
      }

      draw() {
        const config = window.meshConfig || {};
        const pColor = this.colorType === 1 
          ? (config.particleColor1 || '#00f2fe') 
          : (config.particleColor2 || '#05ffa1');

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        if (this.isBurst) {
          ctx.fillStyle = pColor;
          ctx.globalAlpha = this.life;
          ctx.shadowBlur = 12 * this.life;
        } else {
          ctx.fillStyle = pColor;
          ctx.shadowBlur = 8;
        }

        ctx.shadowColor = pColor;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      }

      update() {
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 0.8;
            this.y += (dy / dist) * force * 0.8;
          }
        }

        const config = window.meshConfig || {};
        const currentSpeedFactor = config.speedFactor !== undefined ? config.speedFactor : 1.0;

        this.x += this.vx * currentSpeedFactor;
        this.y += this.vy * currentSpeedFactor;

        if (this.isBurst) {
          this.life -= 0.015;
          this.vx *= 0.98;
          this.vy *= 0.98;
        }
      }
    }

    const init = () => {
      particles.length = 0;
      const initialCount = window.meshConfig ? window.meshConfig.particleCount : 80;
      for (let i = 0; i < initialCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const config = window.meshConfig || {};
      const currentConnectionDistance = config.connectionDistance || 120;
      const currentLineColor = config.lineColor || '0, 242, 254';
      const targetParticleCount = config.particleCount || 80;

      // Adjust particle count dynamically without reset
      const normalParticlesCount = particles.filter(p => !p.isBurst).length;
      if (normalParticlesCount < targetParticleCount) {
        const diff = targetParticleCount - normalParticlesCount;
        for (let i = 0; i < diff; i++) {
          particles.push(new Particle());
        }
      } else if (normalParticlesCount > targetParticleCount) {
        let diff = normalParticlesCount - targetParticleCount;
        for (let i = particles.length - 1; i >= 0; i--) {
          if (!particles[i].isBurst) {
            particles.splice(i, 1);
            diff--;
            if (diff <= 0) break;
          }
        }
      }

      // Filter out dead burst particles & update remaining
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].isBurst && particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Draw connections & update
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < currentConnectionDistance) {
            const alpha = (currentConnectionDistance - dist) / currentConnectionDistance * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${currentLineColor}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleBurst = (e) => {
      const burstX = e.detail && e.detail.x !== undefined ? e.detail.x : Math.random() * width;
      const burstY = e.detail && e.detail.y !== undefined ? e.detail.y : Math.random() * height;
      const count = e.detail && e.detail.count !== undefined ? e.detail.count : 20;

      for (let i = 0; i < count; i++) {
        particles.push(new Particle(true, burstX, burstY));
      }
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mesh-telemetry-burst', handleBurst);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mesh-telemetry-burst', handleBurst);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
