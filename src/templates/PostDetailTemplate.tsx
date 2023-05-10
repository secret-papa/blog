import React from "react";

type PostDetailTemplateProps = {
  renderPost: any;
  renderPagination: any;
};

const PostDetailTemplate = ({ renderPost, renderPagination }: PostDetailTemplateProps) => (
  <div>
    {renderPost}
    {renderPagination}
  </div>
);

export default PostDetailTemplate;
