import React, { useState, useEffect } from 'react';
import { Community, Home } from '../../types/communityTypes';
import { fetchCommunities, fetchHomes } from '../../services/apiServices';
import CommunityList from './CommunityList';

const CommunityListContainer: React.FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [homes, setHomes] = useState<Home[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const communitiesData = await fetchCommunities();
        setCommunities(communitiesData);
        const homesData = await fetchHomes();
        setHomes(homesData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return <CommunityList communities={communities} homes={homes} />;
};

export default CommunityListContainer;
