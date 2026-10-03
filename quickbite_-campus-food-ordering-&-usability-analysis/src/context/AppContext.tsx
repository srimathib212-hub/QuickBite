import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  FoodItem,
  CartItem,
  Order,
  UserProfile,
  TestScenario,
  FoodCustomizationOption,
  OrderStatus
} from '../types';
import {
  FOOD_ITEMS,
  INITIAL_USER,
  INITIAL_ORDERS,
  PICKUP_LOCATIONS,
  PICKUP_TIME_SLOTS,
  TEST_SCENARIOS
} from '../data/mockData';

export type AppView =
  | 'home'
  | 'menu'
  | 'checkout'
  | 'confirmation'
  | 'tracking'
  | 'orders'
  | 'profile'
  | 'usability'
  | 'iteration'
  | 'report';

interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  // Food items & search
  foodItems: FoodItem[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  // Food modal
  selectedFoodForDetail: FoodItem | null;
  openFoodDetail: (item: FoodItem) => void;
  closeFoodDetail: () => void;
  // Cart
  cart: CartItem[];
  addToCart: (
    item: FoodItem,
    quantity: number,
    size?: FoodCustomizationOption,
    addOns?: FoodCustomizationOption[],
    notes?: string
  ) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  cartSubtotal: number;
  convenienceFee: number;
  cartTotal: number;
  cartItemsCount: number;
  selectedPickupLocation: string;
  setSelectedPickupLocation: (loc: string) => void;
  selectedPickupTime: string;
  setSelectedPickupTime: (time: string) => void;
  // Orders
  orders: Order[];
  activeOrder: Order | null;
  placeOrder: (paymentMethod: 'upi' | 'card' | 'wallet' | 'cash') => Order;
  reorder: (order: Order) => void;
  advanceOrderStatus: (orderId: string) => void;
  submitOrderFeedback: (orderId: string, rating: number, comment: string) => void;
  selectOrderForTracking: (orderId: string) => void;
  // Profile
  user: UserProfile;
  updateProfile: (updated: Partial<UserProfile>) => void;
  // Usability Task Runner
  activeTestTask: TestScenario | null;
  startTaskRunner: (task: TestScenario) => void;
  completeTaskRunner: () => void;
  dismissTaskRunner: () => void;
  // Iteration V1 vs V2
  checkoutDesignVersion: 'v1' | 'v2';
  setCheckoutDesignVersion: (v: 'v1' | 'v2') => void;
  // Help & Modals
  isHelpOpen: boolean;
  setIsHelpOpen: (open: boolean) => void;
  // Toasts
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [foodItems] = useState<FoodItem[]>(FOOD_ITEMS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [selectedFoodForDetail, setSelectedFoodForDetail] = useState<FoodItem | null>(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Cart persistence in localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('quickbite_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedPickupLocation, setSelectedPickupLocation] = useState(PICKUP_LOCATIONS[0]);
  const [selectedPickupTime, setSelectedPickupTime] = useState(PICKUP_TIME_SLOTS[1]); // 12:30 PM default

  // Orders persistence in localStorage
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('quickbite_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  const [activeOrderId, setActiveOrderId] = useState<string | null>(() => {
    return INITIAL_ORDERS.length > 0 ? INITIAL_ORDERS[0].id : null;
  });

  // User Profile
  const [user, setUser] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('quickbite_user');
      return saved ? JSON.parse(saved) : INITIAL_USER;
    } catch {
      return INITIAL_USER;
    }
  });

  // UX Usability Guided Task Runner
  const [activeTestTask, setActiveTestTask] = useState<TestScenario | null>(null);

  // Checkout comparison version (V1: Original vs V2: Improved)
  const [checkoutDesignVersion, setCheckoutDesignVersion] = useState<'v1' | 'v2'>('v2');

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('quickbite_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('quickbite_orders', JSON.stringify(orders));
    } catch {
      // ignore
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('quickbite_user', JSON.stringify(user));
    } catch {
      // ignore
    }
  }, [user]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const openFoodDetail = (item: FoodItem) => {
    setSelectedFoodForDetail(item);
  };

  const closeFoodDetail = () => {
    setSelectedFoodForDetail(null);
  };

  const addToCart = (
    item: FoodItem,
    quantity: number,
    size?: FoodCustomizationOption,
    addOns: FoodCustomizationOption[] = [],
    notes?: string
  ) => {
    const sizeExtra = size ? size.price : 0;
    const addOnsExtra = addOns.reduce((acc, curr) => acc + curr.price, 0);
    const unitPrice = item.price + sizeExtra + addOnsExtra;
    const totalPrice = unitPrice * quantity;

    const cartItemId = `${item.id}-${size?.id || 'standard'}-${addOns.map(a => a.id).sort().join('-')}-${notes || 'none'}`;

    setCart(prev => {
      const existingIdx = prev.findIndex(c => c.cartItemId === cartItemId);
      if (existingIdx > -1) {
        const next = [...prev];
        const newQty = next[existingIdx].quantity + quantity;
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: newQty,
          totalPrice: next[existingIdx].unitPrice * newQty
        };
        return next;
      } else {
        const newItem: CartItem = {
          cartItemId,
          foodItem: item,
          quantity,
          selectedSize: size,
          selectedAddOns: addOns,
          specialInstructions: notes,
          unitPrice,
          totalPrice
        };
        return [...prev, newItem];
      }
    });

    showToast(`Added ${quantity}x ${item.name} to cart`);
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.cartItemId === cartItemId) {
            const nextQty = item.quantity + delta;
            if (nextQty <= 0) return null;
            return {
              ...item,
              quantity: nextQty,
              totalPrice: item.unitPrice * nextQty
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartSubtotal = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const convenienceFee = cart.length > 0 ? 5 : 0;
  const cartTotal = cartSubtotal + convenienceFee;
  const cartItemsCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const placeOrder = (paymentMethod: 'upi' | 'card' | 'wallet' | 'cash'): Order => {
    const orderNum = Math.floor(1000 + Math.random() * 9000);
    const newOrder: Order = {
      id: `QB${orderNum}`,
      items: [...cart],
      subtotal: cartSubtotal,
      convenienceFee,
      total: cartTotal,
      pickupLocation: selectedPickupLocation,
      pickupTime: selectedPickupTime,
      paymentMethod,
      status: 'placed',
      createdAt: 'Just now',
      estimatedPickupTime: selectedPickupTime.includes('ASAP') ? '15–20 min' : selectedPickupTime
    };

    // If wallet was used, deduct balance
    if (paymentMethod === 'wallet') {
      setUser(prev => ({
        ...prev,
        walletBalance: Math.max(0, prev.walletBalance - cartTotal)
      }));
    }

    setOrders(prev => [newOrder, ...prev]);
    setActiveOrderId(newOrder.id);
    clearCart();
    setIsCartDrawerOpen(false);
    setCurrentView('confirmation');
    showToast(`Order #${newOrder.id} placed successfully! 🎉`);

    // If active test task was TASK-03, notify success
    if (activeTestTask?.id === 'TASK-03') {
      showToast('Task 03 completed: Order successfully placed!', 'success');
    }

    return newOrder;
  };

  const reorder = (order: Order) => {
    setCart(prev => {
      // Combine or replace
      return [...order.items];
    });
    showToast(`Reordered ${order.items.length} items from #${order.id}`);
    setCurrentView('checkout');
    if (activeTestTask?.id === 'TASK-05') {
      showToast('Task 05 completed: Reorder started!', 'success');
    }
  };

  const advanceOrderStatus = (orderId: string) => {
    const sequence: OrderStatus[] = ['placed', 'preparing', 'ready', 'picked_up'];
    setOrders(prev =>
      prev.map(ord => {
        if (ord.id === orderId) {
          const currentIndex = sequence.indexOf(ord.status);
          const nextIndex = (currentIndex + 1) % sequence.length;
          const nextStatus = sequence[nextIndex];
          showToast(`Order #${ord.id} status updated to: ${nextStatus.replace('_', ' ').toUpperCase()}`);
          return { ...ord, status: nextStatus };
        }
        return ord;
      })
    );
  };

  const submitOrderFeedback = (orderId: string, rating: number, comment: string) => {
    setOrders(prev =>
      prev.map(ord => {
        if (ord.id === orderId) {
          return {
            ...ord,
            feedbackGiven: true,
            feedbackRating: rating,
            feedbackComment: comment
          };
        }
        return ord;
      })
    );
    showToast('Thank you for your cafeteria feedback! ⭐');
  };

  const selectOrderForTracking = (orderId: string) => {
    setActiveOrderId(orderId);
    setCurrentView('tracking');
    if (activeTestTask?.id === 'TASK-04') {
      showToast('Task 04 completed: Reached order tracking!', 'success');
    }
  };

  const updateProfile = (updated: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...updated }));
    showToast('Profile settings saved');
  };

  // Usability task runner helper
  const startTaskRunner = (task: TestScenario) => {
    setActiveTestTask(task);
    if (task.id === 'TASK-01') {
      setCurrentView('menu');
      setSelectedCategory('meals');
    } else if (task.id === 'TASK-02') {
      setCurrentView('menu');
      const paneer = foodItems.find(f => f.id === 'paneer-wrap');
      if (paneer) openFoodDetail(paneer);
    } else if (task.id === 'TASK-03') {
      if (cart.length === 0) {
        // add default item to let them test checkout smoothly
        const paneer = foodItems[0];
        addToCart(paneer, 1, paneer.sizeOptions?.[0], [{ id: 'sauce', name: 'Extra Sauce', price: 10 }]);
      }
      setCurrentView('checkout');
    } else if (task.id === 'TASK-04') {
      if (orders.length > 0) {
        setActiveOrderId(orders[0].id);
      }
      setCurrentView('tracking');
    } else if (task.id === 'TASK-05') {
      setCurrentView('orders');
    }
    showToast(`Task ${task.taskNumber} activated. Follow the top banner guide.`);
  };

  const completeTaskRunner = () => {
    showToast(`Congratulations! You completed ${activeTestTask?.taskNumber}.`, 'success');
    setActiveTestTask(null);
    setCurrentView('usability');
  };

  const dismissTaskRunner = () => {
    setActiveTestTask(null);
  };

  const activeOrder = orders.find(o => o.id === activeOrderId) || orders[0] || null;

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        foodItems,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedFoodForDetail,
        openFoodDetail,
        closeFoodDetail,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        cartSubtotal,
        convenienceFee,
        cartTotal,
        cartItemsCount,
        selectedPickupLocation,
        setSelectedPickupLocation,
        selectedPickupTime,
        setSelectedPickupTime,
        orders,
        activeOrder,
        placeOrder,
        reorder,
        advanceOrderStatus,
        submitOrderFeedback,
        selectOrderForTracking,
        user,
        updateProfile,
        activeTestTask,
        startTaskRunner,
        completeTaskRunner,
        dismissTaskRunner,
        checkoutDesignVersion,
        setCheckoutDesignVersion,
        isHelpOpen,
        setIsHelpOpen,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return ctx;
};
