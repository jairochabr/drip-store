import './BtnWarning.css'

export const BtnWarning = ({texto}) => {
    return ( 
        <>
            <button className='btnWarning'>{texto}</button>
        </>
     );
}