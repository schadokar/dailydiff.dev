export default function Tag({ children, variant = '' }) {
  return <span className={`tag${variant ? ` tag--${variant}` : ''}`}>{children}</span>;
}
