import React, {Component} from 'react'

class EditableText extends Component{
    constructor(props){
      super(props)
      this.state = {
        name: props.name,
        value: props.value||'',
        edit: false
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({
        value:event.target.value,
        name: event.target.name})
     
      const text = event.target.value;
      const key = event.target.name
      this.props.onChange(key, text);
    } 


    edit() {
      this.setState({edit:false})
    }
    render() {
      return (
        this.state.edit===true&&
        <input 
          name={this.state.name}
          value={this.state.value}
          autoFocus
          onFocus={event=>{
            const value = event.target.value
            event.target.value = ''
            event.target.value = value
            this.setState({backup:this.state.value})
          }}
          onChange={this.handleChange}
          
          onBlur={event=>{
            this.setState({edit:false})
          }}
          onKeyUp={event=>{
            if(event.key==='Escape') {
              this.setState({edit:false, value:this.state.backup})
            }
            if(event.key==='Enter') {
              this.setState({edit:false})
              const text = event.target.value;
              this.props.onChange(this.props.id, text);
            }
          }}
        />
        ||
        <span className={this.state.name} onClick={event=>{
            this.setState({edit:this.state.edit!==true})
          }}>
          {this.state.value}
        </span>
      )
    }
  }
  
  export default EditableText