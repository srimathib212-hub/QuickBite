import {
  FoodItem,
  UserProfile,
  UsabilityTestPlan,
  Participant,
  TestScenario,
  UserObservation,
  UserFeedbackItem,
  UsabilityMetricsData,
  DesignImprovement,
  Order
} from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_campus_cafeteria_1791002099112.jpg';
export const PANEER_WRAP_IMAGE = '/src/assets/images/food_paneer_wrap_1791002114373.jpg';
export const VEG_BURGER_IMAGE = '/src/assets/images/food_veg_burger_1791002126296.jpg';
export const MASALA_DOSA_IMAGE = '/src/assets/images/food_masala_dosa_1791002136656.jpg';

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: 'paneer-wrap',
    name: 'Paneer Wrap',
    description: 'Soft flatbread filled with paneer, vegetables and house sauce.',
    price: 90,
    category: 'snacks',
    isVeg: true,
    rating: 4.6,
    prepTimeMinutes: 15,
    image: PANEER_WRAP_IMAGE,
    popular: true,
    quickPick: true,
    ingredients: ['Cottage Cheese (Paneer)', 'Whole Wheat Wrap', 'Bell Peppers', 'Mint Yogurt Sauce', 'Onions', 'Chaat Masala'],
    sizeOptions: [
      { id: 'reg', name: 'Regular', price: 0 },
      { id: 'large', name: 'Large Wrap (+30% paneer)', price: 30 }
    ],
    addOns: [
      { id: 'cheese', name: 'Extra Cheese', price: 20 },
      { id: 'sauce', name: 'Extra Sauce', price: 10 },
      { id: 'mayo', name: 'Garlic Mayo Dip', price: 15 }
    ]
  },
  {
    id: 'veg-burger',
    name: 'Veg Burger',
    description: 'Crispy seasoned spiced patty with lettuce, tomato and signature secret dressing in a toasted bun.',
    price: 80,
    category: 'burgers',
    isVeg: true,
    rating: 4.7,
    prepTimeMinutes: 12,
    image: VEG_BURGER_IMAGE,
    popular: true,
    quickPick: true,
    ingredients: ['Crispy Veggie Patty', 'Sesame Brioche Bun', 'Iceberg Lettuce', 'Cheddar Slice', 'Tomato', 'Herb Mayo'],
    sizeOptions: [
      { id: 'reg', name: 'Single Patty', price: 0 },
      { id: 'large', name: 'Double Patty Combo', price: 35 }
    ],
    addOns: [
      { id: 'cheese', name: 'Extra Cheese Slice', price: 20 },
      { id: 'sauce', name: 'Chipotle Sauce', price: 10 },
      { id: 'jalapeno', name: 'Pickled Jalapenos', price: 15 }
    ]
  },
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    description: 'Crispy fermented crepe served with spiced potato stuffing, aromatic sambar and fresh coconut chutney.',
    price: 70,
    category: 'meals',
    isVeg: true,
    rating: 4.8,
    prepTimeMinutes: 10,
    image: MASALA_DOSA_IMAGE,
    popular: true,
    quickPick: true,
    ingredients: ['Crispy Rice Batter', 'Spiced Potato Masala', 'Lentil Sambar', 'Fresh Coconut Chutney', 'Tomato Chutney'],
    sizeOptions: [
      { id: 'reg', name: 'Standard (1 Dosa)', price: 0 },
      { id: 'large', name: 'Ghee Roast Dosa', price: 25 }
    ],
    addOns: [
      { id: 'extra-sambar', name: 'Extra Sambar Cup', price: 15 },
      { id: 'extra-chutney', name: 'Extra Coconut Chutney', price: 10 },
      { id: 'butter', name: 'Dollop of White Butter', price: 15 }
    ]
  },
  {
    id: 'veg-fried-rice',
    name: 'Veg Fried Rice',
    description: 'Fresh vegetables tossed with seasoned aromatic basmati rice in a savory wok soy sauce.',
    price: 100,
    category: 'meals',
    isVeg: true,
    rating: 4.5,
    prepTimeMinutes: 15,
    image: HERO_IMAGE,
    popular: true,
    quickPick: false,
    ingredients: ['Basmati Rice', 'Carrots', 'French Beans', 'Spring Onion', 'Soy Reduction', 'White Pepper'],
    sizeOptions: [
      { id: 'reg', name: 'Regular Portion (Serves 1)', price: 0 },
      { id: 'large', name: 'Large Portion (Serves 1-2)', price: 40 }
    ],
    addOns: [
      { id: 'manchurian', name: 'Side Gravy Cup', price: 25 },
      { id: 'schezwan', name: 'Spicy Schezwan Dip', price: 10 }
    ]
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    description: 'Rich chilled brewed espresso blended with fresh toned milk, chocolate drizzle and ice.',
    price: 60,
    category: 'beverages',
    isVeg: true,
    rating: 4.9,
    prepTimeMinutes: 5,
    image: HERO_IMAGE,
    popular: true,
    quickPick: true,
    ingredients: ['Espresso Shot', 'Chilled Milk', 'Cocoa Powder', 'Demerara Sugar', 'Chocolate Swirl'],
    sizeOptions: [
      { id: 'reg', name: 'Regular (300ml)', price: 0 },
      { id: 'large', name: 'Large (450ml)', price: 20 }
    ],
    addOns: [
      { id: 'icecream', name: 'Vanilla Ice Cream Scoop', price: 20 },
      { id: 'choco-chips', name: 'Extra Choco Chips', price: 15 }
    ]
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    description: 'Crispy golden potato fingers tossed with sea salt and peri-peri paprika seasoning.',
    price: 70,
    category: 'snacks',
    isVeg: true,
    rating: 4.6,
    prepTimeMinutes: 8,
    image: VEG_BURGER_IMAGE,
    popular: true,
    quickPick: true,
    ingredients: ['Crispy Cut Potatoes', 'Peri Peri Spice', 'Sea Salt', 'Sunflower Oil'],
    sizeOptions: [
      { id: 'reg', name: 'Medium Tub (120g)', price: 0 },
      { id: 'large', name: 'Large Tub (200g)', price: 30 }
    ],
    addOns: [
      { id: 'cheese-dip', name: 'Cheesy Jalapeno Dip', price: 20 },
      { id: 'mayo-dip', name: 'Garlic Herb Mayo', price: 10 }
    ]
  },
  {
    id: 'grilled-cheese-sandwich',
    name: 'Grilled Cheese Sandwich',
    description: 'Toasted golden multigrain bread stuffed with cheddar, mozzarella, bell peppers and herbs.',
    price: 85,
    category: 'sandwiches',
    isVeg: true,
    rating: 4.5,
    prepTimeMinutes: 10,
    image: PANEER_WRAP_IMAGE,
    popular: false,
    quickPick: false,
    ingredients: ['Multigrain Bread', 'Aged Cheddar', 'Mozzarella', 'Diced Bell Pepper', 'Oregano Seasoning'],
    sizeOptions: [
      { id: 'reg', name: 'Standard (2 Triangles)', price: 0 },
      { id: 'large', name: 'Double Cheese Club (3 Layers)', price: 30 }
    ],
    addOns: [
      { id: 'sauce', name: 'Green Mint Chutney', price: 10 },
      { id: 'cheese', name: 'Extra Melted Cheese', price: 20 }
    ]
  },
  {
    id: 'chocolate-brownie',
    name: 'Chocolate Brownie',
    description: 'Warm fudgy Belgian chocolate brownie with dark chocolate chips and soft center.',
    price: 65,
    category: 'desserts',
    isVeg: true,
    rating: 4.8,
    prepTimeMinutes: 5,
    image: HERO_IMAGE,
    popular: true,
    quickPick: true,
    ingredients: ['Dark Belgian Chocolate', 'Cocoa Butter', 'Flour', 'Brown Sugar', 'Walnut Bits'],
    sizeOptions: [
      { id: 'reg', name: '1 Warm Brownie Slice', price: 0 }
    ],
    addOns: [
      { id: 'icecream', name: 'Vanilla Ice Cream Scoop', price: 25 },
      { id: 'fudge', name: 'Hot Chocolate Fudge Drizzle', price: 15 }
    ]
  },
  {
    id: 'fresh-fruit-bowl',
    name: 'Fresh Fruit Bowl',
    description: 'Chilled seasonal fruit slices including watermelon, papaya, kiwi, pomegranate with honey mint dressing.',
    price: 75,
    category: 'desserts',
    isVeg: true,
    rating: 4.7,
    prepTimeMinutes: 5,
    image: HERO_IMAGE,
    popular: false,
    quickPick: false,
    ingredients: ['Watermelon', 'Papaya', 'Kiwi', 'Pomegranate Pearls', 'Fresh Mint', 'Honey Lemon Drizzle'],
    sizeOptions: [
      { id: 'reg', name: 'Regular Bowl (250g)', price: 0 }
    ],
    addOns: [
      { id: 'chia', name: 'Chia Seeds Topping', price: 15 },
      { id: 'honey', name: 'Extra Organic Honey', price: 10 }
    ]
  },
  {
    id: 'samosa-chaat',
    name: 'Samosa Chaat',
    description: 'Two crushed crispy potato samosas topped with spiced chana curry, tamarind chutney, curd and sev.',
    price: 55,
    category: 'snacks',
    isVeg: true,
    rating: 4.6,
    prepTimeMinutes: 8,
    image: MASALA_DOSA_IMAGE,
    popular: false,
    quickPick: true,
    ingredients: ['Crispy Samosa', 'Chana Masala Gravy', 'Sweet Tamarind Chutney', 'Beaten Curd', 'Nylon Sev'],
    sizeOptions: [
      { id: 'reg', name: 'Single Plate (2 Samosas)', price: 0 }
    ],
    addOns: [
      { id: 'curd', name: 'Extra Spiced Curd', price: 10 },
      { id: 'sev', name: 'Extra Sev & Pomegranate', price: 10 }
    ]
  },
  {
    id: 'masala-chai',
    name: 'Adrak Masala Chai',
    description: 'Freshly brewed aromatic campus tea simmered with fresh ginger, cardamom and full cream milk.',
    price: 25,
    category: 'beverages',
    isVeg: true,
    rating: 4.9,
    prepTimeMinutes: 5,
    image: HERO_IMAGE,
    popular: true,
    quickPick: true,
    ingredients: ['Assam Black Tea', 'Fresh Crushed Ginger', 'Green Cardamom', 'Boiled Milk', 'Cane Sugar'],
    sizeOptions: [
      { id: 'reg', name: 'Cutting Chai (120ml)', price: 0 },
      { id: 'large', name: 'Full Kulhad Mug (220ml)', price: 15 }
    ],
    addOns: [
      { id: 'biscuit', name: 'Pair of Osmania Biscuits', price: 10 }
    ]
  }
];

