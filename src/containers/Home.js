import React from 'react';
import { Divider} from "semantic-ui-react";
import PersonForm from "../component/PersonForm";
import PersonTable from "../component/PersonTable";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.name)
    }

    render() {
        return (
            <div>
                <PersonForm></PersonForm>
                <Divider></Divider>
                <PersonTable></PersonTable>
            </div>
         );
    }
}

export default Home;
