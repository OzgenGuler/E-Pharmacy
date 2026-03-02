import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import ModalContent from "./components/ModalContent/ModalContent";
import Modal from "./components/Modal/Modal";
import { setModalContent, setModalStatus } from "./redux/pharmacy/reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenModal } from "./redux/pharmacy/selectors";
import PrivateRoute from "./routes/PrivateRoute";
import Loader from "./components/Loader/Loader";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { selectIsLoading } from "./redux/auth/selectors";
import HomePage from "./pages/HomePage/HomePage";
import MedicinePage from "./pages/MedicinePage/MedicinePage";
import MedicineStorePage from "./pages/MedicineStorePage/MedicineStorePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { getUserInfo } from "./redux/auth/operations";
import { useEffect } from "react";
import PublicRoute from "./routes/PublicRoute";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/medicine-store" element={<MedicineStorePage />} />
          <Route path="/medicine" element={<MedicinePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ScrollToTop />

      <Modal open={modalStatus} onClose={handleCloseModal}>
        {<ModalContent />}
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </>
  );
};

export default App;
