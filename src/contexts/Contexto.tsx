import { createContext, useEffect, useState } from "react";
import { IbgeProps} from '../types'
import Ibge from "../services/Ibge";


export const Contexto = createContext({} as IbgeProps);

export function Provider({ children }: any) {
    const [nome, setNome] = useState({} as any)
    const [res, setRes] = useState({} as any)

    useEffect(() => {
        (async function () {
            const resp = await Ibge.get(nome);
            setNome(resp.nome)
            setRes(resp.res)
        })()
    }, []);

    return (
        <Contexto.Provider value={{ nome, res, setNome, setRes }} >
            <span>{children}</span>
        </Contexto.Provider>
    )
}