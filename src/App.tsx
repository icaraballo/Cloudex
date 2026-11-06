import { LEMA_APP, NOMBRE_APP } from './config/app'

export default function App() {
  return (
    <main className="pantalla-inicial">
      <h1>{NOMBRE_APP}</h1>
      <p>{LEMA_APP}</p>
      <p className="estado">Hito 1 · base del proyecto</p>
    </main>
  )
}
