import React from 'react';
import InputText from '../components/InputText.jsx';
import InputSelect from '../components/InputSelect.jsx';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      rates: '',
      currencyList: [],
      rateFrom: 'USD',
      rateTo: 'ARS',
      amount: 0,
    };
    this.handleInputSelect = this.handleInputSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleValues = this.toggleValues.bind(this);
  }

  componentWillMount() {
    this.props.client.get()
      .then(data => this.setState({
        currencyList: Object.keys(data.rates || {}),
        rates: data.rates,
        show: true,
      }));
  }

  handleInputSelect(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleChange(e) {
    this.setState({ amount: e.target.value });
  }

  converter() {
    return this.state.amount * (this.state.rates[this.state.rateTo] *
      (1 / this.state.rates[this.state.rateFrom]));
  }

  toggleValues() {
    this.setState(prevState => ({
      rateTo: prevState.rateFrom,
      rateFrom: prevState.rateTo,
    }));
  }

  render() {
    return this.state.show && (
      <div>
        <h1>Currency conversion</h1>
        <InputSelect
          name="rateFrom"
          currencyList={this.state.currencyList}
          handleInputSelect={this.handleInputSelect}
          value={this.state.rateFrom}
        />
        <InputText handleChange={this.handleChange} text={this.state.amount} />
        <InputSelect
          name="rateTo"
          currencyList={this.state.currencyList}
          handleInputSelect={this.handleInputSelect}
          value={this.state.rateTo}
        />
        <InputText text={this.converter()} readOnly="true" />
        <button type="button" onClick={this.toggleValues}>Reverse Currencies</button>
      </div>
    );
  }
}

export default Converter;
