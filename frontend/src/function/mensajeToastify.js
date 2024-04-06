import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const mensaje = (texto) => {
    console.log('holaaa');
    toast.success(texto, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,

      });
  }