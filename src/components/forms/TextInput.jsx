import SlInput from "@shoelace-style/shoelace/dist/react/input";

export default function TextInput({ children, ...props }) {
  return <SlInput className="sl-input" {...props} />;
}
