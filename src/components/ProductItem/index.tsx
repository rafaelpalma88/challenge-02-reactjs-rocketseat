import { ShoppingCart } from '@phosphor-icons/react';
import {
  ButtonAddToCart,
  ButtonQty,
  ButtonsWrapper,
  Description,
  ImageContainer,
  Label,
  Price,
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
        <Price>
          R$ <span>9,90</span>
        </Price>
        <ButtonQty>
          <span>-</span> 1 <span>+</span>
        </ButtonQty>
        <ButtonAddToCart>
          <ShoppingCart size={20} />
        </ButtonAddToCart>
      </ButtonsWrapper>
    </Wrapper>
  );
}
