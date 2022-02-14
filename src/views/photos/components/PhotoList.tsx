import React from 'react';
import styled from 'styled-components';

import PhotoItem from './PhotoItem';
import { IPhotos } from '../interfaces/photos.interface';

interface Props {
  data: IPhotos[]
}

const PhotoList = ({ data }: Props) => (
  <Container>
    <Row>
      {
        data.map((item) => (
          <Col key={item.id}>
            <PhotoItem item={item} />
          </Col>
        ))
      }
    </Row>
  </Container>
);

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 33.33%;
  padding: 0 10px;
  margin-bottom: 20px;
`;

export default PhotoList;
