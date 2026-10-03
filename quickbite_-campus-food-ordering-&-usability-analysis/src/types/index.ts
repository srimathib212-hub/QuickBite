export type FoodCategory = 'all' | 'burgers' | 'snacks' | 'meals' | 'sandwiches' | 'beverages' | 'desserts';

export interface FoodCustomizationOption {
  id: string;
  name: string;
  price: number;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: FoodCategory;
  isVeg: boolean;
  rating: number;
  prepTimeMinutes: number;
  image: string;
  popular?: boolean;
  quickPick?: boolean;
  ingredients: string[];
  sizeOptions?: FoodCustomizationOption[];
  addOns?: FoodCustomizationOption[];
}

export interface CartItem {
  cartItemId: string;
  foodItem: FoodItem;
  quantity: number;
  selectedSize?: FoodCustomizationOption;
  selectedAddOns: FoodCustomizationOption[];
  specialInstructions?: string;
  unitPrice: number;
  totalPrice: number;
}

export type OrderStatus = 'placed' | 'preparing' | 'ready' | 'picked_up';

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  convenienceFee: number;
  total: number;
  pickupLocation: string;
  pickupTime: string;
  paymentMethod: 'upi' | 'card' | 'wallet' | 'cash';
  status: OrderStatus;
  createdAt: string;
  estimatedPickupTime: string;
  feedbackGiven?: boolean;
  feedbackRating?: number;
  feedbackComment?: string;
}

export interface UserProfile {
  name: string;
  studentId: string;
  campus: string;
  email: string;
  phone: string;
  walletBalance: number;
  savedLocation: string;
  paymentPreference: string;
  notificationPreferences: {
    orderStatusSms: boolean;
    pickupReminder: boolean;
    promotionalOffers: boolean;
  };
}

// ==================== UX Usability Testing Types ====================

export interface UsabilityTestPlan {
  title: string;
  purpose: string;
  targetUsers: string;
  sampleSize: number;
  testingMethod: string;
  sessionDuration: string;
  device: string;
  metrics: string[];
}

export interface Participant {
  id: string;
  name: string;
  studentType: 'Undergraduate' | 'Postgraduate';
  major: string;
  frequencyOfCafeteriaUse: 'Frequent' | 'Occasional' | 'Daily';
  device: 'Laptop' | 'Desktop';
  avatarInitials: string;
  taskPerformance: {
    taskId: string;
    completed: boolean;
    timeSeconds: number;
    encounteredIssue: boolean;
  }[];
}

export interface TestScenario {
  id: string;
  taskNumber: string;
  scenarioTitle: string;
  taskDescription: string;
  expectedOutcome: string;
  completionStatus: 'Passed (86% avg)' | 'Passed (100%)' | 'Needs Attention (80%)' | 'Passed (70%)';
  timeTakenAvg: string;
  targetUrl: string;
  actionGuidance: string;
  notes: string;
}

export type SeverityLevel = 'None' | 'Low' | 'Medium' | 'High';

export interface UserObservation {
  id: string;
  participantId: string;
  taskId: string;
  observation: string;
  issue: string;
  severity: SeverityLevel;
}

export type FeedbackCategory = 'Positive' | 'Suggestion' | 'Usability Issue';

export interface UserFeedbackItem {
  id: string;
  participantId: string;
  category: FeedbackCategory;
  quote: string;
  context: string;
}

export interface UsabilityMetricsData {
  taskCompletionRate: number;
  averageTaskTimeSeconds: number;
  errorRate: number;
  userSatisfaction: number;
  taskBreakdown: {
    taskId: string;
    taskName: string;
    completionRate: number;
    avgTimeSeconds: number;
  }[];
}

export interface DesignImprovement {
  id: string;
  improvementNumber: string;
  title: string;
  before: string;
  after: string;
  reason: string;
  severity: SeverityLevel;
  category: string;
}
