export const SelectField = ({
  id,
  label,
  options,
  register,
  required,
}: {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  register: any;
  required?: boolean;
}) => (
  <label
    htmlFor={id}
    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
  >
    <select
      id={id}
      className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
      required={required}
      {...register(id)}
    >
      <option value="no" defaultChecked>
        Pilih {label}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
      {label}
    </span>
  </label>
);
