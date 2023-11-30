export type RootStackParamList = {
  Home: undefined;
  DataList: undefined;
  Client: {Client: ClientData};
};

export interface ClientData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: ClientAddress;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface ClientAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
