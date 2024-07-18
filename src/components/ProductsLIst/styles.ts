import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Wrapper = styled.div``;

export const Title = styled.h2`
  color: ${props => props.theme['base-subtitle']};
  ${mixins.fonts.titleL};
  margin-bottom: 2rem;
`;

export const ListItems = styled.div`
  height: 40rem;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  flex: 0 0 25%;
  box-sizing: border-box;
`;
