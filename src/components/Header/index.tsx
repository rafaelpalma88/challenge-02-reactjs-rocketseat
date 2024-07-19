import {
  ButtonsWrapper,
  CartButton,
  LocationButton,
  LogoImg,
  Wrapper,
} from './styles';
import coffeeDeliveryLogo from '../../assets/Logo.png';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <LogoImg src={coffeeDeliveryLogo} alt="Logotipo Coffee Delivery" />
      </Link>
      <ButtonsWrapper>
        <LocationButton>
          <MapPin size={16} />
          <span>Porto Alegre, RS</span>
        </LocationButton>
        <CartButton>
          <ShoppingCart size={18} />
        </CartButton>
      </ButtonsWrapper>
    </Wrapper>
  );
}
