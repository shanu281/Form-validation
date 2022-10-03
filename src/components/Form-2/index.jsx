import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import './style.css'


class Form2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            confirm: "",
            errors: {
                username: "",
                email: "",
                password: "",
                confirm: "",
            }

        }
    }
    validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    handleInput = ({ target }) => {
        let { name, value } = target;
        let errors = this.state.errors;
        switch (name) {
            case "username":
                errors.username = value.length < 5 ? "Username cant be less than 5 character" : ""

            case "email":
                errors.email = this.validateEmail(value) ? "" : "Enter valid email adress"
                break;

            case "password":
                errors.password = value.length < 6 ? "Password cant be less than 6 character" : ""

            case "confirm":
                errors.confirm = this.state.password !== value ? "Password doesn't match" : ""
            default:
                break;
        }

        
        this.setState({
            errors,
            [name]: value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            this.state.username + ' ' + this.state.email + ' ' + this.state.password
            );
        };
        render() {
            let { username, email, password, password2 } = this.state.errors;
        return (
            <>
                <form onSubmit={this.handleSubmit} className="form-2">
                    <h1>Register with Us</h1>
                    <label htmlFor="text">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.handleInput}
                        type="text"
                        name="username"
                        placeholder="Enter username" />
                        <span className={this.state.errors.username === "" ? "hide": ""}>{this.state.errors.username}</span>
                      

                    <label htmlFor="email">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.handleInput}
                        type="email"
                        name="email"
                        placeholder="Enter email" />
                        <span className={this.state.errors.email === "" ? "hide": ""}>{this.state.errors.email}</span>

                    <label htmlFor="text">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.handleInput}
                        type="password" name="password" placeholder="Enter Password" />
                        <span className={this.state.errors.password===""?"hide":""}>{this.state.errors.password}</span>

                    <label htmlFor="text">Confirm Password</label>
                    <input
                        value={this.state.confirm}
                        onChange={this.handleInput}
                        type="text"
                        name="confirm"
                        placeholder="Enter Confirm password" />
                        <span className={this.state.errors.confirm == ""? "hide" : ""}>{this.state.errors.confirm}</span>

                    <input  type="submit" />
                </form>
            </>
        )
    }
}
export default Form2;