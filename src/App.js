import React from 'react';
import Navbar from './components/Navbar';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/image.png';



class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
    
      <div>
        <Navbar />
      

          <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} /> 
          </div>
          <footer>
              <h6 className="grey-text center" style={{background:"blue"}}>covid-19@amitcorp.com</h6>
        </footer>
        
      </div>
     
    
      
    );
  }
}

export default App;