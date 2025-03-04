import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type InputTypes = {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function MainInput({ name, label, value, onChange }: InputTypes) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input 
        type="text" // Always use "text" for general input fields
        id={name}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange} 
      />
    </div>
  )
}
