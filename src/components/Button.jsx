export default function Button({ children, variant = 'ghost', size = '', href, onClick, type = 'button', disabled = false }) {
  const cls = `btn${variant ? ` btn--${variant}` : ''}${size ? ` btn--${size}` : ''}`;
  if (href) return <a className={cls} href={href}>{children}</a>;
  return <button className={cls} type={type} onClick={onClick} disabled={disabled}>{children}</button>;
}
