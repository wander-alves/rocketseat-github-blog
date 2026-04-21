import styled from "styled-components";

export const PostDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
`;

export const PostTitleContainer = styled.div`
  padding: 3.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${({theme})=> theme["base-profile"]};
  border-radius: 10px;

  & > h1 {
    font: ${({theme})=> theme["font-title-l"]};
    color: ${({theme})=> theme["base-title"]};
    margin-block: 2rem 0.8rem;
  }
`;

export const PostTitleLinks = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const PostContentContainer = styled.div`
  padding: 4rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  font: ${({theme}) => theme["font-text-m"]};

  & > ul {
    padding-left: 1.2rem;
  }

  & > pre > div {
    
    padding: 1.6rem;
    border-radius: 2px;
    background-color: ${({theme}) => theme["base-profile"]} !important;
  }
`