type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex w-full bg-black sm:p-2 gap-2 absolute inset-0">
      {children}
    </div>
  );
};

export default Layout;
