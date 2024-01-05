export default function RadioButton({ option, checked, onChange }) {
  return (
    <>
      <input
        type="radio"
        id={option.id}
        name={option.name}
        value={option.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="contactChoice1">{option.caption}</label>
    </>
  );
}
