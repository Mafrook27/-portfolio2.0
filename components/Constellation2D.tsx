import React, { useRef, useEffect } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  phase: number;
  speed: number;
}

export const Constellation2D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const initNodes = (w: number, h: number) => {
      const palette = ['#bf9d55', '#4F46E5', '#10B981', '#38BDF8', '#8B5CF6'];
      const count = Math.min(30, Math.floor((w * h) / 35000)); // Adaptive count based on screen area
      const nodes: Node[] = [];

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: 1.5 + Math.random() * 2.5,
          color: palette[i % palette.length],
          phase: Math.random() * Math.PI * 2,
          speed: 0.01 + Math.random() * 0.02,
        });
      }
      nodesRef.current = nodes;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Re-initialize nodes to fit new dimensions
      if (nodesRef.current.length === 0) {
        initNodes(width, height);
      } else {
        // Adjust existing nodes to stay within bounds
        nodesRef.current.forEach(node => {
          node.x = Math.max(0, Math.min(width, node.x));
          node.y = Math.max(0, Math.min(height, node.y));
        });
      }
    };

    // Use ResizeObserver for perfect performance and container-aware resizing
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    resize();

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const connectionDistance = Math.min(130, width * 0.2);
      const mouse = mouseRef.current;

      // Draw connections
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.18;
            ctx.strokeStyle = `rgba(191, 157, 85, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      nodes.forEach((node, i) => {
        // Simple brownian drift
        node.x += node.vx + Math.sin(timestamp * node.speed + node.phase) * 0.05;
        node.y += node.vy + Math.cos(timestamp * node.speed * 0.8 + node.phase) * 0.05;

        // Magnet attraction to mouse
        if (mouse.x > 0 && mouse.y > 0) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) * 0.0003;
            node.x += dx * force;
            node.y += dy * force;
          }
        }

        // Boundaries check with wrapping
        if (node.x < -10) node.x = width + 10;
        else if (node.x > width + 10) node.x = -10;

        if (node.y < -10) node.y = height + 10;
        else if (node.y > height + 10) node.y = -10;

        // Pulsing size animation
        const pulse = 1 + Math.sin(timestamp * 0.003 + i) * 0.15;
        const radius = node.size * pulse;

        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
