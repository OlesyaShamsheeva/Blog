import { PhotoUser } from '../../components/PhotoUser';
import { NoPhoto } from '../../components/PhotoUser/NoPhoto';
import { ActivePhoto } from '../../components/PhotoUser/ActivePhoto';

import { Form } from '../RegistrationUser/Form';
import { useProfile } from './Profile.utils';
import styles from './Profile.module.css';

export const Profile = () => {
  const {
    user,
    inputProfile,
    handleImageChange,
    handleDeleteImage,
    handleSubmit,
    handleChange,
    values,
    errors,
    error,
    touched
  } = useProfile()

  return (
    <div className={styles.wrap}>
      <h3 className={styles.caption}>Profile</h3>
      <div className={styles.block}>
        <div className={styles.foto}>
          <PhotoUser isBigAvatar photo={user.avatar}>
            {user.avatar ? (
              <ActivePhoto
                onChange={handleImageChange}
                onDelete={handleDeleteImage}
              />
            ) : (
              <NoPhoto onChange={handleImageChange}/>
            )}
          </PhotoUser>
        </div>
        <form onSubmit={handleSubmit}>
          <Form array={inputProfile} handleChange={handleChange} values={values} touched={touched} errors={errors}
                error={error}/>
          <div className={styles.div}>
            <textarea
              onChange={handleChange}
              name="description"
              value={values.description}
            />
          </div>
          <button type="submit" className={styles.btn}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};


















