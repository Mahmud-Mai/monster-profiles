import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'frankenstein',
          id: '1',
          email: 'frankenstein@email.com'
        },
        {
          name: 'Dracula',
          id: '2',
          email: 'Dracula@email.com'
        },
        {
          name: 'Shrek',
          id: '3',
          email: 'Shrek@email.com'
        },
        {
          name: 'Zombie',
          id: '4',
          email: 'Zombie@email.com'
        } 
      ],
      searchField: ''
  };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users}));
}

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeHolder='Filter monsters' handleChange={ e => {this.setState({searchField : e.target.value})} }/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
