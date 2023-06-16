'use client';

import { Provider } from 'react-redux';
import store from './appStore';

/*
 * Since the first layout.tsx must be a server component,
 * we cannot use providers directly in it,
 * so we create a client component and use it inside the server component
 */

export function AppStoreProvider({ children }: React.PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
