const axios = require('axios')

const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}`);
}

export {
    deleteUser
}