import React, {Component} from 'react';

class CandiesList extends Component {
    render() {
        return (
          <section className="candies">
          {
              this.props.candies.map(candy =>
                <div key={candy.id} className ="card">
                <div className="card-body">
                <h5 className="card-title">
                {candy.name}
                <button onClick={() =>
                this.props.deleteCandy(candy.id)}>Delete</button>
                </h5>
                </div>
                </div>)
          }
                </section>
        )
    }
}

export default CandiesList;