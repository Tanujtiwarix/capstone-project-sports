function SearchBar({ value, onChange }) {
  return (
    <div className="relative mt-4">
      <input
        type="text"
        placeholder="🔍 Search player..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 pl-5 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />
    </div>
  );
}

export default SearchBar;