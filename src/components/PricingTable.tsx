'use client'
import * as React from 'react';

// 定义 stripe-pricing-table 的类型
declare global {
    namespace JSX {
      interface IntrinsicElements {
        'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }
  
function PricingTable() {
  // Paste the stripe-pricing-table snippet in your React component
  return (
    <stripe-pricing-table 
        pricing-table-id="prctbl_1QQ48MIDF2lWjxJcSGrl2XBo"
        publishable-key="pk_live_51QI70vIDF2lWjxJc5y4vZoogyxQffQEhHWUUxYv2BGiceJmFOTRMwNrfnUrnsIcDFQ4GNCrYfqX8fvjTYKTuPsF000JScFb9I9">
    </stripe-pricing-table>
  );
}

export default PricingTable;