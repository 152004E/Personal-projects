 const Header = ({ tilte, show }) => {
  return (
    <header>
      <h1 className="tilte">{tilte || "titulo por defecto"}</h1>

      {show ? <p>Este prop se va a ver solo si es tru</p> : null}
    </header>
  );
};
export default Header;