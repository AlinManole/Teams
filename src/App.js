import React from 'react'
import teams from './teams.json'
import TeamInfo from './components/TeamInfo'
import CounterTeams from './components/CounterTeams'
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
      <div style={{textAlign:"center"}} className="container">
        <h1 style={{fontFamily:"cursive"}}>Premier League Teams</h1>
        <CounterTeams />
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