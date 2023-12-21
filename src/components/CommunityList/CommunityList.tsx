import React from 'react';
import { Community, Home } from '../../types/communityTypes';
import { getAvgPrice } from '../../utils/getAvgPrice';
import './CommunityList.css';


interface CommunityListProps {
    communities: Community[];
    homes: Home[];
  }


  const CommunityList = ({ communities, homes }: CommunityListProps) => {
    const sortedCommunities = (communities as Community[]).sort((a, b) => a.name.localeCompare(b.name));
    const handleImageError = (event:React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.style.display = 'none'; 
      };
    return (
        <>
        <div className="community-list">
            {
                sortedCommunities.map(community => (
                    <div key={community.id} className="community-item">
                        <h1>{community.name}-{community.group}</h1>
                        {community.imgUrl && <img src={community.imgUrl} alt={community.name} onError={handleImageError} />}
                        <p className="community-price">Average Price: ${getAvgPrice(homes,community.id)}</p>
                    </div>
                ))
            }
        </div>
        </>
    )
}


export default CommunityList;