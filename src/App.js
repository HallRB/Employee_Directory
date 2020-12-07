import { Component } from "react";
import Navbar from "./components/Navbar/navbar.js";
import Cardsall from "./components/Cards/cardsall.js";
import Searchbox from "./components/SearchForm/searchform";
import SortBySelect from "./components/SearchResults/searchresults";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=120&nat=us")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ users: users.results, loading: false });
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  lastNameAsc = () => {
    const users = this.state.users.sort((a, b) =>
      a.name.last.localeCompare(b.name.last)
    );
    this.setState({ users: users });
  };

  firstNameAsc = () => {
    const users = this.state.users.sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
    this.setState({ users: users });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.last.toLowerCase().includes(searchField.toLowerCase())
    );

    if (this.state.loading) {
      return undefined;
    } else {
      return (
        <div className="App">
          <Navbar />
          <SearchForm
            placeholder="search by name"
            handleChange={this.handleChange}
          />
          <SearchResults
            lastNameAsc={this.lastNameAsc}
            firstNameAsc={this.firstNameAsc}
          />
          <Cardsall users={filteredUsers} />
        </div>
      );
    }
  }
}

export default App;