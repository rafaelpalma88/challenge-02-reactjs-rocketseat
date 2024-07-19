import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Wrapper = styled.div``;

export const Title = styled.h2`
  color: ${props => props.theme['base-subtitle']};
  ${mixins.fonts.titleL};
  margin-bottom: 2rem;
`;

export const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ListItem = styled.div`
  box-sizing: border-box;
  flex: 0 0 calc(25% - 2rem);
  padding-top: 1rem;
`;
