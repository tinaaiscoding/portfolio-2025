import './TextBubble.css';

type Props = {
  children: React.ReactNode;
};

export default function TextBubble({ children }: Props) {
  return <div className='text_bubble_wrap'>{children}</div>;
}
