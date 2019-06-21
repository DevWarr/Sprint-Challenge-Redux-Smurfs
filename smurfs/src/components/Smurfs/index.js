import React, { Component } from "react"
import { fetchSmurfs, fetchSmurfSingle, deleteSmurf } from "../../actions";
import { connect } from "react-redux";

import { Smurf } from "../"

class Smurfs extends Component {

    componentDidMount() {
        this.props.fetchSmurfs();
    }

    editSmurf = id => {
        this.props.fetchSmurfSingle(id)
        this.props.history.push(`/smurf-form`)
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
                                edit={this.editSmurf} //
                                delete={this.props.deleteSmurf} //
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

Smurfs.defaultProps = {
    smurfs: []
}

const mstp = state => {
    return {
        smurfs:          state.smurfs,
        fetchingSmurfs:  state.fetchingSmurfs
    }
}

export default connect(mstp, { fetchSmurfs, fetchSmurfSingle, deleteSmurf })(Smurfs);
