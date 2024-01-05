import RadioButton from "./RadioButton";

export default function RadioButtonSet({
  children,
  options,
  checkedId,
  onChange,
}) {
  return (
    <fieldset>
      <legend>{children}</legend>
      {options.map((option) => (
        <RadioButton
          key={option.id}
          option={option}
          checked={option.id === checkedId}
          onChange={onChange}
        />
      ))}
    </fieldset>
  );
}
