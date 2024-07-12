import React, { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "react-modal";
import "./expenseModal.module.css";


Modal.setAppElement("#root");

function Income() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("User");
  //   if (storedUser) {
  //     console.log(storedUser);
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('company_id', localStorage.getItem("User"))
    formData.append('document_name', data.document_name);
    formData.append('income_type', data.income_type);
    formData.append('amount', data.amount);
    formData.append('remarks', data.remarks);
    formData.append('date', data.date);
    console.log(formData);
    console.log(localStorage.getItem("User")[0]);
    try {
      const response = await axios.post('http://127.0.0.1:8000/companies/income/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      );
      

      if (response.status === 201) {
        console.log('Expense created successfully');
        document.getElementById("my_modal_2").close();
        reset();
      } else {
        console.error('Failed to create expense');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="expense-modal ">
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-slate-50 glass text-white">
          <h3 className="font-bold text-lg">Add Income</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control">
              <label>Document Name</label>
              <input type="text" {...register("document_name", { required: true })} className="banner-field text-black" />
              {errors.document_name && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label>Type of Income</label>
              <select {...register("income_type", { required: true })} className="banner-field text-black">
                <option value="clients">Clients</option>
                <option value="grants">Grants</option>
                <option value="outsourcing">Out Sourcing</option>
                
              </select>
              {errors.expense_bucket && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label>Amount</label>
              <input type="number" {...register("amount", { required: true })} className="banner-field text-black" />
              {errors.amount && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label>Remarks</label>
              <textarea {...register("remarks", { required: true })} className="banner-field text-black"></textarea>
              {errors.remarks && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label>Date</label>
              <input type="date" {...register("date")} className="banner-field text-black" />
              
            </div>
            <div className="modal-action">
              <button type="submit" className="btn save-btn">Upload</button>
              <button type="button" className="btn close-btn" onClick={() => document.getElementById("my_modal_2").close()}>Close</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Income;
