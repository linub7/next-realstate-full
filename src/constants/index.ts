export const COLOR_PRIMARY: string = '#1B4242';
export const CONTROL_BUTTON_HEIGHT: number = 40;
export const CONTROL_INPUT_HEIGHT: number = 45;

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
