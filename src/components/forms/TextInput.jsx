export default function TextInput({ children, ...props }) {
  return (
    <fieldset>
      <legend>{children}</legend>
      <input {...props} />
    </fieldset>
  );
}
