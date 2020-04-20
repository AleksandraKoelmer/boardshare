import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


import './Chat.css';



import { sendMessage } from '../store/actions/chatActions'




class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            user: this.props,
            chats: this.props.chat,
            content: '',
            readError: null,
            writeError: null,
            loadingChats: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myRef = React.createRef();
    }

    componentDidMount() {
       this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;

    console.log(this.state.chats)
 /*    try {
      db.ref("chats").on("value", snapshot => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        chats.sort(function (a, b) { return a.timestamp - b.timestamp })
        this.setState({ chats });
        chatArea.scrollBy(0, chatArea.scrollHeight);
        this.setState({ loadingChats: false });
      });
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    } */
       
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
        });
    }

   handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
    
        const chatArea = this.myRef.current;
        this.props.sendMessage({
            content: this.state.content,
            user: this.state.user.auth.uid,
            eventId : this.state.id,
          
        })
      
            }

    formatTime(timestamp) {
        const d = new Date(timestamp);
        const time = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
        return time;
    }

    render() {
        return (
            <div>


                <div className="chat-area" ref={this.myRef}>
                    {/* loading indicator */}
                    {this.state.loadingChats ? <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div> : ""}
                    {/* chat area */}
                    {this.state.chats.map(chat => {
                        return <p key={chat.timestamp} className={"chat-bubble " + (this.state.user.uid === chat.uid ? "current-user" : "")}>
                            {chat.content}
                            <br />
                            <span className="chat-time float-right">{this.formatTime(chat.timestamp)}</span>
                        </p>
                    })}
                </div>
                <form onSubmit={this.handleSubmit} className="mx-3">
                    <textarea className="form-control" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
                    {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
                    <button type="submit" className="btn btn-submit px-5 mt-4">Send</button>
                </form>
                <div className="py-5 mx-3">
                    Login in as: <strong className="text-info">{this.state.user.email}</strong>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const eventId2 = window.location.href;
    const id2 = eventId2.split('chat/')[1]

    const events = state.firestore.data.events;
    const event = events ? events[id2] : null;



    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        chat: state.chat.chats,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => dispatch(sendMessage(newMessage))

    }
}

export default 
    connect(mapStateToProps, mapDispatchToProps)(Chat)
