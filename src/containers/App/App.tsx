import React, { FC, useEffect } from 'react';
import styles from './App.module.scss';
import { AppProps } from './types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchAll } from './actions';
import { appSelector, loadingSelector } from './selectors';
import Loading from '../../components/Loading';

const App: FC<AppProps> = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(appSelector, shallowEqual);
  const isLoading = useSelector(loadingSelector, shallowEqual);

  useEffect(() => {
    dispatch(fetchAll({ data: { id: 1 } }));
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className={styles.App}>
      {data.map((el: any) => (
        <div key={el.id.value}>
          <p>
            <img src={el.picture.large} alt={el.name.first} />
          </p>
          <p>{`${el.name.title}. ${el.name.first} ${el.name.last}`}</p>
          <p>{`${el.location.city}`}</p>
          <p>{`${el.email}`}</p>
          <p>{`${el.cell}`}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
