import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Wrapper = styled.div`
  display: flex;
  height: 34rem;
  justify-content: space-between;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Title = styled.h2`
  ${mixins.fonts.titleXL};
`;

export const Description = styled.p`
  margin-top: 1rem;
  ${mixins.fonts.textL};
`;

export const TextContent = styled.div`
  padding-right: 2rem;
`;

export const BoxesItems = styled.div`
  width: 50%;
  flex-wrap: wrap;
`;

export const BoxItem = styled.div`
  span {
    color: "red";
  }
`;
