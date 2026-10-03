import React from 'react';
import { useApp } from '../context/AppContext';
import { X, HelpCircle, Clock, MapPin, CreditCard, AlertCircle } from 'lucide-react';

export const HelpModal: React.FC = () => {
  const { isHelpOpen, setIsHelpOpen } = useApp();

  if (!isHelpOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-xl border border-neutral-200 p-6 space-y-5 animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600" />
            <h2 id="help-title" className="text-lg font-bold text-neutral-900">
              Campus Cafeteria Help & Guidelines
            </h2>
          </div>
          <button
            onClick={() => setIsHelpOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Close help modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs text-neutral-600">
          <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
            <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-neutral-900 mb-0.5">Cafeteria Operating Hours</h3>
              <p>Breakfast: 7:30 AM – 10:30 AM</p>
              <p>Lunch & Meals: 11:45 AM – 3:30 PM</p>
              <p>Evening Snacks & Chai: 4:00 PM – 8:00 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-neutral-900 mb-0.5">Where do I collect my order?</h3>
              <p>
                Head to the designated counter (Counter 1: Express Drinks & Snacks, Counter 2: Hot Meals & Wraps). Show your Order #QB on your phone screen to the kitchen staff.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
            <CreditCard className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-neutral-900 mb-0.5">Campus Wallet (STU1024)</h3>
              <p>
                Pre-loaded student IDs can pay with 0% extra fee. Reload your wallet balance at the Central Admin Desk or via UPI.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
            <AlertCircle className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-neutral-900 mb-0.5">Need support or food changes?</h3>
              <p>
                Direct helpline: ext. 4202 or visit Cafeteria Desk A. Kitchen orders can only be cancelled within 2 minutes of placing.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setIsHelpOpen(false)}
            className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            Got it, Back to QuickBite
          </button>
        </div>
      </div>
    </div>
  );
};
