import React, { Component } from 'react'
import contacts from "./contacts.json";
export default class App extends Component {
  state= {
    contacts: contacts.splice(0, 5),
  }
  handleAddRandom = () => {
    const copyContacts = [...this.state.contacts];
    console.log("clicked");
    let RandomContact = contacts[Math.floor(Math.random() * contacts.length)];
    while (copyContacts.includes(RandomContact)) {
      RandomContact = contacts[Math.floor(Math.random() * contacts.length)];
    } 
    console.log(RandomContact);
    copyContacts.push(RandomContact);
      //const copyWithNewContacts = [...copyContacts, ...this.state.contacts];
        this.setState({
        contacts: copyContacts,
      })
  }
  handleSortName = () => {
      console.log("clicked");
      const copyContacts = [...this.state.contacts];
      copyContacts.sort((a, b) => a.name.localeCompare(b.name));
      this.setState
  }
  handleSortPopularity = () => {
  }

// OTHER WAY jusr call the function below
// generatehtml() {
//   return (this.state.contacts.map((contact) => {
//     return <tr>
//       <td><img src={contact.pictureUrl}></img></td>
//       <td>{contact.name}</td>
//       <td>{contact.popularity}</td>
//     </tr>
//   }))
// }

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th><h1>IronContact</h1></th>
            </tr>
            <tr>
              <th><button onClick={() => this.handleAddRandom()}>Add Random Contact</button></th>
              <th><button onClick={() => this.handleSortName()}>Sort by name</button></th>
              <th><button onClick={() => this.handleSortPopularity()}>Sort by popularity</button></th>
            </tr>
            <tr>
              <th><h2>Picture</h2></th>
              <th><h2>Name</h2></th>
              <th><h2>Popularity</h2></th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return <tr>
                <td><img src={contact.pictureUrl}></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}