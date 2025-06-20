
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number): string => {
  return price.toLocaleString();
};

export const getStatusInfo = (status: string, completionDate?: string) => {
  switch (status) {
    case 'ready':
      return { text: 'Сдан', color: 'bg-green-100 text-green-800' };
    case 'construction':
      return { text: 'Строится', color: 'bg-yellow-100 text-yellow-800' };
    case 'planned':
      return { text: completionDate || 'Планируется', color: 'bg-blue-100 text-blue-800' };
    default:
      return { text: 'Не указан', color: 'bg-gray-100 text-gray-800' };
  }
};
