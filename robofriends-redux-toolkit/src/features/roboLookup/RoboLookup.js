import React, {useEffect} from 'react';
import 'tachyons'
import './RoboLookup.css'

// Import the presentational components
import Searchbox from '../../component/Searchbox'
import CardList from '../../component/CardList'

// Import the Redux components
import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_SEARCHFIELD, UPDATE_ROBOTS } from './roboLookupSlice'

function RoboLookup(props) {

    // Subscribe to the State Values
    const searchField = useSelector((state) => state.roboLookupSlice.searchField)
    const robots = useSelector((state) => state.roboLookupSlice.robots)
    
    // Instantiate the dispatch methods
    const dispatch = useDispatch()

    let filteredRobots = robots

    // Run during App Mount as the dependency argument is []
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => dispatch(UPDATE_ROBOTS(users)))
        .catch(console.log)
        },[]
    )

    // Run onSearchValueChange
    const onSearchValueChange = (event) => {
        let text = event.target.value
        dispatch(CHANGE_SEARCHFIELD(text))
    }

    // Filter the robots based on searchValue
    if (searchField !== "") {
        filteredRobots = robots.filter(robo => robo.name.toLowerCase().includes(searchField.toLowerCase()))
    }

    // Return the JSX

    if (robots.length === 0) {
        return(
            <div className='tc'>
                <h1 className='f1'>Loading...</h1>
            </div>
        )
    }

    else {
        return (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <Searchbox searchChange = {onSearchValueChange}/>
                <CardList robotList= {filteredRobots}/>
            </div>
        )
    }   

}

export default RoboLookup