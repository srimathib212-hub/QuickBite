import React from 'react';
import { useApp } from '../context/AppContext';
import { PICKUP_LOCATIONS, PICKUP_TIME_SLOTS } from '../data/mockData';
import {
  X,
  Plus,
  Minus,
  Trash2,
  Clock,
  MapPin,
  ShoppingBag,
  ArrowRight,
  Info
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    convenienceFee,
    cartTotal,
    selectedPickupLocation,
    setSelectedPickupLocation,
    selectedPickupTime,
    setSelectedPickupTime,
    setCurrentView
  } = useApp();

  if (!isCartDrawerOpen) return null;

  const handleCheckout = () => {
    setIsCartDrawerOpen(false);
    setCurrentView('checkout');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
      className="fixed inset-0 z-50 overflow-hidden bg-neutral-900/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l border-neutral-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-600" />
            <h2 id="cart-title" className="text-lg font-bold text-neutral-900">
              Your Cart
            </h2>
            {cart.length > 0 && (
              <span className="text-xs text-neutral-500 font-normal">
                ({cart.reduce((sum, i) => sum + i.quantity, 0)} items)
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-neutral-400 hover:text-red-600 transition-colors mr-2"
                title="Clear all cart items"
              >
                Clear all
              </button>
            )}
            <button
              onClick={() => setIsCartDrawerOpen(false)}
              className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 mb-1">Your cart is empty</h3>
            <p className="text-xs text-neutral-500 max-w-xs mb-6">
              Looks like you haven't added anything to eat yet. Explore our campus cafeteria menu!
            </p>
            <button
              onClick={() => {
                setIsCartDrawerOpen(false);
                setCurrentView('menu');
              }}
              className="px-5 py-2.5 bg-neutral-900 text-white text-xs font-semibold rounded-lg hover:bg-amber-600 transition-colors"
            >
              Browse Campus Menu
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {/* List of Cart Items */}
            <div className="space-y-3">
              {cart.map(item => (
                <div
                  key={item.cartItemId}
                  className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-start justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      {item.foodItem.isVeg && (
                        <span className="w-3.5 h-3.5 rounded-xs border border-emerald-600 bg-white flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        </span>
                      )}
                      <h4 className="text-sm font-semibold text-neutral-900 truncate">
                        {item.foodItem.name}
                      </h4>
                    </div>

                    {/* Customization Details */}
                    <div className="text-[11px] text-neutral-500 mt-0.5 space-y-0.5">
                      {item.selectedSize && item.selectedSize.price > 0 && (
                        <div>Size: {item.selectedSize.name} (+₹{item.selectedSize.price})</div>
                      )}
                      {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                        <div className="text-neutral-600">
                          Add-ons: {item.selectedAddOns.map(a => a.name).join(', ')}
                        </div>
                      )}
                      {item.specialInstructions && (
                        <div className="italic text-neutral-400">"{item.specialInstructions}"</div>
                      )}
                    </div>

                    <div className="mt-2 text-xs font-bold text-neutral-900 tabular-nums">
                      ₹{item.totalPrice}{' '}
                      <span className="text-[11px] font-normal text-neutral-400">
                        (₹{item.unitPrice} each)
                      </span>
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-neutral-400 hover:text-red-500 transition-colors p-1"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center border border-neutral-300 rounded-md bg-white overflow-hidden shadow-2xs">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, -1)}
                        className="px-2 py-1 text-neutral-600 hover:bg-neutral-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-neutral-900 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, 1)}
                        className="px-2 py-1 text-neutral-600 hover:bg-neutral-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pickup Preferences in Cart (Addresses Usability finding on Pickup prominence) */}
            <div className="pt-2 border-t border-neutral-200 space-y-3">
              <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                Pickup Settings
              </span>

              {/* Pickup Location */}
              <div>
                <label className="text-[11px] text-neutral-500 font-medium flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-amber-600" />
                  <span>Pickup Location</span>
                </label>
                <select
                  value={selectedPickupLocation}
                  onChange={e => setSelectedPickupLocation(e.target.value)}
                  className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2 font-medium text-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
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
                <label className="text-[11px] text-neutral-500 font-medium flex items-center gap-1 mb-1">
                  <Clock className="w-3 h-3 text-amber-600" />
                  <span>Desired Pickup Time</span>
                </label>
                <select
                  value={selectedPickupTime}
                  onChange={e => setSelectedPickupTime(e.target.value)}
                  className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2 font-medium text-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {PICKUP_TIME_SLOTS.map(slot => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bill Summary */}
            <div className="pt-3 border-t border-neutral-200 space-y-2 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span className="tabular-nums font-semibold text-neutral-900">₹{cartSubtotal}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span className="flex items-center gap-1">
                  <span>Campus Convenience Fee</span>
                  <span title="Subsidized campus packaging fee" className="text-neutral-400">ⓘ</span>
                </span>
                <span className="tabular-nums font-semibold text-neutral-900">₹{convenienceFee}</span>
              </div>
              <div className="pt-2 border-t border-neutral-200 flex justify-between text-sm font-bold text-neutral-900">
                <span>Total</span>
                <span className="tabular-nums text-base text-amber-600">₹{cartTotal}</span>
              </div>
            </div>

            {/* Microcopy disclaimer */}
            <div className="flex items-center gap-1.5 p-2.5 bg-neutral-100 rounded-lg text-[11px] text-neutral-600">
              <Info className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              <span>Your order can be modified before checkout.</span>
            </div>
          </div>
        )}

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-neutral-200 bg-neutral-50">
            <button
              onClick={handleCheckout}
              className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 active:scale-98 text-white rounded-xl text-sm font-bold shadow-xs transition-all flex items-center justify-between"
            >
              <span>Continue to Checkout</span>
              <div className="flex items-center gap-2">
                <span className="tabular-nums text-amber-100">₹{cartTotal}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
