'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 
  | 'USER'           // End User / Farmer / Citizen
  | 'PROVIDER'       // 1. Service Provider / Artisan (Plumber, Electrician, etc.)
  | 'EQUIPMENT'      // 2. Equipment Owner (Tractor, Rotavator, etc.)
  | 'SHOP'           // 3. Shop Owner (Agro Center, Fertilizer, Seeds)
  | 'LIVESTOCK'      // 4. Livestock Breeder / Dairy / Vet
  | 'SUB_ADMIN'      // Village Coordinator / Gram Mitra / Verifier
  | 'SUPER_ADMIN';   // Super Admin / Command Center

export interface ServiceListing {
  id: string;
  category: 'plumbing' | 'electrical' | 'carpentry' | 'masonry';
  title: string;
  providerName: string;
  phone: string;
  village: string;
  basePrice: number;
  description: string;
  rating: number;
  jobsDone: number;
  available: boolean;
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
}

export interface EquipmentListing {
  id: string;
  name: string;
  type: string;
  ownerName: string;
  phone: string;
  village: string;
  price: number;
  unit: string;
  rating: number;
  distance: string;
  description: string;
  icon: string;
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
}

export interface ShopProduct {
  id: string;
  name: string;
  category: 'Fertilizer' | 'Seeds' | 'Pesticides' | 'Tools';
  shopName: string;
  price: number;
  stock: number;
  village: string;
  icon: string;
  isSponsored?: boolean;
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
}

export interface LivestockListing {
  id: string;
  type: string;
  yield: string;
  age: string;
  price: number;
  ownerName: string;
  phone: string;
  location: string;
  icon: string;
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
}

export interface MilkEntry {
  id: string;
  date: string;
  shift: 'Morning' | 'Evening';
  animalType: 'Cow' | 'Buffalo';
  quantityLiters: number;
  fatPercentage: number;
  ratePerLiter: number;
  totalAmount: number;
}

export interface Booking {
  id: string;
  type: 'SERVICE' | 'EQUIPMENT' | 'SHOP_ORDER' | 'VET';
  title: string;
  targetId: string;
  customerName: string;
  customerPhone: string;
  providerName: string;
  date: string;
  timeSlot?: string;
  amount: number;
  status: 'PENDING' | 'ACCEPTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  notes?: string;
}

export interface KYCItem {
  id: string;
  user: string;
  type: 'Service Provider' | 'Shop Owner' | 'Equipment Owner' | 'Livestock Seller';
  docType: string;
  details: string;
  submitted: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  targetId: string;
}

export interface GaonSathiContextType {
  currentRole: UserRole;
  switchRole: (role: UserRole) => void;
  
  // Data entities
  serviceListings: ServiceListing[];
  equipmentListings: EquipmentListing[];
  shopProducts: ShopProduct[];
  livestockListings: LivestockListing[];
  milkEntries: MilkEntry[];
  bookings: Booking[];
  kycQueue: KYCItem[];
  cart: { product: ShopProduct; quantity: number }[];

  // Action methods
  addServiceListing: (listing: Omit<ServiceListing, 'id' | 'rating' | 'jobsDone' | 'status'>) => void;
  updateServiceListing: (id: string, updates: Partial<ServiceListing>) => void;
  
  addEquipmentListing: (listing: Omit<EquipmentListing, 'id' | 'rating' | 'status'>) => void;
  
  addShopProduct: (product: Omit<ShopProduct, 'id' | 'status'>) => void;
  updateProductStock: (id: string, newStock: number) => void;
  
  addLivestockListing: (listing: Omit<LivestockListing, 'id' | 'status'>) => void;
  addMilkEntry: (entry: Omit<MilkEntry, 'id' | 'totalAmount'>) => void;
  
  createBooking: (booking: Omit<Booking, 'id' | 'date' | 'status'>) => Booking;
  updateBookingStatus: (id: string, status: Booking['status']) => void;
  
  // KYC / Verification actions
  approveKYC: (kycId: string) => void;
  rejectKYC: (kycId: string, reason?: string) => void;
  
  // Cart actions
  addToCart: (product: ShopProduct) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  checkoutCart: (customerName: string, customerPhone: string) => void;

  // Stats helpers
  pendingRequestsCount: number;
  pendingKycCount: number;
}

