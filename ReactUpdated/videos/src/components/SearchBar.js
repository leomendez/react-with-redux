import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) =>{ 
                                this.setState({ term: e.target.value })
                                console.log(this.state.term)
                            }}
                            />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;