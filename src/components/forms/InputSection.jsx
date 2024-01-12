export default function InputSection({ children, isVisible = true }) {
  return <>{isVisible && children}</>;
}
