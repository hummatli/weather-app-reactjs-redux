import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import countryList from '../data/country_list';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      country: {
        code: 'az',
        name: 'Azerbaijan'
      }
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onDropdownItemChange = this.onDropdownItemChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term, this.state.country.code);
    this.setState({ term: '' });
  }

  onDropdownItemChange(country){
    this.setState({
      country: {
        code: country.iso2.toLowerCase(),
        name: country.name
      }
    })
    console.log(this.state.country);
  }

  render() {
    const countryArr = Object.entries(countryList);
    const list = countryArr.map(c => {
      return (
        <a
          onClick={() => {this.onDropdownItemChange(c[1])}}
          className="dropdown-item"
          href="#"
          key={c[1].iso2}>
          {c[1].name}
        </a>
      );
    });

    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <div className="dropdown input-group-btn">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.state.country.name}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {list}
          </div>
        </div>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
