import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.div``

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  margin-left: 1rem; // arrumar pois é 12px.

  span {
    padding-left: 0.35rem;
  }
`

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border: 1px solid ${(props) => props.theme['black']};
`

export const CartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border: 1px solid ${(props) => props.theme['yellow-light']};
`
