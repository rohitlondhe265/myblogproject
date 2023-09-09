import Sidebar from "./Sidebar";

export const metadata = {
  title: "Admin Page",
  description: "This is the Admin of dummy blog",
  robots: {
    index: false,
    nocache: true,
  },
};

export default function DashboardLayout({ children }) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1 p-3">{children}</div>
    </section>
  );
}
