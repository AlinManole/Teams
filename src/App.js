import React from 'react'
import teams from './teams.json'
import TeamInfo from './components/TeamInfo'
// import Counter from './components/Counter'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      team: 1
    }
  }

  // handleClickUp = () => {
  //   this.setState({ team: this.state.team + 1 })
  // }

  // handleClickDown = () => {
  //   if (this.state.team > 0) {
  //     this.setState({ team: this.state.team - 1 })
  //   }
  // }




  render() {
    return (
      <div className="container">
        <h1>Teams</h1>
        <div className="row p-2 justify-content-around">
          {teams.map(team =>
            <TeamInfo shortName={team.shortName} image={team.crestUrl} stade={team.venue} address={team.address} email={team.email} tel={team.phone} founded={team.founded} />
          )}
        </div>
      </div>
    )
  }
}

export default App