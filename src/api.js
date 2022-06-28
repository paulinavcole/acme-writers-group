const axios = require('axios')

const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}`);
}

const createUser = async(user) => {
    const response = await axios.post('/api/users', user);
    return response.data;
}

const deleteStory = (id) => {
    return axios.delete(`/api/stories/${id}`);
}

const createStory = async({user, story}) => {
    const response = await axios.post(`/api/users/${user}/stories/`, story);
    return response.data
}

module.exports = {
    deleteUser,
    createUser,
    deleteStory,
    createStory
}