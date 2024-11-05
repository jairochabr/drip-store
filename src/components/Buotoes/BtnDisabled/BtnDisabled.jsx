import './BtnDisabled.css'

export const BtnDisabled = ({texto}) => {
    return ( 
        <>
        <button className='btnDisabled'>{texto}</button>
        </>
     );
}