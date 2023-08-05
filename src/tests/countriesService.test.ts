import axios, { AxiosError } from "axios";
import {
  getAllCountries,
  getCountryByName,
} from "../services/countriesService";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockCountry = {
  name: { common: "United States", official: "United States of America" },
  region: "Americas",
  capital: "Washington, D.C.",
};

test("getCountryByName fetches country data by name", async () => {
  mockedAxios.get.mockResolvedValueOnce({ data: [mockCountry] });
  const countryData = await getCountryByName("USA");
  expect(countryData).toEqual(mockCountry);
});

test("getAllCountries fetches all country names", async () => {
  const mockCountriesList = [
    { name: { common: "USA" } },
    { name: { common: "Canada" } },
  ];
  mockedAxios.get.mockResolvedValueOnce({ data: mockCountriesList });
  const countries = await getAllCountries();
  expect(countries).toEqual(["USA", "Canada"]);
});
