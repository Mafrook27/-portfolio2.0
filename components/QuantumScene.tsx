/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import { usePerformance } from './PerformanceContext';
import { Constellation2D } from './Constellation2D';

// Dynamically lazy-load the heavy ThreeJS / React Three Fiber components
const LazyQuantum3D = lazy(() => import('./Quantum3DScene'));

export const HeroScene: React.FC = () => {
  const { ecoMode } = usePerformance();

  if (ecoMode) {
    return <Constellation2D />;
  }

  return (
    <Suspense fallback={<Constellation2D />}>
      <Lazy3DWrapper type="hero" />
    </Suspense>
  );
};

export const QuantumComputerScene: React.FC = () => {
  const { ecoMode } = usePerformance();

  if (ecoMode) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-stone-900/5 select-none pointer-events-none">
        {/* Sleek CSS-animated vector fallback representation of a quantum chip for low-power users */}
        <div className="relative flex items-center justify-center w-48 h-48">
          <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-[#bf9d55]/30 animate-[spin_40s_linear_infinite]"></div>
          <div className="absolute w-24 h-24 rounded-full border border-double border-[#38BDF8]/40 animate-[spin_20s_linear_infinite_reverse]"></div>
          <div className="w-8 h-8 rounded-full bg-[#10B981] shadow-[0_0_20px_rgba(16,185,129,0.6)] animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center bg-stone-900/5 select-none pointer-events-none">
        <div className="relative flex items-center justify-center w-48 h-48">
          <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-[#bf9d55]/30 animate-[spin_40s_linear_infinite]"></div>
          <div className="absolute w-24 h-24 rounded-full border border-double border-[#38BDF8]/40 animate-[spin_20s_linear_infinite_reverse]"></div>
          <div className="w-8 h-8 rounded-full bg-[#10B981] shadow-[0_0_20px_rgba(16,185,129,0.6)]"></div>
        </div>
      </div>
    }>
      <Lazy3DWrapper type="computer" />
    </Suspense>
  );
};

// Internal helper component to render specific 3D scenes after lazy loading
const Lazy3DWrapper: React.FC<{ type: 'hero' | 'computer' }> = ({ type }) => {
  return (
    <div className="w-full h-full animate-[fadeIn_0.8s_ease-out_forwards]">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      {type === 'hero' ? (
        <Suspense fallback={<Constellation2D />}>
          <LazyHeroScene />
        </Suspense>
      ) : (
        <Suspense fallback={null}>
          <LazyComputerScene />
        </Suspense>
      )}
    </div>
  );
};

// Dynamic helper imports
const LazyHeroScene = lazy(() => import('./Quantum3DScene').then(m => ({ default: m.HeroScene })));
const LazyComputerScene = lazy(() => import('./Quantum3DScene').then(m => ({ default: m.QuantumComputerScene })));
