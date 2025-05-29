export interface Club {
  id: number;
  name: string;
  description: string;
  ageRange: string;
  price: number;
  location: string;
  category: string;
  schedule: Schedule[];
  rating: number;
  reviews: Review[];
  capacity: number;
  enrolledCount: number;
  imageUrl: string;
}

export interface Schedule {
  id: number;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export interface Review {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FilterOptions {
  category: string;
  minAge: number;
  maxAge: number;
  maxPrice: number;
}