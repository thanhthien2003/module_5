import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ''
    }
  }
  handleChange(value) {
    this.setState(
      {
        item: value
      }
    )
  }

  handleAddItem() {
    this.setState((obj) => (
      {
        list: [obj.item, ...obj.list],
        item: ''
      }
    )
    )
  }
  render() {
    return (
      <>
        <div style={{ textAlign: 'center'}}>
          <h1 className="text-body-tertiary">Todo List</h1>
          <div>
            <input value={this.state.item}
              onChange={(even) => this.handleChange(even.target.value)} />
            <button onClick={() => this.handleAddItem()}>ADD</button>
            <table >
              <thead>
                <tr>
                  <th style={{ textAlign: 'center'}}>Todo
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {item}
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default App;
