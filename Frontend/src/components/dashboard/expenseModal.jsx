import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "react-modal";
import "./expenseModal.css";


Modal.setAppElement("#root");

function Expense() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('document_name', data.document_name);
    formData.append('document_type', data.document_type);
    formData.append('amount', data.amount);
    formData.append('remarks', data.remarks);
    formData.append('document_file', data.document[0]);
    formData.append('is_shared_with_investors', data.is_shared_with_investors);

    try {
      const response = await axios.post('http://127.0.0.1:8000/companies/company_expenses/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        console.log('Expense created successfully');
        document.getElementById("my_modal_1").close();
        reset();
      } else {
        console.error('Failed to create expense');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="expense-modal">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-slate-50 glass text-white">
          <h3 className="font-bold text-lg">Add Expense</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label>Document Name</label>
              <input type="text" {...register("document_name", { required: true })} className="banner-field" />
              {errors.document_name && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label>Document Type</label>
              <select {...register("document_type", { required: true })} className="banner-field text-black">
                <option value="bank_statement">Bank Statement</option>
                <option value="pitch_deck">Pitch Deck</option>
                <option value="financial_report">Financial Report</option>
                <option value="other">Other</option>
              </select>
              {errors.document_type && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label>Amount</label>
              <input type="number" {...register("amount", { required: true })} className="banner-field" />
              {errors.amount && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label>Remarks</label>
              <textarea {...register("remarks", { required: true })} className="banner-field"></textarea>
              {errors.remarks && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label>Document File</label>
              <input type="file" {...register("document", { required: true })} className="" />
              {errors.document && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="form-control custom-checkbox">
              <input type="checkbox" id="is_shared_with_investors" {...register("is_shared_with_investors")} />
              <label htmlFor="is_shared_with_investors">Share with Investors</label>
            </div>
            <div className="modal-action">
              <button type="submit" className="btn save-btn">Upload</button>
              <button type="button" className="btn close-btn" onClick={() => document.getElementById("my_modal_1").close()}>Close</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Expense;
