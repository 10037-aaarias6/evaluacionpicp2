import PropTypes from 'prop-types';
import './listdisponibilidad.css';

function AvailableList({ dogs, adopters }) {
    return (
        <div>
            <h2>Evaluaciones, Exámenes y proyectos disponibles </h2>
            <div className="list-container">
                <ul>
                    {dogs.map((dog) => (
                        <li key={dog.id}> {dog.name}</li>
                    ))}
                </ul>
            </div>
            <h2>Docentes disponibles 👤</h2>
            <div className="list-container">
                <ul>
                    {adopters.map((adopter) => (
                        <li key={adopter.id}>👤 {adopter.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

AvailableList.propTypes = {
  dogs: PropTypes.array.isRequired,
  adopters: PropTypes.array.isRequired,
};

export default AvailableList;
