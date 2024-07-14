import React, { useEffect, useState } from "react";
// import {useHistory} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "react-modal";
import "./oneTimeInfo.css";


Modal.setAppElement("#root");

function FinanceStatementCompany() {
  // const history = useHistory();
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
    formData.append('month_1_opening_statement', data.month1_opening_statement)
    formData.append('month_1_inflow', data.month1_inflow)
    formData.append('month_1_outflow', data.month1_outflow)
    formData.append('month_2_opening_statement', data.month2_opening_statement)
    formData.append('month_2_inflow', data.month2_inflow)
    formData.append('month_2_outflow', data.month2_outflow)
    formData.append('month_3_opening_statement', data.month3_opening_statement)
    formData.append('month_3_inflow', data.month3_inflow)
    formData.append('month_3_outflow', data.month3_outflow)
    formData.append('current_valuation', data.current_valuation)
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    // console.log(data)

      try {
      const response = await axios.post('http://127.0.0.1:8000/companies/otf/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      );
      

      if (response.status === 201) {
        console.log('Expense created successfully');
        window.location.href = "/dashboard";
        // history.push("/");
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
              {/* {console.log(month.toLowerCase())} */}
                <h4 className="font-bold">{month}</h4>
                <div className="form-control">
                  <label>Bank Opening Statement</label>
                  <input type="number" {...register(`${month.toLowerCase().replace(/\s+/g,'')}_opening_statement`, { required: true })} className="banner-field text-black" />
                  {errors[`${month.toLowerCase()}_opening_statement`] && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                  <label>Inflow</label>
                  <input type="number" {...register(`${month.toLowerCase().replace(/\s+/g,'')}_inflow`, { required: true })} className="banner-field text-black" />
                  {errors[`${month.toLowerCase()}_inflow`] && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                  <label>Outflow</label>
                  <input type="number" {...register(`${month.toLowerCase().replace(/\s+/g,'')}_outflow`, { required: true })} className="banner-field text-black" />
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
              {/* <button type="button" className="btn close-btn" onClick={() => document.getElementById("my_modal_3").close()}>Close</button> */}
            </div>
          </form>
        </div>
      {/* </dialog> */}
    </div>
  );
}

export default FinanceStatementCompany;
