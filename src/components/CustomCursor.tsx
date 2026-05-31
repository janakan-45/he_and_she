import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const animRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }
      rafId.current = requestAnimationFrame(animRing);
    };
    rafId.current = requestAnimationFrame(animRing);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactable = target.closest('a, button, .collection-card, .product-card, .showcase-thumb, .filter-tab, .feature-item, .swatch, .p-action');
      if (interactable) {
        if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2)';
        if (ringRef.current) {
          ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)';
          ringRef.current.style.borderColor = 'rgba(201,168,76,0.8)';
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactable = target.closest('a, button, .collection-card, .product-card, .showcase-thumb, .filter-tab, .feature-item, .swatch, .p-action');
      if (interactable) {
        const nextTarget = e.relatedTarget as HTMLElement | null;
        if (!nextTarget || !nextTarget.closest('a, button, .collection-card, .product-card, .showcase-thumb, .filter-tab, .feature-item, .swatch, .p-action')) {
          if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
          if (ringRef.current) {
            ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
            ringRef.current.style.borderColor = 'rgba(201,168,76,0.5)';
          }
        }
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
