import React, { Component } from 'react';
import axios from 'axios';
import { deleteStory } from './api'

class User extends Component{
  constructor(){
    super();
    this.state = {
      user: {},
      stories: [] 
    };
    this.deleteAStory = this.deleteAStory.bind(this)
  }
  async componentDidMount(){
    let response = await axios.get(`/api/users/${this.props.userId}`);
    this.setState({ user: response.data });
    response = await axios.get(`/api/users/${this.props.userId}/stories`);
    this.setState({ stories: response.data });

  }
  async componentDidUpdate(prevProps){
    if(prevProps.userId !== this.props.userId){
      let response = await axios.get(`/api/users/${this.props.userId}`);
      this.setState({ user: response.data });
      response = await axios.get(`/api/users/${this.props.userId}/stories`);
      this.setState({ stories: response.data });
      
    }
  }
  async deleteAStory(story){
    await deleteStory(story.id);
    const stories = this.state.stories.filter(_story => _story.id !== story.id);
    this.setState({stories})
  }
  
  render(){
    const { user, stories } = this.state;
    const { deleteAStory } = this
    return (
      <div>
        Details for { user.name }
        <p>
          { user.bio }
        </p>
        <ul>
          {
            stories.map( story => {
              return (
                <li key={ story.id }>
                  { story.title }
                  <p>
                  { story.body }
                  </p>
                  <button type="submit" onClick={() => { deleteAStory(story) }}>DELETE STORY</button>
                </li>
              
              );
            })
          }
        </ul>
        <button>Add Story</button>
      </div>
    );
  }
}



export default User;
