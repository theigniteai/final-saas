import React from 'react'

const Subscription = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Subscription Plans</h1>
      <p className="mb-6">This page will show Stripe subscription integration.</p>
      <ul className="space-y-4">
        <li className="border p-4 rounded shadow">
          <h2 className="font-semibold">Basic Plan</h2>
          <p>$19/month – 100 minutes</p>
        </li>
        <li className="border p-4 rounded shadow">
          <h2 className="font-semibold">Pro Plan</h2>
          <p>$49/month – 500 minutes</p>
        </li>
      </ul>
    </div>
  )
}

export default Subscription
