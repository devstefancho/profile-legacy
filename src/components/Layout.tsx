import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, SideContent, Details } from '.';

export const Layout: React.FC = () => {
  return (
    <Router>
      <div className='flex container'>
        <section className='main'>
          <Main />
          <Switch>
            <Route path='/resume'>
              <Details />
            </Route>
          </Switch>
        </section>
        <section className='side'>
          <SideContent />
        </section>
      </div>
    </Router>
  );
};
