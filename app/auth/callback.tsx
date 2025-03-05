import { useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'expo-router';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        console.log(data);

        if (error || !data?.session?.user?.email) {
          console.error('Authentication failed:', error?.message);
          router.replace('/home?error=auth_failed'); // Redirect with error
          console.log(data);
          return;
        }

        const userEmail = data.session.user.email;

        if (userEmail.endsWith('@neu.edu.ph')) {
          router.replace('/landing');
        } else {
          await supabase.auth.signOut();
          router.replace('/home?error=invalid_email'); // Redirect with invalid email error
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        router.replace('/home?error=unexpected'); // Redirect with general error
      }
    };

    handleAuthCallback();
  }, []);

  return null;
}
