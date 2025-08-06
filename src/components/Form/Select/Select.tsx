import Label from "@/components/Typography/Label";
import {
  Select as SelectContainer,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./base";
import { SelectProps } from "./types";

const Select = ({
  options,
  placeholder,
  disabled,
  onChange,
  value,
  label,
}: SelectProps) => {
  return (
    <div>
      {label && <Label className="mb-2">{label}</Label>}
      <SelectContainer
        disabled={disabled}
        onValueChange={onChange}
        value={value}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectContainer>
    </div>
  );
};

export default Select;
