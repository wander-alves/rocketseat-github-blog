import { useParams } from 'react-router-dom';
import { useEffect, useState, type CSSProperties } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula';



import { getRepositoryIssueDetails } from '../../utils/api';
import { Link } from '../../components/Link';
import { Main } from '../../components/Main';
import { StatsList } from '../../components/StatsList';
import { StatsItem } from '../../components/StatsItem';
import { PostContentContainer, PostDetailsContainer, PostTitleContainer, PostTitleLinks } from './styles';

import { getPtBRDateString } from '../../utils/date-formatter';

import backImg from '../../assets/chevron-left-solid.svg';
import extLinkImg from '../../assets/arrow-up-right-from-square-solid.svg';
import githubImg from '../../assets/github-brands.svg';
import calendarImg from '../../assets/calendar-day-solid.svg';
import commentImg from '../../assets/comment-solid.svg';

export function PostDetails(){
  const [title, setTitle ] = useState('');
  const [content, setContent ] = useState('');
  const [username, setUsername ] = useState('');
  const [repositoryURL, setRepositoryURL] = useState('');
  const [commentsCount, setCommentsCount] = useState('');
  const [createdAt, setCreatedAt] = useState('');


  const props = useParams();
  
  async function handlePostDetails(){
    const data = await getRepositoryIssueDetails(props.id!);
    
    setTitle(data.title);
    setContent(data.body);
    setUsername(data.user.login);
    setRepositoryURL(data.html_url);
    setCommentsCount(data.comments);
    const formattedDate = getPtBRDateString(data.created_at);
    setCreatedAt(formattedDate);
  }
  
  useEffect(()=> {
    handlePostDetails();
  }, []);
  return (
    <PostDetailsContainer>
      <Main>
        <PostTitleContainer>
          <PostTitleLinks>
            <Link to='/'>
              <img src={backImg} alt='Voltar' />
              voltar
            </Link>
            <Link to={repositoryURL}>
              Ver no GitHub
              <img src={extLinkImg} alt='Voltar' />
            </Link>
          </PostTitleLinks>
          <h1>{title}</h1>
          <StatsList>
            <StatsItem>
              <img src={githubImg} alt="GitHub" />
              {username}
            </StatsItem>
            <StatsItem>
              <img src={calendarImg} alt="Creation date" />
              {createdAt}
            </StatsItem>
            <StatsItem>
              <img src={commentImg} alt="Comments" />
              {commentsCount}
            </StatsItem>
          </StatsList>
        </PostTitleContainer>
        <PostContentContainer>
          <Markdown 
            children={content}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    PreTag="div"
                    style={dracula}
                    language={match[1]}
                    children={String(children).replace(/\n$/, "")}
                    {...props}
                  />
                ) : (
                  <code className={className ? className : ""} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
          </Markdown>
        </PostContentContainer>
      </Main>
    </PostDetailsContainer>
  )
}