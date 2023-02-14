// import New components
import React, { useState, useEffect } from 'react'
import './App.css'

import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import 'tachyons'


function App() {

    // Configure the States of the component
    console.log('App Instantiated')
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState("")

    // Define the useEffects which will run during Mount & UnMount
    useEffect(
        //Define a mount function
        () => {
            console.log("App Did Mount")
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {return response.json()})
            .then(users => {
                setRobots(users)
            })
            .catch(console.log)
        },[]
    )

    // Define General functions
    const onSearchChange = (event) => {
        setSearchField(event.target.value.toLowerCase())
        console.log(searchField)
    }


    // Buissness Logic before rendering
    console.log('App rendered')
    let filteredRobots = robots.filter(
        (element) => element.name.toLowerCase().includes(searchField)
    )

    
    // Deciding what to render or return based on the state
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
                <Searchbox searchChange = {onSearchChange}/>
                <Scroll>
                    <CardList robotList={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;