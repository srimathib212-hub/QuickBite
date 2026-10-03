import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, FlaskConical, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView } = useApp();

  return (
    <footer className="bg-white border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-white text-base">
                Q
              </span>
              <span className="text-lg font-bold tracking-tight text-neutral-900">QuickBite</span>
            </div>
            <p className="text-xs text-neutral-500 font-medium leading-relaxed">
              Order Fast. Eat Fresh. Stay on Campus.
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Campus food-ordering platform engineered for college cafeterias and tested with real student interaction workflows.
            </p>
          </div>

          {/* Col 2: Cafeteria Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
              Campus Dining
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-600">
              <li>
                <button
                  onClick={() => setCurrentView('menu')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Daily Campus Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('orders')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Order Tracking & History
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('profile')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Student Wallet & Profile
                </button>
              </li>
              <li className="flex items-center gap-1 text-neutral-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Central Student Center Ground Floor</span>
              </li>
            </ul>
          </div>

          {/* Col 3: UI/UX Portfolio & Usability Testing */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
              <span>UX Research Suite</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-600">
              <li>
                <button
                  onClick={() => setCurrentView('usability')}
                  className="hover:text-emerald-700 transition-colors font-medium text-emerald-800"
                >
                  Usability Test Plan & Metrics
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('iteration')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Design Iteration (V1 vs V2 Checkout)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('report')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Final Usability Testing Report
                </button>
              </li>
              <li className="text-[11px] text-neutral-400 pt-1">
                Moderated testing with 5 sample participants
              </li>
            </ul>
          </div>

          {/* Col 4: Task Requirements Check */}
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/80 space-y-2">
            <span className="text-[11px] font-bold text-neutral-900 uppercase tracking-wider block">
              Internship Task Criteria
            </span>
            <ul className="space-y-1 text-[11px] text-neutral-600">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Test plans & scenarios
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Sample users & sessions
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Observations & feedback
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Findings & redesign suggestions
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 mt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>
            QuickBite © 2026. Built for UI/UX Usability Testing & Analysis Internship Task.
          </p>
          <div className="flex items-center gap-4">
            <span>Student Persona: STU1024 (Alex Kumar)</span>
            <span>·</span>
            <span>Moderated Evaluation Framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
