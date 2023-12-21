import { Home } from '../types/communityTypes';

export const getAvgPrice = (homes: Home[], communityId: string): string => {
  const communityHomes = homes.filter(home => home.communityId === communityId);
  if (communityHomes.length === 0) {
    return "No Average Price";
  }
  const total = communityHomes.reduce((acc, home) => acc + home.price, 0);
  return (total / communityHomes.length).toFixed(2);
};
