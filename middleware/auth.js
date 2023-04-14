// export default function ({ store, redirect }) {
//   if (!store.state.auth.token) {
//     return redirect("/login");
//   }
// }

import Cookie from "js-cookie";

export default function ({ route, redirect, app }) {
  const token = app.$cookies.get("_access_token"); // verifica se o cookie do token de acesso está definido
  if (!token && route.name !== "login") {
    return redirect("/login");
  }
}
