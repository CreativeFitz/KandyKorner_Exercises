const CandyTypeAPIManager ={
    getAllCandyTypes: () => {
        return fetch("http://localhost:5002/candyTypes")
        .then(candyTypes => candyTypes.json());
    },
    deleteCandyType: (id) => {
        return fetch(`http://localhost:5002/candyTypes/${id}`,{
            method: "DELETE"
        })
        .then(e => e.json()
        );
    }
};

export default CandyTypeAPIManager;