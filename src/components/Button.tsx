type buttonProps = { children: string; onClick?: () => void };

function Button({ children, onClick }: buttonProps) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
