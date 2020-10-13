import React from 'react';
import axios from 'axios';
import ImageBox from './ImageBox.jsx';
import DetailsBanner from './DetailsBanner.jsx';
import HomeDetails from './HomeDetails.jsx';
import Header from './Header.jsx';
import Modal from './Modal.jsx';
import Breadcrumbs from './Breadcrumbs.jsx';
import { BodyFormat, WebPageFormat } from './Styled.jsx';

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
    this.disableToggleModal = this.disableToggleModal.bind(this);
  }

  componentDidMount() {
    console.log(window.location.href);
    let param = Number(window.location.search.slice(4));
    param = (param || 3);
    this.getListingInfo(param);
  }

  getListingInfo(id) {
    axios.get(`/api/addresses/${id}`)
    .then(result => this.setState({ listing: result.data }))
    .catch(err => this.setState({ err }))
  }

  saveListing() {
    console.log('i ran!!!!!!')
    let copyOfListing = this.state.listing;
    copyOfListing[0].saved = !copyOfListing[0].saved;
    this.setState({
      listing: copyOfListing
    });
  }

  toggleModal() {
    console.log('i ran toggleModal');
    this.setState({
      show: !this.state.show
    })
  }

  disableToggleModal() {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <WebPageFormat>
        <Modal show={this.state.show} onClose={this.toggleModal} listing={this.state.listing} saveListing={this.saveListing}>
        </Modal>
        < Header />
        {
          this.state.listing.map((listing) => (
            <Breadcrumbs listing={listing} />
          ))
        }
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

      </WebPageFormat>
    )
  }
}

export default App;