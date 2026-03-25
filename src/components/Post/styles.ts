import styled from "styled-components";

export const PostContainer = styled.div`
  height: 26rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  background-color: ${({theme})=> theme["base-post"]};

  border-radius: 10px;

  > p {
    font: ${({theme})=> theme["font-text-m"]};
    
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  > h3 { 
    max-width: 28.4rem;
    font: ${({theme})=> theme["font-title-m"]};
    color: ${({theme}) => theme["base-title"]};
  }

  > span {
    white-space: nowrap;
    font: ${({theme})=> theme["font-text-m"]};
  }
`;