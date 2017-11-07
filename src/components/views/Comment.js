import React, {Component} from 'react'
import styles from './styles'


class Comment extends Component {
  render(){
    return (
      <div>
        <p style={styles.comment.commentBody}>
          {this.props.currentComment.body}<br/>
        </p>
        <span style={styles.comment.commentUsername}>{this.props.currentComment.username}</span>
        <span style={styles.comment.commentDivider}>|</span>
        <span style={styles.comment.commentTimestamp}>{this.props.currentComment.timestamp}</span>
        <hr/>
      </div>
    )
  }
}

export default Comment
