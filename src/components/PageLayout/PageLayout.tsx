import type { ReactNode } from "react";

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="sticky w-full h-8 bg-red-700 top-0">
        <h1>My Website</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2021 My Website</p>
      </footer>
    </div>
  );
};
