export type CategoryProps = {
  categories: { label: string; value: string }[];
  onChange?: (value: string) => void;
  defaultValue?: string;
};