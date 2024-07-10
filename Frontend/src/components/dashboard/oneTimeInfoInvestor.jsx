import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import './oneTimeInfo.css';

function InvestmentForm() {
  // const history = useHistory();
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      companies: [{ companyName: '', amount: '', ceo: '', date: '', valuation: '' }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "companies"
  });
    const companiesWatch = watch('companies')

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('investor_id', localStorage.getItem("User"));
    data.companies.forEach((company, index) => {
      formData.append(`companies[${index}][companyName]`, company.companyName);
      formData.append(`companies[${index}][amount]`, company.amount);
      formData.append(`companies[${index}][ceo]`, company.ceo);
      formData.append(`companies[${index}][date]`, company.date);
      formData.append(`companies[${index}][valuation]`, company.valuation);
    });
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    console.log(data)
    
    
      try {
      const response = await axios.post('http://127.0.0.1:8000/investors/otf/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      );
      

      if (response.status === 200) {
        console.log('Investments Added successfully');
        reset();
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
        <div className="modal-box bg-slate-50 glass text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">Investment Information</h3>
              {fields.map((item, index) => (
                <div key={item.id} className="form-control">
                  <input
                    {...register(`companies.${index}.companyName`, { required: true })}
                    placeholder="Company Name"
                    className="input-field"
                  />
                  <input
                    type="number"
                    {...register(`companies.${index}.amount`, { required: true })}
                    placeholder="Investment Amount"
                    className="input-field"
                  />
                  <input
                    {...register(`companies.${index}.ceo`, { required: true })}
                    placeholder="CEO Name"
                    className="input-field"
                  />
                  <input
                    type="date"
                    placeholder='Date of Investment'  
                    {...register(`companies.${index}.date`, { required: true })}
                    className={`input-field ${!companiesWatch[index].date ? 'date-placeholder': ''}`}
                  />
                  <input
                    type="number"
                    {...register(`companies.${index}.valuation`, { required: true })}
                    placeholder="Company Valuation"
                    className="input-field"
                  />
                  <div className="modal-action">
                      <button type="button" onClick={() => remove(index)} className="btn close-btn">Remove</button>
                      <button type="button" onClick={() => append({ companyName: '', amount: '', ceo: '', date: '', valuation: '' })} className="btn add-btn">
                        Add Another Company
                      </button>
                  </div>
                  </div>
              ))}
        
                  <div className="modal-action"><button type="submit" className="btn save-btn">Submit</button></div>
        
            </form>
        </div>
    </div>
  );
}

export default InvestmentForm;