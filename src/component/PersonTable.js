import * as React from "react";
import {Button, Container, Header, Image, Table} from "semantic-ui-react";
import {inject, observer} from "mobx-react";
import EditModal from "./EditModal";



@inject("homeStore")
@observer
class PersonTable extends React.Component {

    constructor(props) {

        super(props);
        this.state ={
            modalActive: false,
            currentRow: 0
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.removeList = this.removeList.bind(this);
    }

    removeList(id){
        this.props.homeStore.removeList(id);
    }

    openModal(id){
        this.setState({"modalActive": true, "currentRow": id});
    }

    closeModal(){
        this.setState({"modalActive": false});
    }

    render() {

        return (
            <div>
                <Container>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Employee</Table.HeaderCell>
                                <Table.HeaderCell>Age</Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>


                            {this.props.homeStore.getList.map(x=> {
                                return(
                                    <Table.Row  key={x.id}>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Image rounded size='mini' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                                                <Header.Content>
                                                    {x.firstName}    {x.lastName}
                                                    <Header.Subheader>{x.title}</Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{x.age}</Table.Cell>
                                        <Table.Cell>
                                            <Button className="ui button blue" onClick={event => this.openModal(x.id)} >Edit</Button>
                                            <Button className="ui button red" onClick={event => this.removeList(x.id)} >Delete</Button></Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table>
                </Container>

                {this.state.modalActive
                    ? <EditModal modalActive={this.state.modalActive} currentRow={this.state.currentRow} closeModal={this.closeModal}></EditModal>
                    : <></>
                }
            </div>

        )
    }
}


export default PersonTable;
