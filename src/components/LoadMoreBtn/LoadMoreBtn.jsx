const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
