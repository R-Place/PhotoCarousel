import React from 'react';
import axios from 'axios';
import ImageBox from './ImageBox.jsx';
import DetailsBanner from './DetailsBanner.jsx';
import HomeDetails from './HomeDetails.jsx';
import Modal from './Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [],
      show:false
    }
    this.getListingInfo = this.getListingInfo.bind(this);
    this.saveListing = this.saveListing.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.getListingInfo(8);
  }

  getListingInfo(id) {
    axios.get(`/api/addresses/${id}`)
    .then(result => this.setState({ listing: result.data }))
    .catch(err => this.setState({ err }))
  }

  saveListing() {
    let copyOfListing = this.state.listing;
    copyOfListing[0].saved = !copyOfListing[0].saved;
    this.setState({
      listing: copyOfListing
    }, () => {console.log(this.state)});
  }

  toggleModal() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        <img className="header" src='https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-25+at+10.26.19+PM.png'></img>
        <Modal show={this.state.show} toggleModal={this.toggleModal} />
        {
          this.state.listing.map((listing) => (
            <ImageBox listing={listing} saveListing={this.saveListing} toggleModal={this.toggleModal} />
          ))
        }
        {
          this.state.listing.map((listing) => (
            <HomeDetails listing={listing} />
          ))
        }
      </div>
    )
  }
}

export default App;