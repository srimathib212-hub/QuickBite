import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PICKUP_LOCATIONS } from '../data/mockData';
import {
  User,
  CreditCard,
  Bell,
  MapPin,
  ShieldCheck,
  Wallet,
  Save,
  Plus
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { user, updateProfile, showToast } = useApp();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [savedLocation, setSavedLocation] = useState(user.savedLocation);
  const [orderSms, setOrderSms] = useState(user.notificationPreferences.orderStatusSms);
  const [pickupReminder, setPickupReminder] = useState(user.notificationPreferences.pickupReminder);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name,
      email,
      phone,
      savedLocation,
      notificationPreferences: {
        ...user.notificationPreferences,
        orderStatusSms: orderSms,
        pickupReminder
      }
    });
  };

  const handleReloadWallet = () => {
    updateProfile({ walletBalance: user.walletBalance + 200 });
    showToast('Added ₹200 to your Campus Wallet (STU1024)! 💳');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="pb-4 border-b border-neutral-200">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
          Student ID Card & Preferences
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Student Profile
        </h1>
        <p className="text-xs text-neutral-500 mt-1">
          Manage your campus dining account, wallet balance, and notification alerts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: ID Card / Wallet */}
        <div className="space-y-4">
          <div className="p-5 bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-950 text-white rounded-2xl shadow-md border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                QuickBite Campus Pass
              </span>
              <span className="text-xs font-mono text-neutral-400">{user.studentId}</span>
            </div>

            <div>
              <span className="text-xs text-neutral-400 block">Student Name</span>
              <h2 className="text-lg font-bold text-white">{user.name}</h2>
              <p className="text-xs text-neutral-300">{user.campus}</p>
            </div>

            <div className="pt-2 border-t border-neutral-700/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-neutral-400 block uppercase">Wallet Balance</span>
                <span className="text-xl font-bold text-amber-400 tabular-nums">
                  ₹{user.walletBalance}
                </span>
              </div>
              <button
                type="button"
                onClick={handleReloadWallet}
                className="px-2.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1 shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add ₹200</span>
              </button>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-neutral-200 text-xs space-y-2 text-neutral-600">
            <div className="flex items-center gap-2 font-semibold text-neutral-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Campus Verified</span>
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Your student ID is linked with Central Dining Services for instant cafeteria checkout.
            </p>
          </div>
        </div>

        {/* Right Column: Editable Profile Settings */}
        <div className="md:col-span-2">
          <form onSubmit={handleSave} className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-2xs space-y-5">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider pb-2 border-b border-neutral-100">
              Account Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-neutral-700 block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full p-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="font-semibold text-neutral-700 block mb-1.5">
                  Student ID
                </label>
                <input
                  type="text"
                  value={user.studentId}
                  disabled
                  className="w-full p-2.5 bg-neutral-100 border border-neutral-200 rounded-lg text-neutral-500 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="font-semibold text-neutral-700 block mb-1.5">
                  Campus Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full p-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="font-semibold text-neutral-700 block mb-1.5">
                  Mobile Phone
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full p-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Saved Location */}
            <div className="pt-2 text-xs">
              <label className="font-semibold text-neutral-700 block mb-1.5">
                Default Pickup Location
              </label>
              <select
                value={savedLocation}
                onChange={e => setSavedLocation(e.target.value)}
                className="w-full p-2.5 border border-neutral-300 rounded-lg font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {PICKUP_LOCATIONS.map(loc => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Notifications */}
            <div className="pt-3 border-t border-neutral-100 space-y-3">
              <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                Order Notifications
              </span>

              <label className="flex items-center gap-3 cursor-pointer text-xs text-neutral-700">
                <input
                  type="checkbox"
                  checked={orderSms}
                  onChange={e => setOrderSms(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
                />
                <span>SMS alerts when order status changes to "Preparing" & "Ready"</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer text-xs text-neutral-700">
                <input
                  type="checkbox"
                  checked={pickupReminder}
                  onChange={e => setPickupReminder(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
                />
                <span>5-minute pickup countdown reminder before designated time slot</span>
              </label>
            </div>

            {/* Submit */}
            <div className="pt-3 border-t border-neutral-100 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};
