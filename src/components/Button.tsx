type buttonProps = { children: string };

function Button({ children }: buttonProps) {
  return <button className="button">{children}</button>;
}

export default Button;
