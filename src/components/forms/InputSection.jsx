export default function InputSection({ children, isVisible = true }) {
  return <>{isVisible && <div className="phase-input">{children}</div>}</>;
}
