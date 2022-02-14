import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import axios from 'axios';

import PhotoList from '../../src/views/photos/components/PhotoList';

const SearchResult = () => {
  const router = useRouter();
  const { id } = router.query;
  const [photos, setPhotos] = useState([]);
  const searchPhotos = async () => {
    const photoData: any = await axios({
      url: 'https://api.unsplash.com/search/photos',
      method: 'get',
      params: {
        query: id,
      },
      headers: {
        Authorization: 'Client-ID ru5TsUnyXPAqSAbjWb1h5zi6LnOI3qCQEvauSn2UkB4',
      },
    });
    setPhotos(photoData.data.results);
  };
  useEffect(() => {
    if (!id) return;
    searchPhotos();
  }, [id]);

  return (
    <Container>
      <PhotoList data={photos} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchResult;
