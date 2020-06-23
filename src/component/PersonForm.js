import * as React from 'react';
import {Button, Form, Input, Select} from "semantic-ui-react";
import {inject, observer} from "mobx-react";


@inject("homeStore")
@observer
class PersonForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            firstName: "",
            lastName:"",
            title:"",
            age:0,
        }
        this.addList = this.addList.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSelectChange = (e, { value }) => {
        this.setState({title: value});
    }

    handleChange(event) {
        const value = event.target.value;
        const id = event.target.id;
        this.setState({[id]: value});
    }

    addList(){

        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const title = this.state.title;
        const age = this.state.age;

        this.setState({"counter":  ++this.state.counter})
        this.props.homeStore.addList({"id":this.state.counter,"firstName": firstName,"lastName":lastName,"title":title,"age":age});
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>First Name</label>
                            <Input placeholder='First Name' id="firstName" value={this.state.firstName}
                                   onChange={this.handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <Input placeholder='Last Name' id="lastName" value={this.state.lastName}
                                   onChange={this.handleChange}/>
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Title</label>
                            <Select placeholder='Title' id="title" options={options} onChange={this.handleSelectChange}
                                    value={this.state.title}/>
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Age</label>
                            <Input placeholder='Age' id="age" value={this.state.age} onChange={this.handleChange}/>
                        </Form.Field>
                    </Form.Group>
                </Form>

                <Button className="ui secondary button" onClick={this.addList}>Add List</Button>
            </div>
        )}
}


const options = [
    { key: 'se', text: 'Software Engineer', value: 'Software Engineer' },
    { key: 'de', text: 'Devops Engineer', value: 'Devops Engineer' },
    { key: 'ds', text: 'Data Scientist', value: 'Data Scientist' },
]


export default PersonForm;
