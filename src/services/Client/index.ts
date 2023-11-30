import axios, {AxiosError} from 'axios';
import {ClientData} from '../../types/navigation';

export async function getClients(): Promise<ClientData | null> {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      console.error('Erro na requisição:', axiosError.message);
    } else {
      console.error('Erro desconhecido na requisição:', err);
    }
    return null;
  }
}

// função para editar o cliente porem como estou usando uma api para simulação não consigo atualizar por ela, mas caso haja uma o metodo é esse!

export async function putClient(
  client: ClientData,
): Promise<ClientData | null> {
  try {
    const response = await axios.put(
      'https://jsonplaceholder.typicode.com/users',
      {client},
    );
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      console.error('Erro na requisição:', axiosError.message);
    } else {
      console.error('Erro desconhecido na requisição:', err);
    }
    return null;
  }
}
