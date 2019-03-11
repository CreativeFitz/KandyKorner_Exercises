import React, {Component} from "react"

export default class CandyTypeDetail extends Component {
    render() {
        const candyType = this.props.candyTypes.find(a => a.id === parseInt(this.props.match.params.candyTypeId)) || {}

        return(
            <section className="candyType">
                <div key={candyType.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {candyType.name}
                        </h4>
                        <a href="#"
                            onClick={() => this.props.deleteCandyTypes(candyType.id)
                                            .then(() => this.props.history.push("/candyTypes"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}