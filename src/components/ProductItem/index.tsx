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
  title: string;
  price: number;
  image: string;
}

export function ProductItem({ title, price, image }: ProductItemProps) {
  return (
    <Wrapper>
      <ImageContainer>
        <ProductImage src={`/assets/${image}`} alt="Product" />
      </ImageContainer>
      <div>
        <Label>Tradicional</Label>
      </div>
      <Title>{title}</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <ButtonsWrapper>
        <Price>
          R$ <span>{price}</span>
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