// Initial Mock Datasets
const INITIAL_SERVICES: ServiceListing[] = [
  {
    id: 'SRV-01',
    category: 'plumbing',
    title: 'પાઈપ ફિટિંગ અને લીકેજ રીપેરિંગ (Pipe Repair)',
    providerName: 'Mahesh Plumber',
    phone: '+91 98765 43210',
    village: 'Motipur',
    basePrice: 350,
    description: '10+ years experience in motor fitting and underground pipeline fixing.',
    rating: 4.8,
    jobsDone: 42,
    available: true,
    status: 'APPROVED'
  },
  {
    id: 'SRV-02',
    category: 'electrical',
    title: 'મોટર વાયરિંગ અને સ્વીચ બોર્ડ (Motor & Wiring)',
    providerName: 'Kishor Electrician',
    phone: '+91 98234 56789',
    village: 'Motipur',
    basePrice: 400,
    description: 'Expert in agricultural 3-phase pump starters & home wiring.',
    rating: 4.9,
    jobsDone: 68,
    available: true,
    status: 'APPROVED'
  },
  {
    id: 'SRV-03',
    category: 'carpentry',
    title: 'લાકડાના દરવાજા અને ફર્નિચર કામ (Woodwork)',
    providerName: 'Ramesh Suthar',
    phone: '+91 97123 45678',
    village: 'Sanand',
    basePrice: 500,
    description: 'Custom wooden cart, doors, and tool handles repair.',
    rating: 4.6,
    jobsDone: 29,
    available: true,
    status: 'APPROVED'
  },
  {
    id: 'SRV-04',
    category: 'masonry',
    title: 'ઘર અને દીવાલ ચણતર કામ (Brickwork & Masonry)',
    providerName: 'Bhikhabhai Kadia',
    phone: '+91 96001 12233',
    village: 'Motipur',
    basePrice: 600,
    description: 'Water tank construction and cement plastering.',
    rating: 4.7,
    jobsDone: 51,
    available: true,
    status: 'APPROVED'
  }
];

const INITIAL_EQUIPMENT: EquipmentListing[] = [
  {
    id: 'EQ-01',
    name: 'Mahindra 575 DI Tractor (ડ્રાઈવર સાથે)',
    type: 'Tractor',
    ownerName: 'Raju Patel',
    phone: '+91 98712 34560',
    village: 'Motipur',
    price: 800,
    unit: 'per hour',
    rating: 4.9,
    distance: '2.5 km',
    description: '45 HP Mahindra Tractor with experienced driver. Available for plowing and haulage.',
    icon: '🚜',
    status: 'APPROVED'
  },
  {
    id: 'EQ-02',
    name: 'Shaktiman Rotavator (7 Feet)',
    type: 'Rotavator',
    ownerName: 'Kisan Agro Center',
    phone: '+91 91234 56789',
    village: 'Motipur',
    price: 350,
    unit: 'per hour',
    rating: 4.6,
    distance: '4.0 km',
    description: 'Heavy duty rotavator for fine seedbed preparation in dry and wet soil.',
    icon: '⚙️',
    status: 'APPROVED'
  },
  {
    id: 'EQ-03',
    name: 'Multi-Crop Thresher (કપાસ અને જીરું)',
    type: 'Thresher',
    ownerName: 'Dineshbhai Farmer',
    phone: '+91 98989 12345',
    village: 'Bavla',
    price: 1200,
    unit: 'per hour',
    rating: 4.8,
    distance: '6.0 km',
    description: 'High speed grain cleaning and crop separation machine.',
    icon: '🌾',
    status: 'APPROVED'
  }
];

const INITIAL_SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 'PRD-01',
    name: 'Urea Fertilizer (45kg Bag)',
    category: 'Fertilizer',
    shopName: 'Patel Krushi Kendra',
    price: 266,
    stock: 45,
    village: 'Motipur',
    icon: '🌱',
    isSponsored: true,
    status: 'APPROVED'
  },
  {
    id: 'PRD-02',
    name: 'DAP Fertilizer (50kg Bag)',
    category: 'Fertilizer',
    shopName: 'Shreeji Agro Store',
    price: 1350,
    stock: 12,
    village: 'Motipur',
    icon: '📦',
    status: 'APPROVED'
  },
  {
    id: 'PRD-03',
    name: 'BT Cotton Hybrid Seeds (450g)',
    category: 'Seeds',
    shopName: 'Patel Krushi Kendra',
    price: 850,
    stock: 80,
    village: 'Motipur',
    icon: '🌿',
    status: 'APPROVED'
  },
  {
    id: 'PRD-04',
    name: 'Neem-based Bio Pesticide (1L)',
    category: 'Pesticides',
    shopName: 'Green Earth Bio Store',
    price: 450,
    stock: 25,
    village: 'Sanand',
    icon: '🧪',
    status: 'APPROVED'
  }
];

