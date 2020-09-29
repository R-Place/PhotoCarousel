import React from 'react';
import axios from 'axios';
import ImageBox from './ImageBox.jsx';
import DetailsBanner from './DetailsBanner.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: []
    }
    this.getListingInfo = this.getListingInfo.bind(this);
  }

  componentDidMount() {
    this.getListingInfo(6);
  }

  getListingInfo(id) {
    axios.get(`/api/addresses/${id}`)
    .then(result => this.setState({ listing: result.data }))
    .catch(err => this.setState({ err }))
  }

  render() {
    return (
      <div>
        <img className="header" src='https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-25+at+10.26.19+PM.png'></img>
        {
          this.state.listing.map((listing) => (
            <ImageBox listing={listing} />
          ))
        }
      </div>
    )
  }
}

export default App;