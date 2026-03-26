import Header from "@components/Header/Header";
import Main from "../Main/Main";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
