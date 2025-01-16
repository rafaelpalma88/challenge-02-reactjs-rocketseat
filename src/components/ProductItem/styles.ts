import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Wrapper = styled.div`
  color: ${props => props.theme['base-card']};
  ${mixins.fonts.titleL};
  text-align: center;
  background-color: red;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${props => props.theme['base-card']};
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 110px;
`;

export const ProductImage = styled.img`
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: auto;
`;

export const Title = styled.p`
  color: ${props => props.theme['base-subtitle']};
  ${mixins.fonts.titleS};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: ${props => props.theme['base-label']};
  ${mixins.fonts.textS};
`;

export const WrapperLabel = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

export const Label = styled.span`
  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  border-radius: 15px;
  ${mixins.fonts.tag};
  text-transform: uppercase;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-right: 0.5rem;
`;

export const ButtonsWrapper = styled.p`
  display: flex;
  justify-content: space-around;
  padding-top: 2rem;
  padding-bottom: 2rem;
  align-items: center;
`;

export const Price = styled.p`
  ${mixins.fonts.textS};
  color: ${props => props.theme['base-text']};

  span {
    ${mixins.fonts.titleM};
  }
`;

export const ButtonQty = styled.div`
  background-color: ${props => props.theme['base-button']};
  border-radius: 6px;
  ${mixins.fonts.textM};
  color: ${props => props.theme['base-title']};
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  span {
    display: inline-block;
    color: ${props => props.theme['purple']};
    /* font-weight: bold; */
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`;

export const ButtonAddToCart = styled.button`
  display: flex;
  border: 0px;
  border-radius: 10px;
  background-color: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['white']};
  height: auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
