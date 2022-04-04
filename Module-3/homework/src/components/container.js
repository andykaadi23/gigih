const Container = ({ children, show, close }) => {
  if (!show) return null;

  return (
    <>
      <button onClick={close}>X</button>
      {children}
    </>
  );
};

export default Container;
