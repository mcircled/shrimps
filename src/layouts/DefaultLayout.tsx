import Header from "components/header/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className="c-page">{children}</div>

      <div className="bottom-actions">
        <div
          className="top"
          title="Top"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <i className="ion ion-ios-arrow-up"></i>
        </div>

        <div
          className="theme-switch"
          onClick={() => {
            const data_theme = document
              .getElementById("App")
              ?.getAttribute("data-theme");
            let theme = data_theme === "dark" ? "" : "dark";
            document.getElementById("App")?.setAttribute("data-theme", theme);
          }}
        >
          <i className="ion ion-md-color-palette"></i>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default DefaultLayout;
