export default function InputSection({ children, isVisible }) {
  return <>{isVisible && children}</>;
}
