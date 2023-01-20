import { useContext } from "react";
import { Context as MyContext } from "contexts/Context";
import { Link } from "react-router-dom";

import { Layout, Menu, Divider, List, Space } from "antd";

const ChildrenList = () => {
  const { children } = useContext(MyContext);
  return (
    <div>
      <List
        bordered
        dataSource={children }
        renderItem={(item) => (
          <List.Item>
            <Link to={`/children/${item.id}`}>{item.name}</Link>
          </List.Item>
        )}
      />

    </div>
  );
};

export default ChildrenList;
