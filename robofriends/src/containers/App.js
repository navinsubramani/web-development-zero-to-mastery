// import New components
import React from 'react'
import './App.css'

import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import 'tachyons'

class App extends React.Component {

    constructor() {
        super()
        console.log("App Constructed")
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount(){
        console.log("App Did Mount")
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {return response.json()})
            .then(users => {this.setState({robots: users})})

    }

    render() {

        console.log('App rendered')
        let filteredRobots = this.state.robots.filter(
            (element) => element.name.toLowerCase().includes(this.state.searchField)
        )

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
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robotList={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }

    onSearchChange = (event) => {
        this.setState(
            {searchField: event.target.value.toLowerCase()},
            () => {console.log(this.state.searchField)}
            )
    }

}

export default App;