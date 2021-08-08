import React, { ReactElement } from "react";

const NotFoundPage: React.FC = (): ReactElement => {
  return (
    <div>
      <h1>404: Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  )
};

export default NotFoundPage;
