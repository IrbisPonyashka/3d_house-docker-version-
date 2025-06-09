type SelectFilterProps = {
  type: 'select';
  label: string;
  value: string;
 options: { key: string; value: string }[];
  onChange: (value: string) => void;
};

type RangeFilterProps = {
  type: 'range';
  label: string;
  value: [number | null, number | null]; // поддержка null
  min: number;
  max: number;
  onChange: (value: [number | null, number | null]) => void;
};

type TextFilterProps = {
  type: 'text';
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export type FilterItemProps = SelectFilterProps | RangeFilterProps | TextFilterProps;