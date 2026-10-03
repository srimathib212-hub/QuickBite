import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { FoodCard } from '../components/FoodCard';
import { Search, SlidersHorizontal, Utensils, X, Check } from 'lucide-react';

type SortOption = 'popular' | 'price-low' | 'price-high' | 'fast-prep' | 'rating';

export const MenuView: React.FC = () => {
  const {
    foodItems,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory
  } = useApp();

  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [onlyVeg, setOnlyVeg] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'meals', label: 'Meals' },
    { id: 'snacks', label: 'Snacks' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'sandwiches', label: 'Sandwiches' },
    { id: 'beverages', label: 'Beverages' },
    { id: 'desserts', label: 'Desserts' }
  ];

  const filteredItems = useMemo(() => {
    return foodItems
      .filter(item => {
        // Category filter
        if (selectedCategory !== 'all' && item.category !== selectedCategory) {
          return false;
        }
        // Veg toggle
        if (onlyVeg && !item.isVeg) {
          return false;
        }
        // Max price filter (useful for Task 01: "find vegetarian meal under ₹100")
        if (maxPrice !== null && item.price > maxPrice) {
          return false;
        }
        // Search query
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(query);
          const matchDesc = item.description.toLowerCase().includes(query);
          const matchIngredients = item.ingredients?.some(i => i.toLowerCase().includes(query));
          if (!matchName && !matchDesc && !matchIngredients) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'fast-prep') return a.prepTimeMinutes - b.prepTimeMinutes;
        // popular
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      });
  }, [foodItems, selectedCategory, onlyVeg, maxPrice, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Kitchen Operational · Counter 1 & 2
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            Campus Menu
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            Fresh favorites, ready when you are.
          </p>
        </div>

        {/* Quick filter shortcut: Under ₹100 */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMaxPrice(maxPrice === 100 ? null : 100)}
            className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
              maxPrice === 100
                ? 'bg-amber-100 border-amber-400 text-amber-900 font-semibold'
                : 'bg-white border-neutral-300 text-neutral-700 hover:border-neutral-400'
            }`}
          >
            {maxPrice === 100 ? '✓ Meals Under ₹100' : 'Budget: Under ₹100'}
          </button>

          <button
            onClick={() => setOnlyVeg(!onlyVeg)}
            className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all flex items-center gap-1.5 ${
              onlyVeg
                ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold'
                : 'bg-white border-neutral-300 text-neutral-700 hover:border-neutral-400'
            }`}
          >
            <span
              className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center ${
                onlyVeg ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-neutral-400'
              }`}
            >
              {onlyVeg && <Check className="w-2.5 h-2.5 stroke-[3]" />}
            </span>
            <span>Veg Only</span>
          </button>
        </div>
      </div>

      {/* Controls: Search, Categories, Sort */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search bar */}
          <div className="md:col-span-8 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search for food, wraps, dosa, coffee, ingredients..."
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-neutral-300 rounded-xl text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort selector */}
          <div className="md:col-span-4 flex items-center gap-2">
            <span className="text-xs text-neutral-500 font-medium shrink-0 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortOption)}
              className="w-full text-xs bg-white border border-neutral-300 rounded-xl p-2.5 text-neutral-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
            >
              <option value="popular">Popular on Campus</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="fast-prep">Fast Prep (&lt;10 min)</option>
              <option value="rating">Top Rated (★)</option>
            </select>
          </div>
        </div>

        {/* Category Horizontal Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Food Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-2xl border border-neutral-200 p-8">
          <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400 mb-3">
            <Utensils className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-neutral-900 mb-1">No items found</h3>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-4">
            We couldn't find anything matching your filters. Try clearing your search query or price threshold.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setOnlyVeg(false);
              setMaxPrice(null);
            }}
            className="px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-lg hover:bg-neutral-800"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
            <span>
              Showing <span className="font-semibold text-neutral-800">{filteredItems.length}</span> items
            </span>
            {maxPrice && (
              <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Filtered: Under ₹{maxPrice}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
