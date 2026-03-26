import Header from "@components/Header/Header";
import Main from "../Main/Main";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
