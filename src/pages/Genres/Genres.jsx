import { Col, Row, Space, Typography } from "antd";
import React from "react";
import BackUp from "../../component/BackUp/BackUp";
import ListGenres from "../../component/List/ListGenres/ListGenres";

const { Text, Link } = Typography;
export default function Genres({genres , manga}) {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ padding: 20 }}>
        <Col>
          <Space direction="vertical">
            <Text type="secondary">Genres</Text>
          </Space>
        </Col>
        <Col flex="auto">
          {genres.map((item, index) => (
            <Space direction="vertical" key={index}>
              <Link
                target="_blank"
                style={
                  { marginRight: "20px" }
                }
              >
                {item.name_cate}
              </Link>
            </Space>
          ))}
        </Col>
        <ListGenres manga={manga} width={180} />
      </Row>
      <BackUp />
    </>
  );
}
