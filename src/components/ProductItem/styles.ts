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
  height: 120px;
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

export const Label = styled.span`
  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  border-radius: 15px;
  ${mixins.fonts.tag};
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

export const ButtonsWrapper = styled.p`
  display: flex;
`;