const INITIAL_LIVESTOCK: LivestockListing[] = [
  {
    id: 'LS-01',
    type: 'Gir Cow (ગીર ગાય - શુદ્ધ નસલ)',
    yield: '14 L/day',
    age: '3.5 years',
    price: 68000,
    ownerName: 'Sureshbhai Rabari',
    phone: '+91 99887 76655',
    location: 'Motipur (2 km)',
    icon: '🐄',
    status: 'APPROVED'
  },
  {
    id: 'LS-02',
    type: 'Jafrabadi Buffalo (જાફરાબાદી ભેંસ)',
    yield: '16 L/day (8.2 Fat)',
    age: '4.5 years',
    price: 88000,
    ownerName: 'Kantibhai Bharwad',
    phone: '+91 98765 00000',
    location: 'Bavla (5 km)',
    icon: '🐃',
    status: 'APPROVED'
  }
];

const INITIAL_MILK_ENTRIES: MilkEntry[] = [
  {
    id: 'MILK-01',
    date: '2026-08-16',
    shift: 'Morning',
    animalType: 'Cow',
    quantityLiters: 12.5,
    fatPercentage: 4.5,
    ratePerLiter: 38,
    totalAmount: 475
  },
  {
    id: 'MILK-02',
    date: '2026-08-15',
    shift: 'Evening',
    animalType: 'Buffalo',
    quantityLiters: 9.0,
    fatPercentage: 7.2,
    ratePerLiter: 62,
    totalAmount: 558
  }
];

const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'BKG-101',
    type: 'SERVICE',
    title: 'પાઈપ ફિટિંગ રીપેર (Pipe Repair)',
    targetId: 'SRV-01',
    customerName: 'Ramesh Patel',
    customerPhone: '+91 98765 11223',
    providerName: 'Mahesh Plumber',
    date: '2026-08-16 10:30 AM',
    timeSlot: 'Morning (10:00 - 12:00)',
    amount: 350,
    status: 'PENDING',
    notes: 'Borewell pump connector leaking near north field.'
  },
  {
    id: 'BKG-102',
    type: 'EQUIPMENT',
    title: 'Mahindra 575 DI Tractor Rental',
    targetId: 'EQ-01',
    customerName: 'Popatbhai Farmer',
    customerPhone: '+91 98222 33445',
    providerName: 'Raju Patel',
    date: '2026-08-16 02:00 PM',
    timeSlot: '4 Hours Plowing',
    amount: 3200,
    status: 'ACCEPTED',
    notes: 'Field #3 plowing before monsoon sowing.'
  },
  {
    id: 'BKG-103',
    type: 'SHOP_ORDER',
    title: '2x Urea (45kg) + 1x Bio Pesticide',
    targetId: 'PRD-01',
    customerName: 'Vikramsinh Vaghela',
    customerPhone: '+91 97111 88990',
    providerName: 'Patel Krushi Kendra',
    date: '2026-08-16 11:15 AM',
    amount: 982,
    status: 'PENDING',
    notes: 'Keep bags ready for pickup at 5 PM.'
  }
];

const INITIAL_KYC: KYCItem[] = [
  {
    id: 'KYC-882',
    user: 'Mahesh Plumber',
    type: 'Service Provider',
    docType: 'Aadhar + Skill Card',
    details: 'Plumber Certification • Motipur Village',
    submitted: '2 hrs ago',
    status: 'Pending',
    targetId: 'SRV-01'
  },
  {
    id: 'KYC-881',
    user: 'Shreeji Agro Store',
    type: 'Shop Owner',
    docType: 'Fertilizer Retail License',
    details: 'License #GJ-FERT-2023-8891 • Valid till 2026',
    submitted: '5 hrs ago',
    status: 'Pending',
    targetId: 'PRD-02'
  },
  {
    id: 'KYC-880',
    user: 'Raju Patel Tractor',
    type: 'Equipment Owner',
    docType: 'RC Book + Insurance',
    details: 'Mahindra 575 DI (GJ-01-AB-1234)',
    submitted: '1 day ago',
    status: 'Approved',
    targetId: 'EQ-01'
  }
];

