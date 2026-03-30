import {
  ProfileContainer,
  ProfileItemsList,
  ProfileInfoContainer,
  ProfileItem,
  ProfileTitle,
} from './styles';
import { Link } from '../Link';

import defaultImg from '../../assets/user-circle.svg';
import linkImg from '../../assets/arrow-up-right-from-square-solid.svg';
import githubImg from '../../assets/github-brands.svg';
import buildingImg from '../../assets/building-solid.svg';
import usersImg from '../../assets/user-group-solid.svg';
import { useEffect, useState } from 'react';
import { getProfileInfo } from '../../utils/api';

function Profile() {
  const [profileURL, setProfileURL] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [profileImg, setProfileImg] = useState(defaultImg);
  const [followersCount, setFollowersCount] = useState(0);
  const [profileBio, setProfileBio] = useState('');
  const [company, setCompany] = useState('');

  async function retrieveProfileInfo(){
    const body = await getProfileInfo();
    
    setUsername(body.login);
    setFollowersCount(body.followers);
    setName(body.name);
    setProfileBio(body.bio);
    setCompany(body.company);
    setProfileURL(body.html_url);
    setProfileImg(body.avatar_url)
  }
  useEffect(()=>{
    retrieveProfileInfo();
  }, [])

  return (
    <ProfileContainer>
      <img src={profileImg ?? defaultImg} alt="Profile picture" />
      <ProfileInfoContainer>
        <div>
          <ProfileTitle>
            <strong>{name}</strong>
            <Link to={profileURL}>
              GitHub
              <img src={linkImg} alt="Voltar" />
            </Link>
          </ProfileTitle>
          <p>
            {profileBio ?? 'Não há informações na Bio.'}
          </p>
        </div>
        <ProfileItemsList>
          <ProfileItem>
            <img src={githubImg} alt="Github" />
            {username}
          </ProfileItem>
          <ProfileItem>
            <img src={buildingImg} alt="Work at" />
            {company ?? 'self employed'}
          </ProfileItem>
          <ProfileItem>
            <img src={usersImg} alt="Followers" />
            {followersCount} seguidores
          </ProfileItem>
        </ProfileItemsList>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
}

export { Profile };
