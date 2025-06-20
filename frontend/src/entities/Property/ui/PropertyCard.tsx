
import React from 'react';
import { MapPin } from 'lucide-react';
import { Property } from '../model/types';
import { getStatusInfo, formatPrice } from '../../../shared/lib/utils';
import { Button } from '../../../shared/ui/Button/Button';

interface PropertyCardProps {
  property: Property;
  onDetailsClick?: (id: number) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ 
  property, 
  onDetailsClick 
}) => {
  const {
    id,
    name,
    image,
    location,
    areaRange,
    priceFrom,
    floors,
    status,
    amenities,
    completionDate
  } = property;

  const statusInfo = getStatusInfo(status, completionDate);

  const handleDetailsClick = () => {
    onDetailsClick?.(id);
  };

  return (
    <div className="property-card group bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700">
      {/* Изображение */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
            {statusInfo.text}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Контент */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="text-sm">
            {location.city}, {location.district}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Площадь:</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {areaRange.min}—{areaRange.max} м²
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Этажность:</span>
            <span className="font-medium text-gray-900 dark:text-white">{floors} этажей</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xl font-bold text-green-600 dark:text-green-400">
            от {formatPrice(priceFrom)} млн сум
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {amenities.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
              >
                {amenity}
              </span>
            ))}
            {amenities.length > 3 && (
              <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                +{amenities.length - 3}
              </span>
            )}
          </div>
        </div>

        <Button onClick={handleDetailsClick} className="w-full">
          Подробнее
        </Button>
      </div>
    </div>
  );
};
