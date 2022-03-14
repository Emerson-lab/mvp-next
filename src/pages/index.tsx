
import { GetServerSideProps } from "next";
import { signIn, getSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils";

export default function App() {

  function handlesignIn() {
    signIn('github');
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "500px",
          height: "auto",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <label>Nome</label>
        <input type="text" placeholder="Nome" />
        <label>E-mail</label>
        <input type="text" placeholder="E-mail" />
        <button
          onClick={handlesignIn}
          style={{
            border: "1px solid black",
            marginTop: "10px"
          }}
        >
          Acessar
        </button>
      </div>
    </div>
  )
}

export const getServersideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/deshboard',
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}