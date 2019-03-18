import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Authors from './Authors';

export default class SingleAuthor extends Component {
    constructor () {
      super()
      this.state = {
        author: {},
        authorStories: [],
        authorComments: []
      }
    }

async componentDidMount () {
        try {
          const authorId = this.props.match.params.authorId;
          const authorsResponse = await axios.get(`/api/authors/${authorId}`)
          this.setState({ author: authorsResponse.data })
        }
        catch (error) {
          console.error(error)
        }
      }


render(){
    const author = this.state.author
    console.log('RIGHT HERE', author)
   return(   
        <div id='single-author' className='column'>
            <div id='single-author-detail' className='row'>
                <div className='column mr1'>
                    <h1>{author.name}</h1>
                    <p>{author.bio}</p>
                </div>
                <img src={author.imageUrl} />
            </div><hr />
            <div>
                <h4>STORIES</h4>
                <h4>COMMENTS</h4>
            </div>
        </div>
   )
  }

}