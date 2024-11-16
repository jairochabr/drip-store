import "./IconsColecao.css";

function IconsColecao({ IconsCard, icon, label, children }) {
  return (
    <div className="collectionIcons">
      <div className="IconsCard">{children}</div>
      <p className="">{label}</p>
    </div>
  );
}

export default IconsColecao;