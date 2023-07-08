import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <main className="m-10 space-y-10">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
