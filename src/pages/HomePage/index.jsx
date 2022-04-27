import { InvisibleContainerComponent } from '../../components/InvisibleContainerComponent';
import { LoginComponent } from '../../components/LoginComponent';

export const HomePage = () => (
  <>
    <InvisibleContainerComponent>
      <LoginComponent/>
    </InvisibleContainerComponent>
  </>
)