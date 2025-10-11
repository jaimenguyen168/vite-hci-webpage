import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="w-64 shrink-0">
          <p>Side bar</p>
        </aside>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
