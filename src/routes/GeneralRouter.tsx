import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from '../pages';

const GeneralRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default GeneralRouter;
