import React, { Fragment } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import {
  RiseOutlined,
  CreditCardOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const PlanForm = () => {
  return (
    <Fragment>
      <Row>
        <Col span={6}>
          <Form layout="vertical">
            <Form.Item label="Name of Plan">
              <Input
                placeholder="Name of Plan"
                type="text"
                prefix={<RiseOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item label="Amount">
              <Input
                placeholder="Amount here"
                type="number"
                prefix={<CreditCardOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item label="Date">
              <Input
                placeholder="Date Initalized"
                type="number"
                prefix={<CalendarOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PlanForm;
