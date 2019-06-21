import React, { Component } from "react"
import { fetchSmurfs, putSmurf, deleteSmurf } from "../../actions";
import { connect } from "react-redux";

import { Smurf } from "../"

class Smurfs extends Component {

    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        return (
            <div className="Smurfs">
                <h1>Smurf Village</h1>
                <ul>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <Smurf
                                name={smurf.name}
                                id={smurf.id}
                                age={smurf.age}
                                height={smurf.height}
                                key={smurf.id}
                                update={this.props.putSmurf} //
                                delete={this.props.deleteSmurf} //
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mstp = state => {
    return {
        smurfs:          state.smurfs,
        fetchingSmurfs:  state.fetchingSmurfs
    }
}

export default connect(mstp, { fetchSmurfs, putSmurf, deleteSmurf })(Smurfs);
