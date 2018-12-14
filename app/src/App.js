import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search } from './components/search';
import Lister from './components/list';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      location: '',
      checked: false,
      fullTime: false,
      loading: false
    };

    this.changeInput = this.changeInput.bind(this);
    this.changeBox = this.changeBox.bind(this);
    this.loading = this.loading.bind(this);
  }

  changeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
      loading: false
    });
  }

  changeBox() {
    this.setState({
      checked: !this.state.checked
    });
  }

  loading() {
    this.setState({
      loading: !this.state.loading
    });
  }

  render() {
    const { list } = this.props;
    const { description, location, fullTime, checked } = this.state;

    return (
      <div>
        <div className="App" style={{ paddingTop: 20 }}>
          <div className="outter">
            <Search
              description={description}
              location={location}
              fullTime={fullTime}
              checked={checked}
              loading={this.loading}
              changeInput={this.changeInput}
              changeBox={this.changeBox}
              dispatch={this.props.dispatch}
            />
            <div style={{textAlign: 'center'}}>
              {this.state.loading && list.total === 0 && <CircularProgress />}
              {list.total > 0 && <Lister result={list} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  list: store.clickState.list
});

export default connect(mapStateToProps)(App);
