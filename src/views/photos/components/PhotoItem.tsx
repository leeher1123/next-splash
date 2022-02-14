import styled from 'styled-components';

import { IPhotos } from '../interfaces/photos.interface';

interface Props {
  item: IPhotos
}

const PhotoItem = ({ item }: Props) => (
  <Container>
    <UserProfile>
      <img src={item.user.profile_image.medium} alt={item.user.username} />
      <h3>{item.user.username}</h3>
    </UserProfile>
    <Thumb>
      <img src={item.urls.regular} alt={item.description} />
    </Thumb>
  </Container>
);

const Container = styled.div`
  background: #222;
  padding: 10px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #fff;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;

const Thumb = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export default PhotoItem;
