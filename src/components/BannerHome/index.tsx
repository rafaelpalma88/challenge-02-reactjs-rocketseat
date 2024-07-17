import ImagemBannerHome from "../../assets/Imagem.png";
import {
  BoxesItems,
  BoxItem,
  Description,
  TextContent,
  Title,
  Wrapper,
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

        <BoxesItems>
          <BoxItem>
            <span>Compra simples e segura</span>
          </BoxItem>
          <BoxItem>
            <span>Embalagem mantém o café intacto.</span>
          </BoxItem>
          <BoxItem>
            <span>Entrega rápida e rastreável</span>
          </BoxItem>
          <BoxItem>
            <span>O café chega fresquinho até você</span>
          </BoxItem>
        </BoxesItems>
      </TextContent>
      <div>
        <img src={ImagemBannerHome} alt="" />
      </div>
    </Wrapper>
  );
}
