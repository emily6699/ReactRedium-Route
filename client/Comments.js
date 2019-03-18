import React, {Component} from 'react'

export default class Comments extends Component {
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
    //render (){
        return (
        <div>
            {
                story.comments.map( comment => (
                <div className='comment row' key={comment.id}>
                    <img src={comment.author.imageUrl} />
                    <div className='column'>
                        <a>
                        <h5>{comment.author.name}</h5>
                        </a>
                        <div>{comment.content}</div>
                    </div>
                </div> 
                ))
            }
        </div>
    )}
//} 

//UP TO HERE: Current error -> story is not defined
//Decide: Do we need story here? If not, how else will we get the comments?
//Afterwards: fix up SingleStory by inputing comments