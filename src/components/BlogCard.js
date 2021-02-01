import { Card, Avatar } from "antd";

const { Meta } = Card;

const BlogCard = ({src,avsrc,title,description}) => {
  return (
    <Card
      style={{ width: "335px", maxHeight: "470px", marginTop: "50px",marginBottom:"30px" }}
      className="col col-md-2"
      cover={
        <img
          style={{ height: "300px" }}
          alt="example"
          src={src}
        />
      }

    >
      <Meta
        avatar={
          <Avatar src={avsrc} />
        }
        title={title}
        description={description}
      />
    </Card>
  );
};
export default BlogCard;
