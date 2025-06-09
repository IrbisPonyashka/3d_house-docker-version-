'use client';
import { FilterItemProps } from "./types";
import { useTranslations } from "next-intl";

export const FilterItem: React.FC<FilterItemProps> = (props) => {
  const t = useTranslations('searchApartsFilter');

  if (props.type === "select") {
    return (
      <div className="flex flex-col gap-2">
         <label className="block text-lg font-medium mb-1">{props.label}</label>
        <select
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          className="border border-primary bg-primary-dark rounded px-2 py-1.75 "
        >
          {props.options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (props.type === "range") {
    const [min, max] = props.value;

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      const parsed = val === '' ? null : Number(val);
      props.onChange([
        parsed ?? null,
        max ?? null
      ]);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      const parsed = val === '' ? null : Number(val);
      props.onChange([
        min ?? null,
        parsed ?? null
      ]);
    };

    return (
      <div className="flex flex-col gap-2">
        <label className="block text-lg font-medium mb-1">{props.label}</label>
        <div className="flex gap-2 items-center">
          <input
            placeholder={t('minLabel')}
            type="number"
            value={min ?? ''}
            min={props.min}
            max={props.max}
            onChange={handleMinChange}
            className="border border-primary no-spinner rounded px-2 py-1 w-24 "
          />
          <span>-</span>
          <input
            placeholder={t('maxLabel')}
            type="number"
            value={max ?? ''}
            min={props.min}
            max={props.max}
            onChange={handleMaxChange}
            className="border border-primary no-spinner rounded px-2 py-1 w-24"
          />
        </div>
      </div>
    );
  }

  if (props.type === "text") {
    return (
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium mb-1">{props.label}</label>
        <input
          type="text"
          value={props.value ?? ''}
          onChange={(e) => props.onChange(e.target.value)}
          className="border rounded px-2 py-1 w-24"
        />
      </div>
    );
  }

  return null;
};