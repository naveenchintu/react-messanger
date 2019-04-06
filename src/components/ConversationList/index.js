import React, { Component } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';

import './ConversationList.css';

export default class ConversationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    };
  }

  componentDidMount() {
    // this.getConversations();
  }
  
  getConversations = () => {
    axios.get('/data/data.json').then(response => {
      this.setState(prevState => {
        let conversations = Object.keys(response.data.ContactInteractions).map(key => {
          console.log(response.data.ContactInteractions[key].Attributes.Subject, response.data.ContactInteractions[key].Attributes.Text)
          return {
            subject: response.data.ContactInteractions[key].Attributes.Subject,
            time: response.data.ContactInteractions[key].StartDate,
            text: response.data.ContactInteractions[key].Attributes.Text,
            status: response.data.ContactInteractions[key].Attributes.Status
          };
        });

        return { ...prevState, conversations };
      });
    });
  }

  render() {
    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          this.state.conversations.map(conversation =>
            <ConversationListItem
              key={conversation.keys.subject}
              data={conversation.status}
            />
          )
        }
      </div>
    );
  }
}