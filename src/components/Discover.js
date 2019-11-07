import React, { useEffect } from "react";
import styled from 'styled-components';

const DiscoverDiv = styled.div`
    color: white;
    background-color: rgb(146, 149, 150);
    border: 1px solid #282c34;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    position:absolute;
    top: 150px;
    left: -15px;
`;

const Span = styled.span`
    color: white;
    background-color: rgb(146, 149, 150);
    font-size: 1.2rem;
    padding: 5px;
    font-family: inherit;
    border: none;
`;
  
const Date = styled.input`
    color: white;
    background-color: rgb(146, 149, 150);
    font-size: 1.2rem;
    padding: 5px;
    font-family: inherit;
`;


function Discover(props) {
    
    useEffect(() => {
        function handleChange (e) {
            props.setSelectedDate(e.target.value);
            props.setnasaAPI(`https://api.nasa.gov/planetary/apod?api_key=krL1cCbGBXpZ5c5cti1GnKp60Z8ueT8RqpypcSlY&date=${e.target.value}`)
        }
        const dateInput = document.querySelector('input')
        dateInput.addEventListener('change', handleChange)

        return () => {
            console.log('Component clean up');
            dateInput.removeEventListener('change', handleChange)
        }

    }, [])
    
  return (
    <DiscoverDiv>
        <Date type="date"></Date>
        <Span>Discover more...</Span>
    </DiscoverDiv>
  );
}

export default Discover;