export interface cardProps {
  image: string;
  title: string;
  description: string;
  fullText?: string;
  isOpen: boolean;
  Course?: boolean;
  color: string; 
  onClick: () => void;
}