const GaonSathiContext = createContext<GaonSathiContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'gaon_sathi_store_v3';

function getInitialState<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed[key] !== undefined) return parsed[key];
    }
  } catch {
    // ignore
  }
  return fallback;
}

export function GaonSathiProvider({ children }: { children: ReactNode }) {
  const [currentRole, setCurrentRole] = useState<UserRole>(() => getInitialState('currentRole', 'USER'));
  const [serviceListings, setServiceListings] = useState<ServiceListing[]>(() => getInitialState('serviceListings', INITIAL_SERVICES));
  const [equipmentListings, setEquipmentListings] = useState<EquipmentListing[]>(() => getInitialState('equipmentListings', INITIAL_EQUIPMENT));
  const [shopProducts, setShopProducts] = useState<ShopProduct[]>(() => getInitialState('shopProducts', INITIAL_SHOP_PRODUCTS));
  const [livestockListings, setLivestockListings] = useState<LivestockListing[]>(() => getInitialState('livestockListings', INITIAL_LIVESTOCK));
  const [milkEntries, setMilkEntries] = useState<MilkEntry[]>(() => getInitialState('milkEntries', INITIAL_MILK_ENTRIES));
  const [bookings, setBookings] = useState<Booking[]>(() => getInitialState('bookings', INITIAL_BOOKINGS));
  const [kycQueue, setKycQueue] = useState<KYCItem[]>(() => getInitialState('kycQueue', INITIAL_KYC));
  const [cart, setCart] = useState<{ product: ShopProduct; quantity: number }[]>(() => getInitialState('cart', []));

  // Save to localStorage on changes
  useEffect(() => {
    try {
      const stateToSave = {
        currentRole,
        serviceListings,
        equipmentListings,
        shopProducts,
        livestockListings,
        milkEntries,
        bookings,
        kycQueue,
        cart,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
    } catch {
      // ignore
    }
  }, [currentRole, serviceListings, equipmentListings, shopProducts, livestockListings, milkEntries, bookings, kycQueue, cart]);

  const switchRole = (role: UserRole) => {
    setCurrentRole(role);
  };

  // 1. Service Provider Actions
  const addServiceListing = (listing: Omit<ServiceListing, 'id' | 'rating' | 'jobsDone' | 'status'>) => {
    const id = `SRV-${Date.now().toString().slice(-4)}`;
    const newListing: ServiceListing = {
      ...listing,
      id,
      rating: 5.0,
      jobsDone: 0,
      status: 'APPROVED',
    };

    setServiceListings(prev => [newListing, ...prev]);

    const kycItem: KYCItem = {
      id: `KYC-${Date.now().toString().slice(-3)}`,
      user: listing.providerName,
      type: 'Service Provider',
      docType: 'Service Registration & Skill Proof',
      details: `${listing.title} • Rate: ₹${listing.basePrice}`,
      submitted: 'Just now',
      status: 'Approved',
      targetId: id
    };
    setKycQueue(prev => [kycItem, ...prev]);
  };

  const updateServiceListing = (id: string, updates: Partial<ServiceListing>) => {
    setServiceListings(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  // 2. Equipment Owner Actions
  const addEquipmentListing = (listing: Omit<EquipmentListing, 'id' | 'rating' | 'status'>) => {
    const id = `EQ-${Date.now().toString().slice(-4)}`;
    const newEq: EquipmentListing = {
      ...listing,
      id,
      rating: 5.0,
      status: 'APPROVED',
    };

    setEquipmentListings(prev => [newEq, ...prev]);

    const kycItem: KYCItem = {
      id: `KYC-${Date.now().toString().slice(-3)}`,
      user: listing.ownerName,
      type: 'Equipment Owner',
      docType: 'RC Book & Equipment Verification',
      details: `${listing.name} • ₹${listing.price}/${listing.unit}`,
      submitted: 'Just now',
      status: 'Approved',
      targetId: id
    };
    setKycQueue(prev => [kycItem, ...prev]);
  };

  // 3. Shop Owner Actions
  const addShopProduct = (product: Omit<ShopProduct, 'id' | 'status'>) => {
    const id = `PRD-${Date.now().toString().slice(-4)}`;
    const newProduct: ShopProduct = {
      ...product,
      id,
      status: 'APPROVED',
    };

    setShopProducts(prev => [newProduct, ...prev]);

    const kycItem: KYCItem = {
      id: `KYC-${Date.now().toString().slice(-3)}`,
      user: product.shopName,
      type: 'Shop Owner',
      docType: 'Product Catalog Addition',
      details: `${product.name} (Stock: ${product.stock}) • ₹${product.price}`,
      submitted: 'Just now',
      status: 'Approved',
      targetId: id
    };
    setKycQueue(prev => [kycItem, ...prev]);
  };

  const updateProductStock = (id: string, newStock: number) => {
    setShopProducts(prev => prev.map(p => p.id === id ? { ...p, stock: newStock } : p));
  };

  // 4. Livestock Actions
  const addLivestockListing = (listing: Omit<LivestockListing, 'id' | 'status'>) => {
    const id = `LS-${Date.now().toString().slice(-4)}`;
    const newLs: LivestockListing = {
      ...listing,
      id,
      status: 'APPROVED',
    };
    setLivestockListings(prev => [newLs, ...prev]);
  };

  const addMilkEntry = (entry: Omit<MilkEntry, 'id' | 'totalAmount'>) => {
    const totalAmount = Math.round(entry.quantityLiters * entry.ratePerLiter);
    const newEntry: MilkEntry = {
      ...entry,
      id: `MILK-${Date.now().toString().slice(-4)}`,
      totalAmount
    };
    setMilkEntries(prev => [newEntry, ...prev]);
  };

  // Bookings Actions
  const createBooking = (bookingData: Omit<Booking, 'id' | 'date' | 'status'>) => {
    const id = `BKG-${Date.now().toString().slice(-4)}`;
    const newBooking: Booking = {
      ...bookingData,
      id,
      date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      status: 'PENDING'
    };
    setBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  // KYC Actions (Sub-Admin / Admin)
  const approveKYC = (kycId: string) => {
    setKycQueue(prev => prev.map(k => k.id === kycId ? { ...k, status: 'Approved' } : k));
    const kyc = kycQueue.find(k => k.id === kycId);
    if (kyc) {
      if (kyc.type === 'Service Provider') {
        setServiceListings(prev => prev.map(s => s.id === kyc.targetId ? { ...s, status: 'APPROVED' } : s));
      } else if (kyc.type === 'Equipment Owner') {
        setEquipmentListings(prev => prev.map(e => e.id === kyc.targetId ? { ...e, status: 'APPROVED' } : e));
      } else if (kyc.type === 'Shop Owner') {
        setShopProducts(prev => prev.map(p => p.id === kyc.targetId ? { ...p, status: 'APPROVED' } : p));
      }
    }
  };

  const rejectKYC = (kycId: string) => {
    setKycQueue(prev => prev.map(k => k.id === kycId ? { ...k, status: 'Rejected' } : k));
  };

  // Cart Actions
  const addToCart = (product: ShopProduct) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkoutCart = (customerName: string, customerPhone: string) => {
    if (cart.length === 0) return;
    
    const totalAmount = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    const summary = cart.map(item => `${item.quantity}x ${item.product.name}`).join(', ');
    const shopName = cart[0].product.shopName;

    createBooking({
      type: 'SHOP_ORDER',
      title: summary,
      targetId: cart[0].product.id,
      customerName: customerName || 'Ramesh Patel',
      customerPhone: customerPhone || '+91 98765 43210',
      providerName: shopName,
      amount: totalAmount,
      notes: 'Order placed via Gaon Sathi Shop Portal.'
    });

    clearCart();
  };

  const pendingRequestsCount = bookings.filter(b => b.status === 'PENDING').length;
  const pendingKycCount = kycQueue.filter(k => k.status === 'Pending').length;

  return (
    <GaonSathiContext.Provider
      value={{
        currentRole,
        switchRole,
        serviceListings,
        equipmentListings,
        shopProducts,
        livestockListings,
        milkEntries,
        bookings,
        kycQueue,
        cart,
        addServiceListing,
        updateServiceListing,
        addEquipmentListing,
        addShopProduct,
        updateProductStock,
        addLivestockListing,
        addMilkEntry,
        createBooking,
        updateBookingStatus,
        approveKYC,
        rejectKYC,
        addToCart,
        removeFromCart,
        clearCart,
        checkoutCart,
        pendingRequestsCount,
        pendingKycCount,
      }}
    >
      {children}
    </GaonSathiContext.Provider>
  );
}

export function useGaonSathi() {
  const context = useContext(GaonSathiContext);
  if (!context) {
    throw new Error('useGaonSathi must be used within a GaonSathiProvider');
  }
  return context;
}
