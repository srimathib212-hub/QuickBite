import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  Clock,
  MapPin,
  ChevronDown,
  RotateCcw,
  Zap,
  ArrowDown
} from 'lucide-react';

export const DesignIterationView: React.FC = () => {
  const { setCheckoutDesignVersion, setCurrentView } = useApp();
  const [activeTab, setActiveTab] = useState<'side-by-side' | 'v1' | 'v2'>('side-by-side');

  const processSteps = [
    { name: 'Research', desc: 'Campus student routines' },
    { name: 'Design', desc: 'V1 Wireframes & Checkout' },
    { name: 'Test', desc: '5 Moderated user sessions' },
    { name: 'Observe', desc: 'Friction & field logs' },
    { name: 'Analyze', desc: 'Completion & error rates' },
    { name: 'Improve', desc: 'V2 Actionable redesign' },
    { name: 'Retest', desc: 'Validation & verification' }
  ];

  const handleLaunchV2 = () => {
    setCheckoutDesignVersion('v2');
    setCurrentView('checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-300">
            UI/UX Case Study Phase
          </span>
          <span className="text-xs text-neutral-500 font-medium">
            Iterative Design Evolution
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          Design Iteration & Version Evolution
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
          How qualitative user testing directly reshaped QuickBite's ordering architecture from Version 1 (friction points) into Version 2 (streamlined campus experience).
        </p>
      </div>

      {/* Visual UX Process Diagram */}
      <section className="p-6 sm:p-8 bg-neutral-900 text-white rounded-2xl shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Iterative UX Engineering Lifecycle
          </span>
          <span className="text-xs text-neutral-400">7-Stage Continuous Refinement</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {processSteps.map((step, idx) => (
            <div
              key={step.name}
              className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700/80 flex flex-col justify-between space-y-2 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-400 font-bold">
                  0{idx + 1}
                </span>
                {idx < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block w-3 h-3 text-neutral-500 absolute -right-2 top-1/2 -translate-y-1/2 z-10" />
                )}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {step.name}
                </h4>
                <p className="text-[10px] text-neutral-400 mt-0.5 leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 3-Step Iteration Chain from Brief */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900">
          Evolution Chain: From V1 to V2
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          
          {/* Card 1: V1 */}
          <div className="p-5 bg-white rounded-2xl border-2 border-neutral-200 shadow-2xs space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              Starting Baseline
            </span>
            <h3 className="text-base font-bold text-neutral-900">
              VERSION 1
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Original QuickBite checkout with standard web forms, unhighlighted pickup selection, and hidden repeat order triggers.
            </p>
          </div>

          {/* Card 2: User Testing */}
          <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 shadow-2xs space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
              Empirical Phase
            </span>
            <h3 className="text-base font-bold text-amber-950">
              USER TESTING
            </h3>
            <p className="text-xs text-amber-900/80 leading-relaxed">
              5 student participants run across 5 tasks. 14% error rate recorded with friction points on pickup schedules and customization options.
            </p>
          </div>

          {/* Card 3: Identified Issues */}
          <div className="p-5 bg-red-50 rounded-2xl border border-red-200 shadow-2xs space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-800">
              Diagnostic Phase
            </span>
            <h3 className="text-base font-bold text-red-950">
              IDENTIFIED ISSUES
            </h3>
            <p className="text-xs text-red-900/80 leading-relaxed">
              Pickup slot easily overlooked. Customization tucked away. Repeat orders require too many clicks.
            </p>
          </div>

          {/* Card 4: V2 */}
          <div className="p-5 bg-emerald-50 rounded-2xl border-2 border-emerald-400 shadow-xs space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              Refined Release
            </span>
            <h3 className="text-base font-bold text-emerald-950 flex items-center justify-between">
              <span>VERSION 2</span>
              <span className="text-xs bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                Improved
              </span>
            </h3>
            <p className="text-xs text-emerald-900/90 leading-relaxed">
              Highlighted "Pickup Details" card, 1-click reorder buttons, elevated customization options, and "Popular on Campus" upfront.
            </p>
          </div>

        </div>
      </section>

      {/* Visual Before/After Comparison */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-neutral-900">
              Interactive Before / After UI Comparison
            </h2>
            <p className="text-xs text-neutral-500">
              Compare the exact visual components of the original checkout vs the redesigned experience.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl text-xs self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('side-by-side')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'side-by-side' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600'
              }`}
            >
              Side-by-Side View
            </button>
            <button
              onClick={() => setActiveTab('v1')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'v1' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600'
              }`}
            >
              V1 Only (Original)
            </button>
            <button
              onClick={() => setActiveTab('v2')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'v2' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600'
              }`}
            >
              V2 Only (Improved)
            </button>
          </div>
        </div>

        {/* Comparison Boards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* VERSION 1 BOARD */}
          {(activeTab === 'side-by-side' || activeTab === 'v1') && (
            <div className="p-6 bg-white rounded-2xl border-2 border-red-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div>
                  <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded uppercase">
                    Version 1: Pre-Testing
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mt-1">
                    Original QuickBite Checkout
                  </h3>
                </div>
                <span className="text-xs text-red-600 font-semibold">
                  3 Usability Failures
                </span>
              </div>

              {/* Simulated V1 Mockup */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3 opacity-90">
                <div className="text-xs text-neutral-500 font-mono">1. Items: Paneer Wrap (₹90) + Cold Coffee (₹60)</div>

                {/* The flawed unstyled inputs */}
                <div className="p-3 bg-white rounded border border-neutral-200 space-y-2 text-xs">
                  <div className="text-[11px] text-neutral-400">Location</div>
                  <div className="text-xs text-neutral-700">Main Campus Cafeteria</div>
                  <div className="text-[11px] text-neutral-400 pt-1">Pickup Time (Subdued input)</div>
                  <div className="text-xs text-neutral-500 border border-neutral-200 p-1.5 rounded">
                    12:30 PM (Easily missed during testing)
                  </div>
                </div>

                <div className="p-3 bg-white rounded border border-neutral-200 text-xs">
                  <div className="text-neutral-500">Payment: Card / UPI</div>
                </div>

                <div className="w-full py-2 bg-neutral-400 text-white rounded text-center text-xs font-semibold">
                  Place Order
                </div>
              </div>

              {/* Observed Issues Callout */}
              <div className="p-3 bg-red-50/70 rounded-xl border border-red-200 space-y-1 text-xs text-red-900">
                <strong className="block font-bold">Why V1 was redesigned:</strong>
                <ul className="space-y-0.5 list-disc pl-4 text-[11px]">
                  <li>P03 bypassed pickup-time dropdown completely due to lack of contrast.</li>
                  <li>No prominent confirmation checklist before committing payment.</li>
                  <li>Reordering required navigating to deep submenus.</li>
                </ul>
              </div>
            </div>
          )}

          {/* VERSION 2 BOARD */}
          {(activeTab === 'side-by-side' || activeTab === 'v2') && (
            <div className="p-6 bg-white rounded-2xl border-2 border-emerald-400 shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded uppercase">
                    Version 2: Post-Testing Redesign
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mt-1">
                    Improved QuickBite Checkout
                  </h3>
                </div>
                <span className="text-xs text-emerald-700 font-bold">
                  Zero Missed Schedules
                </span>
              </div>

              {/* Simulated V2 Mockup */}
              <div className="p-4 bg-amber-50/50 rounded-xl border-2 border-amber-300 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-neutral-900">
                  <span>1. Order Summary</span>
                  <span className="text-neutral-500">2 items · ₹165</span>
                </div>

                {/* The highlighted V2 Pickup Details Card */}
                <div className="p-3 bg-white rounded-xl border-2 border-amber-400 shadow-2xs space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-neutral-900">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Highlighted Pickup Schedule Card</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-1.5 bg-amber-50 rounded text-[11px] font-semibold text-neutral-800">
                      Main Campus Cafeteria
                    </div>
                    <div className="p-1.5 bg-amber-100 text-amber-950 font-bold rounded text-[11px] text-center border border-amber-300">
                      12:45 PM Selected
                    </div>
                  </div>
                </div>

                {/* Pre-flight checklist card */}
                <div className="p-2.5 bg-white rounded-lg border border-neutral-200 text-[11px] text-neutral-700 space-y-1">
                  <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Clear verification checklist above payment CTA</span>
                  </div>
                </div>

                <div className="w-full py-2.5 bg-amber-600 text-white rounded-lg text-center text-xs font-bold shadow-xs">
                  Place Order — ₹165
                </div>
              </div>

              {/* Redesign Outcome Callout */}
              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1 text-xs text-emerald-950">
                <strong className="block font-bold">Validated Improvements in V2:</strong>
                <ul className="space-y-0.5 list-disc pl-4 text-[11px]">
                  <li>Pickup schedule moved to prominent amber card directly above payment.</li>
                  <li>Added 1-click Reorder button to order history cards.</li>
                  <li>Customization options given distinct check-states and step labels.</li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* CTA Button: View Improved Checkout */}
        <div className="p-6 bg-neutral-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <h3 className="text-sm font-bold text-neutral-900">
              Ready to test the redesigned flow live?
            </h3>
            <p className="text-xs text-neutral-500">
              Experience the improved checkout with high-contrast pickup time selector and real-time total calculator.
            </p>
          </div>

          <button
            onClick={handleLaunchV2}
            className="px-6 py-3 bg-neutral-900 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 group"
          >
            <span>View Improved Checkout</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
};
