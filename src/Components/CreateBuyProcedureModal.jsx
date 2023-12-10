import { useRef, forwardRef, useImperativeHandle } from "react";

const CreateBuyProcedureModal = forwardRef(function CreateBuyProcedureModal(
  { onCreate },
  ref
) {
  const dialog = useRef();
  const titleInput = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function create() {
    // code duplication, but want to refactor this later (maybe redux?), so acceptable for the time being.
    const isDev = process.env.NODE_ENV === "development";
    const url = isDev
      ? "https://localhost:7244/buyprocedures"
      : "https://demopurchasingappbackend20231208091324.azurewebsites.net/buyprocedures";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {},
    };
    fetch(`${url}/${titleInput.current.value}`, requestOptions).then(
      (response) => {
        titleInput.current.value = "";
        onCreate();
      }
    );
  }

  return (
    <dialog ref={dialog}>
      <p>Bepaal de titel van de nieuwe inkoopprocedure.</p>
      <form method="dialog">
        <input type="text" id="title" ref={titleInput} />
        <button onClick={create}>Bevestig</button>
        <button>Annuleer</button>
      </form>
    </dialog>
  );
});

export default CreateBuyProcedureModal;