export const INITIAL_USER: UserProfile = {
  name: 'Alex Kumar',
  studentId: 'STU1024',
  campus: 'Main Campus',
  email: 'alex.kumar@campus.edu',
  phone: '+91 98450 12024',
  walletBalance: 450,
  savedLocation: 'Main Campus Cafeteria — Counter 2',
  paymentPreference: 'Campus Wallet (STU1024)',
  notificationPreferences: {
    orderStatusSms: true,
    pickupReminder: true,
    promotionalOffers: false
  }
};

export const PICKUP_LOCATIONS = [
  'Main Campus Cafeteria',
  'Science Block Food Court',
  'Library Cafe — South Wing',
  'Hostel Zone 2 Kiosk'
];

export const PICKUP_TIME_SLOTS = [
  'ASAP — 15 min',
  '12:30 PM',
  '12:45 PM',
  '1:00 PM',
  '1:15 PM',
  '1:30 PM',
  '2:00 PM'
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'QB1024',
    items: [
      {
        cartItemId: 'item-1024-1',
        foodItem: FOOD_ITEMS[0], // Paneer Wrap
        quantity: 1,
        selectedSize: { id: 'reg', name: 'Regular', price: 0 },
        selectedAddOns: [{ id: 'sauce', name: 'Extra Sauce', price: 10 }],
        specialInstructions: 'Make it spicy with green chutney',
        unitPrice: 100,
        totalPrice: 100
      },
      {
        cartItemId: 'item-1024-2',
        foodItem: FOOD_ITEMS[4], // Cold Coffee
        quantity: 1,
        selectedSize: { id: 'reg', name: 'Regular (300ml)', price: 0 },
        selectedAddOns: [],
        unitPrice: 60,
        totalPrice: 60
      }
    ],
    subtotal: 160,
    convenienceFee: 5,
    total: 165,
    pickupLocation: 'Main Campus Cafeteria',
    pickupTime: '12:45 PM',
    paymentMethod: 'wallet',
    status: 'preparing',
    createdAt: 'Today, 12:32 PM',
    estimatedPickupTime: '12:45 PM'
  },
  {
    id: 'QB1018',
    items: [
      {
        cartItemId: 'item-1018-1',
        foodItem: FOOD_ITEMS[2], // Masala Dosa
        quantity: 1,
        selectedSize: { id: 'reg', name: 'Standard (1 Dosa)', price: 0 },
        selectedAddOns: [],
        unitPrice: 70,
        totalPrice: 70
      },
      {
        cartItemId: 'item-1018-2',
        foodItem: FOOD_ITEMS[10], // Masala Chai
        quantity: 1,
        selectedSize: { id: 'large', name: 'Full Kulhad Mug (220ml)', price: 15 },
        selectedAddOns: [{ id: 'biscuit', name: 'Pair of Osmania Biscuits', price: 10 }],
        unitPrice: 40,
        totalPrice: 40
      }
    ],
    subtotal: 110,
    convenienceFee: 5,
    total: 115,
    pickupLocation: 'Main Campus Cafeteria',
    pickupTime: 'Yesterday, 1:15 PM',
    paymentMethod: 'upi',
    status: 'picked_up',
    createdAt: 'Yesterday, 1:02 PM',
    estimatedPickupTime: '1:15 PM',
    feedbackGiven: true,
    feedbackRating: 5,
    feedbackComment: 'Super fast pickup at counter 1. Dosa was piping hot!'
  }
];

