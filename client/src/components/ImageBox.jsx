import React, { useState } from 'react';
import DetailsBanner from './DetailsBanner.jsx';
import PhotoCounter from './PhotoCounter.jsx';
import { HeroContainer, TileContainer, TileBackground, MainImage, Primary, SecondaryImage, Secondary, TertiaryImage, Tertiary } from './Styled.jsx';

const ImageBox = (props) => {

  // const [show, setShow] = useState(false);

  // // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <HeroContainer>
      <TileContainer>
        <DetailsBanner listing={props.listing} saveListing={props.saveListing} />
        <TileBackground>
          <div className="box img-hover-zoom">
            <MainImage>
              <Primary src={props.listing.image[0]} onClick={props.toggleModal}>
              </Primary>
            </MainImage>
            <SecondaryImage>
              <Secondary src={props.listing.image[1]} onClick={props.toggleModal}>
              </Secondary>
            </SecondaryImage>
            <TertiaryImage>
              <Tertiary src={props.listing.image[2]} onClick={props.toggleModal}>
              </Tertiary>
            </TertiaryImage>
          </div>
        </TileBackground>
        <PhotoCounter count={props.listing.image.length} toggleModal={props.toggleModal} />
      </TileContainer>
    </HeroContainer>
  )
}

export default ImageBox;