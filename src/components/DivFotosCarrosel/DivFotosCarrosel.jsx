import './DivFotosCarrosel.css'
import Ornament11 from "../../assets/HomeFotos/Ornament 11.png";

export const DivFotosCarrosel = ({fotoCarrosel}) => {
    return ( 
        <>
             <div className="divFotosCarrosel">
              <div className="divSapatoCarrosel"><img className="sapatoCarrosel" src={fotoCarrosel} alt="sapatp nike" /></div>
              <img src={Ornament11} alt="ornament" />
            </div>
        </>
     );
}