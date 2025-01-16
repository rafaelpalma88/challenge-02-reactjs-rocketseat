import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.img``;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  margin-left: 0.75rem;

  span {
    padding-left: 0.35rem;
  }
`;

export const LocationButton = styled(BaseButton)`
  background-color: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};
  border: 0px;
`;

export const CartButton = styled(BaseButton)`
  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  border: 0px;
`;
