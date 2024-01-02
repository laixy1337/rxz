// pages/redirect.jsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Replace '/target-page' with the actual path you want to redirect to
    router.push('https://discord.com/api/oauth2/authorize?client_id=1191154780287008858&permissions=8&scope=bot+applications.commands');
  }, []);

  // Empty component or custom loading message can be added here

  return null;
};

export default RedirectPage;
