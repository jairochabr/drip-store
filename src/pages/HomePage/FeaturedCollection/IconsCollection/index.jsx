import { CollectionIcons, IconsCard } from './Style'

function IconsColecao({ label, children }) {
  return (
    <CollectionIcons>
      <IconsCard>{children}</IconsCard>
      <p className="">{label}</p>
    </CollectionIcons>
  );
}

export default IconsColecao;