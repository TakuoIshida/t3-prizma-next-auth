import React from "react";
import { useSession, signOut } from "next-auth/react";
import { NextPage } from "next";

const MyPage: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      {
        // セッションがある場合、ログアウトを表示
        session ? (
          <div>
            <h1>ようこそ Mypageへ, {session.user && session.user.email}</h1>
            <button onClick={() => signOut()}>ログアウト</button>
          </div>
        ) : (
          <p> ログインできませんでした。</p>
        )
      }
    </>
  );
};

export default MyPage;
