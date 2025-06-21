'use client';

import React, { useState } from 'react';
import { FilterBar } from '@/features/PropertyFilters';
import { PropertyCard } from '@/entities/Property';
import { Button } from '@/shared/ui/Button/Button';
import { Property, PropertyFilters } from '@/shared/types/property';

const mockProperties: Property[] = [
  {
    id: 1,
    name: "Жилой комплекс Tashkent City",
        modelLink:'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf',

    location: {
      city: "Ташкент",
      district: "Чиланзарский район"
    },
    areaRange: {
      min: 45,
      max: 120
    },
    priceFrom: 450,
    floors: 25,
    status: "construction",
    amenities: ["Парковка", "Охрана", "Детская площадка", "Фитнес-зал"],
    completionDate: "IV квартал 2025"
  },
  {
    id: 2,
    name: "Комплекс Samarkand Gardens",
        modelLink:'',

    location: {
      city: "Самарканд",
      district: "Центральный район"
    },
    areaRange: {
      min: 55,
      max: 95
    },
    priceFrom: 320,
    floors: 12,
    status: "ready",
    amenities: ["Парковка", "Консьерж", "Спортплощадка"]
  },
  {
    id: 3,
    name: "Oasis Residence",
    modelLink:'',
    location: {
      city: "Ташкент",
      district: "Мирзо-Улугбекский район"
    },
    areaRange: {
      min: 60,
      max: 140
    },
    priceFrom: 580,
    floors: 18,
    status: "construction",
    amenities: ["Подземная парковка", "Охрана 24/7", "Бассейн", "Сауна", "Детский сад"],
    completionDate: "II квартал 2026"
  },
  {
    id: 4,
    name: "Bukhara Premium",
        modelLink:'',

    location: {
      city: "Бухара",
      district: "Центр"
    },
    areaRange: {
      min: 70,
      max: 160
    },
    priceFrom: 420,
    floors: 8,
    status: "ready",
    amenities: ["Парковка", "Ландшафтный дизайн", "Кафе"]
  },
  {
    id: 5,
    name: "Nukus Modern",
        modelLink:'',

    location: {
      city: "Нукус",
      district: "Новый город"
    },
    areaRange: {
      min: 40,
      max: 85
    },
    priceFrom: 280,
    floors: 16,
    status: "planned",
    amenities: ["Парковка", "Охрана", "Магазины на первом этаже"],
    completionDate: "I квартал 2027"
  },
  {
    id: 6,
    name: "Fergana Valley Heights",
        modelLink:'',

    location: {
      city: "Фергана",
      district: "Центральный"
    },
    areaRange: {
      min: 50,
      max: 110
    },
    priceFrom: 350,
    floors: 14,
    status: "construction",
    amenities: ["Парковка", "Детская площадка", "Спортзал", "Охрана"],
    completionDate: "III квартал 2025"
  }
];

const HomePage: React.FC = () => {
  const [filters, setFilters] = useState<PropertyFilters>({});

  const handlePropertyDetails = (id: number) => {
    console.log('Открыть детали для объекта:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* <Navigation /> */}
      <FilterBar filters={filters} onFiltersChange={setFilters} />

      {/* Герой секция */}
      <section className="uzbek-pattern bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Найдите дом своей мечты
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Лучшие жилые комплексы Узбекистана. Современные планировки, качественная отделка, развитая инфраструктура.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="text-lg px-8 py-3">
              Смотреть новостройки
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-3">
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* ... */}
          </div>
        </div>
      </section>

      {/* Каталог */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Популярные жилые комплексы
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Выберите идеальное жилье из нашего каталога проверенных застройщиков
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mockProperties.map((property) => (
              <div key={property.id} className="animate-fade-in">
                <PropertyCard
                  property={property}
                  onDetailsClick={handlePropertyDetails}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" className="px-8 py-3">
              Показать еще объекты
            </Button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Проверенные застройщики</h3>
              <p className="text-gray-600 dark:text-gray-400">Работаем только с надежными компанями с хорошей репутацией</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Лучшие локации</h3>
              <p className="text-gray-600 dark:text-gray-400">Жилые комплексы в развитых районах с хорошей инфраструктурой</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Поддержка 24/7</h3>
              <p className="text-gray-600 dark:text-gray-400">Наши эксперты всегда готовы помочь с выбором недвижимости</p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3D</span>
                </div>
                <span className="text-xl font-bold">3Devol.uz</span>
              </div>
              <p className="text-gray-400">
                Ведущая платформа недвижимости Узбекистана
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Новостройки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Готовое жилье</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Коммерческая</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Города</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Ташкент</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Самарканд</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бухара</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Все города</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+998 33 509 48 56</li>
                <li>info@3devol.uz</li>
                <li>Ташкент, ул. Амира Темура, 1</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 3Devol.uz. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
