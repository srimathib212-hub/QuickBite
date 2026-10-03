import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FoodDetailModal } from './components/FoodDetailModal';
import { HelpModal } from './components/HelpModal';
import { Toast } from './components/Toast';

import { HomeView } from './views/HomeView';
import { MenuView } from './views/MenuView';
import { CheckoutView } from './views/CheckoutView';
import { OrderConfirmationView } from './views/OrderConfirmationView';
import { OrderTrackingView } from './views/OrderTrackingView';
import { MyOrdersView } from './views/MyOrdersView';
import { ProfileView } from './views/ProfileView';
import { UsabilityTestingView } from './views/UsabilityTestingView';
import { DesignIterationView } from './views/DesignIterationView';
import { UsabilityReportView } from './views/UsabilityReportView';

const MainContent: React.FC = () => {
  const { currentView } = useApp();

  return (
    <main className="flex-1">
      {currentView === 'home' && <HomeView />}
      {currentView === 'menu' && <MenuView />}
      {currentView === 'checkout' && <CheckoutView />}
      {currentView === 'confirmation' && <OrderConfirmationView />}
      {currentView === 'tracking' && <OrderTrackingView />}
      {currentView === 'orders' && <MyOrdersView />}
      {currentView === 'profile' && <ProfileView />}
      {currentView === 'usability' && <UsabilityTestingView />}
      {currentView === 'iteration' && <DesignIterationView />}
      {currentView === 'report' && <UsabilityReportView />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-neutral-50/70 text-neutral-900 selection:bg-amber-100 selection:text-amber-900">
        <Header />
        <MainContent />
        <Footer />
        <CartDrawer />
        <FoodDetailModal />
        <HelpModal />
        <Toast />
      </div>
    </AppProvider>
  );
}
