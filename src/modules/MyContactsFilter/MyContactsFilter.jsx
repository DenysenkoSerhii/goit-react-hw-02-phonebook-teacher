import PropTypes from "prop-types";

import styles from "../my-books.module.scss";

const MyContactsFilter = ({handleChange}) => {
    return (
        <div className={styles.formGroup}>
            <label>Find contacts by name</label>
            <input
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
              />
        </div>
    )
}

export default MyContactsFilter;

MyContactsFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
}