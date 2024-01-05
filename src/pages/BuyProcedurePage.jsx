import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBuyProcedure } from "../store/buyProcedureActions";
import RadioButtonSet from "../components/forms/RadioButtonSet";
import TextInput from "../components/forms/TextInput";
import InputSection from "../components/forms/InputSection";
import CostOverview from "../components/forms/CostOverview";

export default function BuyProcedurePage() {
  const buyProcedures = useSelector(
    (state) => state.buyProcedure.buyProcedures
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  const buyProcedure =
    buyProcedures && buyProcedures.filter((x) => x.id.toString() === id)[0];

  function onChange(value, identifier) {
    if (value !== "")
      dispatch(updateBuyProcedure(buyProcedure, identifier, value));
  }

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
      {buyProcedure && (
        <div className="buy-procedure-card">
          <h2>
            {buyProcedure.title ? buyProcedure.title : "Nieuwe procedure"}
          </h2>

          <InputSection isVisible={true}>
            <TextInput
              type="text"
              name="title"
              defaultValue={buyProcedure.title}
              onBlur={(event) => onChange(event.target.value, "title")}
            >
              Wat wil je inkopen?
            </TextInput>
          </InputSection>

          <InputSection isVisible={buyProcedure.title}>
            <TextInput
              type="number"
              step={1}
              name="price"
              defaultValue={buyProcedure.price}
              onBlur={(event) => onChange(event.target.value, "price")}
            >
              Wat is momenteel de beste inschatting van de kosten?
            </TextInput>

            <RadioButtonSet
              options={costEnumerationOptions}
              checkedId={
                buyProcedure.costEnumerationType &&
                buyProcedure.costEnumerationType.toString()
              }
              onChange={(event) =>
                onChange(parseInt(event.target.value), "costEnumerationType")
              }
            >
              Binnen welke termijn worden de kosten gemaakt?
            </RadioButtonSet>
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
        </div>
      )}
    </>
  );
}
