import { LinkContainer } from './styles';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  imgSrc: string;
  imgAlt: string;
  content: string;
}
export function Link({ imgAlt, imgSrc, content, ...props }: LinkProps) {
  return (
    <LinkContainer {...props}>
      {content}
      <img src={imgSrc} alt={imgAlt} />
    </LinkContainer>
  );
}
