import React from 'react';
import { Community, Home } from '../../types/communityTypes';
import { getAvgPrice } from '../../utils/getAvgPrice';
import './CommunityList.css';


interface CommunityListProps {
    communities: Community[];
    homes: Home[];
}


const CommunityList = ({ communities, homes }: CommunityListProps) => {
    const sortedCommunities = communities.sort((a, b) => a.name.localeCompare(b.name));
    const imgIfNotExist = "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = event.target as HTMLImageElement;
        target.src = imgIfNotExist;
    };

    return (
        <>
            <div className="community-list">
                {
                    sortedCommunities.map(community => (
                        <div key={community.id} className="community-item">
                            <h1>{community.name}-{community.group}</h1>
                            <img src={community.imgUrl || imgIfNotExist} alt={community.name} onError={handleImageError} />
                            <p className="community-price">Average Price: ${getAvgPrice(homes, community.id)}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


export default CommunityList;