import { getCookie } from 'cookies-next'
import { verifica } from '../services/user';

import Users from "@/components/users/userView";

export default function users() {
  return (
    <section>
      <div
        id="txt_welcome"
        className="text-2xl text-slate-100 mt-8 m-auto w-max uppercase font-bold"
      >
        bem vindo
      </div>
      <Users />
    </section>
  );
}

// verifica se o Token do Usuário é válido para iniciar sessão
export const getServerSideProps = async ({req, res}) => {
  try{
    const token = getCookie('authorization', {req, res})
    if(!token) throw new Error('Token Inválido')

    verifica(token)
    return{
      props: {}
    }
  }catch(err){
    return{
      redirect:{
        permanent: false,
        destination: '/login'
      }
    }
  }
}

