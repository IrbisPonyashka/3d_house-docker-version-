'use client';
import { useTranslations } from "next-intl";
import { FilterItem } from "../FilterItem";
import { useState } from "react";

export function FilterPanel() {
  const [priceRange, setPriceRange] = useState<[number | null, number | null]>([null, null]);
  const [pricePerMeterRange, setPriceMeterRange] = useState<[number|null,number|null]>([null, null])
  const t = useTranslations('searchApartsFilter');
  const optionsT = useTranslations('locationOptions');
  const [currentLocation, setCurrentLocation] = useState('')
  const locationOptios = [
    {key:'allCountry', value:optionsT('allCountry')},
    {key:'tashkent', value:optionsT('tashkent')},
    {key:'karakalpakstan', value:optionsT('karakalpakstan')},
    {key:'andijan', value:optionsT('andijan')},
    {key:'bukhara', value:optionsT('bukhara')},
    {key:'djizzakh', value:optionsT('djizzakh')},
    {key:'kashkadarya', value:optionsT('kashkadarya')},
    {key:'navoiy', value:optionsT('navoiy')},
    {key:'namangan', value:optionsT('namangan')},
    {key:'samarkand', value:optionsT('samarkand')},
    {key:'surkhandarya', value:optionsT('surkhandarya')},
    {key:'syrdarya', value:optionsT('syrdarya')},
    {key:'tashkentRegion', value:optionsT('tashkentRegion')},
    {key:'fergana', value:optionsT('fergana')},
    {key:'khorezm', value:optionsT('khorezm')},
  ]
  return (
    <section className="filters mb-10">
      <div className="filters-content container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">{t('title')}</h2>
        <ul className="filters-lists flex gap-5 items-center">
          <li className="filter-list">
            <FilterItem
              type="range"
              min={0}
              max={10000000}
              label={t('priceFilterLabel')}
              value={priceRange}
              onChange={(val) => setPriceRange(val)}
            />
          </li>
          <li className="filter-list">
            <FilterItem
              type="range"
              min={0}
              max={10000000}
              label={t('pricePerMeterFilterLabel')}
              value={pricePerMeterRange}
              onChange={(val) => setPriceMeterRange(val)}
            />
          </li>
          <li className="filter-list">
            <FilterItem
              type="select"
              options={locationOptios}
              label={t('districtSelectLabel')}
              value={currentLocation}
              onChange={(val) => setCurrentLocation(val)}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
