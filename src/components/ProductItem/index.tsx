import {
  ButtonsWrapper,
  Description,
  ImageContainer,
  Label,
  ProductImage,
  Title,
  Wrapper,
} from './styles';

interface ProductItemProps {
  productImage: string;
  productTitle: string;
}

export function ProductItem({ productImage, productTitle }: ProductItemProps) {
  return (
    <Wrapper>
      <ImageContainer>
        <ProductImage src={productImage} alt="Product" />
      </ImageContainer>
      <div>
        <Label>Tradicional</Label>
      </div>
      <Title>{productTitle}</Title>
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
