import * as S from './style'

export default function BlockForm(props) {
    return (
        <>
            <S.Bloco>
                <p>{props.value}</p>
                <hr/>
                {props.children}
            </S.Bloco>
        </>
    )
}