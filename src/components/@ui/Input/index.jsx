import * as S from './style'

export default function Input(props) {
    return (
        <S.InputBox>
            <S.Label htmlFor={props.htmlFor}>{props.labelValue}</S.Label>
            <S.Input id={props.id} placeholder={props.placeholder}/>
        </S.InputBox>
    )
}