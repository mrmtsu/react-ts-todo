import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <HeaderLayout>
          <Home />
        </HeaderLayout>
      </Route>
      <Route path="/about">
        <HeaderLayout>
          <About />
        </HeaderLayout>
      </Route>
      <Route path="/contact">
        <HeaderLayout>
          <Contact />
        </HeaderLayout>
      </Route>
    </Switch>
  )
})
