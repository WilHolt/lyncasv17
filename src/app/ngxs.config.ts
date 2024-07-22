import { NgxsModuleOptions } from "@ngxs/store";
import { environment } from "../environments/environment.development";

export const ngxsConfig: NgxsModuleOptions = {
    developmentMode: !environment.production,
    selectorOptions: {
      suppressErrors: false
    },
  };
  