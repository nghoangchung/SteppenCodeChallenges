import React, { useState } from "react";
import {
  Container,
  Notification,
  Form,
  Box,
  Button,
  Block,
  Columns,
} from "react-bulma-components";
export const ItemList = () => {
  const arr = [];
  const [list, setList] = useState(arr);
  const [message, setMessage] = useState("");
  const [update, setUdapte] = useState("");
  const [indexUpdate, setIndexUdapte] = useState(null);

  const addValue = (value) => {
    setList([...list, value]);
    setMessage("");
  };

  const editValue = (val, index) => {
    setList(list.map((e, i) => (i === index ? val : e)));
    setUdapte("");
    setIndexUdapte(null)
  };

  return (
    <Container>
      <Notification color="primary">
        Item List with Add, Edit, and Remove - Intermediate React
      </Notification>
      <Form.Field>
        <Form.Label>Message</Form.Label>
        <Columns>
          <Columns.Column>
            <Form.Input
              width={10}
              value={message}
              type={"text"}
              onChange={(e) => {
                return setMessage(e.target.value);
              }}
            />
          </Columns.Column>
          <Columns.Column>
            <Form.Control>
              <Button color="success" onClick={() => addValue(message)}>
                Add
              </Button>
            </Form.Control>
          </Columns.Column>
        </Columns>
        <Block>
          <Box>
            {list.map((e, i) => {
              return (
                <pre key={i}>
                  <Columns>
                    {i === indexUpdate ? (
                      <>
                        <Columns.Column size={5}>
                          <Form.Input
                            value={update}
                            onChange={(event) => {
                              setUdapte(event.target.value);
                            }}
                          />
                        </Columns.Column>
                        <Columns.Column narrow>
                          <Form.Control>
                            <Button
                              color="info"
                              onClick={() => editValue(update, i)}
                            >
                              Update
                            </Button>
                          </Form.Control>
                        </Columns.Column>
                        <Columns.Column narrow>
                          <Button
                            color="danger"
                            onClick={() => {
                              setIndexUdapte(null)
                              setUdapte("")
                            }}
                          >
                            Back
                          </Button>
                        </Columns.Column>
                      </>
                    ) : (
                      <>
                        <Columns.Column size={5}>{e}</Columns.Column>
                        <Columns.Column narrow>
                          <Form.Control>
                            <Button
                              color="info"
                              onClick={() => {
                                setIndexUdapte(i);
                                setUdapte(e);
                              }}
                            >
                              Edit
                            </Button>
                          </Form.Control>
                        </Columns.Column>
                        <Columns.Column narrow>
                          <Button
                            color="danger"
                            onClick={() =>
                              setList(list.filter((val, index) => i !== index))
                            }
                          >
                            Remove
                          </Button>
                        </Columns.Column>
                      </>
                    )}
                  </Columns>
                </pre>
              );
            })}
          </Box>
        </Block>
      </Form.Field>
    </Container>
  );
};
