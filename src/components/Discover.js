import React, { useEffect } from "react";

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
    <div className="Discover">
        <input type="date" className="date"></input>
        <span className="disBtn">Discover more...</span>
    </div>
  );
}

export default Discover;