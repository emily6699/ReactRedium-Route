import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Comments from './Comments'

export default class SingleStory extends Component {
    constructor () {
      super()
      this.state = {
        story: {
            comments: [
                {
                    id: 0,
                    content: '',
                    author: {
                      id: 0,
                      name: '',
                      imageUrl: ''    
                    }
                }
            ],

            content: '',
            title: ''
        }
      }
    }

    async componentDidMount () {
        try {
          const storyId = this.props.match.params.storyId;
          const storiesResponse = await axios.get(`/api/stories/${storyId}`)
          this.setState({ story: storiesResponse.data })
        }
        catch (error) {
            console.error(error)
        }
    }


    render(){
        const story = this.state.story
        
        //  console.log('090909090', story)
    return(   
            <div id='single-story' className='column'>
            <h1>{story.title}</h1>
            <p>{story.content}</p>
            <h3>Responses:</h3>
            <div id='comments'> 
            <Comments />
            </div>
            </div>
   
 
    ) 
  }

}