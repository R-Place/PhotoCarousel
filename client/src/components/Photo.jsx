import React from 'react';

class Photo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: this.props.images
    }
  }

  render() {
    console.log(this.props.activeIndex)
    return(
      <section>
        {
          this.state.images.map((image, index) => (
            <div className={
              index === this.props.activeIndex ? 'active' : 'inactive'} key={index}>
                <img className="primaryImage" src={image}></img>
              </div>
          ))
        }
      </section>
    )
  }


}

export default Photo;