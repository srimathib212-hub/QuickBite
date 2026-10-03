import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PICKUP_LOCATIONS, PICKUP_TIME_SLOTS } from '../data/mockData';
import {
  MapPin,
  Clock,
  CreditCard,
  Wallet,
  Smartphone,
  Banknote,
  ShieldCheck,
  ArrowLeft,
  AlertCircle,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';

export const CheckoutView: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    convenienceFee,
    cartTotal,
    selectedPickupLocation,
    setSelectedPickupLocation,
    selectedPickupTime,
    setSelectedPickupTime,
    placeOrder,
    setCurrentView,
    user,
    checkoutDesignVersion,
    setCheckoutDesignVersion
  } = useApp();

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'wallet' | 'cash'>('wallet');
  const [upiId, setUpiId] = useState('alex@okaxis');
  const [isProcessing, setIsProcessing] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900">Your cart is empty</h2>
        <p className="text-sm text-neutral-500">
          Add items from the campus cafeteria menu before checking out.
        </p>
        <button
          onClick={() => setCurrentView('menu')}
          className="px-6 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800"
        >
          Return to Menu
        </button>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      placeOrder(paymentMethod);
      setIsProcessing(false);
    }, 400);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner: V1 vs V2 Checkout Iteration Tester */}
      <div className="bg-neutral-900 text-white p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border border-neutral-800">
        <div className="flex items-center gap-2.5">
          <span className="p-1 rounded bg-amber-500 text-neutral-950 font-bold text-[10px]">
            UX ITERATION
          </span>
          <div>
            <span className="font-semibold text-white">Compare Checkout Designs: </span>
            <span className="text-neutral-400">
              {checkoutDesignVersion === 'v2'
                ? 'Showing Version 2 (Redesigned with prominent Pickup Card & clear hierarchy)'
                : 'Showing Version 1 (Original design where users missed pickup-time selection)'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 self-end sm:self-auto bg-neutral-800 p-1 rounded-lg">
          <button
            onClick={() => setCheckoutDesignVersion('v1')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              checkoutDesignVersion === 'v1'
                ? 'bg-neutral-700 text-white font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            V1 (Original)
          </button>
          <button
            onClick={() => setCheckoutDesignVersion('v2')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              checkoutDesignVersion === 'v2'
                ? 'bg-amber-500 text-neutral-950 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            V2 (Improved ★)
          </button>
        </div>
      </div>

      {/* Navigation header */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
        <button
          onClick={() => setCurrentView('menu')}
          className="flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Menu</span>
        </button>
        <span className="text-xs text-neutral-500 font-medium">
          Step 2 of 2: Checkout & Pickup Confirmation
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Form Details */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
              Confirm Your Order
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Review your food items, campus pickup schedule, and payment preference.
            </p>
          </div>

          {/* Section 1: Order Summary */}
          <div className="p-5 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-neutral-900 flex items-center justify-between">
              <span>1. Order Summary</span>
              <span className="text-xs font-normal text-neutral-500">
                {cart.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            </h2>

            <div className="divide-y divide-neutral-100">
              {cart.map(item => (
                <div key={item.cartItemId} className="py-3 first:pt-0 last:pb-0 flex items-start justify-between gap-3 text-xs">
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-neutral-900">
                      <span>{item.quantity}x</span>
                      <span>{item.foodItem.name}</span>
                    </div>
                    {item.selectedSize && item.selectedSize.price > 0 && (
                      <div className="text-[11px] text-neutral-500 pl-5">
                        Size: {item.selectedSize.name} (+₹{item.selectedSize.price})
                      </div>
                    )}
                    {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                      <div className="text-[11px] text-neutral-500 pl-5">
                        Add-ons: {item.selectedAddOns.map(a => a.name).join(', ')}
                      </div>
                    )}
                    {item.specialInstructions && (
                      <div className="text-[11px] text-neutral-400 italic pl-5">
                        Note: {item.specialInstructions}
                      </div>
                    )}
                  </div>
                  <span className="tabular-nums font-bold text-neutral-900">
                    ₹{item.totalPrice}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Version 2 Highlights: Dedicated prominent "Pickup Details" card (Solves Usability Issue 02) */}
          {checkoutDesignVersion === 'v2' ? (
            <div className="p-5 bg-amber-50/60 rounded-2xl border-2 border-amber-400/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
                    2
                  </span>
                  <h2 className="text-sm font-bold text-neutral-900">
                    Pickup Details & Time Slot
                  </h2>
                </div>
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  Highlighted in V2 Redesign
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Pickup Location */}
                <div>
                  <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>Campus Cafeteria Counter</span>
                  </label>
                  <select
                    value={selectedPickupLocation}
                    onChange={e => setSelectedPickupLocation(e.target.value)}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-xl p-2.5 font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
                  >
                    {PICKUP_LOCATIONS.map(loc => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pickup Time */}
                <div>
                  <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5 mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Desired Pickup Time</span>
                  </label>
                  <select
                    value={selectedPickupTime}
                    onChange={e => setSelectedPickupTime(e.target.value)}
                    className="w-full text-xs bg-white border border-amber-400 rounded-xl p-2.5 font-bold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
                  >
                    {PICKUP_TIME_SLOTS.map(slot => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-[11px] text-amber-900/80 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Your food will be freshly packed and staged by {selectedPickupTime}.</span>
              </div>
            </div>
          ) : (
            /* Version 1: Original subdued inputs where participants had missed pickup time */
            <div className="p-5 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
              <h2 className="text-sm font-bold text-neutral-900">
                2. Pickup & Location (V1 Unstyled)
              </h2>
              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-neutral-500 block mb-1">Location</label>
                  <select
                    value={selectedPickupLocation}
                    onChange={e => setSelectedPickupLocation(e.target.value)}
                    className="w-full text-xs border border-neutral-300 rounded p-2 text-neutral-700"
                  >
                    {PICKUP_LOCATIONS.map(loc => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-neutral-500 block mb-1">Pickup Time</label>
                  <select
                    value={selectedPickupTime}
                    onChange={e => setSelectedPickupTime(e.target.value)}
                    className="w-full text-xs border border-neutral-200 rounded p-2 text-neutral-600"
                  >
                    {PICKUP_TIME_SLOTS.map(slot => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Payment Method */}
          <div className="p-5 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                <span>3. Payment Method</span>
              </h2>
              <span className="text-xs text-neutral-500">Student Fast-Pay</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Campus Wallet */}
              <button
                type="button"
                onClick={() => setPaymentMethod('wallet')}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                  paymentMethod === 'wallet'
                    ? 'border-amber-600 bg-amber-50/50 ring-1 ring-amber-500'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                  <Wallet className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                    <span>Campus Wallet</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded font-semibold">
                      Fastest
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Balance: <span className="font-semibold text-neutral-800">₹{user.walletBalance}</span> (STU1024)
                  </p>
                </div>
              </button>

              {/* UPI */}
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                  paymentMethod === 'upi'
                    ? 'border-amber-600 bg-amber-50/50 ring-1 ring-amber-500'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="p-2 rounded-lg bg-neutral-100 text-neutral-700 shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-900 block">UPI Instant</span>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Google Pay / PhonePe / Paytm
                  </p>
                </div>
              </button>

              {/* Debit/Credit Card */}
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                  paymentMethod === 'card'
                    ? 'border-amber-600 bg-amber-50/50 ring-1 ring-amber-500'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="p-2 rounded-lg bg-neutral-100 text-neutral-700 shrink-0">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-900 block">Card</span>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Visa / Mastercard / RuPay
                  </p>
                </div>
              </button>

              {/* Cash at Counter */}
              <button
                type="button"
                onClick={() => setPaymentMethod('cash')}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                  paymentMethod === 'cash'
                    ? 'border-amber-600 bg-amber-50/50 ring-1 ring-amber-500'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="p-2 rounded-lg bg-neutral-100 text-neutral-700 shrink-0">
                  <Banknote className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-900 block">Cash at Counter</span>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Pay upon order pickup
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Order Confirmation Card & Final Action */}
        <div className="lg:col-span-5 space-y-4">
          <div className="sticky top-24 p-6 bg-white rounded-2xl border border-neutral-200 shadow-sm space-y-5">
            <h2 className="text-base font-bold text-neutral-900">
              Payment & Pickup Breakdown
            </h2>

            {/* Verification summary before placing */}
            <div className="space-y-2.5 text-xs pb-4 border-b border-neutral-200">
              <div className="flex justify-between text-neutral-600">
                <span>Items Subtotal</span>
                <span className="tabular-nums font-semibold text-neutral-900">₹{cartSubtotal}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Campus Convenience Fee</span>
                <span className="tabular-nums font-semibold text-neutral-900">₹{convenienceFee}</span>
              </div>
              <div className="pt-2 border-t border-neutral-100 flex justify-between text-base font-bold text-neutral-900">
                <span>Total Payable</span>
                <span className="tabular-nums text-xl text-amber-600">₹{cartTotal}</span>
              </div>
            </div>

            {/* Clear Recap required by brief */}
            <div className="p-3.5 bg-neutral-50 rounded-xl space-y-2 text-xs border border-neutral-100">
              <span className="font-bold text-neutral-900 uppercase tracking-wider text-[10px] block">
                Verification Checklist
              </span>
              <div className="flex items-start gap-2 text-neutral-600">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Pickup At: <strong className="text-neutral-900">{selectedPickupLocation}</strong></span>
              </div>
              <div className="flex items-start gap-2 text-neutral-600">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Pickup Schedule: <strong className="text-neutral-900">{selectedPickupTime}</strong></span>
              </div>
              <div className="flex items-start gap-2 text-neutral-600">
                <Wallet className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Payment: <strong className="text-neutral-900 uppercase">{paymentMethod}</strong></span>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className="w-full py-3.5 px-4 bg-amber-600 hover:bg-amber-700 active:scale-98 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <span>Confirming Order...</span>
              ) : (
                <>
                  <span>Place Order</span>
                  <span>·</span>
                  <span className="tabular-nums">₹{cartTotal}</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Campus Student Food Order</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
