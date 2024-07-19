import { ProductItem } from '../ProductItem';
import { ListItem, ListItems, Title, Wrapper } from './styles';
import imgProductExpressoTradicional from '../../assets/expresso_tradicional.png';
import imgProductExpressoAmericano from '../../assets/expresso_americano.png';

export function ProductsList() {
  return (
    <Wrapper>
      <Title>Nossos cafés</Title>
      <ListItems>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Expresso Tradicional"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoAmericano}
            productTitle="Expresso Americano"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Expresso Cremoso"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Expresso Gelado"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Café com Leite"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Latte"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Capuccino"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Macchiato"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Mocaccino"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Chocolate Quente"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Cubano"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Havaiano"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Árabe"
          />
        </ListItem>
        <ListItem>
          <ProductItem
            productImage={imgProductExpressoTradicional}
            productTitle="Irlandês"
          />
        </ListItem>
      </ListItems>
    </Wrapper>
  );
}
