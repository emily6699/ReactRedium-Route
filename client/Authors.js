import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Authors extends Component {
  constructor () {
    super()
    this.state = {
      authors: []
    }
  }

  async componentDidMount () {
    try {
      const authorsResponse = await axios.get('/api/authors')
      this.setState({ authors: authorsResponse.data })
    }
    catch (error) {
      console.error(error)
    }
  }

  render () {
    const authors = this.state.authors
    // console.log('HEREEEEEE', authors)
    return (
        <div>
            {
                this.state.authors.map(author => (
                    <Link to={`/authors/${author.id}`} key={author.id}>
                        <div className='author row'>
                            <img src={author.imageUrl} />
                            <p>{author.name}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
  }
}