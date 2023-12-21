import axios from 'axios';
import { Community, Home } from "../types/communityTypes"

export const fetchCommunities = async (): Promise<Community[]> => {
  const response = await axios.get('/openhouse-ai-fe-coding-test/communities.json');
  return response.data;
};

export const fetchHomes = async (): Promise<Home[]> => {
  const response = await axios.get('/openhouse-ai-fe-coding-test/homes.json');
  return response.data;
};
