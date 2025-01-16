import { ProductItem } from '../ProductItem';
import { ListItem, ListItems, Title, Wrapper } from './styles';
import { coffees } from '../../../data.json';

export function ProductsList() {
  return (
    <Wrapper>
      <Title>Nossos cafés</Title>
      <ListItems>
        {coffees.map(item => (
          <ListItem key={item.title}>
            <ProductItem
              image={item.image}
              title={item.title}
              price={item.price}
              features={item.features}
            />
          </ListItem>
        ))}
      </ListItems>
    </Wrapper>
  );
}
