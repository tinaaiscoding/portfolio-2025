import './SectionSpacing.css';

type Props = {
  variant?: 'small' | 'main' | 'large';
};

export default function SectionSpacing({ variant = 'main' }: Props) {
  return <div className={`section_spacing ${variant}`}></div>;
}
