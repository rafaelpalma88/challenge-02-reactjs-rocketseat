import { ProductItem } from '../ProductItem';
import { ListItem, ListItems, Title, Wrapper } from './styles';

export function ProductsList() {
  const products = [
    {
      title: 'Expresso tradicional',
      image: 'expresso_tradicional.png',
      features: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Expresso Americano',
      image: 'expresso_americano.png',
      features: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Expresso Cremoso',
      image: 'expresso_cremoso.png',
      features: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Expresso Gelado',
      image: 'expresso_gelado.png',
      features: ['Tradicional', 'Gelado'],
      price: 9.9,
    },
    {
      title: 'Café com Leite',
      image: 'cafe_com_leite.png',
      features: ['Tradicional', 'Com Leite'],
      price: 9.9,
    },
    {
      title: 'Latte',
      image: 'latte.png',
      features: ['Tradicional', 'Com Leite'],
      price: 9.9,
    },
    {
      title: 'Capuccino',
      image: 'capuccino.png',
      features: ['Tradicional', 'Com Leite'],
      price: 9.9,
    },
    {
      title: 'Macchiato',
      image: 'macchiato.png',
      features: ['Tradicional', 'Com Leite'],
      price: 9.9,
    },
    {
      title: 'Mocaccino',
      image: 'mocaccino.png',
      features: ['Tradicional', 'Com Leite'],
      price: 9.9,
    },
    {
      title: 'Chocolate Quente',
      image: 'chocolate_quente.png',
      features: ['Especial', 'Com Leite'],
      price: 9.9,
    },
    {
      title: 'Cubano',
      image: 'cubano.png',
      features: ['Especial', 'Alcoolico', 'Gelado'],
      price: 9.9,
    },
    {
      title: 'Havaiano',
      image: 'havaiano.png',
      features: ['Especial'],
      price: 9.9,
    },
    {
      title: 'Árabe',
      image: 'arabe.png',
      features: ['Especial'],
      price: 9.9,
    },
    {
      title: 'Irlandês',
      image: 'irlandes.png',
      features: ['Especial', 'Alcoolico'],
      price: 9.9,
    },
  ];

  return (
    <Wrapper>
      <Title>Nossos cafés</Title>
      <ListItems>
        {products.map(item => (
          <ListItem key={item.title}>
            <ProductItem
              image={item.image}
              title={item.title}
              price={item.price}
            />
          </ListItem>
        ))}
      </ListItems>
    </Wrapper>
  );
}