// ==================== UX Usability Testing & Analysis Data ====================

export const USABILITY_TEST_PLAN: UsabilityTestPlan = {
  title: 'QuickBite Campus Food Ordering Usability Evaluation',
  purpose: 'Evaluate how easily students can discover food, customize an order, complete checkout, and track their order.',
  targetUsers: 'College students who regularly use campus cafeteria services.',
  sampleSize: 5,
  testingMethod: 'Moderated usability testing',
  sessionDuration: '10–15 minutes',
  device: 'Desktop / Laptop',
  metrics: [
    'Task completion rate (%)',
    'Time on task (seconds)',
    'Error rate (%)',
    'User satisfaction (1–5 scale)',
    'Qualitative observations',
    'User feedback & verbatim quotes'
  ]
};

export const SAMPLE_PARTICIPANTS: Participant[] = [
  {
    id: 'P01',
    name: 'Rohan Sharma',
    studentType: 'Undergraduate',
    major: 'Computer Science (3rd Year)',
    frequencyOfCafeteriaUse: 'Frequent',
    device: 'Laptop',
    avatarInitials: 'RS',
    taskPerformance: [
      { taskId: 'TASK-01', completed: true, timeSeconds: 32, encounteredIssue: false },
      { taskId: 'TASK-02', completed: true, timeSeconds: 44, encounteredIssue: false },
      { taskId: 'TASK-03', completed: true, timeSeconds: 58, encounteredIssue: false },
      { taskId: 'TASK-04', completed: true, timeSeconds: 22, encounteredIssue: false },
      { taskId: 'TASK-05', completed: true, timeSeconds: 38, encounteredIssue: false }
    ]
  },
  {
    id: 'P02',
    name: 'Ananya Deshmukh',
    studentType: 'Undergraduate',
    major: 'Design & Visual Arts (2nd Year)',
    frequencyOfCafeteriaUse: 'Occasional',
    device: 'Laptop',
    avatarInitials: 'AD',
    taskPerformance: [
      { taskId: 'TASK-01', completed: true, timeSeconds: 41, encounteredIssue: false },
      { taskId: 'TASK-02', completed: true, timeSeconds: 68, encounteredIssue: true },
      { taskId: 'TASK-03', completed: true, timeSeconds: 61, encounteredIssue: false },
      { taskId: 'TASK-04', completed: true, timeSeconds: 26, encounteredIssue: false },
      { taskId: 'TASK-05', completed: true, timeSeconds: 45, encounteredIssue: false }
    ]
  },
  {
    id: 'P03',
    name: 'Karthik Raman',
    studentType: 'Postgraduate',
    major: 'MBA Management (1st Year)',
    frequencyOfCafeteriaUse: 'Frequent',
    device: 'Laptop',
    avatarInitials: 'KR',
    taskPerformance: [
      { taskId: 'TASK-01', completed: true, timeSeconds: 29, encounteredIssue: false },
      { taskId: 'TASK-02', completed: true, timeSeconds: 52, encounteredIssue: false },
      { taskId: 'TASK-03', completed: false, timeSeconds: 84, encounteredIssue: true },
      { taskId: 'TASK-04', completed: true, timeSeconds: 24, encounteredIssue: false },
      { taskId: 'TASK-05', completed: true, timeSeconds: 41, encounteredIssue: false }
    ]
  },
  {
    id: 'P04',
    name: 'Sneha Patel',
    studentType: 'Undergraduate',
    major: 'Biotechnology (4th Year)',
    frequencyOfCafeteriaUse: 'Daily',
    device: 'Laptop',
    avatarInitials: 'SP',
    taskPerformance: [
      { taskId: 'TASK-01', completed: true, timeSeconds: 35, encounteredIssue: false },
      { taskId: 'TASK-02', completed: true, timeSeconds: 47, encounteredIssue: false },
      { taskId: 'TASK-03', completed: true, timeSeconds: 50, encounteredIssue: false },
      { taskId: 'TASK-04', completed: true, timeSeconds: 19, encounteredIssue: false },
      { taskId: 'TASK-05', completed: true, timeSeconds: 36, encounteredIssue: false }
    ]
  },
  {
    id: 'P05',
    name: 'Vikram Joshi',
    studentType: 'Undergraduate',
    major: 'Mechanical Engineering (3rd Year)',
    frequencyOfCafeteriaUse: 'Frequent',
    device: 'Laptop',
    avatarInitials: 'VJ',
    taskPerformance: [
      { taskId: 'TASK-01', completed: true, timeSeconds: 38, encounteredIssue: false },
      { taskId: 'TASK-02', completed: true, timeSeconds: 59, encounteredIssue: false },
      { taskId: 'TASK-03', completed: true, timeSeconds: 65, encounteredIssue: false },
      { taskId: 'TASK-04', completed: true, timeSeconds: 28, encounteredIssue: false },
      { taskId: 'TASK-05', completed: false, timeSeconds: 79, encounteredIssue: true }
    ]
  }
];

