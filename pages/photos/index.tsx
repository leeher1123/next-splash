import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PhotoList from '../../src/views/photos/components/PhotoList';

const Search = () => {
  const [photos, setPhotos] = useState([]);
  const searchPhotos = async () => {
    const photoData: any = await axios({
      url: 'https://api.unsplash.com/photos',
      method: 'get',
      params: {
        per_page: 10,
      },
      headers: {
        Authorization: 'Client-ID ru5TsUnyXPAqSAbjWb1h5zi6LnOI3qCQEvauSn2UkB4',
      },
    });
    setPhotos(photoData.data);
  };
  useEffect(() => {
    searchPhotos();
  }, []);
  return (
    <Container>
      <PhotoList data={photos} />
    </Container>
  );
};

const Container = styled.div`
  
`;

export default Search;
