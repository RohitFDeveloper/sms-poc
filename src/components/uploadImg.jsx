import React, { Component } from 'react'
export default class uploadImg extends Component {
    state={
        docImg : 'http://racsofficers.com/assets/images/members/user.png'
    }
    uploadHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                this.setState({docImg: reader.result})
                var uploadImg = reader.result
                this.props.onUploadImage(uploadImg)
            }
        }
        reader.readAsDataURL(e.target.files[0])

    }
  render() {
    const {docImg} = this.state
    return (
      <div>
        <label htmlFor="studentImg">
            <img src={docImg} alt="Document" width={150} height={150}/>
        </label>
        <input id="studentImg" type="file" name='photo' accept=".jpg,.png,.jpeg" 
        onChange={this.uploadHandler}/>
      </div>
    )
  }
}

