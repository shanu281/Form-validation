import React from "react";



class Form1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textInput: "",
            dateInput: "",
            readonly: "",
            disabledInput: "",
            textarea: "",
            disabledTextarea: ""

        }
        this.fileInput = React.createRef();
    }
    handleInput = ({ target }) => {
        let { name, value } = target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.textInput + " " + this.state.dateInput + " " + this.state.textarea);
        console.log(this.fileInput.current.files[0].name);
       alert("Form submitted sucessfully")
    
    };
    render() {
       
        return (
            <>
                <form onSubmit={this.handleSubmit} className="form-1" >
                    <label htmlFor="text">Text Input</label>
                    <input
                        type="text"
                        name="textInput"
                        id="text"
                        value={this.state.textInput}
                        onChange={this.handleInput}
                    />

                    <label htmlFor="date">Date Input</label>
                    <input
                        type="date"
                        name="dateInput"
                        value={this.state.dateInput}
                        onChange={this.handleInput}
                    />

                
                    <div className="file-input">
                    <label htmlFor="text">File Input</label>
                    <input />
                    <input
                        ref={this.fileInput}
                        onChange={this.handleInput}
                        className="file"
                        type="file"
                        name="fileInput"
                    />
                </div>

                    <label htmlFor="text">Read-Only Input</label>
                    <input
                        type="readonly"
                        name="readonly"
                        value={this.state.readonly}
                        onChange={this.handleInput}
                    />

                    <label htmlFor="text">Disabled Input</label>
                    <input
                        type="text"
                        name="disabledInput"
                        value={this.state.disabledInput}
                        onChange={this.handleInput} />

                    <label htmlFor="text">Textarea</label>
                    <textarea
                        name="textarea"
                        id="textarea1"
                        cols="30"
                        rows="6"
                        value={this.state.textarea}
                        onChange={this.handleInput}>

                    </textarea>

                    <label htmlFor="text">Disabled Textarea</label>
                    <textarea
                        name="disabledTextarea"
                        id="textarea2"
                        cols="30"
                        rows="6"
                        value={this.state.disabledTextarea}
                        onChange={this.handleInput}>

                    </textarea>

                    <input  type="submit" />
                </form>


            </>
        )
    }
}
export default Form1;