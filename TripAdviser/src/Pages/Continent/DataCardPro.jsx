import PropTypes from 'prop-types';
import "./datacard.css"
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Link } from 'react-router-dom';

export const DataCard = ({ propData, pageName }) => {
  console.log(propData,"fndoaslknfl",pageName);
  return (
    <div className="data-card">
      {propData.map((item) => (
        <div key={item.id} className='card'>
          <Link to={`/${pageName}/${item.id}`}>
          <img src={item.image} alt="continent" className="dataImage" />
          </Link>
          
          <div className='location'>
          <LocationOnRoundedIcon/>
          <p className='name'>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

DataCard.propTypes = {
  propData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  pageName: PropTypes.string.isRequired, // Add prop validation for pageName
};






