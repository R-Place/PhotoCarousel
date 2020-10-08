import React from 'react';
import { PhotoSection, PrimaryImage } from './Styled.jsx';

class Photo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: this.props.images
    }
  }

  render() {
    return(
      <PhotoSection>
        {
          this.state.images.map((image, index) => (
            <div className={
              index === this.props.activeIndex ? 'active' : 'inactive'} key={index}>
                <PrimaryImage src={image}>
                </PrimaryImage>
              </div>
          ))
        }
      </PhotoSection>
    )
  }


}

export default Photo;