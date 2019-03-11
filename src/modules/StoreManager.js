const storeAPIManager = {
    getAllStores: () => {
        return fetch("http://localhost:5002/stores")
        .then(stores => stores.json());
    },
    deleteStore: (id) => {
        return fetch(`http://localhost:5002/stores/${id}`,
        {
            method: "DELETE"
        })
        .then(e => e.json()
        );
    },
};

export default storeAPIManager;