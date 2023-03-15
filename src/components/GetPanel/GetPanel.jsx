import React, { useState, useEffect } from 'react';
import { GetPanelContainer, GetPanelList, ShowMoreButton } from './GetPanel.styled';
import { GetPanelCard } from './GetPanelCard/GetPanelCard';

import { getTeamMembers } from "../../Services/api";

const GetPanel = () => {
    const [members, setMembers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getTeamMembers(page).then(data => {
            const members = data.users;
            console.log(data.users)
            const sortedMembers = members.sort(((a, b) => b.registration_timestamp - a.registration_timestamp))

            setMembers(prevState =>  {
                return page === 1 ? sortedMembers : [...prevState, ...sortedMembers]
            })
        })
    }, [page]);

    const showMore = () => {
        setPage(prevState => {
            return prevState + 1 
        })
    } 

  return (
    <div>
        <GetPanelContainer>
            <h2>Working with GET request</h2>   
                <GetPanelList>
                    {members.map((member) => (
                        <GetPanelCard key={member.id} member={member}/>
                    ))}
                </GetPanelList>
            <ShowMoreButton type="submit" onClick={showMore}>Show more</ShowMoreButton>
        </GetPanelContainer>
    </div>
  )
}

export default GetPanel;