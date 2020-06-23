import * as React from "react";
import {Button, Form, Image, Input, Modal, Select} from "semantic-ui-react";
import {inject, observer} from "mobx-react";

@inject("homeStore")
@observer
class EditModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalActive: this.props.modalActive,
            currentRow:  this.props.currentRow,
            firstName_: "",
            lastName_:"",
            title_:"",
            age_:0
        }
        this.handleSelectEditChange = this.handleSelectEditChange.bind(this);
        this.editRow = this.editRow.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        const currentObj =  this.props.homeStore.getListById(this.state.currentRow);
        this.setState({"currentRow":currentObj.id,"firstName_": currentObj.firstName,"lastName_":currentObj.lastName,"title_":currentObj.title,"age_":currentObj.age})

    }

    handleChange(event) {

        const value = event.target.value;
        const id = event.target.id;
        this.setState({[id]: value});
    }

    handleSelectChange = (e, { value }) => {
        this.setState({title: value});
    }

    handleSelectEditChange = (e, { value }) => {
        this.setState({title_: value});
    }

    closeModal =() =>  {
        this.setState({ "modalActive": false })
        this.props.closeModal();
    }


    editRow() {

        const firstName = this.state.firstName_;
        const lastName = this.state.lastName_;
        const title = this.state.title_;
        const age = this.state.age_;


        this.setState({"modalActive":false})
        this.props.closeModal();
        this.props.homeStore.editRow({"id":this.state.currentRow,"firstName": firstName,"lastName":lastName,"title":title,"age":age});
    }


    render() {

        return (
            <Modal open={this.state.modalActive} closeIcon={true} onClose={this.closeModal}>
            <Modal.Header>Edit Person</Modal.Header>
            <Modal.Content image>
                <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                <Modal.Description>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>First Name</label>
                                <Input placeholder='First Name' id="firstName_" onChange={this.handleChange}  value={this.state.firstName_}  />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <Input placeholder='Last Name'  id="lastName_"  onChange={this.handleChange}  value={this.state.lastName_}  />
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Title</label>
                                <Select placeholder='Title'  id="title_" onChange={this.handleSelectEditChange}  options={options}  value={this.state.title_} />
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Age</label>
                                <Input placeholder='Age' id="age_"   onChange={this.handleChange}  value={this.state.age_}  />
                            </Form.Field>
                        </Form.Group>
                    </Form>

                    <Button className="ui secondary button" onClick={this.editRow} >Edit Row</Button>

                </Modal.Description>
            </Modal.Content>
        </Modal>)
    }
}

const options = [
    { key: 'se', text: 'Software Engineer', value: 'Software Engineer' },
    { key: 'de', text: 'Devops Engineer', value: 'Devops Engineer' },
    { key: 'ds', text: 'Data Scientist', value: 'Data Scientist' },
]


export default EditModal;
