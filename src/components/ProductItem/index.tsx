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
  WrapperLabel,
} from './styles';
import { maskMoney } from '../../utils/maskMoney';

interface ProductItemProps {
  title: string;
  price: number;
  image: string;
  features: string[];
}

export function ProductItem({
  title,
  price,
  image,
  features,
}: ProductItemProps) {
  return (
    <Wrapper>
      <ImageContainer>
        <ProductImage src={`/assets/${image}`} alt="Product" />
      </ImageContainer>
      <WrapperLabel>
        {features?.map(item => <Label key={item}>{item}</Label>)}
      </WrapperLabel>
      <Title>{title}</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <ButtonsWrapper>
        <Price>
          R$ <span>{maskMoney(price)}</span>
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