export const TEST_SCENARIOS: TestScenario[] = [
  {
    id: 'TASK-01',
    taskNumber: 'TASK 01',
    scenarioTitle: 'Find a vegetarian meal under ₹100',
    taskDescription: 'You have a ₹100 budget and want a quick vegetarian meal on campus. Use search or filters to locate and select an appropriate item.',
    expectedOutcome: 'User finds an appropriate item using search/filter options.',
    completionStatus: 'Passed (100%)',
    timeTakenAvg: '35 sec',
    targetUrl: '/menu',
    actionGuidance: 'Navigate to Menu → Select Vegetarian or Meals filter → Identify item under ₹100 (e.g. Masala Dosa ₹70 or Veg Fried Rice ₹100).',
    notes: '100% completion rate. Participants praised the prominent Veg indicator and clean price tags.'
  },
  {
    id: 'TASK-02',
    taskNumber: 'TASK 02',
    scenarioTitle: 'Customize a Paneer Wrap with extra sauce & add to cart',
    taskDescription: 'Open the Paneer Wrap details, configure the order by choosing extra sauce (+₹10), and add it to the shopping cart.',
    expectedOutcome: 'User successfully customizes and adds the item.',
    completionStatus: 'Needs Attention (80%)',
    timeTakenAvg: '54 sec',
    targetUrl: '/menu',
    actionGuidance: 'Click Paneer Wrap card → In product modal, check "Extra Sauce +₹10" → Click "Add to Cart".',
    notes: 'Some participants expected customization options immediately without scrolling or having to open a separate sub-section.'
  },
  {
    id: 'TASK-03',
    taskNumber: 'TASK 03',
    scenarioTitle: 'Place an order for pickup at the campus cafeteria',
    taskDescription: 'Proceed to checkout with cart items, select a pickup time (e.g., 12:45 PM), choose payment method and complete order placement.',
    expectedOutcome: 'User completes checkout and receives confirmation.',
    completionStatus: 'Needs Attention (80%)',
    timeTakenAvg: '63 sec',
    targetUrl: '/checkout',
    actionGuidance: 'Open Cart → Click "Continue to Checkout" → Confirm Pickup Time & Location → Choose Payment → Click "Place Order".',
    notes: '1 participant initially missed the pickup-time dropdown because it blended into standard form inputs. V2 redesign highlights it.'
  },
  {
    id: 'TASK-04',
    taskNumber: 'TASK 04',
    scenarioTitle: 'Find the status of your current order',
    taskDescription: 'After placing your lunch order, locate the real-time order progress tracker to see if the kitchen is preparing your food.',
    expectedOutcome: 'User reaches the order-tracking screen.',
    completionStatus: 'Passed (100%)',
    timeTakenAvg: '24 sec',
    targetUrl: '/tracking',
    actionGuidance: 'Click "Track Order" on confirmation or navigate to My Orders → Active tab → "Track Order".',
    notes: 'Fastest task in the session (avg 24 sec). Participants loved the visual 4-step progress stepper.'
  },
  {
    id: 'TASK-05',
    taskNumber: 'TASK 05',
    scenarioTitle: 'Find a previous order and reorder the same meal',
    taskDescription: 'Look up yesterday\'s completed lunch order (#QB1018) in order history and trigger a 1-click reorder.',
    expectedOutcome: 'User successfully finds order history and starts a reorder.',
    completionStatus: 'Passed (70%)',
    timeTakenAvg: '48 sec',
    targetUrl: '/orders',
    actionGuidance: 'Go to "My Orders" → Switch to "Completed" tab → Click "Reorder" button on order #QB1018.',
    notes: 'In V1, reorder was inside an overflow menu. In V2, a prominent Reorder button was placed directly on the order card.'
  }
];

