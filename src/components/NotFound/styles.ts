import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  
  margin-top: 4.8rem;
  
  &>h3 {
    font: ${({theme})=> theme["font-title-m"]};
    color: ${({theme})=> theme["base-title"]};
  }
  &>p {
    font: ${({theme})=> theme["font-text-m"]};
    color: ${({theme})=> theme["base-text"]};
  }
`;