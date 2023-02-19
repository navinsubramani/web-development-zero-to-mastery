// import New components
import React, { useEffect } from 'react'
import './App.css'

// Redux modules
import { connect } from 'react-redux'

// Project Modules
import CardList from './../presentational/CardList'
import Searchbox from './../presentational/Searchbox'
import 'tachyons'

import { setSearchField, setUserList } from './../store/actions'

function App(props) {

    // Configure the States of the component
    console.log('App Instantiated', props)
    let filteredRobots = []

    useEffect(
        () => {
            console.log("App Did Mount")

            // Fetch the User details at the start
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {return response.json()})
            .then(users => {
                props.setUserList(users)
                //robots = users
            })
            .catch(console.log)
     },[]
    )

    const onSearchChange = (event) => {
        props.setSearchField(event.target.value)
    } 

    // Buissness Logic before rendering
    console.log('App render called for robots:',props.users.length)
    filteredRobots = props.users

    if (props.searchField !== "") {
        filteredRobots = props.users.filter(
            (element) => element.name.toLowerCase().includes(props.searchField.toLowerCase())
            )
    }

    // Deciding what to render or return based on the state
    if (props.users.length === 0) {
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
                <CardList robotList= {filteredRobots}/>
            </div>
        )
    }   

}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField,
        users: state.userList
    }
}

const mapDispatchToProps = {
    setSearchField: setSearchField,
    setUserList: setUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(App);