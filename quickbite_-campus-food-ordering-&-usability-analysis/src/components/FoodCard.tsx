import React, { useState } from 'react';
import { FoodItem } from '../types';
import { useApp } from '../context/AppContext';
import { Star, Clock, Plus, Utensils } from 'lucide-react';

interface FoodCardProps {
  item: FoodItem;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const { openFoodDetail, addToCart } = useApp();
  const [imageError, setImageError] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    // If it has required customizations or options, open detail modal
    if (item.addOns && item.addOns.length > 0) {
      openFoodDetail(item);
    } else {
      addToCart(item, 1, item.sizeOptions?.[0], []);
    }
  };

  return (
    <div
      onClick={() => openFoodDetail(item)}
      className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col h-full"
    >
      {/* Food Image Container with 4:3 Aspect Ratio and Zero-Broken-Image fallback */}
      <div className="relative aspect-4/3 w-full bg-neutral-100 overflow-hidden">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-neutral-100 p-4 text-center">
            <Utensils className="w-8 h-8 text-amber-500 mb-2" />
            <span className="text-xs font-medium text-neutral-600">{item.name}</span>
          </div>
        )}

        {/* Veg indicator & prep time tag */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          {item.isVeg && (
            <span
              className="w-4 h-4 rounded-xs border border-emerald-600 bg-white/95 flex items-center justify-center shadow-xs"
              title="Vegetarian"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
            </span>
          )}
        </div>

        {/* Prep Time */}
        <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span className="tabular-nums">{item.prepTimeMinutes}m</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-base font-semibold text-neutral-900 group-hover:text-amber-600 transition-colors line-clamp-1">
              {item.name}
            </h3>
            <div className="flex items-center gap-1 text-xs font-semibold text-neutral-700 shrink-0">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="tabular-nums">{item.rating}</span>
            </div>
          </div>

          <p className="text-xs text-neutral-500 line-clamp-2 mb-3 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Footer: Price and Add button */}
        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] text-neutral-400 font-medium">Campus Price</span>
            <span className="text-base font-bold text-neutral-900 tabular-nums">
              ₹{item.price}
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 text-white hover:bg-amber-600 active:scale-95 transition-all shadow-xs"
            aria-label={`Add ${item.name} to cart for ₹${item.price}`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{item.addOns && item.addOns.length > 0 ? 'Customize' : 'Add'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
