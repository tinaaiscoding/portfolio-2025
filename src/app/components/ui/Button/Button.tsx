import './Button.css'

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
}: Props) {
  return <button className={`${variant} ${className}`}>{children}</button>;
}
