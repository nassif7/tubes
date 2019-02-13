import React from 'react'; 

class SearchBar extends React.Component {

  state = {searchTerm: ''};

  onInputChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  onFormSubmit = (event) => {

    event.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  }

  render() {
    return(
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search here</label>
            <input 
              type="text" 
              value={this.state.searchTerm}
              onChange={this.onInputChange}
              />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;