import React, {Component} from 'react';

class CandiesList extends Component {
    render() {
        return (
            <article>
                <h1>Candies List</h1>
                {this.props.candies.map(
                    (singleCandy => {
                        return <p key={singleCandy.id}>{singleCandy.name}</p>
                    })
                )}
            </article>
        )
    }
}

export default CandiesList;