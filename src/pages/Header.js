import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { headerActions } from '../store/actions';
import Aux from "../hoc/_Aux";
import { connect } from 'react-redux';
class HeaderPage extends React.Component {
  constructor(props){
    super(props)
    this.home_text = React.createRef();
    this.contact_text = React.createRef();
    this.howitworks_text = React.createRef();
    this.join_text = React.createRef();
    this.state = {
      loading: false,
      logo_img:''
    }
      this.props.getAll()


      this.handleClick = this.handleClick.bind(this);
}
async componentDidMount() {

}

  handleClick(event){

    const item_list ={
      home:{
        home_text: this.home_text.current ? (this.home_text.current.value || ''):'',
        index:1
      },
      join:{
        join_text:this.join_text.current ? (this.join_text.current.value || ''):'',
        index:2
      },
      contact:{
        contact_text: this.home_text.current ? (this.contact_text.current.value || ''):'',
        index:3
      },
      howitworks:{
        howitworks_text:this.howitworks_text.current ? (this.howitworks_text.current.value || ''):'',
        index:4
      }
    }
  //  console.log(item_list);
   this.props.create(item_list)
  }
    render() {
        const { alert , headers } = this.props;
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">HeaderSchema</Card.Title>
                            </Card.Header>
                            <Card.Body>

                                <h5>Save Schema</h5>
                                <hr/>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="home_text">
                                                <Form.Label>Home Text</Form.Label>
                                                <Form.Control ref={this.home_text} defaultValue={headers.home? (headers.home.home_text||'')||'' : ''} type="text" placeholder="Enter Home Text" />
                                            </Form.Group>

                                            <Form.Group controlId="join_text">
                                                <Form.Label>Join Text</Form.Label>
                                                <Form.Control defaultValue={headers.join? (headers.join.join_text||'')||'' : ''} ref={this.join_text} type="text" placeholder="Enter Join Text" />
                                            </Form.Group>

                                            <Form.Group controlId="contact_text">
                                                <Form.Label>Contact Text</Form.Label>
                                                <Form.Control defaultValue={headers.contact? (headers.contact.contact_text||'')||'' : ''} ref={this.contact_text} type="text" placeholder="Enter Contact Text" />
                                            </Form.Group>

                                            <Form.Group controlId="howitworks_text">
                                                <Form.Label>How-It-Works Text</Form.Label>
                                                <Form.Control defaultValue={headers.howitworks? (headers.howitworks.howitworks_text||'')||'' : ''} ref={this.howitworks_text} type="text" placeholder="Enter How-it-works Text" />
                                            </Form.Group>

                                            <Form.Group controlId="logo_img">
                                            <Form.Label>Logo Image</Form.Label>
                                            <Form.File
                                            id="image"
                                            label="Logo Image"
                                            custom
                                            />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <Button onClick={(event) => this.handleClick(event)} variant="primary">Save Schema</Button>
                                {
                                  alert &&
                                  <p className="error">{alert.message}</p>
                                }
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Aux>
        );
    }
}
function mapState(state) {
    const { alert ,headers } = state;
    return { alert, headers };
}

const actionCreators = {
    create: headerActions.create,
    getAll: headerActions.getAll
};

const Header = connect(mapState, actionCreators)(HeaderPage);
export default Header
