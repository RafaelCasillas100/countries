import axios from "axios";
import { Country } from "../types/Country";
const COUNTRIES_API = "https://restcountries.com/v3.1";

export const getCountryByName = async (countryName: string) => {
  try {
    const { data: countriesInfo } = await axios.get<Country[]>(
      `${COUNTRIES_API}/name/${countryName}`
    );
    return countriesInfo[0];
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data.status === 404)
      throw new Error(
        "No country found, try again with a different country name."
      );
    throw new Error("An unexpected error occurred, please try again.");
  }
};

export const getAllCountries = async () => {
  try {
    const { data: countriesList } = await axios.get<Country[]>(
      `${COUNTRIES_API}/all`
    );
    return countriesList.map((country) => country.name.common);
  } catch (error) {
    throw new Error("An unexpected error occurred, please try again.");
  }
};
