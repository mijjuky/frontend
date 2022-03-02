import NovedadItem from "../components/novedades/NovedadItem";
import axios from "axios";
import { useState, useEffect } from "react";

import "../styles/pages/Novedades.css";

const NovedadesPage = () => {
  const [novedades, setNovedades] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNovedades = async () => {
    const { data } = await axios.get('http://localhost:3000/api/novedades');
    setLoading(false);
    setNovedades(data);
  };

  useEffect(() => {
    getNovedades();
  }, []);


        return (
            <main className="holder">
                <h2>Novedades</h2>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )}
            </main>

        );

    }
export default NovedadesPage;