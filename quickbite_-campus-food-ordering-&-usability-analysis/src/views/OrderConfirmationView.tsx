import React from 'react';
import { useApp } from '../context/AppContext';
import {
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

export const OrderConfirmationView: React.FC = () => {
  const {
    activeOrder,
    setCurrentView,
    advanceOrderStatus,
    selectOrderForTracking
  } = useApp();

  if (!activeOrder) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-neutral-900">No active order found</h2>
        <button
          onClick={() => setCurrentView('menu')}
          className="px-5 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-semibold"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  const steps = [
    { key: 'placed', label: 'Order Placed', desc: 'Received at cafeteria' },
    { key: 'preparing', label: 'Preparing', desc: 'Kitchen firing pans' },
    { key: 'ready', label: 'Ready for Pickup', desc: 'Staged at counter' },
    { key: 'picked_up', label: 'Picked Up', desc: 'Enjoy your campus meal' }
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'placed':
        return 0;
      case 'preparing':
        return 1;
      case 'ready':
        return 2;
      case 'picked_up':
        return 3;
      default:
        return 0;
    }
  };

  const currentStepIdx = getStepIndex(activeOrder.status);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-300">
      
      {/* Confirmation Success Header */}
      <div className="text-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Order Confirmed! 🎉
        </h1>
        <p className="text-sm font-semibold text-amber-600">
          Order #{activeOrder.id}
        </p>
        <p className="text-xs text-neutral-500 max-w-sm mx-auto">
          Your order has been received and queued at the campus kitchen.
        </p>
      </div>

      {/* Primary Order Card */}
      <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-sm space-y-6">
        
        {/* Estimated Info Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-amber-50/70 rounded-xl border border-amber-200/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500 text-white">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block">
                Pickup Location
              </span>
              <span className="text-sm font-bold text-neutral-900">
                {activeOrder.pickupLocation}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500 text-white">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block">
                Estimated Ready Time
              </span>
              <span className="text-sm font-bold text-neutral-900">
                {activeOrder.estimatedPickupTime}
              </span>
            </div>
          </div>
        </div>

        {/* Visual Progress Tracker (Order Placed -> Preparing -> Ready -> Picked Up) */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Kitchen Progress Tracker
            </h2>
            {/* Interactive demo button to step through states */}
            <button
              onClick={() => advanceOrderStatus(activeOrder.id)}
              className="text-xs text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-md font-semibold flex items-center gap-1 transition-colors"
              title="Click to simulate next kitchen stage"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Simulate Next Stage</span>
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-2">
            {steps.map((st, idx) => {
              const isPast = idx < currentStepIdx;
              const isCurrent = idx === currentStepIdx;
              const isPending = idx > currentStepIdx;

              return (
                <div key={st.key} className="flex flex-col items-center text-center space-y-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-2xs ${
                      isPast
                        ? 'bg-emerald-600 text-white'
                        : isCurrent
                        ? 'bg-amber-500 text-white ring-4 ring-amber-100 animate-pulse'
                        : 'bg-neutral-100 text-neutral-400 border border-neutral-200'
                    }`}
                  >
                    {isPast ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                  </div>
                  <div>
                    <h3
                      className={`text-xs font-bold ${
                        isCurrent
                          ? 'text-neutral-900'
                          : isPast
                          ? 'text-emerald-700'
                          : 'text-neutral-400'
                      }`}
                    >
                      {st.label}
                    </h3>
                    <p className="hidden sm:block text-[10px] text-neutral-400 mt-0.5">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden mt-2">
            <div
              className="bg-amber-500 h-full transition-all duration-500"
              style={{ width: `${((currentStepIdx + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Order Items Preview */}
        <div className="pt-4 border-t border-neutral-200 space-y-2 text-xs">
          <span className="font-bold text-neutral-900 uppercase tracking-wider text-[11px] block">
            Items in this order
          </span>
          <div className="divide-y divide-neutral-100">
            {activeOrder.items.map(i => (
              <div key={i.cartItemId} className="py-2 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-neutral-900">
                    {i.quantity}x {i.foodItem.name}
                  </span>
                  {i.selectedAddOns.length > 0 && (
                    <span className="text-neutral-500 text-[11px] ml-2">
                      ({i.selectedAddOns.map(a => a.name).join(', ')})
                    </span>
                  )}
                </div>
                <span className="tabular-nums font-semibold text-neutral-900">
                  ₹{i.totalPrice}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => selectOrderForTracking(activeOrder.id)}
            className="w-full sm:flex-1 py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            <span>Track Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentView('home')}
            className="w-full sm:w-auto py-3 px-5 bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 rounded-xl text-xs font-semibold transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
