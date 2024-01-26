import SlButton from "@shoelace-style/shoelace/dist/react/button";
import TextInput from "../forms/TextInput";
import InputSection from "../forms/InputSection";

export default function Phase1({ buyProcedure, onChange }) {
  return (
    <InputSection>
      <SlButton variant="primary">Primary</SlButton>
      <TextInput
        type="text"
        name="title"
        defaultValue={buyProcedure.title}
        onBlur={(event) => onChange(event.target.value, "title")}
      >
        Wat wil je inkopen?
      </TextInput>
    </InputSection>
  );
}
