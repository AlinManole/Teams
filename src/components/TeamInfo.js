import React from "react"

class TeamInfo extends React.Component {
    render() {
        return (
            <>
                <div className="col-3 border" style={{margin: "20px ", padding: "10px" , boxShadow: "3px 3px 20px 3px #cccccc"}}>
                    <img className="w-25" src={this.props.image} alt="logo" />
                    <p style={{fontWeight:"bold"}}> {this.props.shortName} </p>
                    <p> Stadium : {this.props.stade}</p>
                    <p> Address : {this.props.address}</p>
                    <p> Email : {this.props.email}</p>
                    <p> Phone : {this.props.tel}</p>
                    <p>Creation : {this.props.founded}</p>

                </div>
            </>
        )
    }
}

export default TeamInfo