import PropTypes from 'prop-types';
import './adoptionlist.css';

function AdoptionList({ adoptions, dogs, adopters }) {
    // Si los datos aún no están disponibles, renderiza un mensaje de carga
    if (!adoptions.length || !dogs.length || !adopters.length) {
        return <p>Cargando...</p>;
    }

    // Función para abrir la página HTML predefinida
const openQuestionnaire = (adoptionId) => {
    // Aquí puedes redirigir a tu página HTML predefinida usando window.open
    window.open('http://localhost:5173/cuestionario.html', '_blank');
};



return (
    <div className="adoption-list-container">
        <h2>Futuras Evaluaciones y Proyectos</h2>
        <ul>
            {adoptions.map((adoption) => {
                const dog = dogs.find((dog) => dog.id === Number(adoption.dogId));
                const adopter = adopters.find((adopter) => adopter.id === Number(adoption.adopterId));
                return (
                    <li key={adoption.id} onClick={() => openQuestionnaire(adoption.id)}>
                        {dog && `Agendamientos: ${dog.name}, `}
                        {adopter && `👤 Docente: ${adopter.name}`}
                        <div className="div-container">
                            <a className="book-link" href={`#questionnaire-${adoption.id}`}>📚</a>
                        </div>
                    </li>
                );
            })}
        </ul>
    </div>
);
}

AdoptionList.propTypes = {
adoptions: PropTypes.array.isRequired,
dogs: PropTypes.array.isRequired,
adopters: PropTypes.array.isRequired,
};

export default AdoptionList;