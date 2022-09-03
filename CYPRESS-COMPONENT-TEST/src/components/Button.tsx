export interface ButtonProps {
  onClick: () => void;
}

export function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Button Test</button>;
}