export const USER_OBSERVATIONS: UserObservation[] = [
  {
    id: 'obs-01',
    participantId: 'P01',
    taskId: 'TASK-01',
    observation: 'Found the food category quickly using the horizontal category tabs.',
    issue: 'No issue encountered.',
    severity: 'None'
  },
  {
    id: 'obs-02',
    participantId: 'P02',
    taskId: 'TASK-02',
    observation: 'Looked for customization options below the food description; hesitated before seeing add-ons list.',
    issue: 'Customization section could be more prominent.',
    severity: 'Medium'
  },
  {
    id: 'obs-03',
    participantId: 'P03',
    taskId: 'TASK-03',
    observation: 'Reached checkout but initially missed the pickup-time selector; proceeded straight to payment.',
    issue: 'Pickup time needs stronger visual hierarchy.',
    severity: 'Medium'
  },
  {
    id: 'obs-04',
    participantId: 'P04',
    taskId: 'TASK-04',
    observation: 'Immediately found the Track Order button on the confirmation screen and monitored kitchen status.',
    issue: 'No issue encountered.',
    severity: 'None'
  },
  {
    id: 'obs-05',
    participantId: 'P05',
    taskId: 'TASK-05',
    observation: 'Expected "Reorder" to appear directly on the completed order card instead of inside a menu.',
    issue: 'Reorder action could be more visible.',
    severity: 'Low'
  },
  {
    id: 'obs-06',
    participantId: 'P02',
    taskId: 'TASK-01',
    observation: 'Used the price sorting filter to quickly spot items under ₹100.',
    issue: 'Sorting menu worked smoothly.',
    severity: 'None'
  },
  {
    id: 'obs-07',
    participantId: 'P03',
    taskId: 'TASK-02',
    observation: 'Wanted to know if extra cheese had dairy allergen notes.',
    issue: 'Ingredient transparency could include allergen badges.',
    severity: 'Low'
  }
];

