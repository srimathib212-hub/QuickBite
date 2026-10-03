import React, { useState } from 'react';
import { useApp, AppView } from '../context/AppContext';
import {
  ShoppingBag,
  User,
  Search,
  Menu as MenuIcon,
  X,
  CheckCircle2,
  HelpCircle,
  FlaskConical,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    cartItemsCount,
    setIsCartDrawerOpen,
    activeTestTask,
    completeTaskRunner,
    dismissTaskRunner,
    setIsHelpOpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: AppView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Usability Test Guided Task Overlay Banner if user clicked "Run this Scenario" */}
      {activeTestTask && (
        <aside aria-label="UX Usability Testing Active Scenario" className="bg-amber-500 text-neutral-950 px-4 py-2 text-xs md:text-sm font-medium border-b border-amber-600 transition-all shadow-xs">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-neutral-900 text-amber-300 text-xs px-2 py-0.5 rounded-sm font-semibold tracking-wide uppercase">
                {activeTestTask.taskNumber} Active Test
              </span>
              <span className="font-semibold text-neutral-900">{activeTestTask.scenarioTitle}:</span>
              <span className="text-neutral-800 line-clamp-1">{activeTestTask.taskDescription}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <button
                onClick={completeTaskRunner}
                className="flex items-center gap-1.5 bg-neutral-950 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mark Task Completed</span>
              </button>
              <button
                onClick={dismissTaskRunner}
                className="text-xs text-neutral-900 underline underline-offset-2 hover:text-black px-1.5 py-1"
              >
                Exit Test Mode
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Top Bar Contract (3 zones) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Zone 1: Wordmark Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('home')}
              className="text-left group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
            >
              <span className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-white text-lg shadow-xs group-hover:bg-amber-600 transition-colors">
                Q
              </span>
              <div>
                <span className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-amber-600 transition-colors">
                  QuickBite
                </span>
                <span className="hidden sm:inline-block ml-2 text-xs text-neutral-500 font-medium border-l border-neutral-300 pl-2">
                  Campus Cafeteria
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => handleNav('home')}
              className={`transition-colors hover:text-neutral-900 pb-0.5 ${
                currentView === 'home'
                  ? 'text-amber-600 border-b-2 border-amber-500 font-semibold'
                  : 'text-neutral-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('menu')}
              className={`transition-colors hover:text-neutral-900 pb-0.5 ${
                currentView === 'menu'
                  ? 'text-amber-600 border-b-2 border-amber-500 font-semibold'
                  : 'text-neutral-600'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => handleNav('orders')}
              className={`transition-colors hover:text-neutral-900 pb-0.5 ${
                currentView === 'orders' || currentView === 'tracking' || currentView === 'confirmation'
                  ? 'text-amber-600 border-b-2 border-amber-500 font-semibold'
                  : 'text-neutral-600'
              }`}
            >
              My Orders
            </button>
            
            {/* UX Usability Testing Section links (Internship Task highlight) */}
            <div className="h-4 w-px bg-neutral-300" aria-hidden="true" />

            <button
              onClick={() => handleNav('usability')}
              className={`flex items-center gap-1.5 transition-colors hover:text-neutral-900 pb-0.5 ${
                currentView === 'usability'
                  ? 'text-emerald-700 border-b-2 border-emerald-600 font-semibold'
                  : 'text-emerald-700 hover:text-emerald-800'
              }`}
            >
              <FlaskConical className="w-4 h-4 text-emerald-600" />
              <span>Usability Testing</span>
            </button>

            <button
              onClick={() => handleNav('iteration')}
              className={`transition-colors hover:text-neutral-900 pb-0.5 ${
                currentView === 'iteration'
                  ? 'text-amber-600 border-b-2 border-amber-500 font-semibold'
                  : 'text-neutral-600'
              }`}
            >
              Design Iteration
            </button>

            <button
              onClick={() => handleNav('report')}
              className={`transition-colors hover:text-neutral-900 pb-0.5 ${
                currentView === 'report'
                  ? 'text-amber-600 border-b-2 border-amber-500 font-semibold'
                  : 'text-neutral-600'
              }`}
            >
              UX Report
            </button>
          </nav>

          {/* Zone 3: Actions (Search, Cart, Profile, Mobile Menu) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                handleNav('menu');
              }}
              title="Search menu"
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Search campus menu"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsHelpOpen(true)}
              title="Campus Help & FAQs"
              className="hidden sm:flex p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Help and cafeteria rules"
            >
              <HelpCircle className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="relative p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={`Shopping Cart with ${cartItemsCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in-50 duration-200">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNav('profile')}
              className={`p-1.5 sm:px-3 sm:py-1.5 text-xs font-medium rounded-full sm:rounded-lg border transition-all flex items-center gap-2 ${
                currentView === 'profile'
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
              }`}
              aria-label="Student Account Profile"
            >
              <User className="w-4 h-4 text-amber-600" />
              <span className="hidden md:inline font-medium">Alex K. (STU1024)</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors ml-1"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => handleNav('home')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                currentView === 'home' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('menu')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                currentView === 'menu' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => handleNav('orders')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                currentView === 'orders' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              My Orders & History
            </button>

            <div className="pt-2 border-t border-neutral-200">
              <span className="px-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                UX Usability Internship
              </span>
              <button
                onClick={() => handleNav('usability')}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
                  currentView === 'usability' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-emerald-700 hover:bg-emerald-50/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-emerald-600" />
                  Usability Testing & Analysis
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleNav('iteration')}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                  currentView === 'iteration' ? 'bg-neutral-100 text-neutral-900 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                Design Iteration (V1 vs V2)
              </button>
              <button
                onClick={() => handleNav('report')}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                  currentView === 'report' ? 'bg-neutral-100 text-neutral-900 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                Usability Testing Report
              </button>
            </div>

            <div className="pt-2 border-t border-neutral-200 flex justify-between items-center px-3 py-2">
              <button
                onClick={() => {
                  setIsHelpOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Cafeteria Help & FAQ</span>
              </button>
              <span className="text-xs text-neutral-400">ID: STU1024</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
