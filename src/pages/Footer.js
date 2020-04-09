import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { footerActions } from '../store/actions';
import Aux from "../hoc/_Aux";
import { connect } from 'react-redux';
class FooterPage extends React.Component {
  constructor(props){
    super(props)
    this.company_desc = React.createRef();
    this.company_address = React.createRef();
    this.company_email = React.createRef();
    this.company_number = React.createRef();
    this.app_desc = React.createRef();
    this.app_title = React.createRef()
    this.company_emergency_call = React.createRef()
    this.company_emergency_email = React.createRef()
    this.city_text = React.createRef()
    this.specility_text = React.createRef()
    this.insurance_text = React.createRef()
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

    const data = {
      company_desc: this.company_desc.current ? (this.company_desc.current.value || ''):'',
      company_address : this.company_address.current ? (this.company_address.current.value || ''):'',
      company_email : this.company_email.current ? (this.company_email.current.value || ''):'',
      company_number : this.company_number.current ? (this.company_number.current.value || ''):'',
      app_desc : this.app_desc.current ? (this.app_desc.current.value || ''):'',
      app_title : this.app_title.current ? (this.app_title.current.value || ''):'',
      company_emergency_email : this.company_emergency_email.current ? (this.company_emergency_email.current.value || ''):'',
      city_text : this.city_text.current ? (this.city_text.current.value || ''):'',
      specility_text : this.specility_text.current ? (this.specility_text.current.value || ''):'',
      insurance_text : this.insurance_text.current ? (this.insurance_text.current.value || ''):'',

    }
    console.log(data);
  // this.props.create(data)
  }
    render() {
        const { alert , footers } = this.props;
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Footer>
                                <Card.Title as="h5">FooterSchema</Card.Title>
                            </Card.Footer>
                            <Card.Body>

                                <h5>Save Schema</h5>
                                <hr/>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Row>
                                            <Col>
                                            <Form.Group controlId="company_desc">
                                                <Form.Label>Company Desc Text</Form.Label>
                                                <Form.Control ref={this.company_desc} defaultValue={footers.company_desc? (footers.company_desc||'')||'' : ''} type="text" placeholder="Enter Company Desc Text" />
                                            </Form.Group>
                                            </Col>
                                            <Col>
                                            <Form.Group controlId="company_address">
                                                <Form.Label>Company Address Text</Form.Label>
                                                <Form.Control defaultValue={footers.company_address? (footers.company_address||'')||'' : ''} ref={this.company_address} type="text" placeholder="Enter Company Address Text" />
                                            </Form.Group>
                                            </Col>
                                            </Row>

                                            <Row>
                                            <Col>
                                            <Form.Group controlId="company_email">
                                                <Form.Label>Company Email Text</Form.Label>
                                                <Form.Control ref={this.company_email} defaultValue={footers.company_email? (footers.company_email||'')||'' : ''} type="text" placeholder="Enter Company Email Text" />
                                            </Form.Group>
                                            </Col>
                                            <Col>
                                            <Form.Group controlId="company_number">
                                                <Form.Label>Company Number Text</Form.Label>
                                                <Form.Control defaultValue={footers.company_number? (footers.company_number||'')||'' : ''} ref={this.company_number} type="text" placeholder="Enter Company Number Text" />
                                            </Form.Group>
                                            </Col>
                                            </Row>

                                            <Row>
                                            <Col>
                                            <Form.Group controlId="company_emergency_call">
                                                <Form.Label>Company Emergency Call Text</Form.Label>
                                                <Form.Control ref={this.company_emergency_call} defaultValue={footers.company_emergency_call? (footers.company_emergency_call||'')||'' : ''} type="text" placeholder="Enter Company Emergency Call Text" />
                                            </Form.Group>
                                            </Col>
                                            <Col>
                                            <Form.Group controlId="company_emergency_email">
                                                <Form.Label>Company Emergency Email Text</Form.Label>
                                                <Form.Control defaultValue={footers.company_emergency_email? (footers.company_emergency_email||'')||'' : ''} ref={this.company_emergency_email} type="text" placeholder="Enter Company Emergency Email Text" />
                                            </Form.Group>
                                            </Col>
                                            </Row>

                                            <Row>
                                            <Col>
                                            <Form.Group controlId="app_desc">
                                                <Form.Label>Company App Desc Call Text</Form.Label>
                                                <Form.Control ref={this.app_desc} defaultValue={footers.app_desc? (footers.app_desc||'')||'' : ''} type="text" placeholder="Enter App Desc Text" />
                                            </Form.Group>
                                            </Col>
                                            <Col>
                                            <Form.Group controlId="app_title">
                                                <Form.Label>Company App Title Email Text</Form.Label>
                                                <Form.Control defaultValue={footers.app_title? (footers.app_title||'')||'' : ''} ref={this.app_title} type="text" placeholder="Enter App Title Text" />
                                            </Form.Group>
                                            </Col>
                                            </Row>

                                            <Row>
                                            <Col>
                                            <Form.Group controlId="city_text">
                                                <Form.Label>Company City Text</Form.Label>
                                                <Form.Control ref={this.city_text} defaultValue={footers.city_text? (footers.city_text||'')||'' : ''} type="text" placeholder="Enter Company City Text" />
                                            </Form.Group>
                                            </Col>
                                            <Col>
                                            <Form.Group controlId="specility_text">
                                                <Form.Label>Company Specility Text</Form.Label>
                                                <Form.Control defaultValue={footers.specility_text? (footers.specility_text||'')||'' : ''} ref={this.specility_text} type="text" placeholder="Enter Company Specility Text" />
                                            </Form.Group>
                                            </Col>
                                            </Row>

                                            <Row>
                                            <Col>
                                            <Form.Group controlId="insurance_text">
                                                <Form.Label>Company City Text</Form.Label>
                                                <Form.Control ref={this.insurance_text} defaultValue={footers.insurance_text? (footers.insurance_text||'')||'' : ''} type="text" placeholder="Enter Company Insurance Text" />
                                            </Form.Group>
                                            </Col>
                                            <Col>
                                            <Form.Group controlId="logo_img">
                                            <Form.Label>Logo Image</Form.Label>
                                            <Form.File
                                            id="image"
                                            label="Logo Image"
                                            custom
                                            />
                                            </Form.Group>
                                            </Col>
                                            </Row>


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
    const { alert ,footers } = state;
    return { alert, footers };
}

const actionCreators = {
    create: footerActions.create,
    getAll: footerActions.getAll
};

const Footer = connect(mapState, actionCreators)(FooterPage);
export default Footer
