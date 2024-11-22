export default function Input({ name, placeholder, type, setValue, value }) {
  return (
    <div className="email">
      <label htmlFor={type} className="text-gray-700 font-medium">
        {name}
      </label>
      <input
        id={type}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
