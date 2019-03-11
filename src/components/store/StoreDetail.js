import React, {Component} from "react"

export default class StoreDetail extends Component {
    render() {
        const store = this.props.stores.find(a => a.id === parseInt(this.props.match.params.storeId)) || {}

        return(
            <section className="store">
                <div key={store.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {store.name}
                        </h4>
                        <a href="#"
                            onClick={() => this.props.deleteStore(store.id)
                                            .then(() => this.props.history.push("/stores"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}