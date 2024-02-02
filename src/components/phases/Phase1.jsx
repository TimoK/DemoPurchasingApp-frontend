import TextInput from "../forms/TextInput";
import InputSection from "../forms/InputSection";

export default function Phase1({ buyProcedure, onChange }) {
  return (
    <InputSection>
      <TextInput
        type="text"
        name="title"
        label="Wat wil je inkopen?"
        value={buyProcedure.title}
        onBlur={(event) => onChange(event.target.value, "title")}
      />
    </InputSection>
  );
}
