import React, { useState } from "react";
import {
  Container,
  Notification,
  Menu,
} from "react-bulma-components";
export const TwoPaneList = ({ data }) => {
  const [showIndex, setShow] = useState(null);
  const [hover, setHover] = useState({hover: false, index: null});
  return (
    <Container>
      <Notification color="primary">
        Two-Pane List with Detail - Basic React
      </Notification>
      <Menu>
        <Menu.List title="Two-Pane List">
          {data.map((e, i) => {
            return (
              <div key={i}>
                <Menu.List.Item
                  onMouseOver={() =>setHover({hover: true, index: i})}
                  onMouseOut={() => setHover({hover: false, index: null})}
                  active={showIndex === i}
                  onClick={() => {
                    setShow(showIndex === i ? null : i);
                  }}
                >
                  {hover.hover && hover.index === i ? "Plesea click to me!!!" : e.title}
                </Menu.List.Item>
                {showIndex === i ? (
                  <Menu.List>
                    {e.content.map((val, index) => (
                      <div key={index}>
                        <blockquote>{val}</blockquote>
                      </div>
                    ))}
                  </Menu.List>
                ) : null}
              </div>
            );
          })}
        </Menu.List>
      </Menu>
    </Container>
  );
};
