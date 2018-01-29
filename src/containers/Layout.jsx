import React from 'react';
import InputText from '../components/InputText.jsx';
import InputSelect from '../components/InputSelect.jsx';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response : '',
      selected: '',
      options: [],
      inputText: '',
    };
    this.handleInputSelect = this.handleInputSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.client.get(this.state.selected)
      .then(data => this.setState({
        options: Object.keys(data.rates || {}),
        response: data,
      }));
  }

  handleInputSelect(e) {
    const selected = e.target.value;
    console.log('selected', selected);
    this.setState({ selected });
  }

  handleChange(e) {
    const newValue = e.target.value;
    console.log('newValue', newValue);
    this.setState({ inputText: newValue });
  }

  converter() {

  }

  render() {
    return (
      <div>
        <h1>LayoutContainer</h1>
        <InputSelect options={this.state.options} handleInputSelect={this.handleInputSelect} />
        <InputText handleChange={this.handleChange} text={this.state.inputText} />
        <InputSelect options={this.state.options} handleInputSelect={this.handleInputSelect} />
        <InputText handleChange={this.handleChange} text={this.state.inputText} />
      </div>
    );
  }
}

export default Layout;
