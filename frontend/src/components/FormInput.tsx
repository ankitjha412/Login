interface FormInputProps {
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput = ({
  type,
  label,
  value,
  onChange,
  required = true,
}: FormInputProps) => (
  <div className="relative w-full">
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="peer block w-full px-4 py-3 rounded-xl
                 bg-white/90 backdrop-blur 
                 border border-gray-300 dark:border-gray-600
                 text-gray-900 dark:text-gray-900 
                 shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400
                 transition-all duration-300 ease-in-out"
    />
    <label
      className="absolute left-4 top-3 text-gray-500 dark:text-gray-300
                 text-sm pointer-events-none transition-all duration-200
                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                 peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-500"
    >
      {label}
    </label>
  </div>
);

export default FormInput;
