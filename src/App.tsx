import React, { useEffect } from 'react';
import AppRoutes from './components/AppRoutes';
import { useAppSelector } from './hooks/useAppSelector';
import loader from "./assets/loader.png"
import { useDispatch } from 'react-redux';
import { checkAuth, fetchRecomendations } from './redux/thunks/user';


const App = () => {
  const { isLoading, isAuth } = useAppSelector(state => state.user)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(checkAuth() as any)
  }, [dispatch])


  useEffect(() => {
    if (isAuth) dispatch(fetchRecomendations() as any)
  }, [isAuth, dispatch])


  if (isLoading) {
    return <div className="flex h-full flex-col flex-auto justify-center items-center">
      <img src={loader} alt="loading"
        className="w-20 h-20 object-contain animate-pulse transition-all" />
    </div>
  }


  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;