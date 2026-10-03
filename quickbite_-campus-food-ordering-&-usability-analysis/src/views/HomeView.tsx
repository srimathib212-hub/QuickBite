import React from 'react';
import { useApp } from '../context/AppContext';
import { HERO_IMAGE, FOOD_ITEMS } from '../data/mockData';
import { FoodCard } from '../components/FoodCard';
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  Sparkles,
  FlaskConical,
  UtensilsCrossed,
  ShieldCheck,
  TrendingUp,
  FileText
} from 'lucide-react';

const CATEGORIES = [
  { id: 'burgers', label: 'Burgers', icon: '🍔', desc: 'Brioche & veggie patties' },
  { id: 'snacks', label: 'Snacks', icon: '🍕', desc: 'Wraps, fries & chaat' },
  { id: 'meals', label: 'Meals', icon: '🍚', desc: 'Rice bowls & dosas' },
  { id: 'sandwiches', label: 'Sandwiches', icon: '🥪', desc: 'Grilled multigrain' },
  { id: 'beverages', label: 'Beverages', icon: '🥤', desc: 'Cold coffee & chai' },
  { id: 'desserts', label: 'Desserts', icon: '🍰', desc: 'Brownies & fresh fruits' }
];

export const HomeView: React.FC = () => {
  const { setCurrentView, setSelectedCategory } = useApp();

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentView('menu');
  };

  const popularItems = FOOD_ITEMS.filter(item => item.popular).slice(0, 6);

  return (
    <div className="space-y-16 py-6 sm:py-10">
      
      {/* Portfolio Internship Callout Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 via-neutral-900 to-amber-950 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                UI/UX Internship Task
              </span>
              <span className="text-xs text-neutral-400">Usability Testing & Analysis</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              Evaluating QuickBite: Live Usability Testing & Iterative Redesign
            </h2>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Explore the complete UX testing process with test plans, 5 sample participant observations, usability metrics (86% completion), and Before → After redesign improvements.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => setCurrentView('usability')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>View UX Research Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentView('iteration')}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-medium transition-colors"
            >
              Compare V1 vs V2
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs text-amber-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Campus Dining Made Effortless</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Good food. <br />
              <span className="text-amber-600">Less waiting.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
              Order your favorite campus meals ahead of time and pick them up when they're ready. Skip the long cafeteria rush between lectures.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setCurrentView('menu');
                }}
                className="px-6 py-3.5 bg-neutral-900 hover:bg-amber-600 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setCurrentView('menu');
                }}
                className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-xl text-sm font-semibold transition-colors"
              >
                Explore Menu
              </button>
            </div>

            {/* Value Props */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-neutral-200 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-neutral-900 block">10–15 Min</span>
                <span className="text-neutral-500">Fast Kitchen Prep</span>
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-neutral-900 block">STU1024</span>
                <span className="text-neutral-500">Campus Wallet 0% Fee</span>
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-neutral-900 block">4.8 ★ Rating</span>
                <span className="text-neutral-500">Student Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-100 aspect-4/3 group">
              <img
                src={HERO_IMAGE}
                alt="Fresh campus cafeteria food spread"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/50 text-neutral-900 shadow-md w-full flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold">
                      QB
                    </span>
                    <div>
                      <h3 className="text-xs font-bold text-neutral-900">Main Campus Cafeteria</h3>
                      <p className="text-[11px] text-neutral-500">Live Queue: Low · 8 mins avg pickup</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Open Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's on your mind? Food Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              What's on your mind?
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Select a favorite category for instant campus ordering
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setCurrentView('menu');
            }}
            className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 group"
          >
            <span>See All Categories</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className="group p-4 bg-white rounded-xl border border-neutral-200 hover:border-amber-400 hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <span className="text-3xl mb-3 block transform group-hover:scale-110 transition-transform">
                {cat.icon}
              </span>
              <div>
                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                  {cat.label}
                </h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">{cat.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Popular on Campus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Student Favorites
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              Popular on Campus
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              High-frequency lunch and snack picks ordered daily by college students.
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setCurrentView('menu');
            }}
            className="text-xs font-semibold text-neutral-900 hover:text-amber-600 flex items-center gap-1"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Usability Testing Internship Section Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-10 border border-neutral-800">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-wider uppercase text-amber-400">
              Academic Assignment · UI/UX Internship
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Usability Testing & Empirical UX Analysis
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              "Conduct usability testing on a digital product and analyze results."
              QuickBite integrates the entire research lifecycle: 5 sample moderated testing sessions, qualitative observations, issue severities, and the iterative design evolution from Version 1 to Version 2.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                <span className="text-2xl font-bold text-white tabular-nums">86%</span>
                <span className="text-xs text-neutral-400 block mt-0.5">Completion Rate</span>
              </div>
              <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                <span className="text-2xl font-bold text-white tabular-nums">48s</span>
                <span className="text-xs text-neutral-400 block mt-0.5">Avg Time on Task</span>
              </div>
              <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                <span className="text-2xl font-bold text-white tabular-nums">14%</span>
                <span className="text-xs text-neutral-400 block mt-0.5">Error Rate</span>
              </div>
              <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                <span className="text-2xl font-bold text-amber-400 tabular-nums">4.2 / 5</span>
                <span className="text-xs text-neutral-400 block mt-0.5">User Satisfaction</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setCurrentView('usability')}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-xl text-xs flex items-center gap-2 transition-colors"
              >
                <span>Read Full UX Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentView('iteration')}
                className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Explore Before/After Iteration
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
