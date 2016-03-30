# react-sync-cache


- ScrollSyncCache
  * retains scroll-position during external update.
  * provides pre-fetch for smoother scroll experience

- ScrollSyncCache example:

```jsx
import { Component } from 'react';

class MessageItem extends Component {
  render() {
    return (
      <div>
        MessageText: {this.props.item.text}
      </div>
    );
  }
}

interface Message {
  sentTime: Date,
}

// A really bad react example.
// Assume: Messages are sorted by sentTime
class MessagesList extends Component {
  componentDidMount = ()=> {
    SomeSocketIO.on('new_messages', (newMessages)=> {
      const messages = mergeMessages(this.state.messages, newMessages);
      this.setState({messages});
    })
  }
  fetchMore(size) {
    // some function for fetching more...
  }
  extractAnchorValue(message) {
    return message.sentTime;
  }
  compareAnchorValue(value1, value2) {
    //
  }
  render() {
    return (
      <ScrollSync items={this.props.messages}
                  itemRenderer={MessageItem}
                  anchorPosition="top"
                  extractAnchorValue={getAnchorValue}
                  compareAnchorValue={}>
      </ScrollSync>
    )
  }
}


```

* scroll-up:
