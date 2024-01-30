import { SubscriptionPlan } from '@/types';

export const COLOR_PRIMARY: string = '#1B4242';
export const CONTROL_BUTTON_HEIGHT: number = 40;
export const CONTROL_INPUT_HEIGHT: number = 42;

export const USER_MENU = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Properties',
    path: '/user/properties',
  },
  {
    name: 'Account',
    path: '/user/account',
  },
  {
    name: 'Subscriptions',
    path: '/user/subscriptions',
  },
  {
    name: 'Queries',
    path: '/user/queries',
  },
];

export const ADMIN_MENU = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Properties',
    path: '/admin/properties',
  },
  {
    name: 'Users',
    path: '/admin/users',
  },
];

export const PROPERTY_TYPES = [
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'villa', label: 'Villa' },
  { value: 'cottage', label: 'Cottage' },
  { value: 'land', label: 'Land' },
  { value: 'other', label: 'Other' },
];

export const PROPERTY_STATUSES = [
  { value: 'rent', label: 'Rent' },
  { value: 'sale', label: 'Sale' },
];

export const CITIES = [
  { value: 'tabriz', label: 'Tabriz' },
  { value: 'tehran', label: 'Tehran' },
  { value: 'karaj', label: 'Karaj' },
  { value: 'urmia', label: 'Urmia' },
  { value: 'ardabil', label: 'Ardabil' },
  { value: 'zanjan', label: 'Zanjan' },
  { value: 'isfahan', label: 'Isfahan' },
  { value: 'shiraz', label: 'Shiraz' },
  { value: 'ahwaz', label: 'Ahwaz' },
];

export const PARKING = [
  { value: 'covered', label: 'Covered' },
  { value: 'open', label: 'Open' },
  { value: 'none', label: 'None' },
];

export const FURNISHED_STATUSES = [
  { value: 'furnished', label: 'Furnished' },
  { value: 'semi-furnished', label: 'Semi-Furnished' },
  { value: 'unfurnished', label: 'Unfurnished' },
];

export const FACING = [
  { value: 'east', label: 'East' },
  { value: 'west', label: 'West' },
  { value: 'north', label: 'North' },
  { value: 'south', label: 'South' },
  { value: 'north-east', label: 'North-East' },
  { value: 'north-west', label: 'North-West' },
  { value: 'south-east', label: 'South-East' },
  { value: 'south-west', label: 'South-West' },
];

export const SHOW_OWNER_DETAILS = [
  { value: true, label: 'Yes' },
  { value: false, label: 'No' },
];

export const DAYJS_FORMAT: string = 'DD MMM YYYY HH:mm A';

export const SUBSCRIPTIONS_PLANS: SubscriptionPlan[] = [
  {
    name: 'Basic',
    price: 0,
    propertiesLimit: 3,
    imagesPerPropertyLimit: 3,
    features: [
      'Free for Lifetime',
      'Property Listing',
      'Property Details',
      '3 Images per Property',
      '3 Properties Limit',
      'Property Search',
    ],
  },
  {
    name: 'Standard',
    price: 10,
    propertiesLimit: 10,
    imagesPerPropertyLimit: 5,
    features: [
      'Free for Lifetime',
      'Property Listing',
      'Property Details',
      '5 Images per Property',
      '10 Properties Limit',
      'Property Search',
      'AI Support',
      '24/7 Support on Email',
    ],
  },
  {
    name: 'Premium',
    price: 25,
    propertiesLimit: 100,
    imagesPerPropertyLimit: 15,
    features: [
      'Free for Lifetime',
      'Property Listing',
      'Property Details',
      '15 Images per Property',
      '100 Properties Limit',
      'Property Search',
      'AI Support',
      '24/7 Support on Email',
      '24/7 Support on Phone',
      'Personal Account Manager',
    ],
  },
];
