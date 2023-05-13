import {Component} from 'react'
import './index.css'

class EditText extends Component {
  state = {textInput: '', isEdit: false}

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSave = () => {
    this.setState({isEdit: true})
  }

  onClickEdit = () => {
    this.setState({isEdit: false})
  }

  renderSaveInput = () => {
    const {textInput} = this.state

    return (
      <>
        <input
          type="text"
          value={textInput}
          className="input-element"
          onChange={this.onChangeInput}
        />
        <button type="button" className="button" onClick={this.onClickSave}>
          Save
        </button>
      </>
    )
  }

  renderEditInput = () => {
    const {textInput} = this.state

    return (
      <>
        <p className="text-input">{textInput}</p>
        <button type="button" className="button" onClick={this.onClickEdit}>
          Edit
        </button>
      </>
    )
  }

  render() {
    const {isEdit} = this.state

    return (
      <div className="app-container">
        <div className="edit-container">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="input-container">
            {isEdit ? this.renderEditInput() : this.renderSaveInput()}
          </div>
        </div>
      </div>
    )
  }
}

export default EditText
