import styled from "styled-components";
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

export const PostContainer = styled(Link)`
  height: 26rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  background-color: ${({theme})=> theme["base-post"]};
  text-decoration: none;

  border-radius: 10px;

  > p {
    font: ${({theme})=> theme["font-text-m"]};
    
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.02)
  }
`;

export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 0.8rem;

  > h3 { 
    max-width: 28.4rem;
    font: ${({theme})=> theme["font-title-m"]};
    color: ${({theme}) => theme["base-title"]};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > span {
    white-space: nowrap;
    font: ${({theme})=> theme["font-text-m"]};
  }
`;

export const PostContent = styled(Markdown)`

`