import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Order } from '../types';
import {
  RotateCcw,
  Clock,
  MapPin,
  CheckCircle2,
  Star,
  MessageSquare,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  X
} from 'lucide-react';

export const MyOrdersView: React.FC = () => {
  const {
    orders,
    selectOrderForTracking,
    reorder,
    submitOrderFeedback,
    setCurrentView
  } = useApp();

  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');
  const [feedbackModalOrder, setFeedbackModalOrder] = useState<Order | null>(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const activeOrders = orders.filter(o => o.status !== 'picked_up');
  const completedOrders = orders.filter(o => o.status === 'picked_up');

  const displayedOrders = activeTab === 'active' ? activeOrders : completedOrders;

  const handleOpenFeedback = (order: Order) => {
    setFeedbackModalOrder(order);
    setRating(order.feedbackRating || 5);
    setComment(order.feedbackComment || '');
  };

  const handleSubmitFeedback = () => {
    if (feedbackModalOrder) {
      submitOrderFeedback(feedbackModalOrder.id, rating, comment);
      setFeedbackModalOrder(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* Page Heading */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-neutral-200">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
            Student Account · STU1024
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            My Orders
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Track active meals and quickly repeat previous orders.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'active'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Active Orders ({activeOrders.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'completed'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Completed ({completedOrders.length})
          </button>
        </div>
      </div>

      {/* Orders List */}
      {displayedOrders.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-2xl border border-neutral-200 p-8 space-y-3">
          <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-neutral-900">
            No {activeTab} orders
          </h3>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            {activeTab === 'active'
              ? 'You do not have any orders in the kitchen queue right now.'
              : 'You have not completed any campus orders yet.'}
          </p>
          <button
            onClick={() => setCurrentView('menu')}
            className="px-5 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors"
          >
            Order from Campus Menu
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {displayedOrders.map(order => {
            const isCompleted = order.status === 'picked_up';
            const itemsSummary = order.items
              .map(i => `${i.quantity}x ${i.foodItem.name}`)
              .join(' + ');

            return (
              <div
                key={order.id}
                className="p-5 bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xs transition-all space-y-4"
              >
                {/* Order Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-100">
                  <div className="flex items-center gap-3">
                    <span className="text-base font-bold text-neutral-900">
                      #{order.id}
                    </span>
                    <span className="text-xs text-neutral-400">·</span>
                    <span className="text-xs text-neutral-500">{order.createdAt}</span>
                    <span className="text-xs text-neutral-400">·</span>
                    <span className="text-xs font-semibold text-neutral-700 uppercase">
                      {order.paymentMethod}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <div>
                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 animate-pulse">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span className="capitalize">{order.status.replace('_', ' ')}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Items & Location Details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-neutral-900 leading-snug">
                      {itemsSummary}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{order.pickupLocation}</span>
                      </span>
                      <span>·</span>
                      <span>Scheduled: {order.pickupTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
                    <div className="text-left md:text-right">
                      <span className="text-[11px] text-neutral-400 block">Total</span>
                      <span className="text-base font-bold text-neutral-900 tabular-nums">
                        ₹{order.total}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {!isCompleted ? (
                        <button
                          onClick={() => selectOrderForTracking(order.id)}
                          className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                        >
                          <span>Track Order</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <>
                          {/* Visible Reorder Button (Fulfills IMPROVEMENT 03 from Usability Findings!) */}
                          <button
                            onClick={() => reorder(order)}
                            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
                            title="1-tap reorder this past meal"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Reorder</span>
                          </button>

                          <button
                            onClick={() => handleOpenFeedback(order)}
                            className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-medium transition-colors flex items-center gap-1"
                          >
                            <Star className="w-3.5 h-3.5 text-amber-500" />
                            <span>{order.feedbackGiven ? 'View Feedback' : 'Give Feedback'}</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Show Feedback if already submitted */}
                {order.feedbackGiven && (
                  <div className="mt-2 p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start justify-between gap-3 text-xs">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < (order.feedbackRating || 5)
                                ? 'text-amber-500 fill-amber-500'
                                : 'text-neutral-300'
                            }`}
                          />
                        ))}
                        <span className="text-neutral-500 text-[11px] ml-1">Your Rating</span>
                      </div>
                      {order.feedbackComment && (
                        <p className="text-neutral-600 italic">"{order.feedbackComment}"</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Feedback Modal */}
      {feedbackModalOrder && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            className="relative bg-white w-full max-w-md rounded-2xl shadow-xl border border-neutral-200 p-6 space-y-4 animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <div>
                <h3 className="text-base font-bold text-neutral-900">
                  Feedback for #{feedbackModalOrder.id}
                </h3>
                <p className="text-xs text-neutral-500">
                  Help the campus cafeteria team improve food quality and speed.
                </p>
              </div>
              <button
                onClick={() => setFeedbackModalOrder(null)}
                className="p-1 text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Star Rating */}
            <div>
              <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider block mb-2">
                Overall Experience
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-neutral-300 hover:text-amber-400 transition-colors focus:outline-none"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating ? 'text-amber-500 fill-amber-500' : 'text-neutral-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-neutral-700 ml-2">
                  {rating === 5 ? 'Excellent' : rating === 4 ? 'Good' : rating === 3 ? 'Average' : 'Needs Work'}
                </span>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider block mb-1.5">
                Comments or Suggestions
              </label>
              <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                rows={3}
                placeholder="How was the food temperature, packaging, and pickup speed?"
                className="w-full text-xs p-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                onClick={() => setFeedbackModalOrder(null)}
                className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitFeedback}
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
