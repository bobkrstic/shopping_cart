import React, { Component } from "react";
import { Button, Collapse, Form, Row, Col } from "react-bootstrap";

class PromoCodeDiscount extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      value: ""
    };
  }

  handleChange = e => {
    // the setState below will be sent to redux
    // this.setState({ value: e.target.value });
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Row className="show-grid">
              <Col md={12}>
                <Form>
                  <Form.Group controlId="formInlineName">
                    <Form.Label>Promo Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter promo code"
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button
                    block
                    variant="success"
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                  >
                    Apply
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});
export default PromoCodeDiscount;
