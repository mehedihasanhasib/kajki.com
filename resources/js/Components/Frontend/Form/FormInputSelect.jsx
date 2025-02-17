export default function FormInputSelect({
    id,
    name,
    options = [],
    handleChange,
    required = false,
}) {
    return (
        <select
            id={id}
            name={name}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-gray-300 focus:border-gray-300"
            onChange={(e) => handleChange(e)}
            required={required}
        >
            <option value="">Select a category</option>
            {options.map((option) => {
                return (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                );
            })}
        </select>
    );
}
