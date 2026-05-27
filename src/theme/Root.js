import React, { useEffect } from "react";

export default function Root({ children }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.onyx.app/widget/1.1/dist/onyx-widget.js";
    document.head.appendChild(script);

    const widget = document.createElement("onyx-chat-widget");
    widget.setAttribute("backend-url", "https://scout-dev.ucmerced.edu/api");
    widget.setAttribute(
      "api-key",
      "on_swgHEyZZi-ZsD153rVxfB4XVXhhwQsV-IqM9S5l1i8oah22EKwNyTBj3-tLdINSH4TFAg9W0BK5GzRVO3vzh02JFjBa20OlMge2ljNbu2ihWnU0AHJlNhdT9ffxCt6WaH48tD0G6GWdHyzpD2bz1voOfMyI0537zhFbwHkPU61V-O5WzOPiZiy6of9UfasefHGQR3K4ZrJwdjbDGJBgzUXTUu07nxIBcbsZY18DbU36JhZQWJ-IFVySx9PDeF49H",
    );
    widget.setAttribute("agent-id", "12");
    widget.setAttribute("agent-name", "HPC Assistant");
    widget.setAttribute("include-citations", "true");
    widget.setAttribute("mode", "launcher");
    document.body.appendChild(widget);
  }, []);

  return <>{children}</>;
}
