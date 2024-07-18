import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Wrapper = styled.div`
  color: ${props => props.theme['base-card']};
  ${mixins.fonts.titleL};
  text-align: center;
`;

export const Title = styled.p`
  color: ${props => props.theme['base-subtitle']};
  ${mixins.fonts.titleL};
`;

export const Description = styled.p`
  color: ${props => props.theme['base-label']};
  ${mixins.fonts.textS};
`;

export const ButtonsWrapper = styled.p`
  display: flex;
`;