export const USER_FEEDBACK_ITEMS: UserFeedbackItem[] = [
  {
    id: 'fb-01',
    participantId: 'P01',
    category: 'Positive',
    quote: 'The menu is easy to browse.',
    context: 'Commented on category tabs and clean typography on desktop.'
  },
  {
    id: 'fb-02',
    participantId: 'P04',
    category: 'Positive',
    quote: 'I like seeing the total price before placing the order.',
    context: 'Appreciated transparent campus convenience fee breakdown.'
  },
  {
    id: 'fb-03',
    participantId: 'P02',
    category: 'Positive',
    quote: 'The order status is easy to understand.',
    context: 'Praised 4-step live kitchen visual progress tracker.'
  },
  {
    id: 'fb-04',
    participantId: 'P03',
    category: 'Suggestion',
    quote: 'I would like the pickup time to be more noticeable.',
    context: 'Felt selecting pickup time is crucial during lunch breaks between lectures.'
  },
  {
    id: 'fb-05',
    participantId: 'P01',
    category: 'Suggestion',
    quote: 'It would be useful to see popular items first.',
    context: 'Wanted quick campus student favorites without scrolling entire menu.'
  },
  {
    id: 'fb-06',
    participantId: 'P02',
    category: 'Usability Issue',
    quote: 'The customization options could be easier to find.',
    context: 'Almost missed the add-on checkboxes during rapid wrap ordering.'
  },
  {
    id: 'fb-07',
    participantId: 'P05',
    category: 'Usability Issue',
    quote: 'I shouldn\'t have to hunt around just to reorder my usual breakfast.',
    context: 'Requested a 1-tap reorder button on past receipt cards.'
  }
];

