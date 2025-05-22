import React, { useEffect } from 'react';
import axios from 'axios';
import { COUNTRIES_API_URL } from '../../constants/apiUrls';

const AppbarLang = () => {
  const DEFAULT_COUNTRY = 'South Korea';
  const fetchCountriesData = async () => {
    try {
      const response = await axios.get(COUNTRIES_API_URL);
      const defaultCountry = response.data.find(
        (country) => country.name.common === DEFAULT_COUNTRY
      );

      console.log(defaultCountry);
    } catch (error) {
      console.log('Error Feching Data: ' + error);
    }
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return <div>AppbarLang</div>;
};

export default AppbarLang;
