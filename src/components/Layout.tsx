import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Content, ProfileContainer, Details } from '.';

export const Layout: React.FC = () => {
  return (
    <Router>
      <div className='layout-container'>
        <section className='profile'>
          <ProfileContainer />
        </section>
        <section className='main'>
          <Content />
          <Switch>
            <Route path='/resume'>
              <Details />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
};
