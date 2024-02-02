import SlRadio from "@shoelace-style/shoelace/dist/react/radio";
import SlRadioGroup from "@shoelace-style/shoelace/dist/react/radio-group";

export default function RadioButtonSet({
  label,
  options,
  checkedId,
  onChange,
}) {
  return (
    <>
      <SlRadioGroup label={label} name="a" value={checkedId}>
        {options.map((option) => (
          <SlRadio
            key={option.id}
            value={option.id}
            checked={option.id === checkedId}
            onFocus={onChange}
          >
            {option.caption}
          </SlRadio>
        ))}
      </SlRadioGroup>
    </>
  );
}
