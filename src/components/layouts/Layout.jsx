const Layout = ({ children }) => {
  return (
    <div className="mx-5">
      <header className="bg-teal-400 py-4 px-5 mb-24 rounded-xl">
        <h1 className=" text-3xl md:text-center">Currency Converter</h1>
      </header>
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
