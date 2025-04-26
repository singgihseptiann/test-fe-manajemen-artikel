export type CategoryProps = {
  categories: { label: string; name: string }[];
  onChange?: (value: string) => void;
  defaultValue?: string;
};
