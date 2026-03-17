import {
  ProfileContainer,
  ProfileInfoContainer,
  ProfileLinks,
  ProfileTitle,
} from './styles';

import defaultImg from '../../assets/user-circle.svg';
import linkImg from '../../assets/arrow-up-right-from-square-solid.svg';
import githubImg from '../../assets/github-brands.svg';
import buildingImg from '../../assets/building-solid.svg';
import usersImg from '../../assets/user-group-solid.svg';
import { Link } from '../Link';

function Profile() {
  return (
    <ProfileContainer>
      <img src={defaultImg} alt="Profile picture" />
      <ProfileInfoContainer>
        <ProfileTitle>
          <strong>Cameron Williamson</strong>
          <Link
            content="github"
            imgAlt="Acessar repositório"
            imgSrc={linkImg}
            href="#"
          />
        </ProfileTitle>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileLinks>
          <a href="#">
            <img src={githubImg} alt="Github" />
            cameronwll
          </a>
          <a href="#">
            <img src={buildingImg} alt="Work at" />
            Rocketseat
          </a>
          <a href="#">
            <img src={usersImg} alt="Followers" />
            32 seguidores
          </a>
        </ProfileLinks>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
}

export { Profile };
