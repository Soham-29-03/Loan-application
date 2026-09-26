import React, { useState } from 'react';
import Step1Personal from './steps/Step1Personal';
import Step2Employment from './steps/Step2Employment';
import Step3LoanDetails from './steps/Step3LoanDetails';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const updateFormData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
    setErrorMsg(''); // Clear error on typing
  };

  // Validate fields per step before advancing
  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        setErrorMsg('Please fill in all personal information fields.');
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.employmentStatus || !formData.annualIncome) {
        setErrorMsg('Please select your employment status and annual income.');
        return;
      }
    }
    setErrorMsg('');
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setErrorMsg('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.loanAmount || !formData.loanPurpose) {
      setErrorMsg('Please fill in all loan requirement details.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf6f6] to-[#f4fbfc] flex flex-col justify-center py-10 px-4 sm:px-6 relative overflow-hidden selection:bg-teal-500 selection:text-white">
      
      {/* Decorative Background Organic Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#f3dcd4] rounded-full filter blur-3xl opacity-60 -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#bce3e3] rounded-full filter blur-3xl opacity-50 -z-10 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        {/* Top Mini Illustration Graphic / Badge */}
        <div className="mx-auto w-20 h-20 bg-white shadow-md rounded-2xl flex items-center justify-center text-teal-600 mb-4 border border-teal-100">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">Welcome</h2>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-medium">Secure Loan Portal</p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/90 backdrop-blur-md py-8 px-6 shadow-xl shadow-teal-900/5 rounded-3xl border border-white relative">

          {isSubmitted ? (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Success!</h3>
                <p className="text-sm text-slate-500 mt-1">Thank you, <span className="font-semibold text-slate-700">{formData.firstName || 'Applicant'}</span>. Your loan request has been securely filed.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl text-left border border-slate-100 shadow-inner max-h-48 overflow-y-auto">
                <pre className="text-xs text-slate-600 font-mono">
                  {JSON.stringify(formData, null, 2)}
                </pre>
              </div>
              <button
                onClick={() => { setIsSubmitted(false); setCurrentStep(1); setFormData({}); }}
                className="w-full py-3 px-4 bg-[#7dc2c2] hover:bg-[#6ab3b3] text-white font-semibold rounded-full shadow-md shadow-teal-100 transition-all text-sm tracking-wide"
              >
                Start New Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step indicator dots */}
              <div className="flex justify-center space-x-2 mb-4">
                <div className={`h-2 rounded-full transition-all duration-300 ${currentStep === 1 ? 'w-8 bg-[#7dc2c2]' : 'w-2 bg-slate-200'}`} />
                <div className={`h-2 rounded-full transition-all duration-300 ${currentStep === 2 ? 'w-8 bg-[#7dc2c2]' : 'w-2 bg-slate-200'}`} />
                <div className={`h-2 rounded-full transition-all duration-300 ${currentStep === 3 ? 'w-8 bg-[#7dc2c2]' : 'w-2 bg-slate-200'}`} />
              </div>

              {/* Inline Error Message Banner */}
              {errorMsg && (
                <div className="bg-rose-50 border border-rose-200 text-rose-600 px-4 py-2.5 rounded-xl text-xs font-medium text-center animate-shake">
                  {errorMsg}
                </div>
              )}

              {/* Dynamic Step View */}
              {currentStep === 1 && <Step1Personal formData={formData} updateFormData={updateFormData} />}
              {currentStep === 2 && <Step2Employment formData={formData} updateFormData={updateFormData} />}
              {currentStep === 3 && <Step3LoanDetails formData={formData} updateFormData={updateFormData} />}

              {/* Navigation Action Buttons */}
              <div className="pt-4 space-y-3">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full py-3.5 px-4 bg-[#7dc2c2] hover:bg-[#6ab3b3] text-white font-semibold rounded-full shadow-lg shadow-teal-100 transition-all text-sm tracking-wide"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-[#63b39c] hover:bg-[#529d87] text-white font-semibold rounded-full shadow-lg shadow-emerald-100 transition-all text-sm tracking-wide"
                  >
                    Submit Application
                  </button>
                )}

                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-all"
                  >
                    Back to previous step
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}