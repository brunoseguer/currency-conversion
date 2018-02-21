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
      amount: '',
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
    this.setState({ amount: e.value });
  }

  converter() {
    // const amount = parseFloat(this.state.amount);
    // console.log(amount);
    const {
      amount,
      rateTo,
      rateFrom,
      rates,
    } = this.state;

    return amount && (amount * (rates[rateTo]
      * (1 / rates[rateFrom]))
    );
  }

  toggleValues() {
    this.setState(prevState => ({
      rateTo: prevState.rateFrom,
      rateFrom: prevState.rateTo,
    }));
  }

  render() {
    return this.state.show && (
      <div className="input-group">
        <div className="form-row">
          <InputSelect
            name="rateFrom"
            currencyList={this.state.currencyList}
            handleInputSelect={this.handleInputSelect}
            value={this.state.rateFrom}
          />
          <InputText handleChange={this.handleChange} text={this.state.amount} />
        </div>
        <div className="form-row">
          <InputSelect
            name="rateTo"
            currencyList={this.state.currencyList}
            handleInputSelect={this.handleInputSelect}
            value={this.state.rateTo}
          />
          <InputText text={this.converter()} readOnly="true" />
        </div>
        <div className="form-row">
          <button type="button" onClick={this.toggleValues}>Reverse Currencies</button>
        </div>
      </div>
    );
  }
}

export default Converter;
