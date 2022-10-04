import { Route, Navigate } from 'react-router-dom';

type RouterWithProtectionProps = {
  component: React.ReactNode;
  path: string;
};

const RouterWithProtection = ({
  component,
  path,
}: RouterWithProtectionProps) => {
  if (true) return <Route element={component} path={path} />;

  return <Route element={<Navigate replace to="/" />} />;
};

export default RouterWithProtection;
