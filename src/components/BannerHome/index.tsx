
import ImagemBannerHome from "../../assets/Imagem.png";
import {
  BoxItems,
  BoxItem,
  Description,
  TextContent,
  Title,
  Wrapper,
  CustomShoppingCart,
  CustomTimer,
  CustomPackage,
  CustomCoffee,
} from "./styles";

export function BannerHome() {
  return (
    <Wrapper>
      <TextContent>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Description>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Description>

        <BoxItems>
          <BoxItem>
            <CustomShoppingCart size={30} />
            <span>Compra simples e segura</span>
          </BoxItem>
          <BoxItem>
            <CustomTimer size={30} />
            <span>Embalagem mantém o café intacto.</span>
          </BoxItem>
          <BoxItem>
            <CustomPackage size={30} />
            <span>Entrega rápida e rastreável</span>
          </BoxItem>
          <BoxItem>
            <CustomCoffee size={30} />
            <span>O café chega fresquinho até você</span>
          </BoxItem>
        </BoxItems>
      </TextContent>
      <div>
        <img src={ImagemBannerHome} alt="" />
      </div>
    </Wrapper>
  );
}
