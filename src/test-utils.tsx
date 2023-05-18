import { RenderOptions, render } from "@testing-library/react";
import { ReactElement } from "react";
import AppProvider from "./providers/app-provider";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
