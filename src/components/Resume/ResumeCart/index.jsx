import React from 'react';
import {
  ResumeContainer,
  Subtotal,
  Frete,
  Desconto,
  Total,
  CustomButton
} from './style';

export function ResumeCart({
  title = 'RESUMO',
  subtotal,
  frete,
  desconto,
  total,
  parcelas,
  buttonLabel,
}) {
  return (
    <ResumeContainer>
      <h1>{title}</h1>
      <Subtotal>
        <span>Subtotal: </span>
        <span>{subtotal}</span>
      </Subtotal>
      <Frete>
        <span>Frete: </span>
        <span>{frete}</span>
      </Frete>
      <Desconto>
        <span>Desconto: </span>
        <span>{desconto}</span>
      </Desconto>
      <Total>
        <div className="price">
          <h2>Total</h2>
          <h2>{total}</h2>
        </div>
        <div className="detail">
          <span>{parcelas}</span>
        </div>
      </Total>
      <CustomButton variant='secondary' size='large'>
        {buttonLabel}
      </CustomButton>
    </ResumeContainer>
  );
}