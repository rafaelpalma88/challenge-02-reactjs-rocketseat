import { ProductItem } from "../ProductItem";
import { ListItem, ListItems, Title, Wrapper } from "./styles";

export function ProductsList() {
  return (
    <Wrapper>
      <Title>Nossos cafés</Title>
      <ListItems>
        <ListItem>
          <ProductItem />
        </ListItem>
        <ListItem>
          <ProductItem />
        </ListItem>
        <ListItem>
          <ProductItem />
        </ListItem>
        <ListItem>
          <ProductItem />
        </ListItem>
        <ListItem>
          <ProductItem />
        </ListItem>
        <ListItem>
          <ProductItem />
        </ListItem>
        <ListItem>
          <ProductItem />
        </ListItem>
      </ListItems>
    </Wrapper>
  )
}
