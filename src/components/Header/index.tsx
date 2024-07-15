import {
  ButtonsWrapper,
  CartButton,
  LocationButton,
  Logo,
  Wrapper,
} from './styles'
import coffeeDeliveryLogo from '../../assets/Logo.png'
import { MapPin } from '@phosphor-icons/react'

export function Header() {
  return (
    <Wrapper>
      <img src={coffeeDeliveryLogo} alt='Logotipo Coffee Delivery' />
      <Logo />

      <ButtonsWrapper>
        <LocationButton>
          <MapPin size={16} />
          <span>Porto Alegre, RS</span>
        </LocationButton>
        <CartButton>Cart Button</CartButton>
      </ButtonsWrapper>
    </Wrapper>
  )
}
