type CountryNames = {
  common: string;
  official: string;
};

type CountryFlags = {
  alt: string;
  png: string;
  svg: string;
};

export type Country = {
  name: CountryNames;
  region: string;
  capital: string;
  flags: CountryFlags;
};
