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

const createStory = async({story, userId}) => {
    const response = await axios.post(`/api/users/${userId}/stories`, {story});
    return response.data
}

module.exports = {
    deleteUser,
    createUser,
    deleteStory,
    createStory
}