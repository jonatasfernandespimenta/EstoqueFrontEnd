import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const error = (text, position) => toast.error(text, {
	position: position,
	autoClose: 9000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
});

export const success = (text, position) => toast.success(text, {
	position: position,
	autoClose: 9000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
});