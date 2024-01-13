import { signOut, useSession } from 'next-auth/react';
import { trpc } from 'utils/trpc';
import styles from './index.module.css';

const MyPage = () => {
  const { data: sessionData } = useSession();
  const { data: secretMessage } = trpc.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className={styles.authContainer}>
      <p className={styles.showcaseText}>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button className={styles.loginButton} onClick={() => void signOut()}>
        Sign out
      </button>
    </div>
  );
};

export default MyPage;
