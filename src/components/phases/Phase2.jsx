import RadioButtonSet from "../forms/RadioButtonSet";
import TextInput from "../forms/TextInput";
import InputSection from "../forms/InputSection";
import CostOverview from "../forms/CostOverview";

export default function Phase2({ buyProcedure, onChange }) {
  const costEnumerationOptions = [
    {
      id: "1",
      name: "yearly",
      caption: "Jaarlijks",
    },
    {
      id: "2",
      name: "quarterly",
      caption: "Per kwartaal",
    },
    {
      id: "3",
      name: "oneTime",
      caption: "Eenmalig",
    },
  ];

  return (
    <>
      <InputSection>
        <TextInput
          type="number"
          step={1}
          name="price"
          value={buyProcedure.price}
          onBlur={(event) => onChange(event.target.value, "price")}
          label="Wat is momenteel de beste inschatting van de kosten?"
        />
      </InputSection>
      <InputSection>
        <RadioButtonSet
          options={costEnumerationOptions}
          checkedId={
            buyProcedure.costEnumerationType &&
            buyProcedure.costEnumerationType.toString()
          }
          onChange={(event) =>
            onChange(parseInt(event.target.value), "costEnumerationType")
          }
          label="Binnen welke termijn worden de kosten gemaakt?"
        ></RadioButtonSet>
      </InputSection>
      <InputSection
        isVisible={
          buyProcedure.price > 0 && buyProcedure.costEnumerationType > 0
        }
      >
        <CostOverview
          price={buyProcedure.price}
          costEnumerationType={buyProcedure.costEnumerationType}
        />
      </InputSection>
    </>
  );
}
