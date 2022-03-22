import { client, checkError } from './client';

export async function fetchWorkshops() {
  const response = await client.from('workshops').select('*');
  return checkError(response);
}