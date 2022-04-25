import HomePages from './navigation/main_page';
import MainTabBar from './navigation/main_tab_bar';
import React from "react";

export default function App() {

  const [isSignedIn, setSignIn] = React.useState(true);

  const signIn = () => {
    setSignIn(prev => ({ status: !prev.status }));
  };

  return (
    isSignedIn?
    <MainTabBar/>
    :
    <HomePages/>
  );
}

