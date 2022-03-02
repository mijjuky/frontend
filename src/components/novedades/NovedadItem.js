const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <div className="caja" >
                <h1 className="titulo">{title}</h1>
                <h2 className="subtitulo">{subtitle}</h2>
                <img className="foto" alt="" src={imagen} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;