export const USABILITY_METRICS: UsabilityMetricsData = {
  taskCompletionRate: 86,
  averageTaskTimeSeconds: 48,
  errorRate: 14,
  userSatisfaction: 4.2,
  taskBreakdown: [
    { taskId: 'TASK 01', taskName: 'Find Veg Meal < ₹100', completionRate: 100, avgTimeSeconds: 35 },
    { taskId: 'TASK 02', taskName: 'Customize Paneer Wrap', completionRate: 80, avgTimeSeconds: 54 },
    { taskId: 'TASK 03', taskName: 'Campus Cafeteria Checkout', completionRate: 80, avgTimeSeconds: 63 },
    { taskId: 'TASK 04', taskName: 'Track Order Status', completionRate: 100, avgTimeSeconds: 24 },
    { taskId: 'TASK 05', taskName: 'Reorder Previous Meal', completionRate: 70, avgTimeSeconds: 48 }
  ]
};

export const DESIGN_IMPROVEMENTS: DesignImprovement[] = [
  {
    id: 'imp-01',
    improvementNumber: 'IMPROVEMENT 01',
    title: 'Customization Options Visibility',
    before: 'Customization options were visually secondary and hidden below long descriptions.',
    after: 'Move customization options closer to the main product information and make the section clearly expandable with default prominent toggles.',
    reason: 'Users should immediately understand that food can be customized without missing add-on options.',
    severity: 'Medium',
    category: 'Product Details'
  },
  {
    id: 'imp-02',
    improvementNumber: 'IMPROVEMENT 02',
    title: 'Pickup Time Visual Hierarchy',
    before: 'Pickup time was easy to overlook during checkout as an ordinary small text field.',
    after: 'Place pickup time inside a highlighted "Pickup Details" card with an explicit clock icon directly above the final payment section.',
    reason: 'Pickup timing is an essential part of campus food ordering where students balance class schedules.',
    severity: 'Medium',
    category: 'Checkout'
  },
  {
    id: 'imp-03',
    improvementNumber: 'IMPROVEMENT 03',
    title: 'Reorder Action Prominence',
    before: 'Reorder action was tucked inside a secondary contextual menu.',
    after: 'Add a visible, high-contrast "Reorder" button directly on completed order history cards.',
    reason: 'Returning users should be able to repeat common orders quickly with a single click.',
    severity: 'Low',
    category: 'Order History'
  },
  {
    id: 'imp-04',
    improvementNumber: 'IMPROVEMENT 04',
    title: 'Accelerated Food Discovery',
    before: 'Food discovery required browsing through multiple nested categories sequentially.',
    after: 'Add dedicated "Popular on Campus" and "Quick Picks under 10 min" sections on the homepage and top of menu.',
    reason: 'Reduce the cognitive load and time required to discover commonly ordered cafeteria items.',
    severity: 'Low',
    category: 'Navigation & Discovery'
  }
];
