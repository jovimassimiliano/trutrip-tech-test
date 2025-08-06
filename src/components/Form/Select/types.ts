export type SelectProps = {
  options: { label: string; value: string }[];
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  value: string;
  label?: string;
};
