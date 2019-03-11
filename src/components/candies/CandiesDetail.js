import React, {Component} from "react"

export default class CandiesDetail extends Component {
    render() {
        const candy = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return(
            <section className="candy">
                <div key={candy.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {candy.name}
                        </h4>

                        <a href="#"
                            onClick={() => this.props.deleteCandy(candy.id)
                                            .then(() => this.props.history.push("/candies"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}