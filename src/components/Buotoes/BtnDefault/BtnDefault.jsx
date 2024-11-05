import "./BtnDefault.css";

export const BtnDefault = ({ texto, alternativeClass, ...props }) => {
  return (
    <>
      <button className={`btnDefault ${alternativeClass}`} {...props}>
        {texto}
      </button>
    </>
  );
};
