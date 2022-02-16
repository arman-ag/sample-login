import { Box } from '@mui/system';
import Footer from './Footer';
import PublicHeader from './PublicHeader';
import { layout } from './types/LayoutTypes';

const LayoutPublic = ({ children }: layout) => {
  return (
    <>
      <PublicHeader />
      <Box style={{ height: '100vh' }}>{children}</Box>
      <Footer />
    </>
  );
};

export default LayoutPublic;
