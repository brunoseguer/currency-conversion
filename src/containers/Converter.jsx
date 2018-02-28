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
      <div className="container py-5 mx-auto">
        <div className="row justify-content-md-center my-4">
          <div className="col-sm-2">
            <InputSelect
              className="form-control"
              name="rateFrom"
              currencyList={this.state.currencyList}
              handleInputSelect={this.handleInputSelect}
              value={this.state.rateFrom}
            />
          </div>
          <div className="col-sm-4">
            <InputText className="form-control" handleChange={this.handleChange} text={this.state.amount} />
          </div>
        </div>
        <div className="row justify-content-md-center my-4">
          <div className="col-sm-2">
            <InputSelect
              className="form-control"
              name="rateTo"
              currencyList={this.state.currencyList}
              handleInputSelect={this.handleInputSelect}
              value={this.state.rateTo}
            />
          </div>
          <div className="col-sm-4">
            <InputText className="form-control" text={this.converter()} readOnly="true" />
          </div>
        </div>
        <div className="row justify-content-md-center my-4">
          <div className="col-sm-2">
            <button
              className="btn btn-primary btn-block"
              type="button"
              onClick={this.toggleValues}
            >
              Reverse Currencies
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
