import React, {Component} from 'react';

class CandyTypesList extends Component {
    render() {
        return (
            <article>
                <h1>Candy Types List</h1>
                {this.props.candyTypes.map(
                    (singleCandyType => {
                       return <p key={singleCandyType.id}>{singleCandyType.name}</p>
                    })
                )}
            </article>
        )
    }
}
export default CandyTypesList;