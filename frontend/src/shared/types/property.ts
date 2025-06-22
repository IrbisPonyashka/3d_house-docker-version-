
export interface Location {
  city: string;
  district: string;
}

export interface AreaRange {
  min: number;
  max: number;
}

export type PropertyStatus = 'ready' | 'construction' | 'planned';

export interface Property {
  id: number;
  name: string;
  modelLink:string,
  location: Location;
  areaRange: AreaRange;
  priceFrom: number;
  floors: number;
  status: PropertyStatus;
  amenities: string[];
  completionDate?: string;
}

export interface PropertyFilters {
  city?: string;
  priceRange?: string;
  areaRange?: string;
  rooms?: string;
  status?: PropertyStatus;
}
