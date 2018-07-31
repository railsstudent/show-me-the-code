import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    const elems = document.getElementsByTagName("custom-counter");
    if (elems && elems.length > 0) {
      const el = elems[0];
      el.setAttribute("framework", "Angular");
      el.setAttribute("count", "10");
    }
  })
  .catch(err => console.log(err));
