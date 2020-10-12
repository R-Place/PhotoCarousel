import React, { useState } from 'react';
import DetailsBanner from './DetailsBanner.jsx';
import PhotoCounter from './PhotoCounter.jsx';
import { HeroContainer, TileContainer, TileBackground, MainImage, Primary, SecondaryImage, Secondary, TertiaryImage, Tertiary, ImageBoxFormat } from './Styled.jsx';

const ImageBox = (props) => {

  return (
    <HeroContainer>
      <TileContainer>
        <DetailsBanner listing={props.listing} saveListing={props.saveListing} />
        <TileBackground>
          <ImageBoxFormat>
          {/* <div className="box img-hover-zoom"> */}
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
          {/* </div> */}
          </ImageBoxFormat>
        </TileBackground>
        <PhotoCounter count={props.listing.image.length} toggleModal={props.toggleModal} />
      </TileContainer>
    </HeroContainer>
  )
}

export default ImageBox;