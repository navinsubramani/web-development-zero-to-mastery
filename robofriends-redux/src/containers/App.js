// import New components
import React from 'react'
import './App.css'

import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import 'tachyons'

import { setSearchField, setUserList } from '../actions'

class App extends React.Component {

    state = this.getCurrentStateFromStore()

    constructor(props) {

        super(props)
        // Configure the States of the component
        console.log('App Instantiated', this)
        this.filteredRobots = []
    }

    // Get from the Store and Initialize the State
    getCurrentStateFromStore() {
        console.log(this)
        return {
            searchField: this.props.store.getState().searchField,
            robots: this.props.store.getState().userList
        }
    }

    // Get from the Store and update the State
    updateCurrentStatefromStore = () => {
        const currentState = this.getCurrentStateFromStore()

        if(currentState !== this.state) {
            this.setState(currentState);
        }

    }

    componentDidMount() {
        console.log("App Did Mount")

        // Fetch the User details at the start
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {return response.json()})
        .then(users => {
            this.props.store.dispatch(setUserList(users))
            //robots = users
        })
        .catch(console.log)

        // Define Subscribe functions: Subscribe to the store and on change update the states
        this.unsubscribeStore = this.props.store.subscribe(
            () => {
                console.log("Subscribe Callback Called", this.props.store.getState())
                this.updateCurrentStatefromStore()
            })

    }

    componentWillUnmount() {
        this.unsubscribeStore()
    }

    onSearchChange = (event) => {
        this.props.store.dispatch(setSearchField(event.target.value))
    } 

    render() {
        // Buissness Logic before rendering
        console.log('App render called for robots:', this.state.robots.length)
        this.filteredRobots = this.state.robots

        if (this.state.searchField !== "") {
            this.filteredRobots = this.state.robots.filter(
                (element) => element.name.toLowerCase().includes(this.state.searchField.toLowerCase())
                )
        }

        // Deciding what to render or return based on the state
        if (this.state.robots.length === 0) {
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
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <CardList robotList= {this.filteredRobots}/>
                </div>
            )
        }
    }
    

}

export default App