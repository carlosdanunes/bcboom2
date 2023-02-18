import{u as s,j as i,a as e,H as a,L as d}from"./app-af81fa8a.js";import{P as l}from"./PrimaryButton-6cb92857.js";function f({status:t}){const{post:n,processing:o}=s();return i("div",{children:[e(a,{title:"Email Verification"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e("form",{onSubmit:r=>{r.preventDefault(),n(route("verification.send"))},children:i("div",{className:"mt-4 flex items-center justify-between",children:[e(l,{processing:o,children:"Resend Verification Email"}),e(d,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Log Out"})]})})]})}export{f as default};
