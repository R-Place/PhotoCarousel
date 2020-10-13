import React from 'react';
import { PhotoSection, PrimaryImage, Active, Inactive } from './Styled.jsx';

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
          this.state.images.map((image, index) => {
            if (index === this.props.activeIndex) {
              return <Active src={image} />
            } else {
              return <Inactive src={image} />
            }
          })
        }
      </PhotoSection>
    )
  }


}

export default Photo;