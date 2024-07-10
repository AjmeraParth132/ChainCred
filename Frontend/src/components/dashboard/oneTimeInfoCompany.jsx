import React, { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "react-modal";
import "./oneTimeInfo.css";


Modal.setAppElement("#root");

function FinanceStatementCompany() {
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
    formData.append('expense_bucket', data.expense_bucket);
    formData.append('amount', data.amount);
    formData.append('remarks', data.remarks);
    formData.append('date', data.date);
    if (data.document[0] !== undefined)
      formData.append('document_file', data.document[0]);
    console.log(formData);
    console.log(localStorage.getItem("User")[0]);
    try {
      const response = await axios.post('http://127.0.0.1:8000/companies/company_expenses/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      );
      

      if (response.status === 201) {
        console.log('Expense created successfully');
        document.getElementById("my_modal_3").close();
        reset();
      } else {
        console.error('Failed to create expense');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="one-time-modal">
      {/* <dialog id="my_modal_3" className="modal"> */}
        <div className="modal-box bg-slate-50 glass text-white">
          <h3 className="font-bold text-lg">Financial Information</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            {["Month 1", "Month 2", "Month 3"].map((month, index) => (
              <div key={index}>
                <h4 className="font-bold">{month}</h4>
                <div className="form-control">
                  <label>Bank Opening Statement</label>
                  <input type="number" {...register(`${month.toLowerCase()}_opening_statement`, { required: true })} className="banner-field text-black" />
                  {errors[`${month.toLowerCase()}_opening_statement`] && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                  <label>Inflow</label>
                  <input type="number" {...register(`${month.toLowerCase()}_inflow`, { required: true })} className="banner-field text-black" />
                  {errors[`${month.toLowerCase()}_inflow`] && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                  <label>Outflow</label>
                  <input type="number" {...register(`${month.toLowerCase()}_outflow`, { required: true })} className="banner-field text-black" />
                  {errors[`${month.toLowerCase()}_outflow`] && <span className="text-sm text-red-500">This field is required</span>}
                </div>
              </div>
            ))}
            <div className="form-control">
              <label>Company’s Current Valuation</label>
              <input type="number" {...register("current_valuation", { required: true })} className="banner-field text-black" />
              {errors.current_valuation && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="modal-action">
              <button type="submit" className="btn save-btn">Submit</button>
              <button type="button" className="btn close-btn" onClick={() => document.getElementById("my_modal_3").close()}>Close</button>
            </div>
          </form>
        </div>
      {/* </dialog> */}
    </div>
  );
}

export default FinanceStatementCompany;
