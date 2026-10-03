import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { FoodCustomizationOption } from '../types';
import { X, Star, Clock, Plus, Minus, Check, Sparkles, Utensils } from 'lucide-react';

export const FoodDetailModal: React.FC = () => {
  const { selectedFoodForDetail, closeFoodDetail, addToCart } = useApp();
  const item = selectedFoodForDetail;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<FoodCustomizationOption | undefined>(undefined);
  const [selectedAddOns, setSelectedAddOns] = useState<FoodCustomizationOption[]>([]);
  const [notes, setNotes] = useState('');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (item) {
      setQuantity(1);
      setSelectedSize(item.sizeOptions?.[0]);
      setSelectedAddOns([]);
      setNotes('');
      setImgError(false);
    }
  }, [item]);

  if (!item) return null;

  const handleToggleAddOn = (addon: FoodCustomizationOption) => {
    setSelectedAddOns(prev => {
      const exists = prev.find(a => a.id === addon.id);
      if (exists) {
        return prev.filter(a => a.id !== addon.id);
      } else {
        return [...prev, addon];
      }
    });
  };

  const sizePrice = selectedSize ? selectedSize.price : 0;
  const addOnsTotal = selectedAddOns.reduce((acc, curr) => acc + curr.price, 0);
  const unitPrice = item.price + sizePrice + addOnsTotal;
  const totalPrice = unitPrice * quantity;

  const handleAddAndClose = () => {
    addToCart(item, quantity, selectedSize, selectedAddOns, notes.trim() || undefined);
    closeFoodDetail();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="food-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-6 animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeFoodDetail}
          className="absolute top-3 right-3 z-10 p-2 bg-neutral-900/70 hover:bg-neutral-900 text-white rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label="Close food details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Food Image */}
        <div className="relative aspect-16/9 w-full bg-neutral-100 overflow-hidden">
          {!imgError ? (
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-amber-50">
              <Utensils className="w-12 h-12 text-amber-500" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-1">
                {item.isVeg && (
                  <span className="w-4 h-4 rounded-xs border border-emerald-400 bg-white/95 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  </span>
                )}
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  {item.category}
                </span>
                <span className="text-neutral-300">·</span>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="tabular-nums font-semibold">{item.rating}</span>
                </div>
                <span className="text-neutral-300">·</span>
                <div className="flex items-center gap-1 text-xs">
                  <Clock className="w-3.5 h-3.5 text-neutral-300" />
                  <span className="tabular-nums">{item.prepTimeMinutes} mins prep</span>
                </div>
              </div>
              <h2 id="food-modal-title" className="text-2xl font-bold tracking-tight">
                {item.name}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-5">
          {/* Description */}
          <div>
            <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
          </div>

          {/* Ingredients list */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
              <span className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block mb-1.5">
                Ingredients & Fresh Prep
              </span>
              <p className="text-xs text-neutral-500 leading-normal">
                {item.ingredients.join(' · ')}
              </p>
            </div>
          )}

          {/* Section: Customization (Addresses Usability Task 02 & Improvement 01) */}
          <div className="pt-2 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                <span>Customize your order</span>
                <span className="text-xs font-normal text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Step 1 of 2
                </span>
              </span>
            </div>

            {/* Size selection */}
            {item.sizeOptions && item.sizeOptions.length > 0 && (
              <div className="mb-4">
                <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider block mb-2">
                  Select Size
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {item.sizeOptions.map(size => {
                    const isSelected = selectedSize?.id === size.id;
                    return (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`flex items-center justify-between p-3 rounded-lg border text-xs font-medium transition-all ${
                          isSelected
                            ? 'border-amber-600 bg-amber-50/50 text-neutral-900 ring-1 ring-amber-500'
                            : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-amber-600' : 'border-neutral-400'
                            }`}
                          >
                            {isSelected && <span className="w-2 h-2 rounded-full bg-amber-600" />}
                          </span>
                          <span>{size.name}</span>
                        </div>
                        <span className="tabular-nums font-semibold text-neutral-900">
                          {size.price > 0 ? `+₹${size.price}` : 'Default'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Add-ons list */}
            {item.addOns && item.addOns.length > 0 && (
              <div>
                <label className="text-xs font-semibold text-neutral-600 uppercase tracking-wider block mb-2">
                  Add-ons & Extras
                </label>
                <div className="space-y-2">
                  {item.addOns.map(addon => {
                    const isChecked = selectedAddOns.some(a => a.id === addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => handleToggleAddOn(addon)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg border text-xs transition-all ${
                          isChecked
                            ? 'border-amber-600 bg-amber-50/40 text-neutral-900'
                            : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                              isChecked
                                ? 'bg-amber-600 border-amber-600 text-white'
                                : 'border-neutral-400 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                          <span className="font-medium">{addon.name}</span>
                        </div>
                        <span className="tabular-nums font-semibold text-neutral-900">
                          +₹{addon.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Special Instructions */}
          <div>
            <label
              htmlFor="special-notes"
              className="text-xs font-semibold text-neutral-600 uppercase tracking-wider block mb-1.5"
            >
              Special Instructions
            </label>
            <input
              id="special-notes"
              type="text"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="e.g. Less spicy, extra napkins, separate packaging..."
              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between gap-3">
          {/* Quantity Controls */}
          <div className="flex items-center border border-neutral-300 rounded-lg bg-white overflow-hidden shadow-xs">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="p-2 text-neutral-600 hover:bg-neutral-100 disabled:opacity-40 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center text-sm font-bold text-neutral-900 tabular-nums">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 text-neutral-600 hover:bg-neutral-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={handleAddAndClose}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-amber-600 hover:bg-amber-700 active:scale-98 text-white rounded-xl text-sm font-bold shadow-xs transition-all"
          >
            <span>Add to Cart</span>
            <span className="text-amber-200">·</span>
            <span className="tabular-nums">₹{totalPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
