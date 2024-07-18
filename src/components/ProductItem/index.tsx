import { ButtonsWrapper, Description, Title, Wrapper } from './styles';

export function ProductItem() {
  return (
    <Wrapper>
      <p>Tradicional</p>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <ButtonsWrapper>
        <p>R$ 9,90</p>
        <p>+ 1 -</p>
        <p>Cart</p>
      </ButtonsWrapper>
    </Wrapper>
  );
}
