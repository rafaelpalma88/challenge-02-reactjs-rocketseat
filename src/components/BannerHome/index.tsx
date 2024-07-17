import ImagemBannerHome from '../../assets/Imagem.png'
import { Wrapper } from './styles'

export function BannerHome() {
  return (
    <Wrapper>
      <div>
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div>
          <div>
            <span>Compra simples e segura</span>
          </div>
          <div>
            <span>Embalagem mantém o café intacto.</span>
          </div>
          <div>
            <span>Entrega rápida e rastreável</span>
          </div>
          <div>
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </div>
      <div>
        <img src={ImagemBannerHome} alt='' />
      </div>
    </Wrapper>
  )
}
