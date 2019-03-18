import React, {Component} from 'react'

export default class SingleStory extends Component {
    constructor () {
      super()
      this.state = {
        singleStories: []
      }
    }

render(){
    
    const fakeStory = {
        title: 'Ships',
        id: 2,
        content: "A ship in port is safe,\nbut that's not what ships are built for",
        author: {
            id: 1,
            name: 'Grace Hopper'
        },
        comments: [
            {
            id: 4,
            content: 'I like ships!',
            author: {
                id: 2,
                name: 'Alan Turing',
                imageUrl: 'default-author.png'
            }
            }
        ]
    }
    console.log('090909090', this.match.params.storyId)
   return(   
        <div id='single-story' className='column'>
        <h1>STORY_TITLE</h1>
        <p>STORY_CONTENT</p>
        <h3>Responses:</h3>
        <div id='comments'>
            <div className='comment row'>
            <img src='COMMENT_1_AUTHOR_IMAGE_URL' />
            <div className='column'>
                <a>
                <h5>COMMENT_1_AUTHOR_NAME</h5>
                </a>
                <div>COMMENT_1_CONTENT</div>
            </div>
            </div>
            <div className='comment row'>
            <img src='COMMENT_2_AUTHOR_IMAGE_URL' />
            <div className='column'>
                <a>
                <h5>COMMENT_2_AUTHOR_NAME</h5>
                </a>
                <div>COMMENT_2_CONTENT</div>
            </div>
            </div>
        </div>
        </div>
   )
 } 
}