export type RootStackParamList = {
  Home: undefined;
  DataList: undefined;
  Client: ClientData;
};

export type ClientData = {
  id: string;
  name: string;
  address: string;
  email: string;
};
