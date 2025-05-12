import "../search-panel/search-panel.scss";
import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  updateTremHandler = (e) => {
    const trem = e.target.value;
    this.setState({ term: trem });
    this.props.updateSearch(trem);
  };

  render() {
    return (
      <input
        onChange={this.updateTremHandler}
        value={this.state.term}
        className="form-control search-input"
        type="text"
        placeholder="Kinolarni qidirish"
      />
    );
  }
}
export default SearchPanel;
