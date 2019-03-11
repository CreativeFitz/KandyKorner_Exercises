const candyAPIManager = {
    getAllCandies: () => {
        return fetch("http://localhost:5002/candies")
        .then(candies => candies.json());
    },
    deleteCandy: (id) => {
        return fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json()
        );
    }
};

export default candyAPIManager;