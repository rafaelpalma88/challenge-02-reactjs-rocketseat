import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export const Wrapper = styled.div`
  display: flex;
  height: 34rem;
  justify-content: space-between;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const Title = styled.h2`
  ${mixins.fonts.titleXL};
`;

export const Description = styled.p`
  margin-top: 1rem;
  padding-bottom: 4.5rem;
  ${mixins.fonts.textL};
`;

export const TextContent = styled.div`
  padding-right: 2rem;

`;

export const BoxItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BoxItem = styled.div`
  flex: 1 1 50%;
  box-sizing: border-box;
  color: ${(props) => props.theme["base-text"]};
  ${mixins.fonts.textM};
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  span {
    padding-left: 0.5rem;
  }
`;

export const CustomShoppingCart = styled(ShoppingCart)`
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 50%;
  border: 0px;
  padding: 0.5rem;
`;

export const CustomTimer = styled(Timer)`
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["yellow"]};
  border-radius: 50%;
  border: 0px;
  padding: 0.5rem;
`;

export const CustomPackage = styled(Package)`
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["base-text"]};
  border-radius: 50%;
  border: 0px;
  padding: 0.5rem;
`;

export const CustomCoffee = styled(Coffee)`
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["purple"]};
  border-radius: 50%;
  border: 0px;
  padding: 0.5rem;
`;
