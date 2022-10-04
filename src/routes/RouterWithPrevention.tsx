import { Route, Navigate } from 'react-router-dom';

type RouterWithPreventionProps = {
  component: React.ReactNode;
  path: string;
};

const RouterWithPrevention = ({
  component,
  path,
}: RouterWithPreventionProps) => {
  if (!true) return <Route path={path} element={component} />;

  return <Route element={<Navigate replace to="/" />} />;
};

export default RouterWithPrevention;
