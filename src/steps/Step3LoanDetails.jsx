import React from 'react';

export default function Step3LoanDetails({ formData, updateFormData }) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-base font-bold text-slate-700">Loan Requirements</h3>
      </div>

      {/* Loan Amount Input */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-[#7dc2c2]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
        <input
          type="number"
          value={formData.loanAmount || ''}
          onChange={(e) => updateFormData({ loanAmount: e.target.value })}
          className="w-full pl-11 pr-4 py-3 bg-slate-50/70 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7dc2c2] focus:bg-white focus:ring-4 focus:ring-teal-100 transition-all"
          placeholder="Loan Amount Desired (₹)"
        />
      </div>

      {/* Purpose Input */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-[#7dc2c2]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
        </div>
        <input
          type="text"
          value={formData.loanPurpose || ''}
          onChange={(e) => updateFormData({ loanPurpose: e.target.value })}
          className="w-full pl-11 pr-4 py-3 bg-slate-50/70 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7dc2c2] focus:bg-white focus:ring-4 focus:ring-teal-100 transition-all"
          placeholder="Loan Purpose (e.g. Home, Education)"
        />
      </div>
    </div>
  );
}